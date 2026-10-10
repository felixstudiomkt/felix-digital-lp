import type { Metadata } from 'next';
import './globals.css';
import { SITE_URL } from './lib/solutions';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'FELIX | Sites, sistemas e IA para o seu negócio', template: '%s | FELIX' },
  description: 'Infraestrutura digital para empresas venderem e operarem melhor. Sites, marketing, atendimento, CRM e inteligência artificial.',
  alternates: { canonical: '/' },
  openGraph: { title: 'FELIX | Sites que vendem. Sistemas que operam. IA que escala.', description: 'Infraestrutura digital para empresas venderem e operarem melhor.', type: 'website', locale: 'pt_BR', url: SITE_URL, siteName: 'FELIX', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'FELIX — Sites, sistemas e inteligência artificial.' }] },
  twitter: { card: 'summary_large_image', images: ['/og.png'] },
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
