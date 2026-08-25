import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLink, CTA, Eyebrow, SiteShell } from '../components';
import { pages, type PageBlock } from '../site-data';

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  return page ? { title: page.title, description: page.description, openGraph: { title: page.title, description: page.description } } : {};
}

function SystemPreview({ flow = false }: { flow?: boolean }) {
  return (
    <div className={`system-preview ${flow ? 'preview-flow' : ''}`} aria-hidden="true">
      <div className="preview-bar"><span><i /> LIVE WORKSPACE</span><b>FELIX / 01</b></div>
      <div className="preview-body">
        <div className="preview-sidebar"><span /><span /><span /><span /><span /></div>
        <div className="preview-main">
          <div className="preview-kpis"><span><b>24</b><i /></span><span><b>08</b><i /></span><span><b>72%</b><i /></span></div>
          <div className="preview-chart"><span /><span /><span /><span /><span /><span /><i /></div>
          <div className="preview-rows"><span><i /><b /></span><span><i /><b /></span><span><i /><b /></span></div>
        </div>
      </div>
    </div>
  );
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
              {item.tag && <span className="demo-tag">{item.tag}</span>}
              <span className="card-index">{String(itemIndex + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              {item.body && <p>{item.body}</p>}
              {block.layout === 'projects' && <ArrowLink href="/contato">Ver aplicação</ArrowLink>}
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
      <main>
        <section className={`page-hero flow-grid ${flow ? 'flow-hero' : ''}`}>
          <div className="container page-hero-grid">
            <div>
              <Eyebrow flow={flow}>{page.eyebrow}</Eyebrow>
              <h1>{page.headline}</h1>
              <p className="hero-lead">{page.lead}</p>
              <div className="hero-actions">
                <a className={`button ${flow ? 'button-flow' : ''}`} href="/contato">{page.primary}<span>↗</span></a>
                {page.secondary && <a className="button button-ghost" href="/diagnostico">{page.secondary}</a>}
              </div>
            </div>
            <SystemPreview flow={flow} />
          </div>
          {page.metric && <div className="page-signal"><div className="container"><span><i /> SISTEMA ATIVO</span><b>{page.metric}</b></div></div>}
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
