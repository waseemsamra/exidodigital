import React from 'react';

function Platform() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30">      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden px-8">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
            <img 
              alt="Digital Obsidian Core" 
              className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000" 
              src="/assets/images/platform-hero.png"
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:col-span-8 flex flex-col justify-center">
              <span className="inline-block label-md uppercase tracking-[0.3em] text-secondary font-bold mb-6">System Architecture</span>
              <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter leading-none mb-8">
                Architecting the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary-container">Digital Obsidian</span> Core
              </h1>
              <p className="text-on-surface-variant text-xl max-w-2xl mb-12 leading-relaxed">
                Exido_OS defines a new standard in sovereign infrastructure—merging neural processing with atomic security at the edge.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="/contact" className="px-10 py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-lg flex items-center gap-3 transition-transform hover:scale-105 active:scale-95">
                  Explore Stack
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <a href="/contact" className="px-10 py-5 border border-outline-variant bg-surface-container-high/40 backdrop-blur-md text-on-surface font-bold rounded-lg hover:bg-surface-container-high transition-colors">
                  Technical Whitepaper
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Layered Architecture Bento */}
        <section className="py-32 px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="label-md uppercase tracking-[0.2em] text-primary-dim font-bold mb-2 block">The Stack Hierarchy</span>
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">A modular, immutable foundation built for autonomous resilience across 4 critical domains.</h2>
              </div>
              <div className="text-right">
                <div className="text-primary font-mono text-sm uppercase tracking-widest">Protocol Version</div>
                <div className="text-2xl font-headline font-black">X-0.9.4.EXIDO</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6 h-auto">
            {/* Application Layer */}
            <div className="lg:col-span-4 glass-panel p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
              <div className="flex items-center justify-between mb-8">
                <span className="material-symbols-outlined text-4xl text-secondary">window</span>
                <span className="text-xs font-mono text-secondary px-2 py-1 bg-secondary/10 rounded">L4</span>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">Application Layer</h3>
              <ul className="space-y-4 text-on-surface-variant font-body text-sm">
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-secondary rounded-full"></span> Headless Commerce API</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-secondary rounded-full"></span> Kinetic Mobile OS Shell</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-secondary rounded-full"></span> BI Authority Dashboards</li>
              </ul>
            </div>
            {/* Service Layer */}
            <div className="lg:col-span-8 glass-panel p-8 rounded-xl border border-outline-variant/10 bg-surface-container/40 hover:border-primary/30 transition-all">
              <div className="flex items-center justify-between mb-8">
                <span className="material-symbols-outlined text-4xl text-primary">hub</span>
                <span className="text-xs font-mono text-primary px-2 py-1 bg-primary/10 rounded">L3</span>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-headline font-bold mb-4">Service Layer</h3>
                  <p className="text-on-surface-variant mb-6">Orchestration protocols managing distributed logic and persistent state across global nodes.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-surface-container-low rounded-lg border border-outline-variant/10">
                    <div className="text-xs font-bold text-primary mb-2 uppercase">Orchestration</div>
                    <div className="text-lg font-bold">K8s.EXIDO</div>
                  </div>
                  <div className="p-4 bg-surface-container-low rounded-lg border border-outline-variant/10">
                    <div className="text-xs font-bold text-primary mb-2 uppercase">Storage</div>
                    <div className="text-lg font-bold">DATA LAKES</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Kernel Layer */}
            <div className="lg:col-span-7 glass-panel p-8 rounded-xl border border-outline-variant/10 bg-surface-container-high/40 hover:border-primary/30 transition-all">
              <div className="flex items-center justify-between mb-8">
                <span className="material-symbols-outlined text-4xl text-secondary">psychology</span>
                <span className="text-xs font-mono text-secondary px-2 py-1 bg-secondary/10 rounded">L2</span>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">Kernel Layer</h3>
              <div className="flex gap-12">
                <div className="flex-1">
                  <div className="h-2 w-full bg-surface-container-low rounded-full mb-2 overflow-hidden">
                    <div className="h-full w-4/5 bg-secondary glow-secondary"></div>
                  </div>
                  <div className="text-xs uppercase text-on-surface-variant tracking-tighter">Autonomous AI Engine Capacity</div>
                </div>
                <div className="flex-1">
                  <div className="h-2 w-full bg-surface-container-low rounded-full mb-2 overflow-hidden">
                    <div className="h-full w-full bg-primary shadow-[0_0_10px_#8ff5ff]"></div>
                  </div>
                  <div className="text-xs uppercase text-on-surface-variant tracking-tighter">Security Mesh Integrity</div>
                </div>
              </div>
            </div>
            {/* Physical Layer */}
            <div className="lg:col-span-5 glass-panel p-8 rounded-xl border border-outline-variant/10 bg-[#000]/30 hover:border-primary/30 transition-all">
              <div className="flex items-center justify-between mb-8">
                <span className="material-symbols-outlined text-4xl text-primary">memory</span>
                <span className="text-xs font-mono text-primary px-2 py-1 bg-primary/10 rounded">L1</span>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">Physical Layer</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-surface-container rounded border border-outline-variant/5">
                  <span className="text-sm font-body">Edge Compute Nodes</span>
                  <span className="text-primary text-xs font-mono">ONLINE</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-surface-container rounded border border-outline-variant/5">
                  <span className="text-sm font-body">Secure Data Enclaves</span>
                  <span className="text-primary text-xs font-mono">ENCRYPTED</span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Real-Time Data Fabric */}
        <section className="py-32 px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="label-md uppercase tracking-[0.2em] text-secondary font-bold mb-4 block">Real-Time Data Fabric</span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Unified observability layer for the entire guest journey</h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                <div className="p-8 bg-surface-container-low border-l-4 border-primary group hover:bg-surface-container-high transition-colors">
                  <div className="text-sm text-on-surface-variant uppercase tracking-[0.2em] mb-2">Security</div>
                  <div className="text-xl font-bold font-headline mb-4">Atomic Encryption</div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Hardware-level key rotation at sub-millisecond intervals.</p>
                </div>
                <div className="p-8 bg-surface-container-low border-l-4 border-secondary group hover:bg-surface-container-high transition-colors mt-8">
                  <div className="text-sm text-on-surface-variant uppercase tracking-[0.2em] mb-2">Latency</div>
                  <div className="text-xl font-bold font-headline mb-4">Zero-Latency Synapse</div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Predictive routing based on neural traffic patterns.</p>
                </div>
                <div className="p-8 bg-surface-container-low border-l-4 border-primary-container group hover:bg-surface-container-high transition-colors">
                  <div className="text-sm text-on-surface-variant uppercase tracking-[0.2em] mb-2">Intelligence</div>
                  <div className="text-xl font-bold font-headline mb-4">Neural Routing</div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Autonomous packet switching via embedded LLM nodes.</p>
                </div>
                <div className="p-8 bg-surface-container-low border-l-4 border-tertiary group hover:bg-surface-container-high transition-colors mt-8">
                  <div className="text-sm text-on-surface-variant uppercase tracking-[0.2em] mb-2">Protocol</div>
                  <div className="text-xl font-bold font-headline mb-4">Kinetic Flux</div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Dynamic bandwidth allocation for critical OS services.</p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-square glass-panel rounded-full flex items-center justify-center p-8 border border-outline-variant/10 glow-primary">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-8xl text-primary animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                    <div className="mt-4 font-mono text-2xl font-black text-on-surface">99.999%</div>
                    <div className="text-xs uppercase tracking-widest text-on-surface-variant">Uptime Sovereignty</div>
                  </div>
                </div>
                {/* Decorative Glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 blur-3xl rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Diagram Mockup */}
        <section className="py-24 bg-surface-container-low/50">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="mb-12">
              <span className="label-md uppercase text-primary mb-2 block">Technical Flow</span>
              <h2 className="text-4xl font-headline font-bold">Node-to-Edge Request Cycle</h2>
            </div>
            <div className="w-full bg-surface-container-lowest p-1 rounded-xl border border-outline-variant/20 shadow-2xl overflow-hidden group">
              <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden">
                <img 
                  alt="System Diagram" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" 
                  src="/assets/images/platform-diagram.png"
                />
                {/* Floating Hotspots */}
                <div className="absolute top-1/4 left-1/4 group/hotspot cursor-help">
                  <div className="w-4 h-4 bg-primary rounded-full animate-ping"></div>
                  <div className="absolute top-0 left-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="absolute top-6 left-0 glass-panel p-4 rounded border border-primary/30 opacity-0 group-hover/hotspot:opacity-100 transition-opacity w-48">
                    <div className="text-xs font-bold text-primary mb-1">INGRESS POINT</div>
                    <div className="text-xs text-on-surface-variant leading-tight">mTLS handshake initiated via quantum-resistant protocols.</div>
                  </div>
                </div>
                <div className="absolute bottom-1/3 right-1/3 group/hotspot cursor-help">
                  <div className="w-4 h-4 bg-secondary rounded-full animate-ping"></div>
                  <div className="absolute top-0 left-0 w-4 h-4 bg-secondary rounded-full"></div>
                  <div className="absolute bottom-6 right-0 glass-panel p-4 rounded border border-secondary/30 opacity-0 group-hover/hotspot:opacity-100 transition-opacity w-48">
                    <div className="text-xs font-bold text-secondary mb-1">NEURAL VALIDATION</div>
                    <div className="text-xs text-on-surface-variant leading-tight">Autonomous threat detection via Layer 2 inference engine.</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
              <div>
                <div className="text-5xl font-headline font-black text-primary mb-2">&lt; 2ms</div>
                <div className="text-on-surface-variant font-medium">Global Edge Latency</div>
              </div>
              <div>
                <div className="text-5xl font-headline font-black text-secondary mb-2">∞</div>
                <div className="text-on-surface-variant font-medium">Horizontal Scalability</div>
              </div>
              <div>
                <div className="text-5xl font-headline font-black text-on-surface mb-2">128-BIT</div>
                <div className="text-on-surface-variant font-medium">Quantum Encryption Standard</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-32 px-8 flex flex-col items-center justify-center text-center bg-surface">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-headline font-bold mb-8">Ready to Engineer Your <span className="text-secondary italic">Obsidian</span>?</h2>
            <p className="text-on-surface-variant text-lg mb-12">Join the elite cohort of enterprises running on the most secure, high-performance architecture ever designed.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold hover:shadow-[0_0_30px_#8ff5ff50] transition-all">
                Consult Infrastructure Architect
              </a>
              <a href="/contact" className="border border-outline text-on-surface px-10 py-4 rounded-lg font-bold hover:bg-surface-variant transition-all">
                View Documentation
              </a>
            </div>
          </div>
        </section>
      </main>    </div>
  );
}

export default Platform;
