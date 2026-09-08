import type { Metadata } from 'next';
import './globals.css';

const siteOrigin = process.env.SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: 'FELIX | Sites que fazem sentido para o seu negócio',
  description: 'Sites institucionais, landing pages, lojas virtuais e sites com agendamento ou orçamento para profissionais, empresas locais e prestadores de serviços.',
  openGraph: {
    title: 'FELIX | Sites que fazem sentido para o seu negócio',
    description: 'Sites, landing pages e lojas virtuais para transformar presença digital em oportunidades.',
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
