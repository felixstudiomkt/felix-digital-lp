import test from 'node:test';
import assert from 'node:assert/strict';
import { validateLead, type LeadEntrada } from '../app/lib/lead-validation';
import { offers, solutions, plansFor } from '../app/lib/solutions';

const lead: LeadEntrada = { nome: 'Teste local', telefone: '45999999999', email: '', negocio: '', origem: 'projeto', objetivo: 'unsure', funcionalidade: 'unsure', prazo: 'research', indicacao: 'Orientação', observacoes: '', isca: '', consentimento: true };
test('rejects missing consent, honeypot and invalid personal fields', () => {
  for (const invalid of [{ consentimento: false }, { isca: 'spam' }, { nome: '  ' }, { telefone: '123' }, { telefone: '123456789012345678' }, { email: 'invalid' }, { origem: 'unknown' }]) assert.equal(validateLead({ ...lead, ...invalid }), null);
});
test('rejects forged solution and tier combinations', () => {
  assert.equal(validateLead({ ...lead, solucao: 'fake' }), null);
  assert.equal(validateLead({ ...lead, solucao: 'felixflow', plano: 'essencial' }), null);
  assert.equal(validateLead({ ...lead, plano: 'growth' }), null);
});
test('server derives selected solution and plan instead of trusting a client label', () => {
  const valid = validateLead({ ...lead, solucao: 'felixflow', plano: 'team', indicacao: 'Forged description' });
  assert.equal(valid?.indicacao, 'FelixFlow / team');
  assert.equal(valid?.objetivo, 'management');
});
test('all thirty confirmed offer combinations survive contact validation', () => {
  assert.equal(solutions.length, 10);
  assert.equal(offers.length, 30);
  for (const solution of solutions) {
    assert.equal(plansFor(solution.item).length, 3);
    for (const plan of plansFor(solution.item)) assert.ok(validateLead({ ...lead, solucao: solution.slug, plano: plan.faixa }));
  }
});
test('trims and bounds input without silently accepting invalid e-mail', () => {
  const result = validateLead({ ...lead, nome: '  Nome  ', observacoes: 'x'.repeat(2500), negocio: 'x'.repeat(200) });
  assert.equal(result?.nome, 'Nome');
  assert.equal(result?.observacoes?.length, 2000);
  assert.equal(result?.negocio?.length, 160);
});
