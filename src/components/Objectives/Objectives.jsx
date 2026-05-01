import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle } from 'lucide-react';
import './Objectives.css';

const Objectives = () => {
  const objectiveItems = [
    "Aquisição de Leads",
    "Aumento de Vendas",
    "Reconhecimento da Marca",
    "Retenção de Público Alvo",
    "Lançamento de Marca"
  ];

  return (
    <section className="objectives-luxury-grid">
      <div className="container grid-objectives">
        <motion.div 
          className="objectives-text-col"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="objectives-title">Você pode definir seus <br/><span className="luxury-text-gradient">objetivos</span></h2>
          <div className="objective-list">
            {objectiveItems.map((item, index) => (
              <div className="obj-item-premium" key={index}>
                <Target size={18} className="obj-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="objectives-dashboard-col"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="dashboard-glass-card">
            <div className="card-header-premium">
              <h3>Esses são alguns que já <span className="text-glow-blue">batemos</span></h3>
            </div>
            <div className="dashboard-visual-placeholder">
              {/* This represents the dashboard screenshot provided by the user */}
              <div className="data-row"><span>Lead Gen</span><div className="data-bar" style={{width: '90%'}}></div></div>
              <div className="data-row"><span>ROI</span><div className="data-bar" style={{width: '75%'}}></div></div>
              <div className="data-row"><span>Sales</span><div className="data-bar" style={{width: '85%'}}></div></div>
              <div className="data-row"><span>Reach</span><div className="data-bar" style={{width: '95%'}}></div></div>
            </div>
          </div>
          <button
            type="button"
            className="btn-luxury btn-full-width"
            onClick={() => window.dispatchEvent(new CustomEvent('openFranChat'))}
          >
            QUERO ME CADASTRAR
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Objectives;
