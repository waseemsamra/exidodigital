import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function Ecommerce() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30">
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <header className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-gradient">
          <div className="absolute inset-0 z-0 opacity-40">
            <img 
              alt="High-energy commerce visualization" 
              className="w-full h-full object-cover mix-blend-overlay" 
              src="/assets/images/ecommerce-hero.png"
            />
          </div>
          <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            <div className="lg:col-span-8 flex flex-col justify-center">
              <span className="label-md uppercase tracking-[0.3em] text-secondary font-bold mb-6 block">The Digital Frontier</span>
              <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter leading-none mb-8">
                Architecting the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Future of Commerce</span>
              </h1>
              <p className="text-on-surface-variant text-xl max-w-2xl mb-12 leading-relaxed">
                Exido powers global retail through high-fidelity headless engines and neural personalization. We don't just process transactions; we engineer digital experiences that convert.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-lg flex items-center gap-3 transition-transform hover:scale-105 active:scale-95">
                  Initiate Scale
                  <span className="material-symbols-outlined">trending_up</span>
                </a>
                <a href="/contact" className="px-8 py-4 border border-outline-variant bg-surface-container-high/40 backdrop-blur-md text-on-surface font-bold rounded-lg hover:bg-surface-container-high transition-colors">
                  View Ecosystem
                </a>
              </div>
            </div>
            <div className="lg:col-span-4 hidden lg:flex items-center">
              <div className="glass-panel p-8 rounded-xl border border-outline-variant/20 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-end">
                    <span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Throughput</span>
                    <span className="text-primary text-2xl font-black">99.99%</span>
                  </div>
                  <div className="h-2 bg-surface-container-low rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-full shadow-[0_0_8px_#8ff5ff]"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="p-4 bg-surface-container-low rounded-lg">
                      <span className="block text-on-surface-variant text-[10px] uppercase font-bold mb-1">Latency</span>
                      <span className="text-on-surface font-bold">12ms</span>
                    </div>
                    <div className="p-4 bg-surface-container-low rounded-lg">
                      <span className="block text-on-surface-variant text-[10px] uppercase font-bold mb-1">Conversion</span>
                      <span className="text-secondary font-bold">+24%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Headless Commerce Bento Section */}
        <section className="py-32 px-8 bg-surface-container-low relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <span className="label-md uppercase tracking-[0.2em] text-primary-dim font-bold mb-2 block">Foundational Architecture</span>
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Headless Commerce Engines</h2>
              </div>
              <p className="max-w-md text-on-surface-variant">Decouple your frontend from backend complexity. Scale across every touchpoint from mobile apps to VR storefronts.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Large Feature Card */}
              <div className="md:col-span-2 group relative overflow-hidden rounded-xl bg-surface p-12 flex flex-col justify-between transition-all hover:translate-y-[-4px]">
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <img 
                    alt="Data visualization" 
                    className="w-full h-full object-cover" 
                    src="/assets/images/ecommerce-api.png"
                  />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-8">
                    <span className="material-symbols-outlined">api</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Unified API Mesh</h3>
                  <p className="text-on-surface-variant text-lg max-w-md">Orchestrate every third-party service through a single, lightning-fast GraphQL layer.</p>
                </div>
                <div className="relative z-10 mt-12 flex gap-4">
                  <span className="px-3 py-1 bg-surface-container-high rounded text-xs font-mono text-primary">01 // HYPER_SCALE</span>
                  <span className="px-3 py-1 bg-surface-container-high rounded text-xs font-mono text-secondary">02 // LOW_LATENCY</span>
                </div>
              </div>
              {/* Small Feature Card 1 */}
              <div className="bg-surface-container-highest p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">dynamic_feed</span>
                <h3 className="text-xl font-bold mb-4">Microservices First</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Swap components without downtime. Our modular engine adapts to your stack evolution instantly.</p>
              </div>
              {/* Small Feature Card 2 */}
              <div className="bg-surface-container-highest p-8 rounded-xl border border-outline-variant/10 hover:border-secondary/30 transition-all">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">terminal</span>
                <h3 className="text-xl font-bold mb-4">Dev-Ex Optimized</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Full SDK support for Next.js, Remix, and Nuxt. Built by developers, for developers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Real-Time Inventory Section */}
        <section className="py-32 px-8 bg-surface">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/5 blur-3xl rounded-full"></div>
              <div className="relative glass-panel rounded-2xl p-1 overflow-hidden">
                <img 
                  alt="Warehouse automation" 
                  className="rounded-xl w-full h-[500px] object-cover" 
                  src="/assets/images/ecommerce-warehouse.png"
                />
                <div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-xl border border-outline-variant/30">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="w-3 h-3 rounded-full bg-secondary animate-pulse"></span>
                    <span className="text-sm font-bold uppercase tracking-widest text-secondary">Live Global Sync</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-on-surface-variant">Syncing 4.2M SKUs across 14 regions...</p>
                    <span className="text-xs font-mono text-primary">ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="label-md uppercase tracking-[0.2em] text-secondary font-bold mb-4 block">Precision Control</span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-8">Real-Time Inventory Sync</h2>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                Eliminate overselling and stockouts with our sub-second synchronization engine. Exido tracks every movement from the warehouse shelf to the customer's cart in real-time.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-sm">check</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Omnichannel Visibility</h4>
                    <p className="text-sm text-on-surface-variant">One source of truth for physical stores, web, and social commerce.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded bg-secondary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-sm">check</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Predictive Stocking</h4>
                    <p className="text-sm text-on-surface-variant">AI-driven insights to reposition inventory before the demand spike hits.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI Personalization Section */}
        <section className="py-32 px-8 bg-surface-container-low overflow-hidden relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="label-md uppercase tracking-[0.2em] text-primary font-bold mb-4 block">Neural Intelligence</span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-6">AI-Driven Personalization Layers</h2>
              <p className="text-on-surface-variant text-lg">Hyper-relevant shopping experiences at scale. Exido analyzes 200+ intent signals to deliver the right product at the exact millisecond of interest.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-8 bg-surface rounded-xl border border-outline-variant/10 hover:border-primary/50 transition-all duration-300 group">
                <span className="material-symbols-outlined text-primary mb-6 text-3xl">psychology</span>
                <h4 className="font-bold mb-3">Intent Mapping</h4>
                <p className="text-sm text-on-surface-variant">Decode behavioral patterns to predict customer needs before they search.</p>
              </div>
              <div className="p-8 bg-surface rounded-xl border border-outline-variant/10 hover:border-secondary/50 transition-all duration-300">
                <span className="material-symbols-outlined text-secondary mb-6 text-3xl">unfold_more</span>
                <h4 className="font-bold mb-3">Dynamic Pricing</h4>
                <p className="text-sm text-on-surface-variant">Adjust margins in real-time based on demand, supply, and user loyalty.</p>
              </div>
              <div className="p-8 bg-surface rounded-xl border border-outline-variant/10 hover:border-primary/50 transition-all duration-300">
                <span className="material-symbols-outlined text-primary mb-6 text-3xl">auto_awesome</span>
                <h4 className="font-bold mb-3">Neural Search</h4>
                <p className="text-sm text-on-surface-variant">Context-aware search that understands natural language and visual cues.</p>
              </div>
              <div className="p-8 bg-surface rounded-xl border border-outline-variant/10 hover:border-secondary/50 transition-all duration-300">
                <span className="material-symbols-outlined text-secondary mb-6 text-3xl">insights</span>
                <h4 className="font-bold mb-3">Churn Mitigation</h4>
                <p className="text-sm text-on-surface-variant">Identify at-risk customers and trigger automated high-value retention flows.</p>
              </div>
            </div>
          </div>
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>
        </section>

        {/* Global Scalability CTA */}
        <section className="py-32 px-8 bg-surface relative overflow-hidden">
          <div className="max-w-5xl mx-auto glass-panel p-16 rounded-2xl border border-outline-variant/20 relative z-10 text-center">
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter">Global Scale, <span className="text-primary">Instant Delivery</span></h2>
            <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto">Join the world's most innovative retailers. Deploy your high-performance commerce infrastructure today.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="/contact" className="px-10 py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-lg shadow-[0_0_30px_rgba(143,245,255,0.2)] hover:shadow-[0_0_40px_rgba(143,245,255,0.4)] transition-all">Start Your Transformation</a>
              <a href="/contact" className="px-10 py-5 bg-surface-container-highest text-on-surface font-bold rounded-lg border border-outline-variant transition-colors hover:bg-surface-bright">Request Demo</a>
            </div>
          </div>
          {/* Map visualization background */}
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              alt="Global network" 
              className="w-full h-full object-cover" 
              src="/assets/images/ecommerce-map.png"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Ecommerce;
