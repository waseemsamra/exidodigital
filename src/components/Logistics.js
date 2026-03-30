import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function Logistics() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30">
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 hero-gradient-logistics">
            <div className="absolute inset-0 bg-surface opacity-40"></div>
            <img 
              alt="" 
              className="w-full h-full object-cover opacity-30 mix-blend-overlay" 
              src="/assets/images/logistics-hero.png"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-surface"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
            <span className="label-md uppercase tracking-[0.3em] text-primary font-bold mb-6 block">Future of Mobility</span>
            <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-on-surface mb-8">
              Global Logistics <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary-dim">Orchestration</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-on-surface-variant font-light leading-relaxed mb-12">
              Eliminate latency across the global supply chain with our Digital Obsidian framework. Real-time neural routing for a world that never pauses.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="/contact" className="px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-lg shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2">
                Initialize Mesh <span className="material-symbols-outlined">rocket_launch</span>
              </a>
              <a href="/contact" className="px-10 py-4 bg-surface-container-highest border border-outline-variant/30 text-on-surface font-bold rounded-lg hover:bg-surface-bright transition-all">
                View Network Map
              </a>
            </div>
          </div>
          {/* Floating Stat Panels */}
          <div className="absolute bottom-20 left-8 hidden lg:block">
            <div className="glass-panel p-6 rounded-xl border-l-4 border-secondary">
              <p className="text-xs uppercase font-bold text-on-surface-variant mb-1">Global Latency</p>
              <p className="text-2xl font-black font-headline text-secondary">0.004ms</p>
            </div>
          </div>
          <div className="absolute bottom-40 right-8 hidden lg:block">
            <div className="glass-panel p-6 rounded-xl border-l-4 border-primary">
              <p className="text-xs uppercase font-bold text-on-surface-variant mb-1">Autonomous Load</p>
              <p className="text-2xl font-black font-headline text-primary">94.8%</p>
            </div>
          </div>
        </section>

        {/* Core Systems Bento Grid */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Autonomous Fleet OS */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-surface-container-low p-8 border border-outline-variant/10">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <span className="material-symbols-outlined text-4xl text-primary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>settings_input_antenna</span>
                  <h3 className="text-3xl font-bold font-headline mb-4">Autonomous Fleet OS</h3>
                  <p className="text-on-surface-variant max-w-md leading-relaxed">
                    A decentralized operating system for ground, air, and sea assets. Real-time telemetry processed at the edge to ensure seamless coordination without human intervention.
                  </p>
                </div>
                <div className="mt-12 flex items-center gap-4">
                  <div className="h-1 w-24 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-primary glow-line"></div>
                  </div>
                  <span className="text-xs font-bold text-primary">ACTIVE CLUSTERS: 4,129</span>
                </div>
              </div>
              <img 
                alt="" 
                className="absolute top-0 right-0 w-1/3 h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" 
                src="/assets/images/logistics-drone.png"
              />
            </div>

            {/* Predictive Mesh */}
            <div className="md:col-span-4 rounded-2xl bg-surface-container-highest p-8 border border-outline-variant/10">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
              <h3 className="text-2xl font-bold font-headline mb-4">Supply Chain Meshes</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                Quantum-ready predictive modeling that anticipates demand shifts before they manifest in the physical market.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-on-surface/80">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  Zero-point inventory
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface/80">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  Neural demand forecasting
                </li>
              </ul>
            </div>

            {/* Real-Time Routing Kernel */}
            <div className="md:col-span-12 rounded-2xl bg-surface-container-low p-12 border border-outline-variant/10 relative overflow-hidden">
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-4xl font-bold font-headline mb-6">Real-Time Routing Kernels</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                    Our core engine recalculates global trajectories every 500 microseconds. Weather, traffic, and geopolitical shifts are ingested as live data streams, ensuring your assets are always on the most efficient path possible.
                  </p>
                  <div className="flex gap-4">
                    <div className="p-4 rounded-lg bg-surface-container-high border border-outline-variant/20">
                      <p className="text-xs text-on-surface-variant uppercase font-bold mb-1">Efficiency Delta</p>
                      <p className="text-xl font-bold text-primary">+42%</p>
                    </div>
                    <div className="p-4 rounded-lg bg-surface-container-high border border-outline-variant/20">
                      <p className="text-xs text-on-surface-variant uppercase font-bold mb-1">Carbon Offset</p>
                      <p className="text-xl font-bold text-secondary">12.4M Tons</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden glass-panel">
                  <img 
                    alt="" 
                    className="w-full h-full object-cover" 
                    src="/assets/images/logistics-routing.png"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* High Fidelity Metrics */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <label className="label-md uppercase text-secondary font-bold tracking-widest mb-4 block">Performance Integrity</label>
                <h2 className="text-5xl font-black font-headline leading-tight">Zero-Latency Operations.</h2>
              </div>
              <p className="text-on-surface-variant max-w-sm text-right">
                Validated benchmarks against traditional legacy logistics infrastructures.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="border-l border-outline-variant/30 pl-8 py-4">
                <span className="text-6xl font-black font-headline text-on-surface mb-2 block">99.9%</span>
                <p className="text-on-surface-variant uppercase tracking-tighter font-bold text-sm">Delivery Precision</p>
              </div>
              <div className="border-l border-outline-variant/30 pl-8 py-4">
                <span className="text-6xl font-black font-headline text-on-surface mb-2 block">&lt;2ms</span>
                <p className="text-on-surface-variant uppercase tracking-tighter font-bold text-sm">Decision Latency</p>
              </div>
              <div className="border-l border-outline-variant/30 pl-8 py-4">
                <span className="text-6xl font-black font-headline text-on-surface mb-2 block">100%</span>
                <p className="text-on-surface-variant uppercase tracking-tighter font-bold text-sm">Autonomous Interop</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-8">
          <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-surface-container-high to-surface-container-low p-12 md:p-20 text-center relative overflow-hidden border border-outline-variant/20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <h2 className="text-4xl md:text-6xl font-black font-headline mb-8">Ready to sync your <br/><span className="text-primary-dim">Global Operations?</span></h2>
            <p className="text-on-surface-variant text-lg mb-12 max-w-2xl mx-auto">
              Contact our systems engineering team to deploy Exido across your logistics network.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/contact" className="px-12 py-5 bg-primary text-on-primary font-bold rounded-lg shadow-[0_0_30px_rgba(143,245,255,0.2)] hover:shadow-primary/40 transition-all uppercase tracking-widest text-sm">Schedule Demo</a>
              <a href="/contact" className="px-12 py-5 bg-transparent border border-outline-variant text-on-surface font-bold rounded-lg hover:bg-surface-bright transition-all uppercase tracking-widest text-sm">Technical Spec</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Logistics;
