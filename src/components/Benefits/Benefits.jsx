import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp } from 'lucide-react';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      title: "Leads de Alta Conversão",
      description: "Nossa metodologia filtra o ruído e entrega decisores prontos para investir na sua solução.",
      icon: <Target size={32} strokeWidth={1.5} />
    },
    {
      title: "Previsibilidade Platinum",
      description: "Controle total sobre o seu ROAS e escala, com relatórios em tempo real e inteligência aplicada.",
      icon: <TrendingUp size={32} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="benefits-premium" id="beneficios">
      <div className="container benefits-grid">
        {benefits.map((benefit, index) => (
          <motion.div 
            className="glass-card benefit-card-luxury" 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="benefit-icon-wrapper">
              <div className="icon-glow"></div>
              <span className="benefit-icon">{benefit.icon}</span>
            </div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
