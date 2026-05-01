import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  PenTool, 
  Search, 
  Layout, 
  Cpu, 
  Share2 
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Tráfego Pago Elite",
      description: "Artesania em Google, Meta e LinkedIn Ads para atingir o topo da pirâmide de consumo.",
      icon: <BarChart3 size={24} />
    },
    {
      title: "Copywriting de Luxo",
      description: "Narrativas persuasivas que constroem desejo e elevam o valor percebido da sua marca.",
      icon: <PenTool size={24} />
    },
    {
      title: "Estratégia SEO 360",
      description: "Domínio orgânico com foco em termos de alta intenção e autoridade de domínio.",
      icon: <Search size={24} />
    },
    {
      title: "Digital Assets",
      description: "Ecossistemas digitais de alta performance: Landing Pages e White Labels de luxo.",
      icon: <Layout size={24} />
    },
    {
      title: "AI Integration",
      description: "Automações inteligentes que humanizam o atendimento e otimizam a conversão.",
      icon: <Cpu size={24} />
    },
    {
      title: "Brand Authority",
      description: "Posicionamento estratégico para transformar sua marca em uma referência inquestionável.",
      icon: <Share2 size={24} />
    }
  ];

  return (
    <section className="services-premium" id="servicos">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">EXPERTISES</span>
          <h2 className="section-title">Nossa <span className="luxury-text-gradient">Maestria</span> Digital</h2>
        </motion.div>
        
        <div className="services-grid-luxury">
          {services.map((service, index) => (
            <motion.div 
              className="service-item-luxury" 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="service-icon-luxury">{service.icon}</div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
