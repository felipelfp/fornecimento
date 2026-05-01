import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, MessageSquare, Target, PieChart, Linkedin } from 'lucide-react';
import './Tools.css';

const Tools = () => {
  const tools = [
    { name: "Google Ads", slug: "googleads" },
    { name: "Google Analytics 4", slug: "googleanalytics" },
    { name: "Google Tag Manager", slug: "googletagmanager" },
    { name: "YouTube", slug: "youtube" },
    { name: "TikTok", slug: "tiktok" },
    { name: "RD Station", slug: "rdstation", fallback: <BarChart3 /> },
    { name: "Data Studio", slug: "googledatastudio", fallback: <PieChart /> },
    { name: "Meta", slug: "meta" },
    { name: "Hotjar", slug: "hotjar" },
    { name: "LinkedIn", slug: "linkedin", fallback: <Linkedin /> },
    { name: "ManyChat", slug: "manychat", fallback: <MessageSquare /> },
    { name: "Leadster", slug: "leadster", fallback: <Target /> }
  ];

  return (
    <section className="tools-premium" id="tecnologias">
      <div className="container">
        <div className="tools-glass-container">
          <motion.div 
            className="tools-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Algumas das ferramentas que podemos implementar em seu negócio</h3>
          </motion.div>
          
          <div className="tools-grid-premium">
            {tools.map((tool, index) => (
              <motion.div 
                className="tool-card-premium" 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 0.7, scale: 1 }}
                whileHover={{ opacity: 1, y: -5, borderColor: 'var(--color-luxury-gold)' }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="tool-logo-wrapper">
                  <img 
                    src={`https://cdn.simpleicons.org/${tool.slug}/d4af37`} 
                    alt={tool.name} 
                    className="tool-logo-icon"
                    onError={(e) => { 
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="tool-fallback-icon" style={{ display: 'none' }}>
                    {tool.fallback || <Target />}
                  </div>
                </div>
                <span className="tool-name-luxury">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
