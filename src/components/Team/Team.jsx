import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';
import './Team.css';

const Team = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const expertises = [
    {
      title: "Tráfego Pago",
      desc: "Gestão e otimização de anúncios em plataformas como Google Ads e Meta Ads para atrair clientes qualificados."
    },
    {
      title: "Copywriting",
      desc: "Criação de textos persuasivos e estratégicos focados na conversão e nas vendas do seu negócio."
    },
    {
      title: "Criação de Sites e Landing Pages",
      desc: "Desenvolvimento de páginas profissionais de alta conversão, rápidas e totalmente responsivas."
    },
    {
      title: "SEO",
      desc: "Otimização para mecanismos de busca para posicionar sua empresa no topo dos resultados do Google de forma orgânica."
    },
    {
      title: "Integração de Sistemas e CRM",
      desc: "Conexão de ferramentas e CRMs para unificar seus dados e melhorar a produtividade da equipe."
    },
    {
      title: "Automações",
      desc: "Criação de fluxos automáticos para otimizar processos, atendimento e o relacionamento com o cliente."
    },
    {
      title: "Desenvolvimento de Estratégia Digital",
      desc: "Planejamento completo de presença online para direcionar o crescimento sustentável da marca."
    },
    {
      title: "Social Media",
      desc: "Gestão profissional das suas redes sociais para engajar seu público e construir autoridade no mercado."
    }
  ];

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="team-expertise-luxury" id="time">
      <div className="container">
        <motion.h2 
          className="section-title-premium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tenha um time completo a disposição da sua empresa
        </motion.h2>
        
        <div className="expertise-list-luxury">
          {expertises.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                className={`expertise-item-premium ${isOpen ? 'active' : ''}`} 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => toggleOpen(index)}
              >
                <div className="expertise-content-box">
                  {isOpen ? (
                    <ChevronDown className="expertise-icon-gold" size={24} />
                  ) : (
                    <ChevronRight className="expertise-icon-gold" size={24} />
                  )}
                  <span className="expertise-text-premium">{item.title}</span>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      className="expertise-desc-premium"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{item.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="expertise-divider-premium"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
