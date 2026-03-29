import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Hero from './Hero';
import TrustedBy from './TrustedBy';
import Services from './Services';
import CTA from './CTA';

function HomePage() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary/30 selection:text-primary-fixed">
      <NavBar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage;
