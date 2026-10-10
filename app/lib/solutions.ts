import snapshot from '../../docs/felix-base-ofertas-publicas.json';

export type Category = 'sites' | 'marketing' | 'sistemas';
export type VisualKind = 'site' | 'landing' | 'traffic' | 'content' | 'atende' | 'flow' | 'crm' | 'radar' | 'automation' | 'training';
export type Solution = {
  slug: string; item: string; name: string; category: Category; number: string;
  headline: string; description: string; audience: string; visual: VisualKind;
  outcomes: { title: string; body: string }[];
  steps: string[]; faqs: { q: string; a: string }[];
  cta?: string; mvp?: boolean;
};

export const categories: { id: Category; name: string; description: string }[] = [
  { id: 'sites', name: 'Sites & presença', description: 'Sua oferta, bem apresentada. Um caminho claro para o contato.' },
  { id: 'marketing', name: 'Marketing & aquisição', description: 'Campanhas e conteúdo para levar sua mensagem ao público.' },
  { id: 'sistemas', name: 'Sistemas & IA', description: 'Atendimento, processos e informação trabalhando juntos.' },
];

export const solutions: Solution[] = [
  {
    slug: 'sites-para-profissionais', item: 'site-profissionais', name: 'Sites para profissionais', category: 'sites', number: '01', visual: 'site',
    headline: 'Seu trabalho merece uma presença à altura.',
    description: 'Um site para apresentar seus serviços, organizar sua mensagem e facilitar o contato. Da página única à estrutura com blog e formulários avançados.',
    audience: 'Clínicas, consultórios, profissionais de saúde, psicologia e advocacia.',
    outcomes: [
      { title: 'Uma mensagem organizada', body: 'Textos escritos a partir do briefing e de pesquisa, considerando as regras do conselho profissional.' },
      { title: 'Contato ao alcance', body: 'Botões de WhatsApp, formulário e links das redes sociais incluídos em todas as faixas.' },
      { title: 'Estrutura para o seu momento', body: 'Página única, múltiplas páginas com SEO local ou uma estrutura com blog/CMS, conforme o plano.' },
    ],
    steps: ['Briefing e materiais', 'Textos e estrutura', 'Construção e revisão', 'Publicação'],
    faqs: [
      { q: 'Quem escreve os textos e envia as fotos?', a: 'A FELIX escreve os textos a partir do briefing e de pesquisa. As fotos e imagens são enviadas por você.' },
      { q: 'Hospedagem e domínio estão incluídos?', a: 'O domínio fica no seu nome e é pago por você. Há uma opção de R$ 79/mês para hospedagem, SSL, backup e segurança. Ajustes são cobrados à parte.' },
      { q: 'Quando começa a contar o prazo?', a: 'Depois do recebimento do briefing e dos materiais. São 7, 15 ou 25 dias úteis, conforme a faixa contratada, com 2 rodadas de revisão.' },
    ],
  },
  {
    slug: 'landing-pages', item: 'landing-page', name: 'Landing pages', category: 'sites', number: '02', visual: 'landing',
    headline: 'Uma oferta. Um caminho claro para agir.',
    description: 'Páginas de campanha com mensagem, formulário e mensuração. Da captura de contatos à página de vendas com checkout e integração comercial.',
    audience: 'Profissionais e empresas com uma oferta, campanha ou produto digital específico.',
    outcomes: [
      { title: 'Captura de contatos', body: 'Página com formulário ou WhatsApp e configuração de Pixel/GA4 no plano Essencial.' },
      { title: 'Oferta bem explicada', body: 'Copy completa, perguntas frequentes e checkout Hotmart/Eduzz no plano Profissional.' },
      { title: 'Jornada conectada', body: 'Página de obrigado/upsell, duas variações A/B e integração com CRM/automação no Completo.' },
    ],
    steps: ['Briefing da campanha', 'Mensagem e oferta', 'Página e integrações', 'Revisão e publicação'],
    faqs: [
      { q: 'A FELIX recebe um percentual das vendas?', a: 'Não. A contratação tem preço fixo, sem percentual sobre vendas.' },
      { q: 'O checkout está em todos os planos?', a: 'A integração com Hotmart/Eduzz está no plano Profissional e no Completo. O Essencial é focado em captura por formulário ou WhatsApp.' },
      { q: 'Qual é o prazo e como funciona o pagamento?', a: 'São 5, 10 ou 15 dias úteis, conforme a faixa, a partir do briefing e dos materiais. O pagamento é de 50% na entrada e 50% na entrega. Todas as faixas têm 2 rodadas de revisão.' },
    ],
  },
  {
    slug: 'trafego-pago', item: 'trafego-pago', name: 'Tráfego pago + criativos', category: 'marketing', number: '03', visual: 'traffic',
    headline: 'Sua mensagem encontra o público. Seu negócio recebe o contato.',
    description: 'Gestão de campanhas com criativos e acompanhamento. Meta Ads, Google Search local e conexão com atendimento, de acordo com a faixa contratada.',
    audience: 'Empresas de serviços, negócios B2B, clínicas e profissionais liberais.',
    outcomes: [
      { title: 'Campanha e criativo juntos', body: 'A mensalidade inclui gestão e produção de criativos. O volume e os formatos variam por faixa.' },
      { title: 'Canais conforme a operação', body: 'Meta Ads no Essencial; Meta e Google Search local a partir do Profissional.' },
      { title: 'Da campanha ao atendimento', body: 'No Completo, anúncios para WhatsApp conectados ao FelixAtende/FelixFlow e painel de custo por lead.' },
    ],
    steps: ['Contexto e verba', 'Campanhas e criativos', 'Otimização', 'Relatório e próximos passos'],
    faqs: [
      { q: 'A verba de anúncios está na mensalidade?', a: 'Não. A verba de mídia é paga por você diretamente às plataformas. A mensalidade cobre a gestão e os criativos do plano.' },
      { q: 'Existe limite de campanhas ativas?', a: 'No Essencial, não há limite de campanhas ativas: a verba é o limite. As faixas atendem verbas de até R$ 3 mil, R$ 10 mil e R$ 25 mil. Acima de R$ 25 mil, o escopo é definido por proposta.' },
      { q: 'Há setup ou fidelidade?', a: 'Não há taxa de setup nem fidelidade. O aviso prévio é de 30 dias. Se a verba ultrapassar o limite da faixa, o plano é ajustado.' },
    ],
  },
  {
    slug: 'conteudo-para-redes', item: 'conteudo-redes', name: 'Conteúdo para redes', category: 'marketing', number: '04', visual: 'content',
    headline: 'O que você sabe precisa chegar a quem precisa.',
    description: 'Calendário, textos e artes para comunicar seu trabalho. Conteúdo com fontes verificadas, aprovação antes do agendamento e formatos definidos por plano.',
    audience: 'Clínicas e profissionais de saúde, psicologia e advocacia.',
    outcomes: [
      { title: 'Conteúdo com fundamento', body: 'Pesquisa com fontes verificadas e atenção às regras do conselho profissional.' },
      { title: 'Mensagem e arte', body: 'Calendário mensal, copy e design. As faixas ampliam a linha editorial e os formatos.' },
      { title: 'Você aprova antes', body: 'A FELIX agenda os posts no Meta Business Suite depois da sua aprovação.' },
    ],
    steps: ['Contexto e pauta', 'Pesquisa, texto e arte', 'Sua aprovação', 'Agendamento'],
    faqs: [
      { q: 'Os vídeos são gravados pela FELIX?', a: 'No Completo, estão incluídos roteiro e edição de 4 reels com material enviado por você. A captação de vídeo não consta nesse escopo.' },
      { q: 'O conteúdo vai ao ar sem aprovação?', a: 'Não. O agendamento no Meta Business Suite acontece depois da sua aprovação.' },
      { q: 'Posso contratar junto com tráfego?', a: 'Sim. O combo Tráfego + Conteúdo tem 15% de desconto sobre a soma das mensalidades.' },
    ],
  },
  {
    slug: 'felixatende', item: 'felixatende', name: 'FelixAtende', category: 'sistemas', number: '05', visual: 'atende',
    headline: 'Atendimento preparado. Conversa com contexto.',
    description: 'Atendimento com IA no WhatsApp para clínicas e profissionais liberais. Inbox, regras por área e transferência para uma pessoa quando necessário.',
    audience: 'Clínicas, consultórios e profissionais liberais.',
    outcomes: [
      { title: 'IA com regras por área', body: 'Regras específicas para saúde e jurídico. Elas podem ser reforçadas pelo cliente, mas não removidas.' },
      { title: 'Humano no fluxo', body: 'Inbox e transferência para humano em todas as faixas, com encaminhamento automático em urgências.' },
      { title: 'Espaço para crescer', body: 'Mais usuários e contatos por faixa. O plano Clínica atende até dois números/unidades.' },
    ],
    steps: ['Informações e regras', 'Configuração do atendimento', 'Validação do fluxo', 'Ativação'],
    faqs: [
      { q: 'O que acontece em uma urgência?', a: 'O fluxo inclui transferência automática em urgência. A IA não substitui a avaliação de um profissional.' },
      { q: 'Posso migrar para o FelixFlow?', a: 'Sim. O valor pago na implantação do FelixAtende é abatido na implantação do FelixFlow.' },
      { q: 'Como funcionam excedentes?', a: 'Os custos seguem a lógica do FelixFlow: dentro dos limites do plano estão embutidos. O adicional de 500 contatos custa R$ 97.' },
    ], cta: 'Conversar sobre o FelixAtende',
  },
  {
    slug: 'felixflow', item: 'felixflow', name: 'FelixFlow', category: 'sistemas', number: '06', visual: 'flow',
    headline: 'Da primeira mensagem ao próximo passo. Um só Flow.',
    description: 'Atendimento com IA, inbox, CRM e funil comercial. Follow-up e prospecção ampliam a operação nos planos Team e Growth.',
    audience: 'Imobiliárias, corretores, prestadores B2B, clínicas e profissionais liberais.',
    outcomes: [
      { title: 'Conversa e oportunidade juntas', body: 'Inbox, atendente de IA, CRM/funil e transferência para humano desde o Basic.' },
      { title: 'Acompanhamento comercial', body: 'O Team adiciona follow-up automático e prospecção no Google Maps, dentro dos limites do plano.' },
      { title: 'Operação ampliada', body: 'O Growth inclui prévias de site, painel de métricas, prospecção avançada e campanhas para contatos com opt-in.' },
    ],
    steps: ['Mapeamento comercial', 'Canal, regras e funil', 'Validação com a equipe', 'Ativação'],
    faqs: [
      { q: 'O agente agenda automaticamente?', a: 'A agenda não é integrada. O agente coleta a preferência de horário e transfere para uma pessoa confirmar.' },
      { q: 'WhatsApp e IA são cobrados à parte?', a: 'Os custos de WhatsApp, IA e prospecção estão embutidos dentro dos limites do plano. Excedentes: 500 contatos por R$ 97 e 200 resultados de prospecção por R$ 67.' },
      { q: 'Como funcionam as campanhas?', a: 'Estão no Growth, somente para contatos com opt-in: até 100 mensagens por dia, das 9h às 18h em dias úteis.' },
      { q: 'Existe fidelidade?', a: 'O contrato mensal é sem fidelidade. No plano anual, você paga 10 meses e recebe 12.' },
    ], cta: 'Solicitar uma demonstração',
  },
  {
    slug: 'crm-white-label', item: 'crm-white-label', name: 'CRM white-label', category: 'sistemas', number: '07', visual: 'crm',
    headline: 'Seu processo. Sua marca. Um sistema para operar.',
    description: 'CRM com a marca da sua empresa: logo, cores e domínio. Comece por clientes, funil e tarefas e amplie para módulos e integrações do seu negócio.',
    audience: 'Empresas que precisam de uma gestão com a própria marca e módulos de negócio.',
    outcomes: [
      { title: 'A identidade da sua empresa', body: 'Logo, cores e domínio próprios no CRM padrão.' },
      { title: 'Gestão conforme a necessidade', body: 'O Profissional adiciona um módulo de negócio; o Completo inclui módulos sob medida e integrações.' },
      { title: 'Continuidade da operação', body: 'A mensalidade cobre hospedagem, suporte e atualizações.' },
    ],
    steps: ['Processo e usuários', 'Identidade e módulos', 'Validação da operação', 'Implantação'],
    faqs: [
      { q: 'Inclui atendente de IA?', a: 'Não. Esta oferta é um sistema de gestão com a marca do cliente, com módulos de negócio e sem atendente de IA. Para atendimento, conheça FelixAtende e FelixFlow.' },
      { q: 'O código-fonte é meu?', a: 'Na licença de uso, o código pertence à FELIX. A compra do código-fonte pode ser feita por três vezes o valor da implantação.' },
      { q: 'Quais módulos e integrações estão previstos?', a: 'No Profissional, um módulo de negócio, como recebíveis/financeiro, contratos ou obras. No Completo, módulos sob medida e integrações com WhatsApp, ERP e planilhas, conforme o escopo.' },
    ],
  },
  {
    slug: 'felix-radar', item: 'felix-radar', name: 'Felix Radar', category: 'sistemas', number: '08', visual: 'radar', mvp: true,
    headline: 'Observe o mercado. Decida com mais contexto.',
    description: 'Monitoramento de concorrência com relatórios gerados por IA e revisados por Matheus. O Felix Radar está em MVP, com contratação em pré-venda.',
    audience: 'Validação inicial com clínicas e profissionais liberais.',
    outcomes: [
      { title: 'Fontes por faixa', body: 'Instagram e avaliações no Google no Essencial. Anúncios e informações de sites nas faixas superiores.' },
      { title: 'Leitura revisada', body: 'A IA prepara o relatório. Matheus revisa antes do envio ao cliente.' },
      { title: 'Frequência definida', body: 'Entrega mensal, quinzenal ou semanal, conforme a faixa, com painel a partir do Profissional.' },
    ],
    steps: ['Concorrentes e fontes', 'Coleta e análise', 'Revisão por Matheus', 'Entrega do relatório'],
    faqs: [
      { q: 'O produto já está consolidado?', a: 'Não. O Felix Radar está em MVP e a contratação é em pré-venda. O escopo da primeira implantação é alinhado antes da contratação.' },
      { q: 'Existe uma condição para clientes fundadores?', a: 'A pré-venda prevê de 3 a 5 clientes fundadores, com 40% de desconto vitalício. A disponibilidade é confirmada na conversa; os preços abaixo são os valores de tabela, sem o desconto.' },
      { q: 'Há taxa de implantação?', a: 'Não. As três faixas não têm taxa de implantação.' },
    ], cta: 'Conversar sobre a pré-venda',
  },
  {
    slug: 'ia-sob-medida', item: 'ia-sob-medida', name: 'IA sob medida', category: 'sistemas', number: '09', visual: 'automation',
    headline: 'A IA começa pelo processo que precisa melhorar.',
    description: 'Diagnóstico, automações e agentes com regras escritas. Do mapeamento de oportunidades à implantação de um sistema comercial ou de inteligência.',
    audience: 'Empresas de serviços e operações B2B, incluindo clínicas, imobiliárias e consultorias.',
    outcomes: [
      { title: 'Clareza antes de implantar', body: 'O Essencial mapeia processos, prioriza três oportunidades e entrega um plano de 30 dias.' },
      { title: 'Automação com escopo', body: 'O Profissional implanta uma automação ou agente com regras escritas.' },
      { title: 'Sistema conectado', body: 'O Completo contempla um agente SDR com scoring, follow-up e CRM ou um painel de inteligência de mercado.' },
    ],
    steps: ['Mapeamento do processo', 'Regras e escopo', 'Implantação e validação', 'Sustentação'],
    faqs: [
      { q: 'O diagnóstico é abatido na implantação?', a: 'Sim. O valor do diagnóstico é abatido se você contratar a implantação.' },
      { q: 'O projeto tem custo mensal?', a: 'A implantação exige sustentação mensal de 10% do valor do projeto, para monitoramento, ajustes de prompt e correções. O Essencial é o diagnóstico inicial.' },
      { q: 'Quem paga as contas de ferramentas?', a: 'As contas de API e ferramentas ficam no seu nome e são pagas por você. Esses custos são separados do projeto e da sustentação.' },
    ],
  },
  {
    slug: 'treinamento-ia', item: 'treinamento-ia', name: 'Treinamento de IA', category: 'sistemas', number: '10', visual: 'training',
    headline: 'Sua equipe aprende IA usando o próprio trabalho.',
    description: 'Workshop presencial ou trilha de encontros, com material de apoio e exercícios. Diagnóstico por setor e suporte estão nas faixas superiores.',
    audience: 'Empresas com equipes de diferentes setores.',
    outcomes: [
      { title: 'Aprendizado acompanhado', body: 'Workshop de quatro horas com apostila e biblioteca de prompts no Essencial.' },
      { title: 'Aplicação por setor', body: 'Diagnóstico anônimo prévio, exercícios por setor e 30 dias de suporte no Profissional.' },
      { title: 'Uma trilha completa', body: 'Três encontros, totalizando 12 horas, com skills/automações configuradas e 60 dias de suporte no Completo.' },
    ],
    steps: ['Contexto da equipe', 'Preparação do material', 'Encontros presenciais', 'Suporte conforme a faixa'],
    faqs: [
      { q: 'Quantas pessoas podem participar?', a: 'Até 15 participantes estão incluídos. O máximo é de 30 por turma, com R$ 97 por pessoa extra.' },
      { q: 'Pode acontecer fora de Cascavel?', a: 'Sim. Fora de Cascavel, quilometragem e hospedagem são cobradas à parte.' },
      { q: 'O suporte está em todas as faixas?', a: 'O Profissional inclui 30 dias de suporte por WhatsApp. O Completo inclui 60 dias de suporte. O Essencial contempla o workshop e os materiais.' },
    ],
  },
];

export const offers = snapshot.ofertas;
export type Offer = (typeof offers)[number];
export const plansFor = (item: string) => offers.filter((offer) => offer.item === item).sort((a, b) => a.ordem - b.ordem);
export const solutionFor = (slug: string) => solutions.find((solution) => solution.slug === slug);
export const titleCase = (value: string) => ({ clinica: 'Clínica' }[value] || value.charAt(0).toUpperCase() + value.slice(1));
export function money(cents: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(cents / 100);
}

export const SITE_URL = 'https://felixdigital.online';
export const EMAIL = 'felixstudio.mkt@gmail.com';
// Existing commercial number, confirmed by the current site and empresa-canais.
export const WHATSAPP_NUMBER = '554598554766';
export function whatsappUrl(message = 'Olá, conheci a FELIX pelo site e gostaria de conversar sobre meu negócio.') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const projects = [
  { id: 'bc-construtora', name: 'BC Construtora', category: 'Construção e incorporação', title: 'Presença digital e operação comercial.', description: 'Site institucional, CRM white-label, agente SDR no WhatsApp e treinamento de IA para a equipe.', image: '/portfolio/bc-construtora.webp', url: 'https://www.bcconstrutora.com.br/', services: ['Site institucional', 'CRM', 'IA sob medida', 'Treinamento'] },
  { id: 'debora-adv', name: 'Débora Adv', category: 'Advocacia', title: 'Um endereço digital para o trabalho jurídico.', description: 'Site com páginas, publicação, domínio e verificação no Search Console.', image: '/portfolio/debora-adv.webp', url: 'https://debora-adv-one.vercel.app/', services: ['Site para profissionais'] },
];
