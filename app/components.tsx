import type { ReactNode } from 'react';

export function Logo({ flow = false }: { flow?: boolean }) {
  return (
    <a className="logo" href="/" aria-label="FELIX — início">
      <span>feli</span>
      <img src={flow ? '/brand/logo-x-flow-lime.svg' : '/brand/logo-x-signal-blue.svg'} alt="x" />
      {flow && <b>Flow</b>}
    </a>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Logo />
        <nav aria-label="Navegação principal">
          <details className="solutions-menu">
            <summary>Soluções <span>⌄</span></summary>
            <div>
              <a href="/sites">Sites & Landing Pages<small>Presença que converte</small></a>
              <a href="/sistemas-e-automacoes">Sistemas & Automações<small>Operação sem tarefas soltas</small></a>
              <a href="/agentes-de-ia">Agentes de IA<small>Atendimento em movimento</small></a>
            </div>
          </details>
          <a href="/felixflow">FelixFlow</a>
          <a href="/projetos">Projetos</a>
          <a href="/sobre">Sobre</a>
          <a href="/diagnostico">Diagnóstico gratuito</a>
        </nav>
        <a className="button button-small" href="/contato">Falar com a FELIX <span>↗</span></a>
        <details className="mobile-menu">
          <summary aria-label="Abrir menu"><span /><span /></summary>
          <div>
            <a href="/sites">Sites & Landing Pages</a>
            <a href="/sistemas-e-automacoes">Sistemas & Automações</a>
            <a href="/agentes-de-ia">Agentes de IA</a>
            <a href="/felixflow">FelixFlow</a>
            <a href="/projetos">Projetos</a>
            <a href="/sobre">Sobre</a>
            <a href="/diagnostico">Diagnóstico gratuito</a>
            <a className="button" href="/contato">Falar com a FELIX</a>
          </div>
        </details>
      </div>
    </header>
  );
}

export function Eyebrow({ children, flow = false }: { children: ReactNode; flow?: boolean }) {
  return <p className={`eyebrow ${flow ? 'eyebrow-flow' : ''}`}><i /> {children}</p>;
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return <a className="arrow-link" href={href}>{children}<span>↗</span></a>;
}

export function CTA({ title, body, primary = 'Falar com a FELIX', secondary = 'Iniciar um projeto' }: { title: string; body?: string; primary?: string; secondary?: string | false }) {
  return (
    <section className="final-cta flow-grid">
      <div className="container">
        <Eyebrow>PRÓXIMO FLUXO</Eyebrow>
        <h2>{title}</h2>
        {body && <p>{body}</p>}
        <div className="hero-actions">
          <a className="button" href="/contato">{primary}<span>↗</span></a>
          {secondary && <a className="button button-ghost" href="/diagnostico">{secondary}</a>}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const whatsapp = 'https://wa.me/?text=Ol%C3%A1%21%20Conheci%20a%20FELIX%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.';
  return (
    <>
      <footer>
        <div className="container footer-grid">
          <div className="footer-brand"><Logo /><p>Sites que vendem. Sistemas que operam. IA que escala.</p><span>TECNOLOGIA APLICADA A VENDAS E OPERAÇÃO.</span></div>
          <div><strong>SOLUÇÕES</strong><a href="/sites">Sites & Landing Pages</a><a href="/sistemas-e-automacoes">Sistemas & Automações</a><a href="/agentes-de-ia">Agentes de IA</a><a href="/felixflow">FelixFlow</a></div>
          <div><strong>EMPRESA</strong><a href="/projetos">Projetos</a><a href="/sobre">Sobre</a><a href="/diagnostico">Diagnóstico gratuito</a><a href="/contato">Contato</a></div>
          <div><strong>COMEÇAR</strong><a href={whatsapp}>WhatsApp</a><a href="/diagnostico">Analisar presença digital</a><a href="/contato">Iniciar projeto</a></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 FELIX</span><span>CASCAVEL · PARANÁ · BRASIL</span></div>
      </footer>
      <a className="whatsapp-float" href={whatsapp} aria-label="Falar com a FELIX pelo WhatsApp"><i /> Falar com a FELIX</a>
    </>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return <><Header />{children}<Footer /></>;
}
