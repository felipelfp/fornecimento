import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Search, Database } from 'lucide-react';
import './MVP.css';

const MVP = () => {
  return (
    <section className="mvp-strategy-luxury" id="metodologia">
      <div className="container mvp-grid">
        <motion.div 
          className="mvp-text-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mvp-title">
            Imagine investir <span className="text-gold">um mês inteiro</span> de sua verba de marketing e não ter <span className="text-gold">nenhum resultado</span> ao fim do mês?
          </h2>
          
          <div className="mvp-description">
            <p>
              Isso ocorre pela falta de conexão entre a sua oferta produzida e a disponibilidade do mercado em aceitá-la naquele momento.
            </p>
            <p>
              Nós descobrimos a melhor oferta pra você, através de dados reais de mercado.
            </p>
            <p>
              Nós chamamos essa técnica de <strong className="text-gold">M.V.P. (Most Vailable Product)</strong> que na prática significa testar e descobrir com agilidade a melhor e mais viável oferta de seu produto ou serviço para aquele momento específico.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="mvp-visual-col"
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mvp-3d-card">
            <div className="mvp-card-header">
              <BarChart3 className="mvp-header-icon" />
              <span>MARKET ANALYSIS</span>
            </div>
            <div className="mvp-chart-mock">
              <div className="chart-bar" style={{height: '40%'}}></div>
              <div className="chart-bar" style={{height: '70%'}}></div>
              <div className="chart-bar" style={{height: '90%', background: 'var(--color-luxury-gold)'}}></div>
              <div className="chart-bar" style={{height: '60%'}}></div>
            </div>
            <div className="mvp-floating-elements">
              <div className="float-badge"><Search size={14} /> Real-time Data</div>
              <div className="float-badge bottom"><Database size={14} /> High Ticket</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MVP;
