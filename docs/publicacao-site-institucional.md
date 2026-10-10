# Publicação verificada — institucional FELIX

Data: 10/10/2026.

- Código: 4ee82bf2af2bd0bbcfcaf2b29425ae114327c58a, commit enviado a origin/main.
- Repositório: https://github.com/felixstudiomkt/felix-digital-site-institucional
- Checkout: C:\dev\felix-digital-site-institucional
- Domínio: https://felixdigital.online
- Worker preservado: felix-digital-lp.
- Versão publicada: ad7e35d6-9b23-4d7f-8815-87564c02ec69.
- Bindings preservados: DB para felix-digital-lp-leads e EMAIL para notificação de novos pedidos.
- Nenhuma migração remota necessária ou executada.

## Verificação pública

O smoke público passou nas 18 rotas, com 30 preços e links de planos conferidos contra o catálogo. Também verificou dois 404s reais, quatro redirecionamentos permanentes, sitemap com 16 páginas, favicon e imagem social.

No navegador em produção:

- Home em 1440px: mensagem institucional, dez links de solução e biografia de Matheus como fundador renderizados; sem overflow ou erros de console.
- Felix Radar: MVP/pré-venda visível; três planos e valores R$ 297, R$ 597 e R$ 1.197 por mês, com links de interesse por faixa.
- Contato em 375px: FelixFlow e Team pré-selecionados pela URL; sem overflow ou erros de console.
- Imagem de compartilhamento: https://felixdigital.online/og.png.

Amostra única de carregamento da home no navegador usado na verificação: LCP 484ms e CLS aproximadamente 0,000011. Não é medição de campo nem garantia para outros dispositivos ou redes; INP não foi medido.

Nenhum formulário de teste foi enviado em produção. Registro e e-mail foram exercitados apenas na prévia local, com e-mail simulado pelo Miniflare. O envio de WhatsApp continua dependendo da ação do visitante.

## Pasta antiga

O Windows impediu a troca do nome da pasta raiz por mantê-la em uso pelo aplicativo. Todo o checkout, incluindo .git, arquivos ocultos, dependências e build, foi transferido para o nome solicitado. C:\dev\lp-sites-felix ficou vazia, com zero entradas; permanece aberta pelo aplicativo. Não existe uma segunda cópia do projeto nesse caminho antigo.
