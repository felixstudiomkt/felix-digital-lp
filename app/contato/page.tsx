import type { Metadata } from 'next';
import { Eyebrow, SiteShell } from '../components';
import { LeadForm } from '../LeadForm';

export const metadata: Metadata = {
  title: 'Inicie um Projeto com a FELIX | Contato',
  description: 'Conte o desafio da sua empresa e fale com a FELIX sobre sites, sistemas, automações, agentes de IA ou FelixFlow.',
};

export default function ContatoPage() {
  return (
    <SiteShell><main className="form-editorial">
      <section className="form-page"><div className="container form-page-head"><Eyebrow>INICIAR PROJETO</Eyebrow><h1>Conte o que precisa <em>funcionar melhor.</em></h1><p>Pode ser um site que não converte, um processo preso em planilhas, um atendimento lento ou uma operação difícil de acompanhar. Começamos entendendo o cenário.</p></div></section>
      <section className="content-section"><div className="container project-form-grid">
        <div className="project-aside"><Eyebrow>O PRÓXIMO PASSO</Eyebrow><h2>Vamos entender seu projeto.</h2><p>Não é preciso chegar com a solução pronta. Descreva o que acontece hoje e o que deveria funcionar melhor.</p><div className="mini-flow"><span><i>01</i>CONTEXTO</span><b /><span><i>02</i>DIAGNÓSTICO</span><b /><span><i>03</i>PRÓXIMO FLUXO</span></div></div>
        <LeadForm kind="projeto" />
      </div></section>
    </main></SiteShell>
  );
}
