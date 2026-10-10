import type { Metadata } from 'next';
import { SITE_URL } from './solutions';

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const socialTitle = `${title} | FELIX`;
  const images = [{ url: '/og.png', width: 1200, height: 630, alt: 'FELIX — Sites, sistemas e inteligência artificial.' }];
  return {
    title, description, alternates: { canonical: path },
    openGraph: { title: socialTitle, description, url: `${SITE_URL}${path}`, type: 'website', locale: 'pt_BR', siteName: 'FELIX', images },
    twitter: { card: 'summary_large_image', title: socialTitle, description, images: ['/og.png'] },
  };
}
