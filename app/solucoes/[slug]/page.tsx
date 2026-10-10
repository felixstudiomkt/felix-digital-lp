import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button, CTA, Eyebrow, FAQ, SiteShell } from '../../components';
import { SolutionVisual } from '../../SolutionVisual';
import { Plans } from '../../Plans';
import { pageMetadata } from '../../lib/metadata';
import { solutions, solutionFor } from '../../lib/solutions';

export function generateStaticParams() { return solutions.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionFor(slug);
  if (!solution) return {};
  return pageMetadata(solution.name, solution.description, `/solucoes/${slug}`);
}
export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutionFor(slug);
  if (!solution) notFound();
  return <SiteShell><main id="conteudo" className={`solution-page theme-${solution.visual}`}><section className="solution-hero"><div className="container"><nav className="breadcrumbs" aria-label="Caminho da página"><Link href="/">Início</Link><span aria-hidden="true">/</span><Link href="/solucoes">Soluções</Link><span aria-hidden="true">/</span><span aria-current="page">{solution.name}</span></nav><div className="solution-hero-layout"><div><Eyebrow>{solution.name}</Eyebrow>{solution.mvp && <span className="mvp-label">MVP · PRÉ-VENDA</span>}<h1>{solution.headline}</h1><p className="hero-description">{solution.description}</p><div className="hero-actions"><Button href={`/contato?solucao=${solution.slug}`}>{solution.cta || 'Conversar sobre o projeto'}</Button><Link className="text-link" href="#planos">Comparar faixas <span aria-hidden="true">↓</span></Link></div></div><SolutionVisual solution={solution} /></div><div className="audience-line"><span className="tiny-label">PARA QUEM É</span><p>{solution.audience}</p></div></div></section><section className="section solution-outcomes"><div className="container"><div className="section-heading"><div><Eyebrow>Na prática</Eyebrow><h2>O que esta solução conecta.</h2></div></div><div className="outcomes-grid">{solution.outcomes.map((outcome, index) => <article key={outcome.title}><span className="tiny-label">0{index + 1}</span><h3>{outcome.title}</h3><p>{outcome.body}</p></article>)}</div></div></section><section className="solution-process"><div className="container"><span className="tiny-label">CAMINHO DE TRABALHO</span><ol>{solution.steps.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}</ol><p>O escopo e a sequência são alinhados antes da contratação.</p></div></section><Plans solution={solution} /><FAQ items={solution.faqs} /><section className="related-solutions"><div className="container"><span className="tiny-label">OUTRAS CONEXÕES</span><div>{solutions.filter((item) => item.slug !== solution.slug && item.category === solution.category).slice(0, 3).map((item) => <Link href={`/solucoes/${item.slug}`} key={item.slug}>{item.name}<span aria-hidden="true">↗</span></Link>)}</div></div></section><CTA title={solution.mvp ? 'Vamos conversar sobre a pré-venda?' : 'Vamos conectar esta solução ao seu negócio?'} primary={solution.cta || 'Conversar com a FELIX'} primaryHref={`/contato?solucao=${solution.slug}`} /></main></SiteShell>;
}
