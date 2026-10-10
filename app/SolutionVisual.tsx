import Image from 'next/image';
import type { Solution } from './lib/solutions';
import { XMark } from './components';

export function SolutionVisual({ solution }: { solution: Solution }) {
  if (solution.visual === 'site') return <div className="solution-visual visual-site"><div className="visual-topline"><span>PROJETO FELIX / BC CONSTRUTORA</span><span>↗</span></div><Image src="/portfolio/bc-construtora.webp" alt="Site institucional da BC Construtora, projeto FELIX" width={1440} height={900} unoptimized priority /><div className="visual-bottomline">Mensagem · Estrutura · Contato</div></div>;
  const content: Record<string, { label: string; title: string; rows: string[]; footer: string }> = {
    landing: { label: 'UMA CAMPANHA, UMA JORNADA', title: 'Da oferta ao contato.', rows: ['Sua oferta / mensagem e contexto', 'A página / formulário ou checkout', 'A ação / contato ou compra'], footer: 'Captura → Vendas → Integração' },
    traffic: { label: 'CANAIS QUE SE CONECTAM', title: 'Anúncio. Contato. Conversa.', rows: ['Meta Ads / campanha + criativos', 'Google Search / busca local', 'WhatsApp / caminho para o atendimento'], footer: 'Canais e integrações conforme a faixa' },
    content: { label: 'UMA LINHA DE COMUNICAÇÃO', title: 'Pesquisa antes da publicação.', rows: ['Pauta / contexto e fontes', 'Produção / texto e arte', 'Aprovação / você valida antes'], footer: 'Calendário → Produção → Agendamento' },
    atende: { label: 'WHATSAPP COM CONTEXTO', title: 'A conversa continua.', rows: ['Mensagem / o cliente chega', 'IA / atendimento com regras', 'Humano / transferência com contexto'], footer: 'Clínicas · Consultórios · Profissionais' },
    flow: { label: 'UM SÓ CONTEXTO COMERCIAL', title: 'Cada contato, um próximo passo.', rows: ['Inbox / conversa e atendimento', 'CRM / contato e funil', 'Follow-up / continuidade no Team e Growth'], footer: 'Basic → Team → Growth' },
    crm: { label: 'GESTÃO COM A SUA MARCA', title: 'O processo vira sistema.', rows: ['Clientes / informação organizada', 'Funil e tarefas / próximo passo', 'Módulos / conforme o seu negócio'], footer: 'Marca própria · Usuários · Integrações' },
    radar: { label: 'MVP / CONTRATAÇÃO EM PRÉ-VENDA', title: 'O mercado no seu campo de visão.', rows: ['Fontes / redes, reviews e anúncios', 'Análise / relatório preparado por IA', 'Revisão / Matheus valida a entrega'], footer: '3, 5 ou 10 concorrentes, conforme a faixa' },
    automation: { label: 'DO PROCESSO À IMPLANTAÇÃO', title: 'Regra clara. Ação definida.', rows: ['Mapeamento / o que precisa melhorar', 'Regras / o que a IA pode fazer', 'Validação / operação e sustentação'], footer: 'Diagnóstico → Automação → Sistema' },
    training: { label: 'APRENDIZADO PARA A EQUIPE', title: 'A prática entra na rotina.', rows: ['Contexto / os desafios da equipe', 'Encontro / aprender e aplicar', 'Material / apostila e prompts'], footer: 'Workshop de 4h ou trilha de 12h' },
  };
  const visual = content[solution.visual];
  return <div className={`solution-visual diagram-visual visual-${solution.visual}`}><div className="visual-topline"><span>{visual.label}</span><XMark /></div><div className="visual-diagram-heading">{solution.visual === 'radar' ? <div className="radar-mark" aria-hidden="true"><span /><span /><i /></div> : <span className="visual-glyph" aria-hidden="true">{solution.visual === 'training' ? '4h' : solution.visual === 'content' ? 'Aa' : solution.visual === 'flow' ? '→' : solution.visual === 'crm' ? '[]' : solution.visual === 'automation' ? '↳' : solution.visual === 'atende' ? '“' : solution.visual === 'traffic' ? '↗' : '01'}</span>}<h2>{visual.title}</h2></div><ol className="visual-flow">{visual.rows.map((row, i) => { const [title, body] = row.split(' / '); return <li key={row}><span>{String(i + 1).padStart(2, '0')}</span><strong>{title}</strong><small>{body}</small></li>; })}</ol><div className="visual-bottomline"><span>{visual.footer}</span><small>Esquema de funcionamento</small></div></div>;
}
