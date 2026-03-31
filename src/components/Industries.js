import React from 'react';

function Industries() {
  return (
    <div className="font-body text-on-surface selection:bg-primary/30 selection:text-primary bg-background">      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[716px] flex items-center overflow-hidden px-8">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10"></div>
            <img 
              alt="Vibrant abstract digital art with flowing ribbons of cyan and purple light against a deep obsidian crystalline structure background" 
              className="w-full h-full object-cover opacity-40" 
              src="/assets/images/industries-hero.png"
            />
          </div>
          <div className="relative z-20 max-w-5xl">
            <span className="inline-block py-1 px-3 mb-6 bg-secondary-container/20 text-secondary text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-secondary/20">
              Market Leadership
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] mb-8 tracking-tighter">
              Engineering <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-fixed to-secondary">Sector-Specific</span> <br/>
              Dominance
            </h1>
            <p className="text-on-surface-variant max-w-xl text-lg mb-10 leading-relaxed font-light">
              We deploy Digital Obsidian protocols to transform standard legacy infrastructure into high-frequency, precision environments. Secure. Sovereign. Scalable.
            </p>
            <div className="flex gap-4">
              <a href="/services" className="bg-primary text-on-primary px-8 py-4 rounded-lg font-headline font-bold text-sm transition-all hover:shadow-[0_0_20px_rgba(143,245,255,0.4)] inline-block">
                View Solutions
              </a>
              <a href="/contact" className="bg-surface-container-highest/60 border border-outline-variant/20 text-on-surface px-8 py-4 rounded-lg font-headline font-bold text-sm backdrop-blur-md inline-block">
                Contact Specialist
              </a>
            </div>
          </div>
        </section>

        {/* Bento Grid Industries */}
        <section className="max-w-[1440px] mx-auto px-8 py-32">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2 block">Our Verticals</label>
              <h2 className="font-headline text-4xl font-bold text-on-surface">Precision Architectures</h2>
            </div>
            <p className="text-on-surface-variant text-sm max-w-sm">
              Every industry is treated as a unique cryptographic challenge, requiring custom-engineered digital sovereignty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Healthcare */}
            <a href="/healthcare" className="md:col-span-2 group relative overflow-hidden rounded-xl bg-surface-container-low p-8 transition-all hover:bg-surface-container-high block">
              <div className="absolute top-0 right-0 p-8">
                <span className="material-symbols-outlined text-primary text-5xl opacity-20 group-hover:opacity-100 transition-opacity">health_and_safety</span>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-headline text-2xl font-bold mb-4">Healthcare</h3>
                  <p className="text-on-surface-variant max-w-md leading-relaxed">
                    Securing patient bio-data through immutable ledger protocols. Our Digital Obsidian approach ensures zero-latency access with ultimate privacy shielding.
                  </p>
                </div>
                <div className="mt-8 flex items-center text-primary text-xs font-bold uppercase tracking-widest gap-2">
                  <span>Deploy Precision</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            </a>

            {/* FinTech & Banking */}
            <a href="/fintech" className="group relative overflow-hidden rounded-xl bg-surface-container-low p-8 transition-all hover:bg-surface-container-high block">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
              <h3 className="font-headline text-xl font-bold mb-3">FinTech & Banking</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                High-frequency transactional layers engineered for systemic stability and real-time liquidity management.
              </p>
            </a>

            {/* eCommerce */}
            <a href="/ecommerce" className="group relative overflow-hidden rounded-xl bg-surface-container-low p-8 transition-all hover:bg-surface-container-high block">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">shopping_cart</span>
              <h3 className="font-headline text-xl font-bold mb-3">eCommerce</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Hyper-personalized consumer nodes leveraging predictive neural paths to optimize conversion at scale.
              </p>
            </a>

            {/* Real Estate */}
            <a href="/realestate" className="md:col-span-2 group relative overflow-hidden rounded-xl bg-surface-container-low p-8 transition-all hover:bg-surface-container-high block">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 h-48 rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img
                    alt="Futuristic skyscraper with sharp glass angles and dark steel reflections under a twilight sky"
                    className="w-full h-full object-cover"
                    src="/assets/images/realestate-hero.png"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-headline text-2xl font-bold mb-4">Real Estate</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Digital twin architectures and smart asset tokenization. We bring transparency to complex property ecosystems through atmospheric data modeling.
                  </p>
                </div>
              </div>
            </a>

            {/* Logistics */}
            <a href="/logistics" className="group relative overflow-hidden rounded-xl bg-surface-container-low p-8 transition-all hover:bg-surface-container-high border-b-2 border-transparent hover:border-secondary transition-all block">
              <span className="material-symbols-outlined text-secondary-dim text-4xl mb-6 block">precision_manufacturing</span>
              <h3 className="font-headline text-xl font-bold mb-3">Logistics</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Autonomous supply chain intelligence. We reduce entropy in global transportation through kinetic pathfinding.
              </p>
            </a>

            {/* Education */}
            <a href="/education" className="group relative overflow-hidden rounded-xl bg-surface-container-low p-8 transition-all hover:bg-surface-container-high block">
              <span className="material-symbols-outlined text-primary-dim text-4xl mb-6 block">school</span>
              <h3 className="font-headline text-xl font-bold mb-3">Education</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Asynchronous learning nodes powered by distributed knowledge graphs for specialized enterprise training.
              </p>
            </a>

            {/* Manufacturing */}
            <a href="/manufacturing" className="group relative overflow-hidden rounded-xl bg-surface-container-low p-8 transition-all hover:bg-surface-container-high block">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">precision_manufacturing</span>
              <h3 className="font-headline text-xl font-bold mb-3">Manufacturing</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Neural mesh networks binding every sensor and actuator into a unified industrial consciousness with sub-millisecond control loops.
              </p>
            </a>

            {/* Travel */}
            <a href="/travel" className="group relative overflow-hidden rounded-xl bg-surface-container-low p-8 transition-all hover:bg-surface-container-high block">
              <span className="material-symbols-outlined text-tertiary text-4xl mb-6 block">flight_takeoff</span>
              <h3 className="font-headline text-xl font-bold mb-3">Travel</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Frictionless global mobility. Orchestrating complex booking networks with quantum-secure verification.
              </p>
            </a>

            {/* Media Solutions */}
            <a href="/media-solutions" className="md:col-span-2 group relative overflow-hidden rounded-xl bg-surface-container-low p-8 transition-all hover:bg-surface-container-high block">
              <div className="absolute top-0 right-0 p-8">
                <span className="material-symbols-outlined text-tertiary text-5xl opacity-20 group-hover:opacity-100 transition-opacity">movie_filter</span>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-headline text-2xl font-bold mb-4">Media & Entertainment</h3>
                  <p className="text-on-surface-variant max-w-md leading-relaxed">
                    Next-generation content synthesis and global distribution mesh with sovereign digital rights management for the entertainment industry.
                  </p>
                </div>
                <div className="mt-8 flex items-center text-tertiary text-xs font-bold uppercase tracking-widest gap-2">
                  <span>Explore Solutions</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32">
          <div className="glass-panel border border-outline-variant/10 rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 blur-[100px]"></div>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-8 max-w-3xl mx-auto tracking-tight">
              Ready to fortify your <span className="text-secondary">industry presence?</span>
            </h2>
            <p className="text-on-surface-variant text-lg mb-12 max-w-xl mx-auto">
              Connect with our systems architects to define your Digital Obsidian transition strategy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <div className="flex flex-col items-start gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">Email Address</label>
                <input 
                  className="bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 w-full sm:w-80 text-on-surface transition-all" 
                  placeholder="name@sector.com" 
                  type="email"
                />
              </div>
              <a href="/contact" className="bg-gradient-to-r from-primary to-primary-container text-on-primary-container px-10 py-4 rounded-lg font-headline font-extrabold text-sm uppercase tracking-widest self-end h-[50px] inline-flex items-center justify-center">
                Initialize
              </a>
            </div>
          </div>
        </section>
      </main>    </div>
  );
}

export default Industries;
