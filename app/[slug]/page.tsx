import { notFound, permanentRedirect } from 'next/navigation';

const legacy: Record<string, string> = {
  sites: '/solucoes/sites-para-profissionais',
  'sistemas-e-automacoes': '/solucoes/ia-sob-medida',
  'agentes-de-ia': '/solucoes/felixatende',
  felixflow: '/solucoes/felixflow',
  felixatende: '/solucoes/felixatende',
  'felix-radar': '/solucoes/felix-radar',
  sobre: '/#empresa',
};
export default async function LegacyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (legacy[slug]) permanentRedirect(legacy[slug]);
  notFound();
}
