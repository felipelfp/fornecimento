import React, { Suspense, lazy } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import './App.css';

// Componentes abaixo do fold carregados de forma lazy (só quando necessário)
const Partners   = lazy(() => import('./components/Partners/Partners'));
const Benefits   = lazy(() => import('./components/Benefits/Benefits'));
const Services   = lazy(() => import('./components/Services/Services'));
const Tools      = lazy(() => import('./components/Tools/Tools'));
const Team       = lazy(() => import('./components/Team/Team'));
const MVP        = lazy(() => import('./components/MVP/MVP'));
const Results    = lazy(() => import('./components/Results/Results'));
const Objectives = lazy(() => import('./components/Objectives/Objectives'));
const Value      = lazy(() => import('./components/Value/Value'));
const Footer     = lazy(() => import('./components/Footer/Footer'));

function App() {
  return (
    <div className="app-container-luxury">
      {/* Header e Hero carregam imediatamente (acima do fold) */}
      <Header />
      <Hero />

      {/* Resto da página carrega de forma lazy */}
      <Suspense fallback={null}>
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
      </Suspense>

      {/* Chat sempre disponível */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
