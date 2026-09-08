import type { ReactNode } from 'react';
import Link from 'next/link';

export function ImagePlaceholder({
  label,
  ratio,
  index = '01',
  className = '',
}: {
  label: string;
  ratio: string;
  index?: string;
  className?: string;
}) {
  return (
    <div className={`image-placeholder ${className}`} role="img" aria-label={`${label}. Espaço reservado para imagem real.`}>
      <span className="placeholder-corner placeholder-corner-a" />
      <span className="placeholder-corner placeholder-corner-b" />
      <div className="placeholder-center">
        <span>ADICIONAR IMAGEM REAL</span>
        <strong>{label}</strong>
        <small>{ratio}</small>
      </div>
      <span className="placeholder-index">FELIX / IMAGE_{index}</span>
    </div>
  );
}

export function Logo({ flow = false }: { flow?: boolean }) {
  return (
    <Link className="logo" href="/" aria-label="FELIX — início">
      <span>feli</span>
      <img src={flow ? '/brand/logo-x-flow-lime.svg' : '/brand/logo-x-signal-blue.svg'} alt="x" />
      {flow && <b>Flow</b>}
    </Link>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Logo />
        <nav aria-label="Navegação principal">
          <details className="solutions-menu">
            <summary>Formatos <span>⌄</span></summary>
            <div>
              <a href="#servicos">Sites & Landing Pages<small>Presença que converte</small></a>
              <a href="#servicos">Lojas virtuais<small>Vitrine para vender melhor</small></a>
              <a href="#servicos">Agendamento e orçamento<small>Próximo passo sem atrito</small></a>
            </div>
          </details>
          <a href="#servicos">Soluções</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#processo">Como funciona</a>
          <a href="#faq">Dúvidas</a>
        </nav>
        <a className="button button-small" href="#diagnostico">Falar com a FELIX <span>↗</span></a>
        <details className="mobile-menu">
          <summary aria-label="Abrir menu"><span /><span /></summary>
          <div>
            <a href="#servicos">Soluções</a>
            <a href="#portfolio">Portfólio</a>
            <a href="#processo">Como funciona</a>
            <a href="#faq">Dúvidas</a>
            <a className="button" href="#diagnostico">Falar com a FELIX</a>
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

export function CTA({ title, body, primary = 'Falar com a FELIX', primaryHref = '/contato', secondary = 'Iniciar um projeto', secondaryHref = '/diagnostico' }: { title: string; body?: string; primary?: string; primaryHref?: string; secondary?: string | false; secondaryHref?: string }) {
  return (
    <section className="final-cta flow-grid">
      <div className="container">
        <Eyebrow>PRÓXIMO FLUXO</Eyebrow>
        <h2>{title}</h2>
        {body && <p>{body}</p>}
        <div className="hero-actions">
          <a className="button" href={primaryHref}>{primary}<span>↗</span></a>
          {secondary && <a className="button button-ghost" href={secondaryHref}>{secondary}</a>}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const whatsapp = 'https://wa.me/554598554766?text=Ol%C3%A1%2C%20conheci%20a%20FELIX%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.';
  return (
    <>
      <footer>
        <div className="container footer-grid">
          <div className="footer-brand"><Logo /><p>Sites que vendem. Sistemas que operam. IA que escala.</p><span>TECNOLOGIA APLICADA A VENDAS E OPERAÇÃO.</span></div>
          <div><strong>SOLUÇÕES</strong><a href="#servicos">Sites institucionais</a><a href="#servicos">Landing pages</a><a href="#servicos">Lojas virtuais</a><a href="#servicos">Agendamento e orçamento</a></div>
          <div><strong>EXPLORAR</strong><a href="#portfolio">Portfólio</a><a href="#processo">Como funciona</a><a href="#faq">Dúvidas</a><a href="#diagnostico">Orçamento</a></div>
          <div><strong>COMEÇAR</strong><a href={whatsapp}>WhatsApp</a><a href="#diagnostico">Descobrir o melhor formato</a><a href="#diagnostico">Iniciar projeto</a></div>
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
