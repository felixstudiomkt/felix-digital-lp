import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLink, CTA, Eyebrow, ImagePlaceholder, SiteShell } from '../components';
import { pages, type PageBlock } from '../site-data';

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  return page ? { title: page.title, description: page.description, openGraph: { title: page.title, description: page.description } } : {};
}

function Block({ block, index }: { block: PageBlock; index: number }) {
  const content = (
    <>
      <div className="section-intro">
        {block.eyebrow && <Eyebrow flow={block.accent === 'lime'}>{block.eyebrow}</Eyebrow>}
        <h2>{block.title}</h2>
        {block.body && <p>{block.body}</p>}
      </div>
      {block.items && (
        <div className={`content-grid ${block.layout ?? 'cards'}`}>
          {block.items.map((item, itemIndex) => (
            <article className="content-card" key={item.title}>
              {block.layout === 'projects' && <ImagePlaceholder label={`PROJETO REAL / ${item.title.toUpperCase()}`} ratio="16:10" index={String(itemIndex + 2).padStart(2, '0')} className="project-image-slot" />}
              {item.tag && <span className="demo-tag">{item.tag}</span>}
              <div className={block.layout === 'projects' ? 'project-card-copy' : ''}>
                <span className="card-index">{String(itemIndex + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                {item.body && <p>{item.body}</p>}
                {block.layout === 'projects' && <ArrowLink href="/contato">Ver aplicação</ArrowLink>}
              </div>
            </article>
          ))}
        </div>
      )}
      {block.list && (
        <div className="signal-list">
          {block.list.map((item, itemIndex) => <span key={item}><i>{String(itemIndex + 1).padStart(2, '0')}</i>{item}<b>↗</b></span>)}
        </div>
      )}
    </>
  );

  return <section className={`content-section ${index % 2 ? 'section-surface' : ''} ${block.accent === 'lime' ? 'section-flow' : ''}`}><div className="container">{content}</div></section>;
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  const flow = slug === 'felixflow';

  return (
    <SiteShell>
      <main className="internal-editorial">
        <section className={`page-hero editorial-page-hero ${flow ? 'flow-hero' : ''}`}>
          <div className="container page-hero-grid">
            <div>
              <Eyebrow flow={flow}>{page.eyebrow}</Eyebrow>
              <h1>{page.headline}</h1>
              <p className="hero-lead">{page.lead}</p>
              <div className="hero-actions">
                <Link className={`button ${flow ? 'button-flow' : ''}`} href="/contato">{page.primary}<span>↗</span></Link>
                {page.secondary && <Link className="button button-ghost" href="/diagnostico">{page.secondary}</Link>}
              </div>
            </div>
            <ImagePlaceholder label={slug === 'sobre' ? 'RETRATO REAL / MATHEUS FELIX' : flow ? 'SCREENSHOT REAL / FELIXFLOW' : `IMAGEM REAL / ${page.eyebrow}`} ratio={slug === 'sobre' ? '4:5' : '16:10 DESKTOP · 4:5 MOBILE'} index="01" className="page-hero-image-slot" />
          </div>
          {page.metric && <div className="page-signal"><div className="container"><span><i /> FELIX / ESPECIALIDADE</span><b>{page.metric}</b></div></div>}
        </section>
        {page.blocks.map((block, index) => <Block block={block} index={index} key={block.title} />)}
        {page.faqs && (
          <section className="faq-section">
            <div className="container faq-grid">
              <div className="section-intro"><Eyebrow>FAQ</Eyebrow><h2>Perguntas antes do próximo passo.</h2></div>
              <div className="faq-list">
                {page.faqs.map((faq, index) => <details key={faq.q} open={index === 0}><summary>{faq.q}<span>+</span></summary><p>{faq.a}</p></details>)}
              </div>
            </div>
          </section>
        )}
        <CTA title={page.cta.title} body={page.cta.body} primary={page.cta.primary} />
      </main>
    </SiteShell>
  );
}
