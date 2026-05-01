import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import './Hero.css';
import luxuryBg from '../../assets/luxury-bg.png';

const FORMSUBMIT_EMAIL = 'felipe008lucas@gmail.com';

const Hero = () => {
  const [formData, setFormData]   = useState({ nome: '', empresa: '', whatsapp: '' });
  const [sending, setSending]     = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]         = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const features = [
    "Tráfego Pago Elite",
    "Estratégias de Escala",
    "Automação com IA",
    "Criação de Ativos Digitais"
  ];

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!formData.nome || !formData.empresa || !formData.whatsapp) return;
    setSending(true);
    setError('');
    try {
      const data = new FormData();
      data.append('Nome', formData.nome);
      data.append('Empresa', formData.empresa);
      data.append('WhatsApp', formData.whatsapp);
      data.append('_subject', 'Nova solicitação de consultoria - Fornecimento Digital');
      data.append('_captcha', 'false');
      data.append('_template', 'table');

      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        body: data,
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Erro ao enviar. Tente novamente.');
      }
    } catch {
      setError('Erro ao enviar. Verifique sua conexão.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="hero-premium" id="inicio">
      <div className="hero-bg-overlay">
        <img src={luxuryBg} alt="" className="bg-image" loading="eager" />
        <div className="vignette"></div>
      </div>
      
      <div className="container hero-content">
        <motion.div 
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-tag-wrapper" variants={itemVariants}>
            <span className="hero-tag">MARKETING DE ALTO PADRÃO</span>
          </motion.div>
          
          <motion.h1 className="hero-title" variants={itemVariants}>
            O Próximo Nível do Seu <span className="luxury-text-gradient">Faturamento</span>.
          </motion.h1>
          
          <motion.p className="hero-description" variants={itemVariants}>
            Uma assessoria exclusiva focada em performance, autoridade e 
            escala exponencial para negócios que não aceitam o comum.
          </motion.p>
          
          <motion.ul className="hero-feature-list" variants={itemVariants}>
            {features.map((feature, i) => (
              <li key={i}>
                <Check size={18} className="feature-check" />
                {feature}
              </li>
            ))}
          </motion.ul>

          <motion.div className="hero-stats-premium" variants={itemVariants}>
            <div className="stat">
              <span className="num">+10M</span>
              <span className="lab">EM VENDAS</span>
            </div>
            <div className="stat-line"></div>
            <div className="stat">
              <span className="num">ROAS 5x</span>
              <span className="lab">MÉDIO</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-form-outer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass-card premium-form-v2">
            <div className="form-header-premium">
              <h2>SOLICITAR ACESSO</h2>
              <p>Aplique para uma análise estratégica gratuita.</p>
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <div className="luxury-inputs">
                  <div className="input-box">
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                    />
                    <label>Nome Completo</label>
                  </div>
                  <div className="input-box">
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      required
                    />
                    <label>Empresa</label>
                  </div>
                  <div className="input-box">
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                    />
                    <label>WhatsApp</label>
                  </div>

                  {error && <p className="hero-form-error">{error}</p>}

                  <button
                    type="button"
                    className="btn-luxury"
                    disabled={sending || !formData.nome || !formData.empresa || !formData.whatsapp}
                    onClick={handleSubmit}
                  >
                    {sending ? 'ENVIANDO...' : 'INICIAR CONSULTORIA'}
                    <div className="btn-flare"></div>
                  </button>
                </div>
              ) : (
                <motion.div
                  key="success"
                  className="hero-form-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="hero-success-icon">✓</div>
                  <p className="hero-success-title">Solicitação recebida!</p>
                  <p className="hero-success-msg">
                    Nossa equipe entrará em contato com você em breve via WhatsApp.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


