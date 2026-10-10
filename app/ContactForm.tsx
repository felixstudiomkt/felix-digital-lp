'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { marcarWhatsappAberto, registrarLead } from './actions';
import { whatsappUrl } from './lib/solutions';

type ContactOption = { slug: string; name: string; tiers: { value: string; label: string }[] };
export function ContactForm({ options, initialSolution = '', initialPlan = '' }: { options: ContactOption[]; initialSolution?: string; initialPlan?: string }) {
  const [selected, setSelected] = useState(initialSolution);
  const [plan, setPlan] = useState(initialPlan);
  const [busy, setBusy] = useState(false);
  const [prepared, setPrepared] = useState('');
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');
  const leadId = useRef<string | null>(null);
  const inFlight = useRef(false);
  const statusRef = useRef<HTMLDivElement>(null);
  const solution = options.find((item) => item.slug === selected);
  return <form className="contact-form" onChange={() => { setPrepared(''); setError(''); }} onSubmit={async (event) => {
    event.preventDefault();
    if (inFlight.current) return;
    inFlight.current = true;
    const data = new FormData(event.currentTarget);
    setBusy(true); setError('');
    const label = solution ? `${solution.name}${plan ? ` / ${solution.tiers.find((tier) => tier.value === plan)?.label}` : ''}` : 'Preciso de orientação';
    const deadlines: Record<string, string> = { research: 'Ainda estou pesquisando', soon: 'O quanto antes', month: 'Nos próximos 30 dias', later: 'Entre 1 e 3 meses' };
    const message = ['Olá, conheci a FELIX pelo site e gostaria de conversar.', `Interesse: ${label}`, `Nome: ${data.get('nome')}`, `WhatsApp: ${data.get('telefone')}`, `Negócio: ${data.get('negocio') || 'Não informado'}`, `E-mail: ${data.get('email') || 'Não informado'}`, `Quando começar: ${deadlines[String(data.get('prazo'))] || 'Ainda estou pesquisando'}`, `Contexto: ${data.get('observacoes') || 'Não informado'}`].join('\n');
    try {
      const result = await registrarLead({ consentimento: data.get('consentimento') === 'on', origem: 'projeto', objetivo: 'unsure', funcionalidade: 'unsure', prazo: String(data.get('prazo') || 'research'), indicacao: label, solucao: selected, plano: plan, nome: String(data.get('nome') || ''), telefone: String(data.get('telefone') || ''), negocio: String(data.get('negocio') || ''), email: String(data.get('email') || ''), observacoes: String(data.get('observacoes') || ''), isca: String(data.get('isca') || '') });
      leadId.current = result.id;
      setSaved(Boolean(result.id));
      if (!result.id) setError('Não foi possível registrar seu pedido. Você pode continuar pelo WhatsApp com as informações preenchidas.');
    } catch {
      leadId.current = null;
      setSaved(false);
      setError('Não foi possível registrar seu pedido agora. Continue pelo WhatsApp com as informações preenchidas.');
    } finally {
      setPrepared(whatsappUrl(message));
      setBusy(false);
      inFlight.current = false;
      requestAnimationFrame(() => statusRef.current?.focus({ preventScroll: true }));
    }
  }}><div className="form-title"><span className="tiny-label">VAMOS ENTENDER SEU CONTEXTO</span><h2>Conte um pouco do seu negócio.</h2></div><div className="form-grid"><label className="field-wide" htmlFor="solucao">O que você quer conectar?<select id="solucao" name="solucao" value={selected} onChange={(event) => { setSelected(event.target.value); setPlan(''); }}><option value="">Ainda preciso de orientação</option>{options.map((item) => <option key={item.slug} value={item.slug}>{item.name}{item.slug === 'felix-radar' ? ' — MVP / pré-venda' : ''}</option>)}</select></label>{solution && <label className="field-wide" htmlFor="plano">Faixa de interesse<select id="plano" name="plano" value={plan} onChange={(event) => setPlan(event.target.value)}><option value="">Quero comparar na conversa</option>{solution.tiers.map((tier) => <option key={tier.value} value={tier.value}>{tier.label}</option>)}</select></label>}<label htmlFor="nome">Seu nome<input id="nome" name="nome" autoComplete="name" required maxLength={120} placeholder="Como podemos chamar você?" /></label><label htmlFor="telefone">WhatsApp<input id="telefone" name="telefone" type="tel" autoComplete="tel" required minLength={10} maxLength={32} onChange={(event) => { const digits = event.currentTarget.value.replace(/\D/g, ''); event.currentTarget.setCustomValidity(digits.length >= 10 && digits.length <= 13 ? '' : 'Informe o DDD e um número de WhatsApp válido.'); }} placeholder="DDD + número" /></label><label htmlFor="negocio">Seu negócio <span>(opcional)</span><input id="negocio" name="negocio" autoComplete="organization" maxLength={160} placeholder="Nome da empresa" /></label><label htmlFor="email">E-mail <span>(opcional)</span><input id="email" name="email" type="email" autoComplete="email" maxLength={160} placeholder="voce@empresa.com" /></label><label className="field-wide" htmlFor="prazo">Quando pretende começar?<select id="prazo" name="prazo" defaultValue="research"><option value="research">Ainda estou pesquisando</option><option value="soon">O quanto antes</option><option value="month">Nos próximos 30 dias</option><option value="later">Entre 1 e 3 meses</option></select></label><label className="field-wide" htmlFor="observacoes">O que precisa funcionar melhor? <span>(opcional)</span><textarea id="observacoes" name="observacoes" rows={4} maxLength={2000} placeholder="Conte como funciona hoje e o que você quer melhorar. Evite incluir informações sensíveis." /></label></div><label className="honeypot" aria-hidden="true">Deixe este campo vazio<input name="isca" type="text" tabIndex={-1} autoComplete="off" /></label><label className="consent-check"><input name="consentimento" type="checkbox" required /><span>Autorizo o uso destas informações para responder ao meu pedido. Li o <Link href="/privacidade">aviso de privacidade</Link>.</span></label>{prepared ? <div className={`form-status ${saved ? 'status-saved' : 'status-fallback'}`} ref={statusRef} tabIndex={-1} role="status"><p>{saved ? 'Pedido registrado. Abra o WhatsApp para continuar a conversa.' : error}</p><a className="button" href={prepared} target="_blank" rel="noopener noreferrer" onClick={() => { if (leadId.current) void marcarWhatsappAberto(leadId.current).catch(() => {}); }}>Continuar no WhatsApp <span aria-hidden="true">↗</span></a><small>A mensagem fica pronta para você revisar e enviar.</small></div> : <button className="button form-submit" type="submit" disabled={busy}>{busy ? 'Registrando seu pedido…' : 'Enviar pedido de contato'}<span aria-hidden="true">↗</span></button>}<p className="form-footnote">Este contato não confirma uma contratação. Escopo, investimento e prazo são alinhados na conversa.</p></form>;
}
