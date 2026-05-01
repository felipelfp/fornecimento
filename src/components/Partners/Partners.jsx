import React from 'react';
import { motion } from 'framer-motion';
import './Partners.css';

const Partners = () => {
  const partners = [
    { name: "Vanessa Fialho", logo: "https://fornecimentodigital.com/wp-content/uploads/2023/12/fial-1-768x768.png" },
    { name: "JS", logo: "https://fornecimentodigital.com/wp-content/uploads/2023/12/JS-3-768x768.png" },
    { name: "Schabatura", logo: "https://fornecimentodigital.com/wp-content/uploads/2023/12/img-scha-1-768x768.png" },
    { name: "SB DUO", logo: "https://fornecimentodigital.com/wp-content/uploads/2023/12/img-sb-1-768x768.png" },
    { name: "Jardim Champagnat", logo: "https://fornecimentodigital.com/wp-content/uploads/2023/12/img-jd-1-768x768.png" },
    { name: "BASIC", logo: "https://fornecimentodigital.com/wp-content/uploads/2023/12/img-bas-1-768x768.png" },
    { name: "Conectmaxx", logo: "https://fornecimentodigital.com/wp-content/uploads/2024/01/logo-conectmaxx-768x768.png" },
    { name: "Jessica Santos", logo: "https://fornecimentodigital.com/wp-content/uploads/2024/01/jessica-santos-768x768.png" },
    { name: "HL", logo: "https://fornecimentodigital.com/wp-content/uploads/2024/05/logo-hl-1-768x768.png" },
    { name: "Marca D'água", logo: "https://fornecimentodigital.com/wp-content/uploads/2024/05/Marca-dagua-768x768.png" },
    { name: "Carol Si", logo: "https://fornecimentodigital.com/wp-content/uploads/2024/07/logo-carol-si-768x768.png" },
    { name: "Casa Abbiati", logo: "https://fornecimentodigital.com/wp-content/uploads/2024/07/casaabia-768x768.png" },
    { name: "Zdeadek", logo: "https://fornecimentodigital.com/wp-content/uploads/2024/10/zdeadek-fd-768x768.png" },
    { name: "Baranhuk", logo: "https://fornecimentodigital.com/wp-content/uploads/2024/10/baranhuk-fd-768x768.png" },
    { name: "Piovezam", logo: "https://fornecimentodigital.com/wp-content/uploads/2024/10/piovezam-fd-768x768.png" },
    { name: "Gibrim e Borek", logo: "https://fornecimentodigital.com/wp-content/uploads/2025/02/LOGO-GIBRIM-E-BOREK-preto-e-branco-768x768.png" },
    { name: "Rapidão Baterias", logo: "https://fornecimentodigital.com/wp-content/uploads/2025/02/rapidao-baterias-site-768x768.png" }
  ];

  return (
    <section className="partners-luxury" id="parceiros">
      <div className="container">
        <motion.h2 
          className="partners-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Participamos do processo de crescimento de <span className="luxury-text-gradient">diversas empresas</span>
        </motion.h2>
        
        <div className="partners-grid-luxury">
          {partners.map((partner, index) => (
            <motion.div 
              className="partner-logo-box" 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <img src={partner.logo} alt={partner.name} className="partner-logo-img" title={partner.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
