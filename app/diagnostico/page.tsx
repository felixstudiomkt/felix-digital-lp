import type { Metadata } from 'next';
import { Eyebrow, SiteShell } from '../components';
import { LeadForm } from '../LeadForm';

export const metadata: Metadata = {
  title: 'Diagnóstico Gratuito de Site e Presença Digital | FELIX',
  description: 'Solicite uma análise gratuita do seu site e descubra oportunidades para melhorar clareza, autoridade e conversão.',
};

export default function DiagnosticoPage() {
  const checks = [
    ['Clareza da mensagem','É possível entender rapidamente o que sua empresa faz, para quem e por que isso importa?'],
    ['Autoridade e confiança','A página apresenta elementos suficientes para reduzir insegurança?'],
    ['Caminho de conversão','Os próximos passos estão visíveis, coerentes e fáceis de executar?'],
    ['Experiência digital','O conteúdo funciona bem em diferentes telas e momentos da jornada?'],
    ['Presença digital','Site, redes e canais de contato conduzem para a mesma direção?'],
  ];
  return (
    <SiteShell><main>
      <section className="form-page flow-grid"><div className="container form-page-head"><Eyebrow>DIAGNÓSTICO GRATUITO</Eyebrow><h1>Seu site está ajudando o cliente a escolher você — ou apenas ocupando um endereço?</h1><p>Receba uma análise inicial da sua presença digital e descubra pontos que podem estar reduzindo clareza, autoridade e conversão.</p></div></section>
      <section className="content-section"><div className="container diagnosis-layout">
        <div><Eyebrow>O QUE SERÁ ANALISADO</Eyebrow><h2>Uma visão prática do que o visitante encontra.</h2><div className="check-list">{checks.map(([title,body],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></div>
        <div className="form-sticky"><LeadForm kind="diagnostico" /></div>
      </div></section>
    </main></SiteShell>
  );
}
