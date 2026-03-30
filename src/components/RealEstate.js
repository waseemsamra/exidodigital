import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function RealEstate() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      <NavBar />
      <main className="relative pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-surface to-surface z-10"></div>
            <img 
              alt="Futuristic Cityscape" 
              className="w-full h-full object-cover opacity-60 scale-105" 
              src="/assets/images/realestate-hero.png"
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <span className="inline-block label-md uppercase tracking-[0.3em] text-secondary font-bold mb-6">Physical Intelligence</span>
              <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter leading-tight mb-8">
                The Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary-dim">Obsidian</span> <br/>of Real Estate
              </h1>
              <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed mb-10 font-light">
                Architecting the future of property through high-fidelity data engines, neural asset tokenization, and immersive spatial meshes.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="/contact" className="bg-gradient-to-r from-primary to-primary-container text-on-primary text-sm font-bold uppercase tracking-widest px-10 py-5 rounded-lg hover:brightness-110 transition-all flex items-center gap-3">
                  Initiate Protocol
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
                <a href="/contact" className="glass-panel border border-outline-variant/20 px-10 py-5 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-surface-container-high transition-all">
                  View Mesh Network
                </a>
              </div>
            </div>
          </div>
          {/* Floating Data Chip */}
          <div className="absolute right-8 bottom-24 hidden xl:block">
            <div className="glass-panel p-6 rounded-xl border border-outline-variant/10 max-w-xs shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Live Ledger Feed</span>
              </div>
              <div className="space-y-3">
                <div className="h-[2px] w-full bg-surface-container-highest overflow-hidden">
                  <div className="h-full bg-primary w-2/3 glow-line"></div>
                </div>
                <p className="text-[10px] text-on-surface-variant leading-relaxed">
                  TX_ID: 0x88...F21 <br/>
                  ASSET_VAL: $42.8M <br/>
                  MESH_STATUS: SYNCED
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid: Smart Asset Tokenization */}
        <section className="py-24 max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="label-sm uppercase tracking-widest text-primary-dim font-bold mb-2 block">Protocol 01</span>
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight">Smart Asset Tokenization</h2>
            </div>
            <p className="text-on-surface-variant max-w-md text-right text-sm">Converting rigid physical structures into fluid, programmable digital equity for the global market.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 bg-surface-container-low rounded-xl overflow-hidden group border border-outline-variant/5">
              <div className="p-10 h-full flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">token</span>
                  <h3 className="text-2xl font-bold mb-4">Fractional Neural Ownership</h3>
                  <p className="text-on-surface-variant">Automated smart contracts that manage dividends, voting rights, and asset liquidation with zero human friction.</p>
                </div>
                <div className="relative h-48 mt-8 overflow-hidden rounded-lg">
                  <img 
                    alt="Tokenization Visualization" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src="/assets/images/realestate-token.png"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-2 bg-surface-container-high rounded-xl p-8 border border-outline-variant/5 flex gap-6 items-center">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Liquidity Injection</h3>
                <p className="text-sm text-on-surface-variant">Instant secondary markets for previously illiquid commercial real estate portfolios.</p>
              </div>
              <div className="w-24 h-24 flex-shrink-0 bg-surface-container-highest rounded-full flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-3xl">currency_exchange</span>
              </div>
            </div>
            <div className="md:col-span-1 bg-surface-container-low rounded-xl p-8 border border-outline-variant/5">
              <span className="material-symbols-outlined text-secondary text-3xl mb-4">verified_user</span>
              <h3 className="text-lg font-bold mb-2">Immutable Title</h3>
              <p className="text-xs text-on-surface-variant">Blockchain-native deed verification that eliminates title insurance overhead.</p>
            </div>
            <div className="md:col-span-1 bg-gradient-to-br from-secondary-container to-surface-container-highest rounded-xl p-8 overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-2 text-on-secondary-container">24/7 Global Trading</h3>
                <p className="text-xs text-on-secondary-container/80">Institutional grade security for cross-border capital flow.</p>
              </div>
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl text-white/5 rotate-12">public</span>
            </div>
          </div>
        </section>

        {/* PropTech Data Engines */}
        <section className="bg-surface-container-low py-32 relative overflow-hidden">
          <div className="absolute left-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"></div>
              <div className="glass-panel p-1 rounded-2xl border border-outline-variant/20 shadow-2xl">
                <img 
                  alt="Data Engine Dashboard" 
                  className="rounded-xl w-full" 
                  src="/assets/images/realestate-dashboard.png"
                />
              </div>
              {/* Data Chips Overlay */}
              <div className="absolute -bottom-8 -right-8 glass-panel p-6 border border-primary/20 rounded-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">bolt</span>
                  <div>
                    <div className="text-xs uppercase tracking-tighter text-on-surface-variant">Neural Analysis</div>
                    <div className="text-xl font-bold font-headline">99.8% ACCURACY</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="label-md uppercase tracking-[0.4em] text-primary font-bold mb-6 block">Protocol 02</span>
              <h2 className="font-headline text-5xl font-extrabold mb-8 tracking-tighter">PropTech Data Engines</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                Harnessing billions of data points to predict asset performance. Our engines process micro-market shifts, environmental stressors, and occupancy patterns in real-time.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-surface-container-high transition-colors">
                  <div className="w-12 h-12 bg-surface-bright rounded-lg flex items-center justify-center border border-outline-variant/20">
                    <span className="material-symbols-outlined text-primary">analytics</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 uppercase text-sm tracking-widest">Predictive Yield Modeling</h4>
                    <p className="text-sm text-on-surface-variant">Anticipate ROI fluctuations before market volatility hits.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-surface-container-high transition-colors">
                  <div className="w-12 h-12 bg-surface-bright rounded-lg flex items-center justify-center border border-outline-variant/20">
                    <span className="material-symbols-outlined text-secondary">sensors</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 uppercase text-sm tracking-widest">IoT Sustainability Mesh</h4>
                    <p className="text-sm text-on-surface-variant">Live energy performance and carbon footprint tracking for ESG compliance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Reality Property Meshes */}
        <section className="py-32 max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="label-sm uppercase tracking-widest text-secondary font-bold mb-4 block">Protocol 03</span>
            <h2 className="font-headline text-5xl font-extrabold tracking-tight mb-6">Virtual Reality Property Meshes</h2>
            <p className="text-on-surface-variant">Eliminate geography. Tour, inspect, and sign for assets in a high-fidelity digital twin environment with sub-millimeter precision.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-outline-variant/10">
              <img 
                alt="Spatial Mesh 01" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                src="/assets/images/realestate-penthouse.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h4 className="text-xl font-bold mb-2">Photorealistic Twins</h4>
                <p className="text-xs text-on-surface-variant">Unreal Engine 5 powered simulations for remote property inspection.</p>
              </div>
            </div>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-outline-variant/10 md:mt-12">
              <img 
                alt="Spatial Mesh 02" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                src="/assets/images/realestate-wireframe.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h4 className="text-xl font-bold mb-2">Structural Diagnostics</h4>
                <p className="text-xs text-on-surface-variant">View plumbing, electrical, and structural health through walls in AR.</p>
              </div>
            </div>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-outline-variant/10">
              <img 
                alt="Spatial Mesh 03" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                src="/assets/images/realestate-livingroom.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h4 className="text-xl font-bold mb-2">Spatial Configuration</h4>
                <p className="text-xs text-on-surface-variant">Remodel and reconfigure tenant spaces digitally before construction starts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-surface-container-high to-surface rounded-3xl p-12 md:p-24 border border-outline-variant/10 relative overflow-hidden text-center">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]"></div>
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter">Ready to Tokenize your Portfolio?</h2>
            <p className="text-on-surface-variant text-xl max-w-2xl mx-auto mb-12 font-light">Join the vanguard of the real estate evolution. Secure your digital obsidian infrastructure today.</p>
            <a href="/contact" className="bg-primary text-on-primary font-bold uppercase tracking-[0.2em] text-sm px-12 py-6 rounded-lg hover:shadow-[0_0_30px_rgba(143,245,255,0.4)] transition-all inline-block">
              Contact Enterprise Solutions
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default RealEstate;
