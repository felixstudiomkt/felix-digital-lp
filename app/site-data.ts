export type PageBlock = {
  eyebrow?: string;
  title: string;
  body?: string;
  items?: { title: string; body?: string; tag?: string }[];
  list?: string[];
  layout?: 'cards' | 'steps' | 'list' | 'projects' | 'flow';
  accent?: 'blue' | 'lime';
};

export type PageData = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  headline: string;
  lead: string;
  primary: string;
  secondary?: string;
  metric?: string;
  blocks: PageBlock[];
  faqs?: { q: string; a: string }[];
  cta: { title: string; body?: string; primary: string };
};

export const pages: Record<string, PageData> = {
  sites: {
    slug: 'sites',
    title: 'Sites e Landing Pages que Convertem | FELIX',
    description: 'Sites institucionais e landing pages com estratégia, copy, design e tecnologia para transformar visitas em oportunidades comerciais.',
    eyebrow: 'SITES & LANDING PAGES',
    headline: 'Seu site deveria trabalhar pela sua empresa. Não apenas apresentar sua empresa.',
    lead: 'Criamos experiências digitais que explicam sua oferta, fortalecem sua autoridade e conduzem o visitante até o próximo passo.',
    primary: 'Solicitar um projeto',
    secondary: 'Receber diagnóstico gratuito',
    metric: 'ESTRATÉGIA · COPY · DESIGN · DESENVOLVIMENTO · INTEGRAÇÃO',
    blocks: [
      { eyebrow: 'O PROBLEMA', title: 'Quando o site não deixa claro por que escolher você, o visitante escolhe continuar procurando.', body: 'Um site pode ser bonito e ainda assim não funcionar. Se a mensagem é genérica, os serviços estão mal organizados e o contato exige esforço, a página se torna apenas um cartão de visitas caro. O site certo reduz dúvidas, antecipa objeções e transforma interesse em ação.' },
      { eyebrow: 'O QUE ENTREGAMOS', title: 'Estratégia, mensagem, design e tecnologia na mesma página.', layout: 'cards', items: [
        { title: 'Sites institucionais', body: 'Estruturas completas para apresentar empresa, serviços, diferenciais, projetos e contato.' },
        { title: 'Landing pages', body: 'Páginas orientadas a uma oferta e uma ação específica.' },
        { title: 'Copy focada em conversão', body: 'Mensagem organizada para responder às perguntas que impedem o avanço.' },
        { title: 'Design responsivo', body: 'Hierarquia clara e caminhos de conversão em qualquer tela.' },
        { title: 'Integrações', body: 'Formulários, WhatsApp, CRM, analytics e automações conectados.' },
        { title: 'Evolução contínua', body: 'Novas páginas e funcionalidades incorporadas conforme o negócio cresce.' },
      ]},
      { eyebrow: 'MÉTODO', title: 'Cada seção existe para mover o visitante.', layout: 'steps', items: [
        { title: 'Diagnóstico', body: 'Entendemos empresa, público, oferta e objetivo comercial.' },
        { title: 'Arquitetura e copy', body: 'Definimos a sequência das informações e a mensagem.' },
        { title: 'Design e desenvolvimento', body: 'Transformamos a estratégia em uma experiência rápida e responsiva.' },
        { title: 'Integração e publicação', body: 'Conectamos os canais, validamos e colocamos o projeto no ar.' },
        { title: 'Evolução', body: 'Integramos CRM, automações, IA e novas funcionalidades.' },
      ]},
      { eyebrow: 'PARA QUEM É', title: 'Uma presença profissional para empresas que vendem confiança antes de vender serviço.', layout: 'list', list: ['Clínicas e consultórios', 'Escritórios e profissionais especializados', 'Consultorias e empresas B2B', 'Imobiliárias e construtoras', 'Negócios locais de ticket alto', 'Prestadores no Brasil e no exterior'] },
    ],
    faqs: [
      { q: 'A FELIX também produz os textos?', a: 'Sim. A copy faz parte da construção estratégica do site. Organizamos as informações e transformamos o briefing em uma mensagem clara e persuasiva.' },
      { q: 'O site funciona bem no celular?', a: 'Sim. Todos os projetos são desenvolvidos para celulares, tablets e computadores.' },
      { q: 'Vocês conectam o site ao meu WhatsApp ou CRM?', a: 'Sim. Podemos conectar formulários, WhatsApp, FelixFlow, CRMs, agenda, e-mail, pagamentos e outras soluções.' },
      { q: 'Quanto custa um projeto?', a: 'O investimento depende da estrutura, conteúdo, integrações e funcionalidades. Depois de entender o projeto, enviamos um escopo claro.' },
    ],
    cta: { title: 'Seu próximo cliente vai pesquisar por você. O que ele vai encontrar?', primary: 'Solicitar um projeto' },
  },
  'sistemas-e-automacoes': {
    slug: 'sistemas-e-automacoes',
    title: 'Sistemas e Automações Personalizadas | FELIX',
    description: 'Sistemas, CRMs, dashboards, portais e automações desenvolvidos para reduzir tarefas manuais e conectar a operação da sua empresa.',
    eyebrow: 'SISTEMAS & AUTOMAÇÕES',
    headline: 'Quando a planilha vira gargalo, é hora de transformar o processo em sistema.',
    lead: 'Desenvolvemos soluções digitais que organizam informações, conectam ferramentas e automatizam o trabalho repetitivo da sua operação.',
    primary: 'Falar sobre meu projeto',
    secondary: 'Solicitar diagnóstico',
    metric: 'PROCESSO → REGRA → AUTOMAÇÃO → CONTROLE',
    blocks: [
      { eyebrow: 'O PROBLEMA', title: 'A sua equipe não deveria funcionar como integração entre ferramentas.', body: 'Copiar dados, conferir mensagens, atualizar planilhas, lembrar follow-ups e montar relatórios manualmente consome tempo e abre espaço para erros. Se o processo depende da memória de alguém, ele ainda não está pronto para escalar.' },
      { eyebrow: 'SOLUÇÕES', title: 'Construímos a ferramenta que a sua operação está pedindo.', layout: 'cards', items: [
        { title: 'CRMs personalizados', body: 'Funis, contatos, atividades, responsáveis, histórico e indicadores ajustados ao processo.' },
        { title: 'Portais e áreas de clientes', body: 'Ambientes para centralizar documentos, solicitações e acompanhamento.' },
        { title: 'Dashboards e indicadores', body: 'Dados dispersos transformados em uma visão clara.' },
        { title: 'Sistemas internos', body: 'Fluxos digitais para substituir planilhas e tarefas repetitivas.' },
        { title: 'Integrações', body: 'WhatsApp, Instagram, sites, agenda, e-mail, pagamentos e CRM.' },
        { title: 'Atendimento personalizado', body: 'IA preparada para responder, coletar dados e mover o contato.' },
      ]},
      { eyebrow: 'AUTOMAÇÃO', title: 'Automatize a repetição. Preserve o julgamento humano.', body: 'Uma boa automação elimina o trabalho mecânico para que a equipe se concentre nas decisões e conversas que realmente exigem atenção.', layout: 'list', list: ['Criação e distribuição de leads', 'Atualização de etapas e responsáveis', 'Mensagens e follow-ups', 'Agendamentos e lembretes', 'Integração entre sistemas', 'Alertas e próximas ações'] },
      { eyebrow: 'PROCESSO', title: 'Do mapeamento à evolução.', layout: 'steps', items: [
        { title: 'Mapeamento', body: 'Entendemos atrasos e informações que precisam circular.' },
        { title: 'Arquitetura', body: 'Definimos usuários, regras, etapas, dados e indicadores.' },
        { title: 'Construção', body: 'Desenvolvemos módulos e validamos as partes críticas.' },
        { title: 'Implantação', body: 'Conectamos ferramentas e orientamos o uso.' },
        { title: 'Evolução', body: 'Adicionamos fluxos e funcionalidades conforme a empresa cresce.' },
      ]},
    ],
    faqs: [
      { q: 'Preciso trocar todas as ferramentas que já uso?', a: 'Nem sempre. Primeiro avaliamos o que pode ser mantido, integrado ou substituído.' },
      { q: 'O sistema é igual para todos os clientes?', a: 'Não. Mapeamos usuários, etapas, permissões e objetivos de cada operação.' },
      { q: 'É possível começar pequeno e evoluir depois?', a: 'Sim. Podemos iniciar pelo ponto de maior impacto e adicionar módulos em novas etapas.' },
    ],
    cta: { title: 'Mostre o processo que consome tempo. Nós mostramos como transformá-lo em fluxo.', primary: 'Falar sobre meu projeto' },
  },
  'agentes-de-ia': {
    slug: 'agentes-de-ia',
    title: 'Agentes de IA para Atendimento e Vendas | FELIX',
    description: 'Agentes de IA personalizados para atender, qualificar, agendar, fazer follow-up, atualizar o CRM e transferir conversas para sua equipe.',
    eyebrow: 'AGENTES DE IA',
    headline: 'Responda no tempo do cliente. Sem transformar sua equipe em plantão.',
    lead: 'Criamos agentes de IA personalizados para atender, qualificar oportunidades, agendar reuniões, executar follow-ups e manter o processo comercial em movimento.',
    primary: 'Criar meu agente',
    secondary: 'Falar com a FELIX',
    metric: 'MENSAGEM → RESPOSTA → QUALIFICAÇÃO → CRM → FOLLOW-UP',
    blocks: [
      { eyebrow: 'VELOCIDADE', title: 'O lead não compara apenas propostas. Ele compara a velocidade da resposta.', body: 'Quando uma mensagem chega fora do horário ou em um momento de pico, a oportunidade pode esfriar antes de alguém responder. Repetir as mesmas perguntas todos os dias também não é eficiente.' },
      { eyebrow: 'O QUE O AGENTE FAZ', title: 'Um atendimento preparado para agir, não apenas conversar.', layout: 'list', list: ['Responde dúvidas com base nas informações da empresa', 'Identifica a necessidade e faz perguntas de qualificação', 'Envia textos, links, documentos e mídias', 'Agenda reuniões ou atendimentos', 'Cria e atualiza oportunidades no CRM', 'Executa follow-ups e respeita regras comerciais', 'Transfere a conversa quando necessário'] },
      { eyebrow: 'PERSONALIZAÇÃO', title: 'Sua oferta, seu tom de voz e suas regras.', body: 'O agente é configurado com identidade, objetivo, critérios de qualificação, base de conhecimento, horários, variáveis e caminhos próprios.', layout: 'cards', items: [
        { title: 'Base de conhecimento', body: 'Serviços, perguntas, políticas, documentos e orientações centralizados.' },
        { title: 'Regras comerciais', body: 'Critérios claros para qualificação e transferência.' },
        { title: 'Integrações', body: 'WhatsApp, Instagram, FelixFlow, agenda, e-mail e outros sistemas.' },
      ]},
      { eyebrow: 'HUMANO + IA', title: 'A IA cuida da velocidade. Sua equipe cuida da relação.', body: 'O agente resolve etapas repetitivas e entrega a conversa organizada para uma pessoa, com contexto, dados coletados e próximo passo definido.' },
    ],
    faqs: [
      { q: 'Ele consegue transferir o atendimento?', a: 'Sim. O agente encaminha a conversa quando identifica uma condição definida ou quando o contato solicita uma pessoa.' },
      { q: 'Ele agenda reuniões?', a: 'Sim. A integração com agenda pode consultar disponibilidade e encaminhar o agendamento.' },
      { q: 'É possível alterar respostas e regras?', a: 'Sim. Base de conhecimento, comportamento, critérios e mensagens evoluem com a operação.' },
      { q: 'Ele funciona no WhatsApp e no Instagram?', a: 'Sim. Os canais podem ser conectados ao fluxo e ao FelixFlow.' },
    ],
    cta: { title: 'Transforme cada nova mensagem em um próximo passo.', primary: 'Falar sobre meu agente de IA' },
  },
  felixflow: {
    slug: 'felixflow',
    title: 'FelixFlow | CRM, Atendimento, Automação e IA',
    description: 'Centralize atendimento, contatos, funil, campanhas, automações, indicadores e agentes de IA em uma única plataforma comercial.',
    eyebrow: 'ATENDIMENTO · CRM · AUTOMAÇÃO · IA',
    headline: 'Toda a sua operação comercial. Um só Flow.',
    lead: 'O FelixFlow centraliza conversas, contatos, oportunidades, campanhas, follow-ups, indicadores e agentes de IA — da primeira mensagem ao fechamento.',
    primary: 'Falar com um especialista',
    secondary: 'Ver como funciona',
    metric: 'CONFIGURAÇÃO INICIAL EM APROXIMADAMENTE 20 MINUTOS · SUPORTE INCLUÍDO',
    blocks: [
      { eyebrow: 'UM SÓ CONTEXTO', title: 'A venda acontece em um lugar. A conversa em outro. E o contexto se perde no caminho.', body: 'O FelixFlow reúne o que acontece antes, durante e depois da oportunidade para que cada pessoa saiba quem é o contato, o que já aconteceu e qual é o próximo passo.' },
      { eyebrow: 'VISÃO GERAL', title: 'Um sistema para enxergar. Um fluxo para agir.', layout: 'cards', accent: 'lime', items: [
        { title: 'Dashboard', body: 'Vendas, forecast, origem, tempo de resposta e desempenho comercial.' },
        { title: 'Inbox integrada', body: 'WhatsApp e Instagram com histórico, responsável e contexto.' },
        { title: 'Funil comercial', body: 'Etapas, valores, responsáveis, temperatura e próximas ações.' },
        { title: 'Automações', body: 'Tags, mensagens, follow-ups e movimentos por regra.' },
        { title: 'Campanhas', body: 'Templates, métricas, UTMs e origem das oportunidades.' },
        { title: 'Agente de IA', body: 'Qualificação, agendamento, materiais, CRM e transferência.' },
      ]},
      { eyebrow: 'CANAIS & OPERADORES', title: 'Um número para cada operação. Um fluxo para toda a equipe.', layout: 'list', list: ['WhatsApp oficial e instâncias próprias', 'Instagram', 'Múltiplos números', 'Atribuição por operador', 'Organizações e usuários', 'Entrada automática no funil'] },
      { eyebrow: 'COMECE RÁPIDO', title: 'Configuração inicial em aproximadamente 20 minutos.', layout: 'steps', items: [
        { title: 'Entendimento', body: 'Definimos o fluxo principal, responsáveis e objetivo.' },
        { title: 'Configuração', body: 'Criamos o acesso, conectamos o canal e ajustamos o funil.' },
        { title: 'Ativação', body: 'A equipe começa a operar com suporte da FELIX.' },
      ]},
      { eyebrow: 'OFERTA', title: 'Um FelixFlow configurado para o processo da sua empresa.', body: 'A contratação funciona por mensalidade. A primeira mensalidade contempla a implementação inicial, e o plano inclui suporte. Personalizações, integrações e módulos adicionais são definidos conforme a necessidade.', accent: 'lime' },
    ],
    faqs: [
      { q: 'Quanto custa o FelixFlow?', a: 'O valor é definido conforme operação, usuários, canais, integrações e personalizações. O preço é sob consulta.' },
      { q: 'Existe taxa de implementação?', a: 'A implementação inicial está contemplada na primeira mensalidade. Necessidades personalizadas são avaliadas separadamente.' },
      { q: 'Quanto tempo leva para começar?', a: 'A configuração inicial pode ser feita em aproximadamente 20 minutos. Integrações adicionais seguem cronograma próprio.' },
      { q: 'O suporte está incluído?', a: 'Sim. O FelixFlow possui suporte incluído.' },
    ],
    cta: { title: 'Menos abas. Menos tarefas manuais. Mais clareza sobre cada oportunidade.', primary: 'Falar com um especialista' },
  },
  projetos: {
    slug: 'projetos',
    title: 'Projetos de Sites, Sistemas e IA | FELIX',
    description: 'Conheça aplicações de sites, sistemas, automações e agentes de IA desenvolvidas para empresas de serviços.',
    eyebrow: 'PROJETOS',
    headline: 'Tecnologia que começa no problema e termina em uma operação melhor.',
    lead: 'Conheça aplicações da FELIX em presença digital, processos comerciais, automação e inteligência artificial.',
    primary: 'Falar sobre meu projeto',
    metric: '+120 CLIENTES ATENDIDOS · BRASIL · REINO UNIDO · PORTUGAL · FRANÇA',
    blocks: [
      { eyebrow: 'APLICAÇÕES', title: 'Não mostramos apenas telas. Mostramos o raciocínio por trás da solução.', body: 'Enquanto os cases documentados são preparados, estas aplicações estão claramente identificadas como demonstrações.', layout: 'projects', items: [
        { tag: 'PROJETO DEMONSTRATIVO', title: 'Site e atendimento para clínica especializada', body: 'Site institucional com páginas de serviços, dúvidas e agendamento, conectado ao WhatsApp e ao fluxo de atendimento.' },
        { tag: 'PROJETO DEMONSTRATIVO', title: 'Operação comercial para consultoria B2B', body: 'FelixFlow com Inbox, contatos, funil personalizado, automações, follow-ups e dashboard comercial.' },
        { tag: 'PROJETO DEMONSTRATIVO', title: 'Agente de IA para atendimento e qualificação', body: 'Agente preparado para responder, qualificar, agendar e transferir o contato com contexto.' },
      ]},
    ],
    cta: { title: 'O próximo projeto pode começar pelo gargalo que você já conhece.', primary: 'Falar sobre meu projeto' },
  },
  sobre: {
    slug: 'sobre',
    title: 'Sobre a FELIX | Tecnologia para Vendas e Operação',
    description: 'Conheça a FELIX, empresa de Cascavel que une growth, design, sistemas, automação e IA para transformar operações comerciais.',
    eyebrow: 'SOBRE A FELIX',
    headline: 'Tecnologia construída com visão de marketing, vendas e operação.',
    lead: 'A FELIX nasceu para resolver um problema recorrente: empresas investem em presença digital e ferramentas, mas continuam dependendo de processos desconectados para transformar interesse em venda.',
    primary: 'Falar com a FELIX',
    secondary: 'Iniciar um projeto',
    metric: 'CASCAVEL → BRASIL → REINO UNIDO → PORTUGAL → FRANÇA',
    blocks: [
      { eyebrow: 'HISTÓRIA', title: 'De Cascavel para empresas no Brasil e na Europa.', body: 'Fundada por Matheus Felix em Cascavel, a FELIX iniciou sua trajetória no marketing digital em 2021. A experiência em estratégia, comunicação, aquisição e processo comercial evoluiu para tecnologia aplicada a vendas e operação. Hoje, construímos sites, sistemas, automações, agentes de IA e o FelixFlow.' },
      { eyebrow: 'NÚMEROS', title: 'Uma trajetória construída em projetos reais.', layout: 'cards', items: [
        { title: '5 anos', body: 'de atuação no mercado digital' },
        { title: 'Mais de 120', body: 'clientes atendidos' },
        { title: '4 mercados', body: 'Brasil, Reino Unido, Portugal e França' },
        { title: '4 competências', body: 'Estratégia, design, tecnologia e inteligência artificial' },
      ]},
      { eyebrow: 'ESPECIALIDADES', title: 'O que orienta nossas decisões.', layout: 'cards', items: [
        { title: 'Growth marketing', body: 'Aquisição, ativação, conversão e crescimento como partes do mesmo sistema.' },
        { title: 'Processo comercial', body: 'Como a oportunidade chega, é atendida, qualificada e conduzida.' },
        { title: 'Inteligência artificial', body: 'IA em tarefas que aumentam velocidade e escala.' },
        { title: 'Neuromarketing e copy', body: 'Comunicação para reduzir dúvidas e facilitar decisões.' },
        { title: 'Design de conversão', body: 'Hierarquia e experiência para conduzir, não apenas decorar.' },
      ]},
      { eyebrow: 'MANIFESTO', title: 'Não acreditamos em tecnologia como enfeite.', body: 'Um site precisa conduzir. Um sistema precisa organizar. Uma automação precisa economizar esforço. Uma IA precisa executar um papel claro. Se a ferramenta não melhora o fluxo, ela apenas adiciona mais uma tela à operação.' },
    ],
    cta: { title: 'Vamos construir o próximo fluxo da sua empresa.', primary: 'Falar com a FELIX' },
  },
};
