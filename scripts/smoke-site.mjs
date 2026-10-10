import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { mkdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const origin = process.argv[2] || 'http://localhost:3100';
if (!['http://localhost:3100', 'http://127.0.0.1:3100', 'https://felixdigital.online'].includes(origin)) throw new Error('Use the local preview or official domain.');
await mkdir('outputs/tests', { recursive: true });
await build({ entryPoints: ['app/lib/solutions.ts'], outfile: 'outputs/tests/smoke-data.mjs', platform: 'node', format: 'esm', bundle: true });
const { solutions, plansFor, money } = await import(pathToFileURL(resolve('outputs/tests/smoke-data.mjs')).href);
const base = ['/', '/solucoes', '/projetos', '/contato', '/privacidade', '/condicoes', '/sitemap.xml', '/robots.txt'];
let comparedPlans = 0;
for (const path of [...base, ...solutions.map((item) => `/solucoes/${item.slug}`)]) {
  const response = await fetch(origin + path);
  const html = await response.text();
  assert.equal(response.status, 200, path);
  if (!path.endsWith('.xml') && !path.endsWith('.txt')) {
    assert.ok(html.includes('https://felixdigital.online'), `metadata ${path}`);
    assert.ok(!/120 CLIENTES|20 MINUTOS|5 anos de atuação/.test(html), `legacy claims ${path}`);
  }
  const solution = solutions.find((item) => path === `/solucoes/${item.slug}`);
  if (solution) {
    assert.equal((html.match(/class="plan(?:\s+plan-recommended)?\s*"/g) || []).length, 3, `three plans ${path}`);
    const prices = [...html.matchAll(/class="plan-price"[\s\S]*?<strong>(.*?)<\/strong>/g)].map((match) => match[1]);
    assert.deepEqual(prices, plansFor(solution.item).map((plan) => money(plan.preco)), `prices ${path}`);
    for (const plan of plansFor(solution.item)) {
      assert.ok(html.includes(`plano=${plan.faixa}`), `contact tier ${plan.id}`);
      comparedPlans++;
    }
    if (solution.mvp) assert.ok(html.includes('MVP') && html.includes('pré-venda'), 'Radar MVP');
  }
  console.log(`OK ${response.status} ${path}`);
}
for (const path of ['/endereco-inexistente', '/solucoes/oferta-inexistente']) assert.equal((await fetch(origin + path)).status, 404, path);
for (const [path, destination] of [['/sites', '/solucoes/sites-para-profissionais'], ['/felixflow', '/solucoes/felixflow'], ['/diagnostico', '/contato'], ['/sobre', '/#empresa']]) {
  const response = await fetch(origin + path, { redirect: 'manual' });
  assert.equal(response.status, 308, path);
  assert.ok(response.headers.get('location').endsWith(destination), `redirect ${path}`);
}
const sitemap = await fetch(origin + '/sitemap.xml').then((res) => res.text());
assert.equal((sitemap.match(/<loc>/g) || []).length, 16);
assert.equal((await fetch(origin + '/favicon.ico')).status, 200);
assert.equal((await fetch(origin + '/og.png')).status, 200);
console.log(`PASS: 18 routes, ${comparedPlans} plan prices and links, 2 real 404s, 4 redirects, sitemap and social assets.`);
