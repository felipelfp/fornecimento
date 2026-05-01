import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import './Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer-luxury" id="contato">
      <div className="container footer-grid">
        <motion.div 
          className="footer-brand-column"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img src={logo} alt="Logo" className="footer-logo" />
          <h2 className="brand-name luxury-text-gradient">Fornecimento Digital</h2>
          <p className="brand-philosophy">
            Elevando marcas ao patamar de autoridade inquestionável <br />
            através de performance de elite e design de grife.
          </p>
          <div className="social-group">
            <a href="#" className="social-link"><Instagram size={20} /></a>
            <a href="#" className="social-link"><Linkedin size={20} /></a>
            <a href="#" className="social-link"><Mail size={20} /></a>
          </div>
        </motion.div>
        
        <div className="footer-links-column">
          <div className="link-group">
            <h3>INSTITUCIONAL</h3>
            <ul>
              <li><a href="#inicio">A Assessoria <ArrowUpRight size={12} /></a></li>
              <li><a href="#servicos">Expertises <ArrowUpRight size={12} /></a></li>
              <li><a href="#contato">Solicitar Acesso <ArrowUpRight size={12} /></a></li>
            </ul>
          </div>
          <div className="link-group">
            <h3>CONTATO</h3>
            <ul>
              <li><a href="tel:+5500000000000">Suporte Platinum</a></li>
              <li><a href="mailto:contato@fornecimentodigital.com">E-mail Corporativo</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container bottom-content">
          <p className="copyright">
            © 2026 Covii.soft • Todos os direitos reservados
          </p>
          <div className="designer-tag">
            <span>EXCELLENCE BY DESIGN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
