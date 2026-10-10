import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { EMAIL, categories, projects, solutions, whatsappUrl } from './lib/solutions';
import { Navigation } from './Navigation';

export function XMark({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="10 15 80 70" fill="currentColor" aria-hidden="true"><path d="M10 15h25l55 70H65Z" /><path d="M90 15H65L52 32h25Z" /><path d="m48 43-38 42h25l25-32Z" /></svg>;
}
export function Logo() {
  return <Link className="logo" href="/" aria-label="FELIX — início"><span>feli</span><XMark /><span className="sr-only">x</span></Link>;
}
export function Header() {
  return <header className="site-header"><div className="container nav-shell"><Logo /><Navigation /><Link className="button button-small header-cta" href="/contato">Vamos conversar <span aria-hidden="true">↗</span></Link></div></header>;
}
export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="section-caption">{children}</p>;
}
export function Button({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return <Link className={`button ${secondary ? 'button-ghost' : ''}`} href={href}>{children}<span aria-hidden="true">↗</span></Link>;
}
export function CTA({ title = 'Qual é o próximo passo do seu negócio?', body = 'Conte o que acontece hoje. Vamos encontrar a solução que faz sentido para a sua operação.', primary = 'Conversar com a FELIX', primaryHref = '/contato' }: { title?: string; body?: string; primary?: string; primaryHref?: string }) {
  return <section className="final-cta"><div className="container cta-layout"><div><Eyebrow>Vamos conectar</Eyebrow><h2>{title}</h2><p>{body}</p></div><Button href={primaryHref}>{primary}</Button></div></section>;
}
export function SolutionGrid({ compact = false }: { compact?: boolean }) {
  return <div className={`solution-groups ${compact ? 'compact-groups' : ''}`}>{categories.map((category) => <div className="solution-group" key={category.id}><div className="group-heading"><span className="tiny-label">{category.id === 'sites' ? '01' : category.id === 'marketing' ? '02' : '03'} / ESPECIALIDADE</span><h3>{category.name}</h3><p>{category.description}</p></div><div className="solution-links">{solutions.filter((solution) => solution.category === category.id).map((solution) => <Link className="solution-link" href={`/solucoes/${solution.slug}`} key={solution.slug}><div><span>{solution.name}</span>{solution.mvp && <small>MVP · Pré-venda</small>}</div><span aria-hidden="true">↗</span></Link>)}</div></div>)}</div>;
}
export function ProjectGrid({ preview = false }: { preview?: boolean }) {
  return <div className="project-grid">{projects.map((project) => <article className="project" key={project.id}><a className="project-image" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visitar o site de ${project.name} (abre em nova aba)`}><Image src={project.image} alt={`Página inicial do site ${project.name}`} width={1440} height={900} unoptimized loading="eager" /><span aria-hidden="true">↗</span></a><div className="project-meta"><span className="tiny-label">{project.category}</span><h3>{project.name}</h3><p>{preview ? project.title : project.description}</p>{!preview && <ul className="tag-list" aria-label="Soluções aplicadas">{project.services.map((service) => <li key={service}>{service}</li>)}</ul>}</div></article>)}</div>;
}
export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return <section className="section faq-section"><div className="container faq-layout"><div><Eyebrow>Antes de começar</Eyebrow><h2>Algumas respostas.</h2></div><div className="faq-list">{items.map((item) => <details key={item.q}><summary>{item.q}<span aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div></div></section>;
}
export function Footer() {
  return <footer className="site-footer"><div className="container footer-top"><div className="footer-brand"><Logo /><p>Sites que vendem.<br />Sistemas que operam.<br />IA que escala.</p></div><div><h2>Explore</h2><Link href="/#empresa">A FELIX</Link><Link href="/#fundador">O fundador</Link><Link href="/solucoes">Soluções</Link><Link href="/projetos">Projetos</Link></div><div><h2>Converse</h2><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a><a href={`mailto:${EMAIL}`}>E-mail ↗</a><a href="https://www.instagram.com/felixdigital.co/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><Link href="/contato">Iniciar uma conversa</Link></div><div className="footer-location"><h2>De Cascavel,<br />para o seu negócio.</h2><p>Paraná, Brasil.<br />Projetos digitais para qualquer cidade.</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} FELIX</span><div><Link href="/privacidade">Privacidade</Link><Link href="/condicoes">Condições comerciais</Link><a href="#conteudo">Voltar ao início ↑</a></div></div></footer>;
}
export function SiteShell({ children }: { children: ReactNode }) {
  return <><a className="skip-link" href="#conteudo">Ir para o conteúdo</a><Header />{children}<Footer /></>;
}
