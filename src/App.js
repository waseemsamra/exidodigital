import React from 'react';
import './styles/global.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-background text-on-surface font-body selection:bg-primary/30 selection:text-primary-fixed">
      <NavBar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
