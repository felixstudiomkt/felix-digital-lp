---
name: FELIX — site institucional
description: Identidade editorial restaurada da landing aprovada e estendida ao site institucional.
colors:
  blue: "#4f74ff"
  blue-deep: "#3355ca"
  lime: "#b8ff4d"
  lime-hover: "#c9ff7b"
  ink: "#090a0c"
  graphite: "#14161a"
  cloud: "#f5f7fa"
  paper: "#ecebe6"
  muted: "#adb4c0"
  paper-text: "#50555f"
  line: "#343840"
  paper-line: "#c9ccd0"
  field-line: "#636b78"
  plan-surface: "#171e31"
typography:
  wordmark:
    fontFamily: "Nasalization, Geist, sans-serif"
    fontSize: "27px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: ".02em"
  display:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(76px, 8.1vw, 118px)"
    fontWeight: 600
    lineHeight: 0.78
    letterSpacing: "-.072em"
  headline:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(40px, 5.2vw, 76px)"
    fontWeight: 500
    lineHeight: 0.97
    letterSpacing: "-.04em"
  body:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.7
  button:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  field: "2px"
  header-action: "6px"
  pill: "999px"
spacing:
  gap-small: "22px"
  gap-action: "28px"
  section: "108px"
  section-tablet: "80px"
  section-mobile: "75px"
components:
  button-primary:
    backgroundColor: "{colors.cloud}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "13px 23px"
  button-primary-hover:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.cloud}"
    rounded: "{rounded.pill}"
    padding: "13px 23px"
  button-header:
    backgroundColor: "{colors.blue}"
    textColor: "white"
    rounded: "{rounded.header-action}"
    padding: "9px 17px"
  button-header-hover:
    backgroundColor: "{colors.blue-deep}"
    textColor: "white"
  field:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cloud}"
    rounded: "{rounded.field}"
    padding: "12px 13px"
  plan-recommended:
    backgroundColor: "{colors.plan-surface}"
    textColor: "{colors.cloud}"
    padding: "27px 27px 32px"
---

# Design System: FELIX

## Overview

**Creative North Star: "Identidade editorial FELIX restaurada"**

A identidade existente na landing do commit `c85ed64` é a referência confirmada pelo usuário. Este documento descreve sua restauração e extensão no código institucional atual: contraste entre superfícies pretas e papel, títulos grandes, marca tipográfica própria, azul e verde-lima.

A composição exata da primeira dobra pertence à home, não a todas as páginas. As demais rotas aplicam a mesma linguagem aos conteúdos institucionais, soluções, comparação de planos, projetos e contato já aprovados. Documentação extraída do código em 10/10/2026; não representa aprovação visual ou publicação.

**Key Characteristics:**

- Preto e papel organizam as áreas editoriais.
- Azul marca o cabeçalho e a área do fundador; lima destaca palavras e estados.
- Nasalization identifica a marca, Geist estrutura os títulos e Inter sustenta a leitura.
- Listas abertas e divisórias organizam soluções e processo.
- Fotografias e capturas dos projetos existentes documentam o trabalho real.

## Colors

### Primary

O azul é usado no botão do cabeçalho e como campo da seção do fundador. Seu tom profundo atende estados e destaques sobre papel.

### Secondary

O lima marca a palavra em itálico da home, links, indicadores e estados de interação. A variante clara permanece no código base, embora o hover do botão restaurado use o lima principal.

### Neutral

Ink sustenta as páginas; graphite sustenta formulário e rodapé. Cloud atende textos claros e botões. Paper distingue empresa, processo e resultados das soluções. Muted acompanha textos secundários em superfícies escuras; paper-text atende leitura secundária sobre papel. As linhas têm variantes para superfícies claras, escuras e campos.

**The Contraste de Superfícies Rule.** Atribuir texto pela superfície: cloud sobre ink; ink e paper-text sobre paper; ink nos parágrafos, legendas e link do fundador sobre blue.

## Typography

Nasalization é reservada ao wordmark. Geist e Inter são fontes locais, carregadas com `font-display: swap`.

A home combina display Geist com uma palavra Inter em itálico, peso regular e tamanho relativo (`.9em`). Títulos de seção usam headline; páginas internas e soluções têm ajustes próprios. Não existe uma razão única entre todos os tamanhos.

**The Papéis Tipográficos Rule.** Preservar Nasalization na marca, Geist nos títulos e controles e Inter no corpo; o itálico da home é uma assinatura daquela composição.

## Layout

O contêiner final tem largura máxima de 1280px, com 24px por lateral no desktop e 20px por lateral abaixo de 800px. O cabeçalho é fixo e tem 65px de altura. Os espaçamentos de seção estão no frontmatter; páginas de solução, introduções e CTA usam ajustes específicos.

As soluções são linhas abertas com título e lista lado a lado; o catálogo usa ícone, texto e preço em três colunas. O processo é sequencial em linhas, com número, título e descrição. Projetos ficam em duas colunas no desktop e uma no celular. Os planos comparam três faixas e empilham abaixo de 800px.

A home preserva três linhas: “SITES QUE”, “transformam”, “INTERESSE EM CONTATO.”. A segunda linha se desloca por `clamp(72px,14vw,210px)` no desktop. Descrição e ações ficam abaixo de uma divisória. Abaixo de 760px, o deslocamento desaparece, a última linha pode quebrar e as ações ocupam a largura disponível.

As legendas institucionais seguem os títulos. Nas soluções, o título vem antes da legenda; o aviso funcional de MVP mantém sua posição própria. Não promover essa composição da home a regra para páginas internas.

## Elevation & Depth

A linguagem restaurada é plana: os botões e o plano recomendado não usam sombra. O plano ganha destaque por fundo tonal e borda azul superior. O cabeçalho usa fundo translúcido e desfoque de 12px. Divisórias, alternância de superfícies e imagens constroem profundidade.

A entrada do título usa 0.8s com `cubic-bezier(.16,1,.3,1)`, deslocamento inicial de 18px e recorte. Imagens de projeto ampliam para 1.025 no hover, em 0.45s. A preferência por movimento reduzido desativa animações e transições.

## Shapes

Botões principais têm forma de cápsula. O botão azul do cabeçalho tem cantos moderadamente arredondados; campos têm curva mínima. Listas e painéis usam arestas retas, bordas finas e linhas horizontais. O marcador dos projetos é circular. A forma do radar é específica ao diagrama identificado.

## Components

### Buttons

A ação principal é clara sobre fundo escuro e muda para lima no hover. A variante secundária é transparente com borda de field-line e texto cloud; no hover torna-se clara com texto ink. O botão do cabeçalho mantém azul e branco. O CTA final usa a mesma ação clara da home.

O foco visível usa contorno lima de 2px com afastamento de 5px. O estado desabilitado reduz a opacidade para .65 e usa cursor de espera. As transições de cor, fundo e borda duram .18s.

### Navigation

Wordmark à esquerda, navegação central e ação à direita no desktop. Links usam Geist, 13px, muted; hover e rota atual ficam claros, com sublinhado lima para a rota atual. No celular, o menu abre abaixo do cabeçalho e empilha links; o controle mede 40px por lado.

### Inputs / Fields

Campos escuros com borda field-line, altura mínima de 48px e espaçamento registrado no frontmatter. O formulário ocupa graphite, tem borda line e padding de 35px no desktop; no celular usa 25px por 20px. A grade passa de duas colunas para uma, e os campos usam 16px no celular. Checkbox de consentimento preserva aparência nativa.

### Lists / Containers

Soluções e catálogo são listas abertas com divisórias, não uma grade de cartões. Planos mantêm painéis comparáveis com limites e preços existentes. Tags de projeto são pequenas etiquetas contornadas, sem preenchimento de destaque.

### Project Images

Imagens reais dos projetos usam proporção 1.4 e recorte alinhado ao topo. O link externo tem marcador circular claro no canto inferior. Diagramas de solução continuam identificados como diagramas.

## Do's and Don'ts

### Do:

- **Do** preservar o contraste entre preto, azul, lima e papel.
- **Do** manter os papéis das três fontes locais.
- **Do** preservar a composição confirmada da primeira dobra da home.
- **Do** manter comparação de planos, limites e fluxo de contato aprovados.
- **Do** respeitar foco visível e preferência por movimento reduzido.

### Don't:

- **Don't** substituir a identidade restaurada por uma nova direção visual.
- **Don't** inventar métricas, depoimentos, fotografias do fundador ou interfaces de produto.
- **Don't** tratar diagramas como capturas reais de produtos.
- **Don't** criar rampas de cores ausentes do código.
- **Don't** afirmar aprovação visual, envio ou publicação com base neste documento.
