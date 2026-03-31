import React from 'react';

function Manufacturing() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary/30">      <main className="relative pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden cyber-grid">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface to-surface z-10"></div>
          {/* Abstract 3D Visualization */}
          <div className="absolute top-0 right-0 w-2/3 h-full opacity-60 mix-blend-screen pointer-events-none">
            <div 
              className="w-full h-full relative"
              style={{ 
                backgroundImage: "url('/assets/images/manufacturing-hero.png')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface"></div>
            </div>
          </div>
          <div className="container mx-auto px-8 relative z-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel border border-outline-variant/15 mb-8">
                <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#ac89ff]"></span>
                <span className="font-label text-[0.65rem] uppercase tracking-[0.2em] text-secondary font-bold">Industrial Intelligence v4.0</span>
              </div>
              <h1 className="font-headline text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8">
                ORCHESTRATE <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">THOUGHT-SPEED</span> <br/>
                PRODUCTION.
              </h1>
              <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
                Deploy Exido's neural mesh to transform legacy hardware into a living, breathing industrial ecosystem. Real-time cognitive manufacturing starts here.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="/contact" className="px-10 py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-extrabold uppercase tracking-widest rounded-lg hover:shadow-[0_0_30px_rgba(143,245,255,0.4)] transition-all">
                  Initialize Mesh
                </a>
                <a href="/contact" className="px-10 py-5 glass-panel text-on-surface font-headline font-extrabold uppercase tracking-widest rounded-lg border border-outline-variant/30 hover:bg-surface-container-high transition-all">
                  System Specs
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Smart Factory Mesh */}
        <section className="py-32 bg-surface-container-low relative">
          <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="text-secondary font-label text-xs uppercase tracking-[0.3em] font-bold block mb-4">Core Architecture</span>
                <h2 className="font-headline text-5xl font-bold tracking-tight text-on-surface">The Smart Factory Mesh</h2>
                <p className="mt-6 text-on-surface-variant text-lg">Our proprietary mesh network binds every sensor, actuator, and edge device into a unified industrial consciousness. No latency. No silos.</p>
              </div>
              <div className="text-right">
                <span className="font-headline text-8xl font-black text-outline-variant/10 leading-none">01</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Bento Card 1 */}
              <div className="md:col-span-2 group relative overflow-hidden rounded-xl bg-surface-container-high border border-outline-variant/10 p-10 hover:border-primary/30 transition-all">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-9xl text-primary">hub</span>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-primary mb-6">sensors</span>
                    <h3 className="font-headline text-3xl font-bold mb-4">Neural Data Backbone</h3>
                    <p className="text-on-surface-variant max-w-md">1.2 Petabytes of sensor data processed at the edge every hour. Our mesh optimizes routing for sub-millisecond control loops.</p>
                  </div>
                  <div className="mt-12 flex gap-4">
                    <div className="px-4 py-2 bg-surface rounded-lg border border-outline-variant/20">
                      <div className="text-[0.6rem] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Status</div>
                      <div className="text-primary font-bold text-xs uppercase">Operational</div>
                    </div>
                    <div className="px-4 py-2 bg-surface rounded-lg border border-outline-variant/20">
                      <div className="text-[0.6rem] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Nodes</div>
                      <div className="text-on-surface font-bold text-xs">14,802 Active</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Bento Card 2 */}
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-surface-container-high to-surface-container-low border border-outline-variant/10 p-10">
                <span className="material-symbols-outlined text-secondary mb-6">terminal</span>
                <h3 className="font-headline text-2xl font-bold mb-4">Edge Synthesis</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8">Deploy custom logic directly to factory floor nodes without disrupting the primary stream. Real-time retooling achieved through virtualized kernels.</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-xs font-bold text-on-surface tracking-wide">
                    <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    DYNAMIC PROTOCOL SWAP
                  </li>
                  <li className="flex items-center gap-3 text-xs font-bold text-on-surface tracking-wide">
                    <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    ENCRYPTED SILOING
                  </li>
                  <li className="flex items-center gap-3 text-xs font-bold text-on-surface tracking-wide">
                    <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    AUTONOMOUS FALLBACK
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industrial AI Kernels */}
        <section className="py-32 bg-surface">
          <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row-reverse items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl text-right">
                <span className="text-primary font-label text-xs uppercase tracking-[0.3em] font-bold block mb-4">Intelligence Layer</span>
                <h2 className="font-headline text-5xl font-bold tracking-tight text-on-surface">Industrial AI Kernels</h2>
                <p className="mt-6 text-on-surface-variant text-lg">Predictive failure modeling and self-optimizing quality control. Our kernels don't just find errors; they prevent them before the hardware even registers a tremor.</p>
              </div>
              <div>
                <span className="font-headline text-8xl font-black text-outline-variant/10 leading-none">02</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative rounded-2xl overflow-hidden aspect-video group">
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10"></div>
                <img 
                  alt="Industrial AI Visualization" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src="/assets/images/manufacturing-turbine.png"
                />
                <div className="absolute bottom-0 left-0 p-10 z-20">
                  <h4 className="font-headline text-2xl font-bold mb-2">Predictive Maintenance</h4>
                  <p className="text-on-surface-variant max-w-xs text-sm">Reduce downtime by 40% through ultrasonic anomaly detection and thermal drift modeling.</p>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-8">
                <div className="p-8 rounded-xl bg-surface-container border-l-4 border-primary">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-primary">biotech</span>
                    <span className="font-headline font-bold text-lg">Vision QA Pipeline</span>
                  </div>
                  <p className="text-on-surface-variant text-sm">Ultra-high-speed visual inspection kernels identifying microscopic defects at 200 units per second with 99.998% accuracy.</p>
                </div>
                <div className="p-8 rounded-xl bg-surface-container border-l-4 border-secondary">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-secondary">energy_savings_leaf</span>
                    <span className="font-headline font-bold text-lg">Thermodynamic Efficiency</span>
                  </div>
                  <p className="text-on-surface-variant text-sm">AI-driven energy routing that shifts thermal loads across the facility to minimize carbon footprint and power surges.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real-Time Operational Sovereignty */}
        <section className="py-32 bg-surface-container-lowest">
          <div className="container mx-auto px-8">
            <div className="text-center mb-24">
              <span className="text-tertiary font-label text-xs uppercase tracking-[0.4em] font-bold block mb-4">Command & Control</span>
              <h2 className="font-headline text-6xl font-extrabold tracking-tighter text-on-surface mb-6">Real-Time Operational Sovereignty</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
            </div>
            {/* Dashboard Mockup View */}
            <div className="glass-panel border border-outline-variant/20 rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]">
              <div className="bg-surface-container-high border-b border-outline-variant/15 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-error shadow-[0_0_8px_#ff716c]"></span>
                    <span className="text-[0.65rem] font-bold uppercase tracking-widest text-on-surface-variant">Live Feed</span>
                  </div>
                  <div className="h-4 w-[1px] bg-outline-variant/30"></div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-widest text-on-surface">Sector 07: Assembly</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-outline-variant/30"></div>
                  <div className="w-3 h-3 rounded-full bg-outline-variant/30"></div>
                  <div className="w-3 h-3 rounded-full bg-outline-variant/30"></div>
                </div>
              </div>
              <div className="p-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Stats Column */}
                <div className="space-y-6">
                  <div className="p-6 rounded-lg bg-surface/50 border border-outline-variant/10">
                    <div className="text-[0.6rem] text-on-surface-variant uppercase font-black tracking-widest mb-2">Throughput</div>
                    <div className="text-3xl font-headline font-bold text-primary">2,481 <span className="text-sm font-normal text-on-surface-variant">u/hr</span></div>
                    <div className="mt-2 h-1 w-full bg-outline-variant/20 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[88%] shadow-[0_0_10px_#8ff5ff]"></div>
                    </div>
                  </div>
                  <div className="p-6 rounded-lg bg-surface/50 border border-outline-variant/10">
                    <div className="text-[0.6rem] text-on-surface-variant uppercase font-black tracking-widest mb-2">Node Stability</div>
                    <div className="text-3xl font-headline font-bold text-secondary">99.98%</div>
                    <div className="mt-2 flex gap-1 h-8 items-end">
                      <div className="w-full bg-secondary/40 h-[60%] rounded-t-sm"></div>
                      <div className="w-full bg-secondary/60 h-[80%] rounded-t-sm"></div>
                      <div className="w-full bg-secondary h-[95%] rounded-t-sm"></div>
                      <div className="w-full bg-secondary/80 h-[70%] rounded-t-sm"></div>
                      <div className="w-full bg-secondary/90 h-[90%] rounded-t-sm"></div>
                    </div>
                  </div>
                </div>
                {/* Main Visualization */}
                <div className="lg:col-span-3 relative rounded-xl overflow-hidden bg-surface-container border border-outline-variant/10 h-[400px]">
                  <div className="absolute inset-0 cyber-grid opacity-20"></div>
                  <img 
                    alt="Real-Time Data Visualization" 
                    className="w-full h-full object-cover mix-blend-lighten" 
                    src="/assets/images/manufacturing-dashboard.png"
                  />
                  <div className="absolute top-6 right-6 p-4 glass-panel border border-primary/20 rounded-lg">
                    <div className="text-[0.6rem] text-primary uppercase font-black tracking-widest mb-1">Active Alerts</div>
                    <div className="text-xs text-on-surface leading-tight">Hydraulic pressure shift in Unit 04 <br/> <span className="text-on-surface-variant font-normal">0.02ms ago</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Autonomous Supply Chain Synergy */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#141f38_0%,_transparent_70%)] opacity-30"></div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-primary font-label text-xs uppercase tracking-[0.3em] font-bold block mb-4">Vertical Integration</span>
                <h2 className="font-headline text-5xl font-bold tracking-tight text-on-surface mb-8">Autonomous Supply <br/> Chain Synergy</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-10">Extend your factory intelligence beyond the walls. Exido synchronizes raw material intake with live production pacing and global logistics demand.</p>
                <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-surface-container-high border border-outline-variant/30 text-primary">
                      <span className="material-symbols-outlined">route</span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-on-surface">Predictive Logistics</h4>
                      <p className="text-sm text-on-surface-variant mt-1">Autonomous rerouting of freight based on weather, geopolitical shifts, and energy costs.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-surface-container-high border border-outline-variant/30 text-secondary">
                      <span className="material-symbols-outlined">inventory_2</span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-on-surface">JIT+ Inventory</h4>
                      <p className="text-sm text-on-surface-variant mt-1">AI-managed micro-warehousing that ensures zero waste while maintaining 100% assembly uptime.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden glass-panel border border-outline-variant/10 p-2">
                    <img 
                      alt="Logistics 1" 
                      className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500" 
                      src="/assets/images/manufacturing-cargo.png"
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden glass-panel border border-outline-variant/10 p-2">
                    <div className="w-full h-full bg-surface-container flex flex-col items-center justify-center text-center p-6">
                      <span className="text-4xl font-headline font-black text-primary">15%</span>
                      <span className="text-[0.6rem] uppercase tracking-widest text-on-surface-variant mt-2">Margin Boost</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-square rounded-xl overflow-hidden glass-panel border border-outline-variant/10 p-2">
                    <div className="w-full h-full bg-secondary/10 flex flex-col items-center justify-center text-center p-6">
                      <span className="material-symbols-outlined text-secondary text-4xl">language</span>
                      <span className="text-[0.6rem] uppercase tracking-widest text-secondary font-bold mt-4">Global Link</span>
                    </div>
                  </div>
                  <div className="aspect-[4/5] rounded-xl overflow-hidden glass-panel border border-outline-variant/10 p-2">
                    <img 
                      alt="Logistics 2" 
                      className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500" 
                      src="/assets/images/manufacturing-drone.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-t from-surface-container-high to-surface border-t border-outline-variant/10">
          <div className="container mx-auto px-8 text-center">
            <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
              FUTURE-PROOF YOUR <br/>
              <span className="text-primary italic">INDUSTRIAL LEGACY.</span>
            </h2>
            <p className="text-on-surface-variant text-xl max-w-2xl mx-auto mb-12">
              Connect your assets to Exido. Join the vanguard of autonomous manufacturing today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="/contact" className="px-12 py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-extrabold uppercase tracking-widest rounded-lg shadow-2xl hover:scale-105 transition-transform">
                Request Deployment
              </a>
              <a href="/contact" className="px-12 py-5 border border-outline-variant text-on-surface font-headline font-extrabold uppercase tracking-widest rounded-lg hover:bg-surface-container transition-all">
                Technical Inquiry
              </a>
            </div>
          </div>
        </section>
      </main>    </div>
  );
}

export default Manufacturing;
