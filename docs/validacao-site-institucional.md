# Validação local — site institucional FELIX

Data: 10/10/2026. Fonte comercial: Felix Base reconferido antes da publicação, com 30 registros vigentes e sem alterações desde a consulta inicial.

## Código e conteúdo

- TypeScript: aprovado.
- ESLint: aprovado.
- Testes: 5 aprovados, incluindo consentimento, honeypot, limites, combinações inválidas e as 30 combinações válidas de solução/faixa.
- Build de produção: aprovado.
- Smoke local: 18 rotas, 30 preços e links de planos comparados com o catálogo, dois 404s reais, quatro redirecionamentos permanentes, sitemap com 16 páginas, favicon e imagem social.
- Worker, banco e binding de e-mail existentes preservados; sem migração remota necessária.

## Navegador e formulário

- Inspeção visual em 375, 768 e 1440 pixels: home, catálogo, projetos e páginas representativas de produto.
- Sem overflow horizontal nas páginas inspecionadas.
- Auditoria axe WCAG A/AA: zero violações encontradas na home, contato, catálogo, projetos, Sites para profissionais, FelixFlow e Felix Radar nos tamanhos auditados.
- Menu mobile abre e fecha; Escape fecha o menu e devolve o foco ao botão.
- Formulário bloqueia nome, telefone e consentimento ausentes.
- Solução FelixFlow e faixa Team pré-selecionadas pela URL e preservadas no pedido.
- Pedido válido registrado exclusivamente no D1 local como FelixFlow / team; nenhuma mensagem de WhatsApp enviada.
- E-mail no teste foi simulado pelo binding local do Miniflare, sem envio externo.
- Fallback ao WhatsApp verificado com falha de registro; a interface não afirma recebimento quando o registro falha.
- Erro de expressão de validação de telefone corrigido; console sem erros na versão corrigida do contato.

## Limites da verificação

Sem baseline visual aprovada para comparação automatizada. A inspeção visual foi manual; axe não substitui uma auditoria completa com leitor de tela. Nenhum pedido de teste foi enviado em produção. O repasse real ao CRM e o recebimento real da notificação por e-mail não foram exercitados.

## Proveniência

Empresa: empresa-nome, empresa-posicionamento, empresa-arquitetura-marca, empresa-publico, empresa-sede e empresa-canais.
Fundador: fundador-identidade e fundador-bio-curta.
Design: marca-duas-identidades, marca-prospero, marca-v2 e referência local CODEX-REFERENCE.md.
Ofertas: listar_ofertas e ofertas-regras-gerais.
Casos: listar_casos com so_citaveis=true; usados BC Construtora e Débora Adv, sem métricas comerciais inventadas.

Matheus foi confirmado pelo usuário como fundador. Felix Radar foi confirmado como MVP.
