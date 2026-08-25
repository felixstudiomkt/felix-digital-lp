'use client';

import { useState } from 'react';

export function LeadForm({ kind }: { kind: 'diagnostico' | 'projeto' }) {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <div className="form-success" role="status">
        <span className="success-mark">✓</span>
        <p className="eyebrow eyebrow-flow"><i /> RECEBIDO</p>
        <h2>{kind === 'diagnostico' ? 'Solicitação recebida.' : 'Projeto recebido.'}</h2>
        <p>Obrigado por compartilhar o contexto. A FELIX vai analisar as informações e entrar em contato pelo canal informado.</p>
        <a className="button" href="/">Voltar para o início</a>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
      <div className="form-head"><span>FORM / {kind === 'diagnostico' ? 'DIAGNÓSTICO' : 'NOVO PROJETO'}</span><span className="live"><i /> CANAL ATIVO</span></div>
      <div className="form-grid">
        <label>Nome<input required name="name" placeholder="Como podemos chamar você?" /></label>
        <label>Empresa<input required name="company" placeholder="Nome da sua empresa" /></label>
        <label>WhatsApp<input required name="phone" inputMode="tel" placeholder="(00) 00000-0000" /></label>
        <label>E-mail<input required name="email" type="email" placeholder="voce@empresa.com" /></label>
        <label className="field-wide">Site ou perfil atual<input name="site" type="url" placeholder="https://" /></label>
        {kind === 'projeto' && (
          <>
            <label>Solução procurada<select required name="solution" defaultValue=""><option value="" disabled>Selecione uma solução</option><option>Site ou landing page</option><option>Sistema personalizado</option><option>Automação</option><option>Agente de IA</option><option>FelixFlow</option><option>Ainda não sei</option></select></label>
            <label>Quando começar?<select required name="timeline" defaultValue=""><option value="" disabled>Selecione um prazo</option><option>O quanto antes</option><option>Nos próximos 30 dias</option><option>Entre 1 e 3 meses</option><option>Ainda estou pesquisando</option></select></label>
          </>
        )}
        <label className="field-wide">{kind === 'diagnostico' ? 'Principal objetivo da sua presença digital' : 'Principal desafio hoje'}<textarea required name="challenge" rows={5} placeholder="Conte brevemente o que acontece e o que gostaria de melhorar." /></label>
      </div>
      <button className="button form-submit" type="submit">{kind === 'diagnostico' ? 'Solicitar diagnóstico gratuito' : 'Enviar projeto'}<span>↗</span></button>
      <p className="form-consent">Ao enviar, você autoriza a FELIX a entrar em contato sobre esta solicitação. Seus dados não serão utilizados para mensagens sem relação com este pedido.</p>
    </form>
  );
}
