'use client';

import { useRef, useState } from 'react';
import styles from './LeadForm.module.css';

const questions = [
  { title: 'Qual é o principal objetivo do site?', options: [
    ['present', 'Apresentar meu negócio e meus serviços'],
    ['offer', 'Divulgar uma oferta ou campanha específica'],
    ['sell', 'Vender produtos pela internet'],
    ['schedule', 'Receber agendamentos ou pedidos de orçamento'],
  ] },
  { title: 'O que o visitante precisa conseguir fazer?', options: [
    ['contact', 'Conhecer o negócio e entrar em contato'],
    ['checkout', 'Escolher produtos e pagar pelo site'],
    ['booking', 'Solicitar ou marcar um horário'],
    ['quote', 'Preencher um pedido de orçamento'],
    ['unsure', 'Ainda preciso de orientação'],
  ] },
  { title: 'Quando você pretende começar?', options: [
    ['soon', 'O quanto antes'],
    ['month', 'Nos próximos 30 dias'],
    ['later', 'Entre 1 e 3 meses'],
    ['research', 'Ainda estou pesquisando'],
  ] },
];
const formats = {
  institutional: { title: 'Site institucional', description: 'Para apresentar o negócio, organizar seus serviços e facilitar o contato.' },
  landing: { title: 'Landing page', description: 'Uma página focada na sua oferta, com um caminho direto para a ação que você quer incentivar.' },
  store: { title: 'Loja virtual', description: 'Para organizar produtos e estruturar a jornada de compra. Pagamentos e integrações serão definidos no orçamento.' },
  booking: { title: 'Site com agendamento ou orçamento', description: 'Para organizar solicitações de horários ou pedidos de orçamento. As funcionalidades serão definidas com você.' },
};

function recommend(goal: string, feature: string) {
  if (feature === 'checkout') return formats.store;
  if (feature === 'booking' || feature === 'quote') return formats.booking;
  if (goal === 'sell') return formats.store;
  if (goal === 'schedule') return formats.booking;
  return goal === 'offer' ? formats.landing : formats.institutional;
}

export function LeadForm({ kind }: { kind: 'diagnostico' | 'projeto' }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(['', '', '']);
  const [preparedUrl, setPreparedUrl] = useState('');
  const heading = useRef<HTMLHeadingElement>(null);
  const result = recommend(answers[0], answers[1]);

  function goTo(next: number) {
    setStep(next);
    setPreparedUrl('');
    requestAnimationFrame(() => heading.current?.focus({ preventScroll: true }));
  }

  return (
    <div className={`lead-form ${styles.quiz}`}>
      <div className="form-head"><span>{kind === 'diagnostico' ? 'DIAGNÓSTICO' : 'SEU PROJETO'}</span><span>ETAPA {step + 1} / 4</span></div>
      <div className={styles.progress} aria-hidden="true">{[0,1,2,3].map((index) => <span key={index} className={index <= step ? styles.filled : ''} />)}</div>
      <h3 className={styles.heading} ref={heading} tabIndex={-1}>{step < 3 ? questions[step].title : 'Um formato para o seu objetivo'}</h3>
      {step < 3 ? (
        <form onSubmit={(event) => { event.preventDefault(); if (answers[step]) goTo(step + 1); }}>
          <fieldset className={styles.choices}>
            <legend className={styles.srOnly}>{questions[step].title}</legend>
            {questions[step].options.map(([value, label]) => (
              <label className={`${styles.choice} ${answers[step] === value ? styles.selected : ''}`} key={value}>
                <input type="radio" name={`question-${step}`} required value={value} checked={answers[step] === value}
                  onChange={() => setAnswers((current) => current.map((answer, index) => index === step ? value : answer))} />
                <span>{label}</span>
              </label>
            ))}
          </fieldset>
          <div className={styles.navigation}>
            {step > 0 && <button type="button" className={styles.back} onClick={() => goTo(step - 1)}>← Voltar</button>}
            <button type="submit" className="button" disabled={!answers[step]}>{step === 2 ? 'Ver indicação' : 'Continuar'} <span>→</span></button>
          </div>
        </form>
      ) : (
        <>
          <div className={styles.recommendation}><span>INDICAÇÃO INICIAL</span><h4>{result.title}</h4><p>{result.description}</p><small>Nós confirmamos o formato e o escopo na conversa. Esta indicação não é um orçamento fechado.</small></div>
          <form onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const message = [
              'Olá, quero um orçamento de site com a FELIX.',
              ...questions.map((question, index) => `${question.title} ${question.options.find(([value]) => value === answers[index])?.[1] || ''}`),
              `Indicação inicial: ${result.title}`,
              `Nome: ${data.get('name')}`,
              `WhatsApp: ${data.get('phone')}`,
              `Negócio: ${data.get('company') || 'Não informado'}`,
              `E-mail: ${data.get('email') || 'Não informado'}`,
              `Observações: ${data.get('challenge') || 'Não informadas'}`,
            ].join('\n');
            setPreparedUrl(`https://wa.me/554598554766?text=${encodeURIComponent(message)}`);
          }} onChange={() => { if (preparedUrl) setPreparedUrl(''); }}>
            <div className="form-grid">
              <label>Seu nome<input required name="name" autoComplete="name" placeholder="Como podemos chamar você?" /></label>
              <label>WhatsApp<input required name="phone" type="tel" autoComplete="tel" placeholder="DDD + número" minLength={10} /></label>
              <label>Negócio (opcional)<input name="company" autoComplete="organization" placeholder="Nome do seu negócio" /></label>
              <label>E-mail (opcional)<input name="email" type="email" autoComplete="email" placeholder="voce@exemplo.com" /></label>
              <label className="field-wide">Algo mais? (opcional)<textarea name="challenge" rows={3} placeholder="Conte o que não pode faltar no seu site." /></label>
            </div>
            {preparedUrl ? <div className={styles.ready} role="status"><p>Pedido preparado. Abra o WhatsApp e envie a mensagem para concluir sua solicitação.</p><a href={preparedUrl} target="_blank" rel="noopener noreferrer" className="button">Continuar no WhatsApp ↗</a></div>
              : <button className="button form-submit" type="submit">Preparar pedido de orçamento <span>↗</span></button>}
            <p className="form-consent">Os dados são usados para este pedido. Eles só serão enviados quando você confirmar a mensagem no WhatsApp.</p>
          </form>
          <button type="button" className={styles.back} onClick={() => goTo(0)}>← Rever minhas respostas</button>
        </>
      )}
    </div>
  );
}
