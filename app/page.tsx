import { CTA, Eyebrow, SiteShell } from './components';
import { LeadForm } from './LeadForm';
import { PortfolioGallery } from './PortfolioGallery';

const whatsapp = 'https://wa.me/554598554766?text=Ol%C3%A1%2C%20quero%20entender%20qual%20site%20faz%20mais%20sentido%20para%20o%20meu%20neg%C3%B3cio.';

const services = [
  { number: '01', title: 'Sites institucionais', body: 'Para apresentar sua empresa, seus serviços e o próximo passo com clareza.' },
  { number: '02', title: 'Landing pages', body: 'Uma página focada em uma oferta, campanha ou ação comercial.' },
  { number: '03', title: 'Lojas virtuais', body: 'Uma vitrine digital para organizar produtos e facilitar a compra.' },
  { number: '04', title: 'Agendamento e orçamento', body: 'Páginas com caminhos práticos para receber pedidos e oportunidades.' },
];

const projects = [
  { name: 'BC Construtora', type: 'Site institucional', url: 'https://www.bcconstrutora.com.br/', image: '/portfolio/bc-construtora.webp' },
  { name: 'Smile Kids', type: 'Projeto publicado', url: 'https://smile-kids.vercel.app/', image: '/portfolio/smile-kids.webp' },
  { name: 'Infinite Psicologia', type: 'Site institucional', url: 'https://infinite-psicologia.vercel.app/', image: '/portfolio/infinite-psicologia.webp' },
  { name: 'Débora Adv', type: 'Site institucional', url: 'https://debora-adv-one.vercel.app/', image: '/portfolio/debora-adv.webp' },
  { name: 'Método Roxo', type: 'Landing page', url: 'https://www.metodoroxo.com.br/', image: '/portfolio/metodo-roxo.webp' },
];

const faqs = [
  ['O que preciso enviar para começar?', 'Depois do primeiro contato, você recebe um briefing para compartilhar as informações, referências e objetivos do projeto. O prazo de 5 dias úteis começa após o briefing ser enviado.'],
  ['O site já vem com domínio e hospedagem?', 'Na oferta promocional de LP institucional, domínio, hospedagem, manutenção e Google não estão incluídos. Em projetos personalizados, avaliamos essas necessidades no escopo.'],
  ['Vocês criam os textos?', 'Sim. Organizamos a mensagem a partir do briefing e ajustamos a estrutura para deixar a oferta mais clara.'],
  ['Quantas alterações posso pedir?', 'A oferta inclui 2 rodadas de revisão. Projetos personalizados podem ter condições definidas de acordo com o escopo.'],
  ['Vocês fazem loja virtual e agendamento?', 'Sim. Também desenvolvemos lojas virtuais e sites com agendamento ou orçamento, conforme o que fizer sentido para sua operação.'],
  ['Como descubro qual solução é melhor para mim?', 'Responda algumas perguntas no formulário. Nós analisamos o cenário e indicamos o caminho mais adequado entre site, landing page, loja ou uma solução com orçamento/agendamento.'],
];

export default function Home() {
  return (
    <SiteShell>
      <main className="lp-home">
        <section className="lp-hero">
          <div className="lp-hero-orbit" aria-hidden="true" />
          <div className="container lp-hero-grid">
            <div className="lp-hero-copy">
              <Eyebrow>SITES PARA NEGÓCIOS QUE QUEREM SER ESCOLHIDOS</Eyebrow>
              <h1>Seu negócio merece um site que <em>faça sentido.</em></h1>
              <p className="lp-hero-lead">Criamos sites, landing pages e lojas virtuais para profissionais liberais, empresas locais e prestadores de serviços que precisam transformar presença digital em oportunidades.</p>
              <div className="hero-actions">
                <a className="button" href="#diagnostico">Descobrir o melhor formato <span>↗</span></a>
                <a className="button button-ghost" href={whatsapp}>Falar pelo WhatsApp</a>
              </div>
              <p className="lp-hero-note">Briefing claro · prazo de 5 dias úteis · 2 rodadas de revisão</p>
            </div>
            <div className="lp-hero-art" aria-label="Exemplo visual de estrutura de site">
              <div className="lp-browser-bar"><span /><span /><span /><b>FELIX / WEB PRESENCE</b></div>
              <div className="lp-browser-content">
                <div className="lp-browser-kicker">SUA MARCA / SUA OFERTA</div>
                <strong>Uma presença digital<br /><i>pronta para agir.</i></strong>
                <p>Mensagem clara. Caminho simples. Próximo passo visível.</p>
                <div className="lp-browser-cta"><span>Quero conversar</span><b>↗</b></div>
                <div className="lp-browser-lines"><i /><i /><i /></div>
              </div>
              <span className="lp-art-label">ESTRATÉGIA · DESIGN · TECNOLOGIA</span>
            </div>
          </div>
        </section>

        <section className="lp-intro-strip" aria-label="Público atendido">
          <div className="lp-marquee" aria-hidden="true"><div className="lp-marquee-track"><span>PARA QUEM VENDE CONFIANÇA ANTES DE VENDER SERVIÇO</span><i /><span>PROFISSIONAIS · NEGÓCIOS LOCAIS · SERVIÇOS</span><i /><span>PARA QUEM VENDE CONFIANÇA ANTES DE VENDER SERVIÇO</span><i /><span>PROFISSIONAIS · NEGÓCIOS LOCAIS · SERVIÇOS</span><i /></div></div>
        </section>

        <section className="lp-problem">
          <div className="container lp-two-col">
            <div><Eyebrow>O PROBLEMA</Eyebrow><h2>Quando o cliente procura você, ele encontra clareza ou precisa montar o quebra-cabeça?</h2></div>
            <div className="lp-copy-column"><p>Um perfil nas redes pode despertar interesse. Mas o site é onde muita gente confirma se entendeu sua empresa, se pode confiar e como dar o próximo passo.</p><p>Se a mensagem está espalhada, o contato é difícil ou a página não explica sua oferta, você perde oportunidades antes mesmo da conversa começar.</p><a className="arrow-link" href="#servicos">Ver como podemos ajudar <span>↓</span></a></div>
          </div>
        </section>

        <section className="lp-services" id="servicos">
          <div className="container">
            <div className="section-intro"><Eyebrow>O QUE PODEMOS CONSTRUIR</Eyebrow><h2>Escolha o formato que combina com o seu próximo passo.</h2><p>Começamos pelo objetivo do negócio, não por um modelo pronto.</p></div>
            <div className="lp-service-grid">
              {services.map((service) => <article className="lp-service-card" key={service.number}><span>{service.number}</span><div><h3>{service.title}</h3><p>{service.body}</p></div></article>)}
            </div>
            <div className="lp-custom-note"><div><Eyebrow flow>PROJETO PERSONALIZADO</Eyebrow><h3>Precisa de algo mais específico?</h3></div><p>Podemos avaliar integrações, funcionalidades, domínio, hospedagem, manutenção e presença no Google dentro de um escopo personalizado.</p><a className="button button-flow" href="#diagnostico">Contar o que você precisa <span>↗</span></a></div>
          </div>
        </section>

        <section className="lp-offer">
          <div className="container lp-offer-grid">
            <div><Eyebrow>CONDIÇÃO PARA LP INSTITUCIONAL</Eyebrow><h2>Uma página profissional para colocar sua oferta em movimento.</h2><p>Para quem precisa de uma presença digital objetiva, bem estruturada e pronta para receber contatos.</p></div>
            <div className="lp-offer-card"><span className="lp-offer-tag">PROMOÇÃO</span><p className="lp-offer-from">LP institucional</p><strong>R$ 749</strong><p>Inclui criação da página, textos a partir do briefing, versão responsiva e publicação do projeto.</p><ul><li>Prazo de 5 dias úteis após o briefing</li><li>2 rodadas de revisão</li><li>WhatsApp e formulário de contato</li></ul><a className="button" href="#diagnostico">Quero essa condição <span>↗</span></a><small>Domínio, hospedagem, manutenção e Google não estão incluídos nesta oferta.</small></div>
          </div>
        </section>

        <section className="lp-process" id="processo">
          <div className="container"><div className="section-intro"><Eyebrow>COMO FUNCIONA</Eyebrow><h2>Do briefing ao site publicado, sem complicar.</h2></div><div className="lp-process-list">
            {[['01','Briefing','Você compartilha o contexto, a oferta e o que precisa melhorar.'],['02','Direção','Organizamos a mensagem e a estrutura mais adequada para o objetivo.'],['03','Construção','Criamos o site com design responsivo, textos e caminhos de contato.'],['04','Revisão','Você avalia o projeto em até 2 rodadas de ajustes.'],['05','Publicação','Colocamos a página no ar e deixamos o próximo passo claro.']].map(([number,title,body]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}
          </div></div>
        </section>

        <PortfolioGallery projects={projects} />

        <section className="lp-diagnosis" id="diagnostico">
          <div className="container lp-diagnosis-grid"><div><Eyebrow>QUAL FORMATO FAZ SENTIDO?</Eyebrow><h2>Responda algumas perguntas. Nós indicamos o próximo passo.</h2><p>Você não precisa chegar sabendo se precisa de site, LP, loja ou uma estrutura com orçamento. Conte o cenário e nós organizamos as possibilidades.</p><a className="button button-light" href={whatsapp}>Prefiro falar pelo WhatsApp <span>↗</span></a></div><div className="lp-form-panel"><LeadForm kind="projeto" /></div></div>
        </section>

        <section className="faq-section lp-faq" id="faq"><div className="container faq-grid"><div className="section-intro"><Eyebrow>FAQ</Eyebrow><h2>Antes de começar, algumas respostas.</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

        <CTA title="Seu próximo cliente já está pesquisando. Vamos facilitar a escolha?" body="Conte um pouco sobre seu negócio e nós ajudamos a encontrar o formato de site mais adequado para o seu momento." primary="Descobrir o melhor formato" primaryHref="#diagnostico" secondary="Ver o portfólio" secondaryHref="#portfolio" />
      </main>
    </SiteShell>
  );
}
