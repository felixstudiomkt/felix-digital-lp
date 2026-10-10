import { pageMetadata } from '../lib/metadata';
import { Eyebrow, SiteShell } from '../components';
import { ContactForm } from '../ContactForm';
import { EMAIL, plansFor, solutions, titleCase, whatsappUrl } from '../lib/solutions';

export const metadata = pageMetadata('Contato', 'Converse com a FELIX sobre seu negócio, escolha uma solução ou peça orientação para o próximo passo.', '/contato');
export default async function ContactPage({ searchParams }: { searchParams: Promise<{ solucao?: string; plano?: string }> }) {
  const query = await searchParams;
  const selected = typeof query.solucao === 'string' ? solutions.find((item) => item.slug === query.solucao) : undefined;
  const plan = selected && typeof query.plano === 'string' ? plansFor(selected.item).find((item) => item.faixa === query.plano) : undefined;
  const options = solutions.map((item) => ({ slug: item.slug, name: item.name, tiers: plansFor(item.item).map((tier) => ({ value: tier.faixa, label: titleCase(tier.faixa) })) }));
  return <SiteShell><main id="conteudo"><section className="page-intro contact-intro"><div className="container"><Eyebrow>Contato</Eyebrow><h1>O próximo passo<br /><span>começa com uma conversa.</span></h1><p>Você pode chegar com um projeto definido ou com uma dúvida. Começamos entendendo o seu contexto.</p></div></section><section className="section contact-section"><div className="container contact-layout"><aside className="contact-aside"><span className="tiny-label">DIRETO COM A FELIX</span><h2>Prefere conversar<br />pelo WhatsApp?</h2><p>Abra o canal e conte o que está buscando. A mensagem fica pronta para você revisar antes de enviar.</p><a className="button" href={whatsappUrl(selected ? `Olá, gostaria de conversar sobre ${selected.name}.` : undefined)} target="_blank" rel="noopener noreferrer">Abrir WhatsApp <span aria-hidden="true">↗</span></a><div className="contact-info"><span>E-MAIL</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a><span>LOCALIZAÇÃO</span><p>Cascavel, Paraná.<br />Projetos digitais para qualquer cidade.</p></div></aside><ContactForm key={`${selected?.slug || ''}-${plan?.faixa || ''}`} options={options} initialSolution={selected?.slug} initialPlan={plan?.faixa} /></div></section></main></SiteShell>;
}
