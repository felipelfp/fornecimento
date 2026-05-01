import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, ChevronRight } from 'lucide-react';
import './WhatsAppButton.css';

const WHATSAPP_NUMBER = '5500000000000'; // ← substitua pelo número real
const FORMSUBMIT_EMAIL = 'felipe008lucas@gmail.com';

const steps = [
  { field: 'name',    label: 'Qual é o seu nome?',                             placeholder: 'Ex: João Silva',       type: 'text'     },
  { field: 'phone',   label: 'Qual é o seu WhatsApp?',                         placeholder: 'Ex: (41) 99999-9999',  type: 'tel'      },
  { field: 'email',   label: 'E o seu e-mail?',                                placeholder: 'Ex: joao@email.com',   type: 'email'    },
  { field: 'doubt',   label: 'Como podemos te ajudar? Qual é a sua dúvida?',   placeholder: 'Descreva brevemente...', type: 'textarea' },
];

const WhatsAppButton = () => {
  const [open, setOpen]         = useState(false);
  const [step, setStep]         = useState(0);
  const [form, setForm]         = useState({ name: '', phone: '', email: '', doubt: '' });
  const [inputVal, setInputVal] = useState('');
  const [sent, setSent]         = useState(false);

  // Escuta o evento global para abrir o chat de qualquer botão da página
  useEffect(() => {
    const handleOpen = () => { setOpen(true); };
    window.addEventListener('openFranChat', handleOpen);
    return () => window.removeEventListener('openFranChat', handleOpen);
  }, []);

  const current = steps[step];

  const submitToFormSubmit = async (data) => {
    try {
      await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: 'Nova solicitação via chat - Fornecimento Digital',
          Nome: data.name,
          WhatsApp: data.phone,
          Email: data.email,
          Dúvida: data.doubt,
        }),
      });
    } catch (_) {
      // falha silenciosa — o WhatsApp ainda funciona
    }
  };

  const handleNext = () => {
    if (!inputVal.trim()) return;
    const updated = { ...form, [current.field]: inputVal.trim() };
    setForm(updated);
    setInputVal('');

    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      // Envia para FormSubmit e mostra tela de sucesso
      submitToFormSubmit(updated);
      setSent(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && current.type !== 'textarea') handleNext();
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setStep(0);
      setForm({ name: '', phone: '', email: '', doubt: '' });
      setInputVal('');
      setSent(false);
    }, 400);
  };

  return (
    <>
      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="vip-chat-panel"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="vip-chat-header">
              <div className="vip-chat-header-left">
                <div className="vip-chat-avatar">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <p className="vip-chat-name">FRAN</p>
                  <p className="vip-chat-online">● Online agora</p>
                </div>
              </div>
              <button className="vip-chat-close" onClick={handleClose}><X size={18} /></button>
            </div>

            {/* Body */}
            <div className="vip-chat-body">
              {!sent ? (
                <>
                  {/* Progress dots */}
                  <div className="vip-chat-progress">
                    {steps.map((_, i) => (
                      <div key={i} className={`vip-dot ${i <= step ? 'active' : ''}`} />
                    ))}
                  </div>

                  {/* Bot message bubble */}
                  <motion.div
                    key={step}
                    className="vip-chat-bubble bot"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step === 0 && (
                      <p>👋 Olá! Sou a <strong>Fran</strong>, assistente da <strong>Fornecimento Digital</strong>.<br />Preencha algumas informações e entraremos em contato via WhatsApp.</p>
                    )}
                    <p>{current.label}</p>
                  </motion.div>

                  {/* Input */}
                  <div className="vip-chat-input-area">
                    {current.type === 'textarea' ? (
                      <textarea
                        className="vip-chat-input"
                        placeholder={current.placeholder}
                        value={inputVal}
                        onChange={e => setInputVal(e.target.value)}
                        rows={3}
                        autoFocus
                      />
                    ) : (
                      <input
                        className="vip-chat-input"
                        type={current.type}
                        placeholder={current.placeholder}
                        value={inputVal}
                        onChange={e => setInputVal(e.target.value)}
                        onKeyDown={handleKeyDown}
                        autoFocus
                      />
                    )}
                    <button className="vip-chat-send" onClick={handleNext} disabled={!inputVal.trim()}>
                      {step < steps.length - 1 ? <ChevronRight size={20} /> : <Send size={18} />}
                    </button>
                  </div>

                  {step < steps.length - 1 && (
                    <p className="vip-chat-hint">Pressione Enter ou clique na seta para continuar</p>
                  )}
                </>
              ) : (
                <motion.div
                  className="vip-chat-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="vip-success-icon">✓</div>
                  <p className="vip-success-title">Perfeito, {form.name}!</p>
                  <p className="vip-success-msg">Recebemos suas informações! Em breve nossa equipe entrará em contato com você.</p>
                  <p className="vip-success-submsg">Prefere nos chamar agora?</p>
                  <a
                    className="vip-success-whatsapp"
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Me chamo ${form.name}.\nWhatsApp: ${form.phone}\nE-mail: ${form.email}\n\nDúvida: ${form.doubt}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                    Chamar no WhatsApp
                  </a>
                  <button className="vip-success-close" onClick={handleClose}>Fechar</button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <motion.button
        className="whatsapp-concierge"
        onClick={() => setOpen(!open)}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -5 }}
        aria-label="Abrir chat Fran"
      >
        <div className="concierge-content">
          <div className="concierge-icon">
            <MessageSquare size={24} strokeWidth={1.5} />
          </div>
          <div className="concierge-text">
            <span className="c-tag">FRAN — Concierge</span>
            <span className="c-status">ONLINE</span>
          </div>
        </div>
      </motion.button>
    </>
  );
};

export default WhatsAppButton;
