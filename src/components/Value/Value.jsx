import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target } from 'lucide-react';
import './Value.css';

const Value = () => {
  const cards = [
    {
      icon: <TrendingUp size={40} />,
      title: "Lucre Alto",
      text: "Orçamento e margem de lucro não são problemas. Seu resultado e custo máximo por venda é sempre levado em consideração com base na sua margem de lucro por venda. O que te garante previsibilidade de resultados e tranquilidade na hora de fechar as contas."
    },
    {
      icon: <Users size={40} />,
      title: "Leads Qualificados",
      text: "Você também não sofrerá mais problemas com leads desqualificados que só tomam o seu tempo e energia. É comum e muitos clientes apontam problemas na qualificação dos leads, despejando verdadeiras fortunas em campanhas que não trarão resultados."
    },
    {
      icon: <Target size={40} />,
      title: "Público Alvo",
      text: "Todas as campanhas finais são distribuídas para separar o joio do trigo, e selecionar apenas o perfil de consumidor que terá maior probabilidade de fechar uma venda no final com a sua empresa."
    }
  ];

  return (
    <section className="value-proposition-luxury" id="investimento">
      <div className="container">
        <motion.div 
          className="value-header-premium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Mas você deve estar pensando que isso irá <br/><span className="text-highlight-yellow">te custar uma fortuna. Acertei?</span></h2>
        </motion.div>
        
        <div className="value-cards-grid-luxury">
          {cards.map((card, index) => (
            <motion.div 
              className="luxury-value-card" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="value-card-icon-gold">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <div className="card-shine-effect"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Value;
