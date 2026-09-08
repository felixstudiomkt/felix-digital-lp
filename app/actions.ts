'use server';

import { env, waitUntil } from 'cloudflare:workers';

const OBJETIVOS = new Set(['present', 'offer', 'sell', 'schedule']);
const FUNCIONALIDADES = new Set(['contact', 'checkout', 'booking', 'quote', 'unsure']);
const PRAZOS = new Set(['soon', 'month', 'later', 'research']);
const ORIGENS = new Set(['diagnostico', 'projeto']);

const LIMITE = { nome: 120, telefone: 32, negocio: 160, email: 160, observacoes: 2000, indicacao: 120 };

export type LeadEntrada = {
  origem: string;
  objetivo: string;
  funcionalidade: string;
  prazo: string;
  indicacao: string;
  nome: string;
  telefone: string;
  negocio: string;
  email: string;
  observacoes: string;
  /**
   * Campo isca: invisível na página, preenchido apenas por robôs. O nome é
   * proposital — algo como "website" seria preenchido por gerenciadores de
   * senha, e cada autofill desses descartaria um lead legítimo em silêncio.
   */
  isca: string;
};

type LeadGravado = {
  id: string;
  nome: string;
  telefone: string;
  email: string | null;
  negocio: string | null;
  observacoes: string | null;
  indicacao: string | null;
  objetivo: string | null;
  funcionalidade: string | null;
  prazo: string | null;
};

// O e-mail é lido no celular, entre uma coisa e outra. Mandar "offer" e "soon"
// obrigaria a consultar o código para entender o lead — então traduzimos aqui.
const ROTULO_OBJETIVO: Record<string, string> = {
  present: 'Apresentar o negócio e os serviços',
  offer: 'Divulgar uma oferta ou campanha',
  sell: 'Vender produtos pela internet',
  schedule: 'Receber agendamentos ou orçamentos',
};
const ROTULO_FUNCIONALIDADE: Record<string, string> = {
  contact: 'Conhecer o negócio e entrar em contato',
  checkout: 'Escolher produtos e pagar pelo site',
  booking: 'Solicitar ou marcar um horário',
  quote: 'Preencher um pedido de orçamento',
  unsure: 'Ainda precisa de orientação',
};
const ROTULO_PRAZO: Record<string, string> = {
  soon: 'o quanto antes',
  month: 'nos próximos 30 dias',
  later: 'entre 1 e 3 meses',
  research: 'ainda pesquisando',
};

function texto(valor: unknown, limite: number) {
  return typeof valor === 'string' ? valor.trim().slice(0, limite) : '';
}

function opcao(valor: unknown, permitidas: Set<string>) {
  return typeof valor === 'string' && permitidas.has(valor) ? valor : null;
}

/**
 * Grava o lead antes do repasse para o WhatsApp. O visitante nunca espera pelo
 * CRM: a ida ao DGFlow acontece depois da resposta, via waitUntil.
 */
export async function registrarLead(entrada: LeadEntrada): Promise<{ id: string | null }> {
  // Robôs preenchem todos os campos, inclusive os invisíveis. Descartamos em
  // silêncio para não ensinar o que disparou a rejeição.
  if (texto(entrada.isca, 200)) return { id: null };

  const nome = texto(entrada.nome, LIMITE.nome);
  const telefone = texto(entrada.telefone, LIMITE.telefone);
  const origem = opcao(entrada.origem, ORIGENS);

  // Mesmas exigências do formulário, revalidadas aqui: o cliente pode mentir.
  if (!nome || !origem || telefone.replace(/\D/g, '').length < 10) return { id: null };

  const lead: LeadGravado = {
    id: crypto.randomUUID(),
    nome,
    telefone,
    negocio: texto(entrada.negocio, LIMITE.negocio) || null,
    email: texto(entrada.email, LIMITE.email) || null,
    observacoes: texto(entrada.observacoes, LIMITE.observacoes) || null,
    indicacao: texto(entrada.indicacao, LIMITE.indicacao) || null,
    objetivo: opcao(entrada.objetivo, OBJETIVOS),
    funcionalidade: opcao(entrada.funcionalidade, FUNCIONALIDADES),
    prazo: opcao(entrada.prazo, PRAZOS),
  };

  await env.DB.prepare(
    `INSERT INTO leads (id, criado_em, origem, objetivo, funcionalidade, prazo,
                        indicacao, nome, telefone, negocio, email, observacoes)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  )
    .bind(
      lead.id, new Date().toISOString(), origem, lead.objetivo, lead.funcionalidade,
      lead.prazo, lead.indicacao, lead.nome, lead.telefone, lead.negocio,
      lead.email, lead.observacoes,
    )
    .run();

  // allSettled para que uma falha não cancele a outra: o e-mail precisa sair
  // mesmo com o CRM fora, e vice-versa.
  waitUntil(Promise.allSettled([enviarParaCrm(lead), notificarPorEmail(lead, origem)]));

  return { id: lead.id };
}

/** Marca que o visitante chegou a abrir o WhatsApp, e não só preencheu o formulário. */
export async function marcarWhatsappAberto(id: string): Promise<void> {
  if (typeof id !== 'string' || id.length !== 36) return;
  await env.DB.prepare('UPDATE leads SET whatsapp_aberto = 1 WHERE id = ?').bind(id).run();
}

/** 45999887766 -> 5545999887766, para o link do WhatsApp funcionar no clique. */
function paraWhatsapp(telefone: string): string {
  const digitos = telefone.replace(/\D/g, '');
  return digitos.startsWith('55') ? digitos : `55${digitos}`;
}

function escapar(valor: string): string {
  return valor.replace(/[&<>"]/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c] as string);
}

/**
 * Avisa por e-mail assim que um lead entra, para não depender de ninguém ficar
 * olhando o WhatsApp. Roda depois da resposta, via waitUntil — uma falha aqui
 * não afeta o lead, que já está gravado.
 */
async function notificarPorEmail(lead: LeadGravado, origem: string): Promise<void> {
  const prazo = lead.prazo ? ROTULO_PRAZO[lead.prazo] : null;
  const whatsapp = `https://wa.me/${paraWhatsapp(lead.telefone)}`;

  let quando: string;
  try {
    quando = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  } catch {
    quando = new Date().toISOString();
  }

  const linhas: Array<[string, string]> = [
    ['WhatsApp', lead.telefone],
    ['Negócio', lead.negocio ?? '—'],
    ['E-mail', lead.email ?? '—'],
    ['Objetivo', lead.objetivo ? ROTULO_OBJETIVO[lead.objetivo] : '—'],
    ['O visitante precisa', lead.funcionalidade ? ROTULO_FUNCIONALIDADE[lead.funcionalidade] : '—'],
    ['Quer começar', prazo ?? '—'],
    ['Indicação do quiz', lead.indicacao ?? '—'],
    ['Observações', lead.observacoes ?? '—'],
    ['Origem', origem === 'diagnostico' ? 'Página de diagnóstico' : 'Página de contato'],
    ['Recebido em', quando],
  ];

  const texto = [
    `${lead.nome} pediu um orçamento no site.`,
    '',
    ...linhas.map(([rotulo, valor]) => `${rotulo}: ${valor}`),
    '',
    `Falar agora: ${whatsapp}`,
  ].join('\n');

  const html = `<div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:560px">
<h2 style="margin:0 0 4px;font-size:18px">${escapar(lead.nome)}</h2>
<p style="margin:0 0 16px;color:#555;font-size:14px">pediu um orçamento no site${prazo ? ` e quer começar <strong>${escapar(prazo)}</strong>` : ''}.</p>
<table style="border-collapse:collapse;font-size:14px;width:100%">
${linhas.map(([rotulo, valor]) => `<tr><td style="padding:6px 12px 6px 0;color:#666;vertical-align:top;white-space:nowrap">${escapar(rotulo)}</td><td style="padding:6px 0">${escapar(valor)}</td></tr>`).join('\n')}
</table>
<p style="margin:20px 0 0"><a href="${whatsapp}" style="display:inline-block;background:#25D366;color:#fff;padding:10px 18px;border-radius:6px;text-decoration:none;font-size:14px">Falar no WhatsApp</a></p>
</div>`;

  try {
    await env.EMAIL.send({
      to: 'felixstudio.mkt@gmail.com',
      from: 'leads@felixdigital.online',
      subject: `Lead novo: ${lead.nome}${prazo ? ` — quer começar ${prazo}` : ''}`,
      text: texto,
      html,
    });
  } catch (erro) {
    console.error('falha ao notificar lead por e-mail', lead.id, erro);
  }
}

/**
 * Repasse para o DGFlow. Fica inerte até DGFLOW_API_URL e DGFLOW_TOKEN
 * existirem — sem eles a linha permanece com sincronizado_crm = 0, pronta para
 * ser reprocessada quando a integração for ligada. Só marcamos como sincronizado
 * diante de uma resposta 2xx, para que uma falha silenciosa nunca vire um lead
 * dado como entregue.
 */
async function enviarParaCrm(lead: LeadGravado): Promise<void> {
  const url = env.DGFLOW_API_URL;
  const token = env.DGFLOW_TOKEN;
  if (!url || !token) return;

  try {
    const resposta = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${token}` },
      body: JSON.stringify({
        name: lead.nome,
        phone: lead.telefone,
        email: lead.email ?? undefined,
        company: lead.negocio ?? undefined,
        stage: 'novo',
        notes: [
          `Indicação inicial: ${lead.indicacao ?? '—'}`,
          `Objetivo: ${lead.objetivo ?? '—'}`,
          `Funcionalidade: ${lead.funcionalidade ?? '—'}`,
          `Prazo: ${lead.prazo ?? '—'}`,
          lead.observacoes ? `Observações: ${lead.observacoes}` : null,
        ].filter(Boolean).join('\n'),
      }),
    });

    if (!resposta.ok) {
      await registrarFalhaCrm(lead.id, `HTTP ${resposta.status}`);
      return;
    }

    const corpo = (await resposta.json().catch(() => null)) as { id?: string } | null;
    await env.DB.prepare(
      'UPDATE leads SET sincronizado_crm = 1, crm_lead_id = ?, ultimo_erro_crm = NULL WHERE id = ?',
    ).bind(corpo?.id ?? null, lead.id).run();
  } catch (erro) {
    await registrarFalhaCrm(lead.id, erro instanceof Error ? erro.message : 'erro desconhecido');
  }
}

async function registrarFalhaCrm(id: string, motivo: string): Promise<void> {
  await env.DB.prepare(
    'UPDATE leads SET tentativas_crm = tentativas_crm + 1, ultimo_erro_crm = ? WHERE id = ?',
  ).bind(motivo.slice(0, 300), id).run();
}
