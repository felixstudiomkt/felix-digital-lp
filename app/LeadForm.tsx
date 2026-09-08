'use client';

import { useRef, useState } from 'react';
import { marcarWhatsappAberto, registrarLead } from './actions';
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
  const [salvando, setSalvando] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const leadId = useRef<string | null>(null);
  const result = recommend(answers[0], answers[1]);

  function goTo(next: number) {
    setStep(next);
    setPreparedUrl('');
    leadId.current = null;
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
          <form onSubmit={async (event) => {
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
            const url = `https://wa.me/554598554766?text=${encodeURIComponent(message)}`;
            setSalvando(true);
            try {
              const registro = await registrarLead({
                origem: kind,
                objetivo: answers[0],
                funcionalidade: answers[1],
                prazo: answers[2],
                indicacao: result.title,
                nome: String(data.get('name') ?? ''),
                telefone: String(data.get('phone') ?? ''),
                negocio: String(data.get('company') ?? ''),
                email: String(data.get('email') ?? ''),
                observacoes: String(data.get('challenge') ?? ''),
                isca: String(data.get('isca') ?? ''),
              });
              leadId.current = registro.id;
            } catch {
              // Falha ao registrar não pode barrar o contato: o pedido segue
              // para o WhatsApp de qualquer forma. Perder o registro é ruim;
              // perder o cliente é pior.
            } finally {
              setSalvando(false);
              setPreparedUrl(url);
            }
          }} onChange={() => { if (preparedUrl) setPreparedUrl(''); }}>
            <div className="form-grid">
              <label>Seu nome<input required name="name" autoComplete="name" placeholder="Como podemos chamar você?" /></label>
              <label>WhatsApp<input required name="phone" type="tel" autoComplete="tel" placeholder="DDD + número" minLength={10} /></label>
              <label>Negócio (opcional)<input name="company" autoComplete="organization" placeholder="Nome do seu negócio" /></label>
              <label>E-mail (opcional)<input name="email" type="email" autoComplete="email" placeholder="voce@exemplo.com" /></label>
              <label className="field-wide">Algo mais? (opcional)<textarea name="challenge" rows={3} placeholder="Conte o que não pode faltar no seu site." /></label>
            </div>
            <input type="text" name="isca" tabIndex={-1} autoComplete="off" aria-hidden="true" className={styles.honeypot} />
            {preparedUrl ? <div className={styles.ready} role="status"><p>Recebemos seu pedido. Abra o WhatsApp para falar com a gente agora.</p><a href={preparedUrl} target="_blank" rel="noopener noreferrer" className="button" onClick={() => { if (leadId.current) void marcarWhatsappAberto(leadId.current); }}>Continuar no WhatsApp ↗</a></div>
              : <button className="button form-submit" type="submit" disabled={salvando}>{salvando ? 'Enviando…' : <>Enviar pedido de orçamento <span>↗</span></>}</button>}
            <p className="form-consent">Usamos seus dados para responder a este pedido. Eles são registrados quando você envia o formulário, e você pode pedir a exclusão a qualquer momento.</p>
          </form>
          <button type="button" className={styles.back} onClick={() => goTo(0)}>← Rever minhas respostas</button>
        </>
      )}
    </div>
  );
}
