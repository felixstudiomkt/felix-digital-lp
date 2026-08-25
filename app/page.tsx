import { ArrowLink, CTA, Eyebrow, SiteShell } from './components';

const stages = [
  { label: 'VISITA', tone: 'blue' },
  { label: 'LEAD', tone: 'blue' },
  { label: 'ATENDIMENTO', tone: 'lime' },
  { label: 'FUNIL', tone: 'blue' },
  { label: 'FOLLOW-UP', tone: 'lime' },
  { label: 'VENDA', tone: 'lime' },
];

function FlowPanel() {
  return (
    <div className="flow-panel" aria-label="Fluxo comercial conectado da visita à venda">
      <div className="panel-topline"><span className="status"><i /> OPERAÇÃO CONECTADA</span><span className="panel-id">FELIX / FLOW_01</span></div>
      <div className="flow-track">
        {stages.map((stage, index) => (
          <div className="flow-stage" key={stage.label}>
            <span className={`flow-node ${stage.tone}`}><i /><b>{String(index + 1).padStart(2, '0')}</b></span>
            <strong>{stage.label}</strong>
            {index < stages.length - 1 && <span className="connector" aria-hidden="true" />}
          </div>
        ))}
      </div>
      <div className="panel-metrics"><span><b>1 fluxo</b> para acompanhar a oportunidade inteira</span><span className="live"><i /> SISTEMA ATIVO</span></div>
    </div>
  );
}

const solutionCards = [
  { n: '01', title: 'Sites & Landing Pages', body: 'Páginas rápidas, claras e persuasivas para transformar pesquisa, campanha e indicação em contato.', href: '/sites', label: 'Conhecer sites' },
  { n: '02', title: 'Sistemas & Automações', body: 'CRMs, portais, dashboards, sistemas internos e integrações adaptados à sua operação.', href: '/sistemas-e-automacoes', label: 'Conhecer sistemas' },
  { n: '03', title: 'Agentes de IA', body: 'Atendimento para responder, qualificar, agendar, fazer follow-up e transferir no momento certo.', href: '/agentes-de-ia', label: 'Conhecer agentes' },
  { n: '04', title: 'FelixFlow', body: 'Atendimento, funil, campanhas, automações, indicadores e IA em uma única plataforma.', href: '/felixflow', label: 'Conhecer FelixFlow', flow: true },
];

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="hero flow-grid">
          <div className="flow-line flow-line-a" /><div className="flow-line flow-line-b" />
          <div className="container hero-copy">
            <Eyebrow>TECNOLOGIA APLICADA A VENDAS E OPERAÇÃO</Eyebrow>
            <h1>Sites que vendem.<br />Sistemas que operam.<br /><em>IA que escala.</em></h1>
            <p className="hero-lead">A FELIX conecta presença digital, aquisição de clientes, atendimento e operação comercial para sua empresa crescer com menos tarefas manuais e mais controle.</p>
            <div className="hero-actions"><a className="button" href="/contato">Falar com a FELIX <span>↗</span></a><a className="button button-ghost" href="/diagnostico">Solicitar diagnóstico gratuito</a></div>
            <p className="microcopy">Conte o que precisa funcionar melhor. Nós mostramos o próximo passo.</p>
          </div>
          <div className="container hero-system"><FlowPanel /></div>
        </section>

        <section className="authority"><div className="container authority-grid">
          <div><strong>+120</strong><span>clientes atendidos</span></div>
          <div><strong>5</strong><span>anos de mercado</span></div>
          <div><strong>4</strong><span>mercados conectados</span></div>
          <p>BRASIL · REINO UNIDO · PORTUGAL · FRANÇA</p>
        </div></section>

        <section className="content-section problem-section"><div className="container">
          <div className="split-intro"><div><Eyebrow>CRESCER NÃO DEVERIA AUMENTAR O CAOS</Eyebrow><h2>Ferramentas isoladas criam trabalho. Não uma operação.</h2></div><p>Quando cada etapa funciona separadamente, sua equipe perde tempo conectando informações que já deveriam chegar conectadas.</p></div>
          <div className="content-grid cards cards-three">
            <article className="content-card"><span className="card-index">01</span><h3>Leads sem resposta</h3><p>O interesse existe, mas a demora no primeiro contato reduz a chance de conversão.</p></article>
            <article className="content-card"><span className="card-index">02</span><h3>Processos manuais</h3><p>A equipe repete tarefas, move dados e envia mensagens que poderiam acontecer automaticamente.</p></article>
            <article className="content-card"><span className="card-index">03</span><h3>Decisões sem contexto</h3><p>Sem rastreamento, fica difícil saber quais canais e ações realmente geram vendas.</p></article>
          </div>
        </div></section>

        <section className="content-section section-surface" id="solucoes"><div className="container">
          <div className="section-intro"><Eyebrow>DA PRESENÇA À OPERAÇÃO</Eyebrow><h2>A tecnologia certa para cada etapa do crescimento.</h2><p>Não entregamos peças desconectadas. Construímos a estrutura digital que conduz uma oportunidade desde a primeira visita até o relacionamento comercial.</p></div>
          <div className="solutions-grid">
            {solutionCards.map((card) => <article className={card.flow ? 'solution-card flow-card' : 'solution-card'} key={card.title}><span>{card.n}</span><i /><h3>{card.title}</h3><p>{card.body}</p><ArrowLink href={card.href}>{card.label}</ArrowLink></article>)}
          </div>
        </div></section>

        <section className="content-section process-section"><div className="container">
          <div className="section-intro"><Eyebrow>UM FLUXO, NÃO UM CONJUNTO DE FERRAMENTAS</Eyebrow><h2>Da primeira visita ao fechamento. Tudo conectado.</h2></div>
          <div className="process-flow">
            {[
              ['Atração','O site apresenta a oferta e captura a oportunidade.'],
              ['Atendimento','WhatsApp, Instagram e outros canais entram em um fluxo organizado.'],
              ['Qualificação','O agente coleta informações e conduz o próximo passo.'],
              ['Operação comercial','O negócio recebe etapa, responsável, automações e follow-ups.'],
              ['Inteligência','Dashboards mostram origem, resposta, conversão e desempenho.'],
            ].map(([title,body],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><i /><h3>{title}</h3><p>{body}</p></article>)}
          </div>
          <ArrowLink href="/contato">Quero conectar minha operação</ArrowLink>
        </div></section>

        <section className="flow-feature"><div className="container flow-feature-grid">
          <div><Eyebrow flow>PRODUTO FELIX</Eyebrow><h2>Sua operação comercial em um só lugar.</h2><p>O FelixFlow reúne conversas, contatos, funil, campanhas, automações e agentes de IA. Sua equipe acompanha o relacionamento inteiro em um único fluxo.</p>
            <div className="feature-list">{['Inbox integrada para atendimento','CRM com funis personalizáveis','Automações e follow-ups','Campanhas, métricas e UTMs','Agente de IA com base de conhecimento','Indicadores de vendas e atendimento'].map(item=><span key={item}><i />{item}</span>)}</div>
            <div className="hero-actions"><a className="button button-flow" href="/contato">Falar com um especialista <span>↗</span></a><a className="button button-ghost" href="/felixflow">Ver o FelixFlow</a></div>
          </div>
          <div className="flow-ui" aria-label="Representação visual do FelixFlow">
            <div className="flow-ui-bar"><span><i /> FELIXFLOW / PIPELINE</span><b>LIVE</b></div>
            <div className="flow-ui-stats"><span><small>OPORTUNIDADES</small><b>24</b><i>+12%</i></span><span><small>EM NEGOCIAÇÃO</small><b>08</b><i>R$ 48k</i></span><span><small>CONVERSÃO</small><b>32%</b><i>ATIVO</i></span></div>
            <div className="pipeline"><div><b>NOVOS</b><span><i />Clínica Lumen<small>há 2 min</small></span><span><i />Norte Consult<small>há 14 min</small></span></div><div><b>QUALIFICADOS</b><span><i />Vértice B2B<small>R$ 8.500</small></span></div><div><b>PROPOSTA</b><span><i />Orbe Saúde<small>Follow-up hoje</small></span><span><i />Ativa Eng.<small>R$ 12.000</small></span></div></div>
          </div>
        </div></section>

        <section className="content-section why-section"><div className="container">
          <div className="split-intro"><div><Eyebrow>ESTRATÉGIA ANTES DA FERRAMENTA</Eyebrow><h2>Entendemos aquisição, conversão e vendas antes de escrever uma linha de código.</h2></div><p>Tecnologia só gera resultado quando resolve o problema certo. Cada projeto começa pela oferta, pelo cliente, pelo processo comercial e pelo ponto que limita o crescimento.</p></div>
          <div className="content-grid cards cards-three">
            <article className="content-card"><span className="card-index">01</span><h3>Clareza comercial</h3><p>Cada página, tela e automação tem uma função dentro do processo.</p></article>
            <article className="content-card"><span className="card-index">02</span><h3>Construção sob medida</h3><p>Adaptamos a tecnologia à operação, não o contrário.</p></article>
            <article className="content-card"><span className="card-index">03</span><h3>Continuidade</h3><p>O projeto evolui com novas páginas, integrações e funcionalidades.</p></article>
          </div>
        </div></section>

        <section className="content-section section-surface"><div className="container">
          <div className="section-intro"><Eyebrow>APLICAÇÕES</Eyebrow><h2>Diferentes desafios. A mesma lógica: transformar complexidade em fluxo.</h2></div>
          <div className="content-grid projects">
            {['Presença digital para clínica','Operação comercial para consultoria','Agente de IA para empresa de serviços'].map((title,index)=><article className="content-card" key={title}><span className="demo-tag">PROJETO DEMONSTRATIVO</span><span className="card-index">0{index+1}</span><h3>{title}</h3><p>{['Site orientado a serviços, autoridade e agendamento, conectado ao WhatsApp.','Funil personalizado, central de contatos, follow-ups e painel de oportunidades.','Atendimento inicial, qualificação, agendamento e transferência para a equipe.'][index]}</p><ArrowLink href="/projetos">Ver aplicação</ArrowLink></article>)}
          </div>
        </div></section>

        <section className="diagnosis-strip"><div className="container diagnosis-grid"><div><Eyebrow>COMECE COM CLAREZA</Eyebrow><h2>Descubra o que sua presença digital está deixando na mesa.</h2></div><div><p>Receba uma análise inicial do seu site: pontos de atrito, oportunidades e prioridades para transformar mais visitas em conversas comerciais.</p><a className="button" href="/diagnostico">Solicitar diagnóstico gratuito <span>↗</span></a><small>Gratuito. Sem compromisso. Com recomendações aplicáveis.</small></div></div></section>

        <section className="faq-section"><div className="container faq-grid"><div className="section-intro"><Eyebrow>FAQ</Eyebrow><h2>Perguntas antes do próximo passo.</h2></div><div className="faq-list">
          <details open><summary>A FELIX é uma agência de marketing?<span>+</span></summary><p>A FELIX é uma empresa de tecnologia aplicada a vendas e operação. Criamos sites, sistemas, automações e agentes de IA.</p></details>
          <details><summary>Vocês atendem apenas empresas de Cascavel?<span>+</span></summary><p>Não. A FELIX nasceu em Cascavel e atende empresas no Brasil e no exterior.</p></details>
          <details><summary>É possível contratar apenas um site?<span>+</span></summary><p>Sim. Cada solução pode ser contratada separadamente e conectada conforme a operação evoluir.</p></details>
          <details><summary>Como descubro qual solução faz sentido?<span>+</span></summary><p>Primeiro entendemos o cenário; depois recomendamos o caminho mais adequado.</p></details>
        </div></div></section>
        <CTA title="Sua empresa não precisa de mais ferramentas. Precisa de ferramentas trabalhando juntas." body="Conte onde sua operação perde tempo, oportunidades ou visibilidade. A FELIX transforma esse ponto em um fluxo mais simples, conectado e escalável." />
      </main>
    </SiteShell>
  );
}
