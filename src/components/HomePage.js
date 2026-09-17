import React from 'react';
import Hero from './Hero';
import TrustedBy from './TrustedBy';
import EnterpriseServices from './EnterpriseServices';
import Services from './Services';
import CTA from './CTA';

function HomePage() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary/30 selection:text-primary-fixed">
      <main>
        <Hero />
        <TrustedBy />
        <EnterpriseServices />
        <Services />
        <CTA />
      </main>
    </div>
  )
}

export default HomePage;
