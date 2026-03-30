import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function Travel() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary/30">
      <NavBar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
            <img 
              className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000" 
              src="/assets/images/travel-hero.png"
              alt="Futuristic airport terminal with glowing holographic flight paths and sleek architectural lines in deep blue and cyan lighting"
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 text-secondary text-[10px] font-bold tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                Next-Gen Hospitality
              </div>
              <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-on-surface">
                Engineering the <span className="bg-gradient-to-r from-primary via-secondary to-primary-container bg-clip-text text-transparent">Extraordinary</span> in Travel.
              </h1>
              <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed font-light">
                Exido deploys sophisticated neural architectures to orchestrate the global travel lifecycle, turning legacy friction into seamless guest velocity.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <a href="/contact" className="group relative px-8 py-4 bg-primary text-on-primary font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(143,245,255,0.3)]">
                  <span className="relative z-10">Explore Solutions</span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>
                <a href="/contact" className="px-8 py-4 border border-outline-variant/30 text-on-surface font-bold rounded-lg hover:bg-surface-container-high transition-colors">
                  Watch Vision Film
                </a>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="glass-panel p-1 rounded-2xl rotate-3 scale-105 shadow-2xl">
                <div className="bg-surface rounded-xl overflow-hidden aspect-video relative">
                  <img 
                    className="w-full h-full object-cover" 
                    src="/assets/images/travel-hotel.png"
                    alt="Hyper-modern luxury hotel suite with floor to ceiling windows overlooking a futuristic neon city at twilight"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-4 glass-panel rounded-lg flex justify-between items-center">
                    <div>
                      <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Active Mesh Link</p>
                      <p className="text-sm font-bold text-primary">Tokyo Sky-Resort Alpha</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-sm">bolt</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 h-32 w-32 glass-panel rounded-full flex items-center justify-center -rotate-12 border-secondary/30">
                <div className="text-center">
                  <p className="text-2xl font-black text-secondary">99.9%</p>
                  <p className="text-[8px] uppercase font-bold text-on-surface-variant">Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid (Bento) */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-6">
                  Architectural Sovereignty for Global Scale.
                </h2>
                <p className="text-on-surface-variant leading-relaxed">
                  We don't just build software; we engineer environments where operational intelligence meets human intuition. Our core travel modules integrate seamlessly into your existing stack.
                </p>
              </div>
              <div className="text-right">
                <span className="text-label-sm uppercase tracking-widest text-secondary font-bold">Industry Intelligence</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Predictive Booking Engines */}
              <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-surface-container-high p-8 hover:bg-surface-bright transition-all duration-500">
                <div className="flex justify-between items-start mb-12">
                  <div className="space-y-4">
                    <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
                    <h3 className="text-3xl font-bold text-on-surface">Predictive Booking Engines</h3>
                    <p className="text-on-surface-variant max-w-md">Anticipate demand surges before they happen using our deep-learning temporal neural networks. Optimized for yield management and high-velocity conversions.</p>
                  </div>
                  <div className="h-24 w-24 flex items-center justify-center border border-outline-variant/20 rounded-full">
                    <span className="material-symbols-outlined text-primary text-4xl animate-pulse">query_stats</span>
                  </div>
                </div>
                <div className="mt-8 flex gap-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full border border-primary/20">Neural Optimization</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full border border-primary/20">Demand Shaping</span>
                </div>
              </div>
              {/* Global Infrastructure */}
              <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary-container/40 to-surface-container-high p-8 border border-secondary/10">
                <span className="material-symbols-outlined text-4xl text-secondary mb-6">public</span>
                <h3 className="text-2xl font-bold text-on-surface mb-4">Global Hospitality Infrastructure</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8">Low-latency data distribution across 42 global regions for sub-millisecond guest verification.</p>
                <div className="absolute bottom-0 right-0 opacity-10 translate-x-1/4 translate-y-1/4">
                  <span className="material-symbols-outlined text-[160px]">hub</span>
                </div>
              </div>
              {/* Personalized Guest Meshes */}
              <div className="md:col-span-12 group relative overflow-hidden rounded-2xl bg-surface-container-high p-1 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 p-12">
                  <h3 className="text-4xl font-bold text-on-surface mb-6">Hyper-Personalized Guest Meshes</h3>
                  <p className="text-on-surface-variant text-lg mb-8">Move beyond CRM. Our Mesh technology creates a persistent, secure digital twin for every traveler, ensuring their preferences are realized across every touchpoint instantly.</p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                      <span>Zero-Knowledge Preference Proofs</span>
                    </li>
                    <li className="flex items-center gap-3 text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                      <span>Biometric Identity Orchestration</span>
                    </li>
                    <li className="flex items-center gap-3 text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                      <span>Real-time CX Sentiment Analysis</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 h-full min-h-[400px]">
                  <img 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                    src="/assets/images/travel-profile.png"
                    alt="Digital representation of a human profile made of glowing fiber optic nodes and data streams in violet and cyan"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CX & Operational Intelligence Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-outline-variant to-transparent"></div>
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-secondary/5 blur-[120px] rounded-full"></div>
              <div className="relative space-y-12">
                <div className="space-y-4">
                  <h2 className="text-4xl font-headline font-bold text-on-surface">Operational Intelligence, <br/><span className="text-secondary">Refined.</span></h2>
                  <p className="text-on-surface-variant leading-relaxed text-lg">
                    We eliminate the noise between back-of-house operations and front-of-house experience. Exido provides a unified observability layer for the entire guest journey.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="p-6 bg-surface-container rounded-xl border-b-2 border-primary/30">
                    <p className="text-primary text-3xl font-black mb-2">34%</p>
                    <p className="text-xs uppercase font-bold tracking-widest text-on-surface-variant">OPEX Reduction</p>
                  </div>
                  <div className="p-6 bg-surface-container rounded-xl border-b-2 border-secondary/30">
                    <p className="text-secondary text-3xl font-black mb-2">2.4x</p>
                    <p className="text-xs uppercase font-bold tracking-widest text-on-surface-variant">Guest Retention</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="glass-panel p-6 rounded-xl flex gap-6 items-start hover:bg-surface-bright/80 transition-all group">
                <div className="h-12 w-12 shrink-0 rounded bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">Unified Command Center</h4>
                  <p className="text-sm text-on-surface-variant">Monitor every property, flight, and transit point from a single, high-fidelity dashboard with predictive alerts.</p>
                </div>
              </div>
              <div className="glass-panel p-6 rounded-xl flex gap-6 items-start hover:bg-surface-bright/80 transition-all group">
                <div className="h-12 w-12 shrink-0 rounded bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">auto_fix_high</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface mb-2 group-hover:text-secondary transition-colors">Automated Service Recovery</h4>
                  <p className="text-sm text-on-surface-variant">Identify and resolve guest friction points before they escalate into negative reviews using autonomous AI workflows.</p>
                </div>
              </div>
              <div className="glass-panel p-6 rounded-xl flex gap-6 items-start hover:bg-surface-bright/80 transition-all group">
                <div className="h-12 w-12 shrink-0 rounded bg-on-tertiary-container/10 flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined">security</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface mb-2 group-hover:text-tertiary transition-colors">Digital Obsidian Security</h4>
                  <p className="text-sm text-on-surface-variant">Military-grade encryption for all guest data, ensuring privacy is the foundation of your premium brand promise.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-surface-container-highest/20 relative">
          <div className="max-w-4xl mx-auto px-8 text-center space-y-12">
            <h2 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter text-on-surface">
              Ready to define the <br/>future of movement?
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a href="/contact" className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black uppercase text-sm tracking-widest rounded transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-primary/10">
                Partner With Us
              </a>
              <a href="/contact" className="w-full md:w-auto px-12 py-5 border border-outline-variant text-on-surface font-black uppercase text-sm tracking-widest rounded hover:bg-surface-container-high transition-colors">
                Request a Demo
              </a>
            </div>
            <p className="text-on-surface-variant font-mono text-xs opacity-50 uppercase tracking-[0.3em]">Protocol // exido-x-travel</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Travel;
