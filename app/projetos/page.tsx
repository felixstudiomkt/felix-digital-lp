import { pageMetadata } from '../lib/metadata';
import { CTA, Eyebrow, ProjectGrid, SiteShell } from '../components';
export const metadata = pageMetadata('Projetos', 'Conheça entregas FELIX em sites, sistemas comerciais e inteligência artificial para BC Construtora e Débora Adv.', '/projetos');
export default function ProjectsPage() {
  return <SiteShell><main id="conteudo"><section className="page-intro"><div className="container"><Eyebrow>Projetos FELIX</Eyebrow><h1>O contexto muda.<br /><span>A solução acompanha.</span></h1><div className="intro-bottom"><p>Algumas aplicações do nosso trabalho em presença digital, atendimento e operação.</p></div></div></section><section className="section projects-section"><div className="container"><ProjectGrid /><div className="project-scope-note"><span className="tiny-label">PRESENÇA E OPERAÇÃO</span><p>Sites para apresentar o trabalho. Sistemas e IA para organizar o que vem depois. Conheça as soluções aplicadas a cada contexto.</p></div></div></section><CTA title="O próximo projeto começa com o seu contexto." /></main></SiteShell>;
}
