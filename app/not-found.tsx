import { Button, Eyebrow, SiteShell } from './components';
export default function NotFound() {
  return <SiteShell><main id="conteudo"><section className="page-intro not-found"><div className="container"><Eyebrow>404 · Página não encontrada</Eyebrow><h1>Vamos encontrar<br /><span>o caminho certo.</span></h1><p>Este endereço não está disponível. Explore as soluções ou volte ao início.</p><div className="hero-actions"><Button href="/solucoes">Conhecer as soluções</Button><Button href="/" secondary>Voltar ao início</Button></div></div></section></main></SiteShell>;
}
