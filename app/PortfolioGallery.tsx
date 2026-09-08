'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './PortfolioGallery.module.css';

type PortfolioProject = { name: string; type: string; url: string; image: string };

export function PortfolioGallery({ projects }: { projects: PortfolioProject[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [galleryWidth, setGalleryWidth] = useState(0);
  const [ratios, setRatios] = useState<Record<number, number>>({});
  const gallery = useRef<HTMLDivElement>(null);
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = gallery.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => setGalleryWidth(entry.contentRect.width));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!section.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // The content stays visible even if JavaScript or the observer is unavailable.
    const animations: Animation[] = [];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animations.push(entry.target.animate(
          [{ opacity: 0, transform: 'translateY(46px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 850, easing: 'cubic-bezier(.16,1,.3,1)' },
        ));
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    section.current.querySelectorAll('[data-portfolio-reveal]').forEach((element) => observer.observe(element));
    return () => { observer.disconnect(); animations.forEach((animation) => animation.cancel()); };
  }, []);

  return (
    <section className={styles.section} id="portfolio" aria-labelledby="portfolio-title" ref={section}>
      <div className={styles.wrap}>
        <div className={styles.head} data-portfolio-reveal>
          <div className={styles.titleBlock}>
            <span className={styles.kicker}><i /> PORTFÓLIO FELIX</span>
            <h2 id="portfolio-title"><span>Sites que já</span><span>estão <em>no ar.</em></span></h2>
          </div>
          <p>Cada projeto é desenvolvido com a identidade e o objetivo do negócio. Conheça alguns dos nossos trabalhos publicados.</p>
        </div>
        <div className={styles.gallery} ref={gallery}>
          {projects.map((project, index) => {
            const active = index === activeIndex;
            return (
              <article
                key={project.url}
                className={`${styles.row} ${active ? styles.active : ''}`}
                style={active && galleryWidth ? { height: (galleryWidth - 2) / (ratios[index] || 1.6) + 2 } : undefined}
                onPointerEnter={(event) => { if (event.pointerType === 'mouse') setActiveIndex(index); }}
                data-portfolio-reveal
              >
                <img src={project.image} alt={`Página inicial do site ${project.name}`} width={1440} height={900}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  onLoad={(event) => {
                    const { naturalWidth, naturalHeight } = event.currentTarget;
                    if (naturalHeight) setRatios((current) => ({ ...current, [index]: naturalWidth / naturalHeight }));
                  }} />
                <span className={styles.overlay} aria-hidden="true" />
                <button type="button" className={styles.trigger}
                  aria-label={`Mostrar projeto ${project.name}`} aria-expanded={active}
                  aria-controls={`portfolio-caption-${index}`} onClick={() => setActiveIndex(index)}>
                  <span className={styles.tag}>{project.name}</span>
                </button>
                <div className={styles.caption} id={`portfolio-caption-${index}`} aria-hidden={!active}>
                  <h3><a href={project.url} target="_blank" rel="noopener noreferrer" tabIndex={active ? 0 : -1}
                    aria-label={`Visitar site ${project.name} (abre em nova aba)`}>{project.name}</a></h3>
                  <span>{project.type}</span>
                </div>
              </article>
            );
          })}
        </div>
        <div className={styles.cta} data-portfolio-reveal>
          <p>O seu negócio merece estar <em>aqui também.</em></p>
          <a href="#diagnostico">Solicitar meu site <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
