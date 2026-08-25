import type { Metadata } from 'next';
import './globals.css';

const siteOrigin = process.env.SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: 'FELIX | Sites, Sistemas, Automação e IA',
  description: 'Criamos sites que convertem, sistemas que organizam e agentes de IA que aceleram vendas e atendimento. Conheça a FELIX e o FelixFlow.',
  openGraph: {
    title: 'FELIX | Sites, Sistemas, Automação e IA',
    description: 'Sites que vendem. Sistemas que operam. IA que escala.',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'FELIX — Sites que vendem. Sistemas que operam. IA que escala.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FELIX | Sites, Sistemas, Automação e IA',
    description: 'Sites que vendem. Sistemas que operam. IA que escala.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
