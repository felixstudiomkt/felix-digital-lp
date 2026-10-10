# Identidade visual restaurada

Registro documental de 10/10/2026, derivado de `app/globals.css`, `app/page.tsx`, `app/components.tsx` e do código institucional existente. Referência indicada pelo usuário: landing do commit `c85ed64`. A documentação canônica está em `DESIGN.md`; extensões e amostras autossuficientes estão em `.impeccable/design.json` (schemaVersion 2).

## Escopo confirmado

A restauração recupera preto, azul, lima, áreas papel e as fontes locais Nasalization, Geist e Inter. Conserva conteúdo institucional, 30 preços, condições, limites, estágio MVP e fluxo de contato existentes. Não acrescenta fatos comerciais.

A primeira dobra da home mantém três linhas: **SITES QUE / transformam / INTERESSE EM CONTATO.** A segunda linha é Inter itálico, lima e deslocada no desktop. A descrição e as ações ficam abaixo da linha divisória; no celular as ações ocupam a largura disponível.

## Estado registrado no código

- Cabeçalho fixo de 65px, wordmark Nasalization e botão de contato azul.
- Home preta, ação principal clara e título editorial Geist com assinatura Inter.
- Soluções em listas abertas; catálogo em linhas com preços.
- Áreas papel para empresa, processo e resultados; fundador em azul com corpo, legendas e link em ink.
- CTA final preto com botão claro.
- Projetos com imagens existentes e diagramas de solução identificados.
- Legendas institucionais após títulos; soluções com legenda após h1.
- Foco visível e tratamento de movimento reduzido preservados.

## Limite da evidência

Este registro é uma extração do código. A inspeção visual e os testes de execução são responsabilidade do agente principal e devem constar no seu relato final. Não foi feita aqui inspeção em navegador; não se afirma aprovação visual, commit, push ou publicação.

## O que não foi canonizado

Não foram criadas rampas tonais: o código não define uma escala desse tipo e a tarefa proíbe valores inventados. Os textos de contexto e pequenos rótulos já presentes permanecem como conteúdo desta superfície, sem virar uma receita de novos kickers. As setas em caracteres e os indicadores específicos dos diagramas não foram promovidos a sistema geral de ícones. Declarações anteriores sobrepostas no CSS são histórico de implementação, não fonte para novos tokens quando a cascata final as substitui.

## Publicação verificada — 10/10/2026

- Código: `47f3c9733b8bb1ba26c49296a73154f351d1ffcb`, enviado para `origin/main`.
- Worker: `felix-digital-lp`; versão `acae0f7f-0be4-49a5-95de-b95099dd4327`.
- Endereço: https://felixdigital.online/
- Build, TypeScript, lint e cinco testes de validação de contato aprovados.
- Verificação publicada: 18 rotas, 30 preços/links de faixas, duas páginas 404, quatro redirecionamentos, sitemap e assets sociais aprovados.
- Capturas inline locais em desktop/mobile e captura publicada da home em 1440px confirmaram a composição recuperada. A revisão independente confirmou correções de código; não houve aprovação visual independente, pois o navegador era exclusivo da sessão principal e não permitiu gravar as capturas no workspace.
- Axe inicial: contato e FelixFlow sem violações encontradas; contraste do texto pequeno na área do fundador corrigido. A rodada ampliada foi interrompida por demora no navegador; não se afirma conformidade integral de acessibilidade.
- Não foram enviados formulários de teste na produção nem alterados dados de clientes.
- Atualização da Impeccable para v4.5.2 autorizada pelo usuário para uma próxima sessão; esta execução usou v4.5.0.
