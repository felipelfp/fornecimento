import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import './Results.css';

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract number and suffix (+, ,)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const hasComma = value.includes(',');
  const hasPlus = value.startsWith('+');

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue]);

  const displayValue = useTransform(springValue, (latest) => {
    const rounded = Math.floor(latest);
    let formatted = rounded.toLocaleString('en-US'); // Use US for comma separation
    if (hasComma) formatted = formatted.replace(/,/g, ',');
    return hasPlus ? `+${formatted}` : formatted;
  });

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const Results = () => {
  const stats = [
    { num: "+45,000", lab: "REAIS EM ANÚNCIOS GERENCIADOS MENSALMENTE" },
    { num: "+2,000,000", lab: "EM VGV NOS ÚLTIMOS 4 MESES" },
    { num: "+37", lab: "NOVAS ESTRATÉGIAS IMPLEMENTADAS TODO MÊS" }
  ];

  return (
    <section className="results-proven-luxury" id="resultados">
      <div className="container">
        <motion.div 
          className="results-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Resultados <span className="text-glow-red">não acontecem por acaso</span></h2>
        </motion.div>
        
        <div className="results-stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              className="stat-box-gold-border" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <span className="stat-number-premium">
                <AnimatedNumber value={stat.num} />
              </span>
              <p className="stat-label-premium">{stat.lab}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
