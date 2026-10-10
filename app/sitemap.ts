import type { MetadataRoute } from 'next';
import { SITE_URL, solutions } from './lib/solutions';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/solucoes', '/projetos', '/contato', '/privacidade', '/condicoes', ...solutions.map((item) => `/solucoes/${item.slug}`)].map((path) => ({ url: `${SITE_URL}${path === '/' ? '' : path}`, changeFrequency: 'monthly', priority: path === '/' ? 1 : path.startsWith('/solucoes') ? 0.8 : 0.5 }));
}
