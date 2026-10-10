import { solutions, plansFor } from './solutions';

export type LeadEntrada = {
  origem: string; objetivo: string; funcionalidade: string; prazo: string; indicacao: string;
  nome: string; telefone: string; negocio: string; email: string; observacoes: string; isca: string;
  solucao?: string; plano?: string; consentimento: boolean;
};
const OBJECTIVES = new Set(['present', 'offer', 'sell', 'schedule', 'acquisition', 'content', 'service', 'management', 'automation', 'training', 'intelligence', 'unsure']);
const FEATURES = new Set(['contact', 'checkout', 'booking', 'quote', 'unsure']);
const DEADLINES = new Set(['soon', 'month', 'later', 'research']);
const ORIGINS = new Set(['diagnostico', 'projeto']);
const LABELS: Record<string, string> = { present: 'Apresentar o negócio', offer: 'Divulgar uma oferta', sell: 'Vender produtos', schedule: 'Receber agendamentos ou orçamentos', acquisition: 'Aquisição com campanhas', content: 'Conteúdo para redes', service: 'Atendimento com IA', management: 'Gestão comercial', automation: 'Automação sob medida', training: 'Treinamento de IA', intelligence: 'Monitoramento de concorrência', unsure: 'Precisa de orientação' };
export const objectiveLabel = (key: string) => LABELS[key] || 'Não informado';
export const objectiveFor: Record<string, string> = { 'sites-para-profissionais': 'present', 'landing-pages': 'offer', 'trafego-pago': 'acquisition', 'conteudo-para-redes': 'content', felixatende: 'service', felixflow: 'management', 'crm-white-label': 'management', 'felix-radar': 'intelligence', 'ia-sob-medida': 'automation', 'treinamento-ia': 'training' };
export function cleanText(value: unknown, limit: number) { return typeof value === 'string' ? value.trim().slice(0, limit) : ''; }
function option(value: unknown, values: Set<string>) { return typeof value === 'string' && values.has(value) ? value : null; }

export function validateLead(input: LeadEntrada) {
  if (!input || typeof input !== 'object' || input.consentimento !== true || cleanText(input.isca, 200)) return null;
  const nome = cleanText(input.nome, 120);
  const telefone = cleanText(input.telefone, 32);
  const digits = telefone.replace(/\D/g, '');
  const origem = option(input.origem, ORIGINS);
  const email = cleanText(input.email, 160);
  if (!nome || !origem || digits.length < 10 || digits.length > 13 || (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) return null;
  const selected = cleanText(input.solucao, 80);
  const solution = selected ? solutions.find((item) => item.slug === selected) : null;
  if (selected && !solution) return null;
  const tier = cleanText(input.plano, 40);
  const plan = tier && solution ? plansFor(solution.item).find((item) => item.faixa === tier) : null;
  if (tier && !plan) return null;
  return {
    origem, nome, telefone, email: email || null,
    negocio: cleanText(input.negocio, 160) || null,
    observacoes: cleanText(input.observacoes, 2000) || null,
    indicacao: solution ? `${solution.name}${plan ? ` / ${plan.faixa}` : ''}` : cleanText(input.indicacao, 120) || null,
    objetivo: solution ? objectiveFor[solution.slug] : option(input.objetivo, OBJECTIVES),
    funcionalidade: option(input.funcionalidade, FEATURES),
    prazo: option(input.prazo, DEADLINES),
  };
}
