import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Partners from './components/Partners/Partners';
import Benefits from './components/Benefits/Benefits';
import Services from './components/Services/Services';
import Tools from './components/Tools/Tools';
import Team from './components/Team/Team';
import MVP from './components/MVP/MVP';
import Objectives from './components/Objectives/Objectives';
import Value from './components/Value/Value';
import Results from './components/Results/Results';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="app-container-luxury">
      <Header />
      <Hero />
      <Partners />
      <Benefits />
      <Services />
      <Tools />
      <Team />
      <MVP />
      <Results />
      <Objectives />
      <Value />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
