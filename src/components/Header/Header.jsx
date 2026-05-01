import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header 
        className={`header ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container header-container">
          <div className="logo-wrapper" onClick={(e) => handleScrollTo(e, 'inicio')} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="Fornecimento Digital" className="logo-main" />
          </div>

          <nav className="desktop-nav">
            <ul className="nav-links">
              <li><a href="#inicio" onClick={(e) => handleScrollTo(e, 'inicio')}>INÍCIO</a></li>
              <li><a href="#parceiros" onClick={(e) => handleScrollTo(e, 'parceiros')}>PARCEIROS</a></li>
              <li><a href="#beneficios" onClick={(e) => handleScrollTo(e, 'beneficios')}>BENEFÍCIOS</a></li>
              <li><a href="#servicos" onClick={(e) => handleScrollTo(e, 'servicos')}>SERVIÇOS</a></li>
              <li><a href="#tecnologias" onClick={(e) => handleScrollTo(e, 'tecnologias')}>TECH</a></li>
              <li><a href="#time" onClick={(e) => handleScrollTo(e, 'time')}>TIME</a></li>
              <li><a href="#metodologia" onClick={(e) => handleScrollTo(e, 'metodologia')}>MÉTODO</a></li>
              <li><a href="#resultados" onClick={(e) => handleScrollTo(e, 'resultados')}>RESULTADOS</a></li>
              <li>
                <button
                  className="cta-header-gold"
                  onClick={() => window.dispatchEvent(new CustomEvent('openFranChat'))}
                >
                  AGENDAR CONSULTORIA
                </button>
              </li>
            </ul>
          </nav>

          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ul className="mobile-links">
              <li><a href="#inicio" onClick={(e) => handleScrollTo(e, 'inicio')}>INÍCIO</a></li>
              <li><a href="#parceiros" onClick={(e) => handleScrollTo(e, 'parceiros')}>PARCEIROS</a></li>
              <li><a href="#beneficios" onClick={(e) => handleScrollTo(e, 'beneficios')}>BENEFÍCIOS</a></li>
              <li><a href="#servicos" onClick={(e) => handleScrollTo(e, 'servicos')}>SERVIÇOS</a></li>
              <li><a href="#tecnologias" onClick={(e) => handleScrollTo(e, 'tecnologias')}>TECH</a></li>
              <li><a href="#time" onClick={(e) => handleScrollTo(e, 'time')}>TIME</a></li>
              <li><a href="#metodologia" onClick={(e) => handleScrollTo(e, 'metodologia')}>MÉTODO</a></li>
              <li><a href="#resultados" onClick={(e) => handleScrollTo(e, 'resultados')}>RESULTADOS</a></li>
              <li><a href="#contato" onClick={(e) => handleScrollTo(e, 'contato')}>CONTATO</a></li>
              <li>
                <button
                  className="mobile-cta"
                  onClick={() => { setMobileMenuOpen(false); window.dispatchEvent(new CustomEvent('openFranChat')); }}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '2px' }}
                >
                  AGENDAR CONSULTORIA
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
