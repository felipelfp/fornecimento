import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import './Hero.css';
import luxuryBg from '../../assets/luxury-bg.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const features = [
    "Tráfego Pago Elite",
    "Estratégias de Escala",
    "Automação com IA",
    "Criação de Ativos Digitais"
  ];

  return (
    <section className="hero-premium" id="inicio">
      <div className="hero-bg-overlay">
        <img src={luxuryBg} alt="" className="bg-image" />
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
            
            <form
              className="luxury-inputs"
              action="https://formsubmit.co/felipe008lucas@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="Nova solicitação de consultoria - Fornecimento Digital" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="input-box">
                <input type="text" name="nome" required />
                <label>Nome Completo</label>
              </div>
              <div className="input-box">
                <input type="text" name="empresa" required />
                <label>Empresa</label>
              </div>
              <div className="input-box">
                <input type="tel" name="whatsapp" required />
                <label>WhatsApp</label>
              </div>

              <button type="submit" className="btn-luxury">
                INICIAR CONSULTORIA
                <div className="btn-flare"></div>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
