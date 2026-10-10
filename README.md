# FELIX — Site institucional

Site institucional da FELIX, com home da empresa e do fundador, dez páginas de solução, trinta faixas comerciais, projetos citáveis e formulário de contato.

## Fonte do conteúdo

Conteúdo fundamentado no Felix Base, consultado e reconferido em 10/10/2026. O catálogo público utilizado está em `docs/felix-base-ofertas-publicas.json`. Não publicar valores a partir de memória ou de textos antigos: reconsultar `listar_ofertas` antes de alterar o catálogo.

Matheus Felix é apresentado como fundador. Felix Radar é MVP/pré-venda. Não há promessas numéricas de resultados nem alegações sobre agendamento integrado no FelixFlow.

## Identidade

Próspero no institucional: grafite `#14110F`, off-white `#F5F2EC`, âmbar `#E8A33D`. As áreas de produto usam os acentos azul e verde do pacote FELIX v2.0. Geist e Inter são fontes locais. Os esquemas de funcionamento são identificados como esquemas, sem simular capturas de produtos reais.

## Desenvolvimento e validação

Node 22.13 ou superior. Projeto React/Next.js executado com vinext/Vite e Cloudflare Workers.

```text
npm install
npm run dev
npm test
npx tsc --noEmit
npm run lint
npm run build
npx wrangler dev -c dist/server/wrangler.json --port 3100
node scripts/smoke-site.mjs http://localhost:3100
```

Para testar o envio do formulário somente em ambiente local, preparar o banco usado pela prévia:

```text
npx wrangler d1 execute felix-digital-lp-leads --local --config dist/server/wrangler.json --file=migrations/0001_leads.sql
```

Não enviar pedidos de teste em produção. Na prévia, o binding de e-mail é simulado localmente. O formulário registra a solução/faixa validada no servidor, usa consentimento e preserva a revisão humana antes de enviar a mensagem no WhatsApp.

## Publicação

GitHub: https://github.com/felixstudiomkt/felix-digital-site-institucional

Domínio: https://felixdigital.online

O Worker continua se chamando `felix-digital-lp` para preservar o domínio e as integrações existentes. O banco `felix-digital-lp-leads` e o binding EMAIL são mantidos. A mudança institucional não exige migração remota.

```text
npm run build
npx wrangler deploy -c dist/server/wrangler.json
node scripts/smoke-site.mjs https://felixdigital.online
```

Parar a prévia antes de gerar outro build no Windows, pois ela mantém a pasta de saída aberta. Separar commit, push, deploy e verificação pública. Validar o formulário com dados de teste locais e o site publicado com leituras e navegação.

## Conteúdo e rotas

- `/`: empresa, propósito fundamentado no posicionamento, soluções e fundador.
- `/solucoes`: catálogo de dez soluções.
- `/solucoes/[slug]`: escopo, três faixas, condições e dúvidas.
- `/projetos`: BC Construtora e Débora Adv, autorizados para citação pela base.
- `/contato`: interesse e faixa podem ser pré-selecionados na URL.
- `/privacidade` e `/condicoes`: uso dos dados do formulário e condições comerciais.
- `/sitemap.xml` e `/robots.txt`: indexação.

Endereços antigos têm redirecionamento permanente. Endereços não reconhecidos retornam 404.
