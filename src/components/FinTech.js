import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function FinTech() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary/30 selection:text-primary">
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0 opacity-40">
            <img 
              className="w-full h-full object-cover" 
              src="/assets/images/fintech-hero.png"
              alt="Abstract financial data visualization with glowing cyan nodes and purple connection lines on a deep black background"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
          </div>
          <div className="container mx-auto px-8 relative z-10 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full border border-outline-variant/20">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="text-label text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface-variant">FinTech Sovereign v4.0</span>
              </div>
              <h1 className="font-headline text-5xl md:text-8xl font-extrabold tracking-tighter leading-none text-on-surface">
                Sovereign <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-fixed to-secondary">Financial Architectures</span>
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed">
                Engineering the next epoch of global value transfer. Secure, deterministic, and operating at the theoretical limits of hardware-accelerated consensus.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="/contact" className="bg-gradient-to-r from-primary to-primary-container px-8 py-4 rounded-lg text-on-primary font-bold tracking-tight flex items-center gap-2 shadow-lg shadow-primary/20 hover:primary-glow transition-all">
                  Deploy Infrastructure
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <a href="/contact" className="bg-surface-container-high border border-outline-variant/30 px-8 py-4 rounded-lg text-on-surface font-bold tracking-tight hover:bg-surface-bright transition-all">
                  View Whitepaper
                </a>
              </div>
            </div>
            <div className="md:col-span-5 hidden md:block">
              <div className="glass-panel p-8 rounded-2xl relative">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-label text-xs font-bold uppercase tracking-widest text-primary">Global Settlement Mesh</span>
                  <span className="material-symbols-outlined text-on-surface-variant">analytics</span>
                </div>
                <div className="space-y-6">
                  <div className="h-32 flex items-end gap-1">
                    <div className="flex-1 bg-primary/20 h-1/2 rounded-t-sm"></div>
                    <div className="flex-1 bg-primary/40 h-2/3 rounded-t-sm"></div>
                    <div className="flex-1 bg-primary/60 h-3/4 rounded-t-sm glow-line"></div>
                    <div className="flex-1 bg-primary/30 h-1/2 rounded-t-sm"></div>
                    <div className="flex-1 bg-primary/50 h-5/6 rounded-t-sm"></div>
                    <div className="flex-1 bg-secondary/70 h-full rounded-t-sm glow-line"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-surface-container-low rounded-lg">
                      <div className="text-[10px] uppercase font-bold text-on-surface-variant mb-1">Latency</div>
                      <div className="text-2xl font-headline font-black text-on-surface">0.82ms</div>
                    </div>
                    <div className="p-4 bg-surface-container-low rounded-lg">
                      <div className="text-[10px] uppercase font-bold text-on-surface-variant mb-1">Throughput</div>
                      <div className="text-2xl font-headline font-black text-on-surface">1.2M TPS</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 blur-3xl rounded-full"></div>
              </div>
            </div>
          </div>
        </header>

        {/* Atomic Transaction Kernels Section */}
        <section className="py-32 bg-surface">
          <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
              <div className="max-w-2xl">
                <h2 className="text-label text-sm uppercase font-bold tracking-[0.3em] text-secondary mb-4">Core Engine</h2>
                <h3 className="font-headline text-4xl md:text-5xl font-black text-on-surface tracking-tighter">Atomic Transaction Kernels</h3>
              </div>
              <p className="text-on-surface-variant max-w-sm leading-relaxed text-sm">
                Eliminating race conditions and partial failures through hardware-level atomicity. Every transaction is a discrete, immutable event.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-8 bg-surface-container-low rounded-xl group hover:bg-surface-container-high transition-all duration-500">
                <div className="w-12 h-12 flex items-center justify-center bg-secondary/10 rounded-lg mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-secondary">developer_board</span>
                </div>
                <h4 className="font-headline text-xl font-bold mb-4">L1 Hardware Consensus</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Direct execution on specialized silicon prevents traditional software bottlenecks and hypervisor latency.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="p-8 bg-surface-container-low rounded-xl group hover:bg-surface-container-high transition-all duration-500">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">dynamic_form</span>
                </div>
                <h4 className="font-headline text-xl font-bold mb-4">Self-Healing Logic</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Autonomous conflict resolution protocols that ensure network uptime even during severe packet loss scenarios.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="p-8 bg-surface-container-low rounded-xl group hover:bg-surface-container-high transition-all duration-500">
                <div className="w-12 h-12 flex items-center justify-center bg-tertiary-fixed-dim/10 rounded-lg mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-tertiary-dim">hub</span>
                </div>
                <h4 className="font-headline text-xl font-bold mb-4">Sharded State Storage</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Horizontally scalable database architecture providing sub-millisecond access to global ledger states.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Zero-Trust Fraud Detection */}
        <section className="py-32 bg-surface-container-low relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
            <img 
              className="w-full h-full object-cover" 
              src="/assets/images/fintech-shield.png"
              alt="High-tech digital shield made of glowing neon circuits and floating data particles on dark blue background"
            />
          </div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="text-label text-sm uppercase font-bold tracking-[0.3em] text-primary">Security Protocol</div>
                <h3 className="font-headline text-4xl md:text-6xl font-black text-on-surface tracking-tighter">Zero-Trust Fraud Detection</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Moving beyond reactive filters. Exido implements AI-driven predictive modeling at the edge, identifying malicious patterns before the handshake is even complete.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 group">
                    <span className="material-symbols-outlined text-secondary">verified_user</span>
                    <span className="font-medium">Biometric Behavioral Signature Matching</span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <span className="material-symbols-outlined text-secondary">encrypted</span>
                    <span className="font-medium">Quantum-Resistant Ledger Encryption</span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <span className="material-symbols-outlined text-secondary">gpp_maybe</span>
                    <span className="font-medium">Real-Time Anomaly Neutralization</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square glass-panel rounded-2xl p-6 flex flex-col justify-between">
                  <span className="material-symbols-outlined text-primary text-4xl">shield_lock</span>
                  <div>
                    <div className="text-2xl font-black">99.9%</div>
                    <div className="text-[10px] uppercase font-bold text-on-surface-variant">Threat Block Rate</div>
                  </div>
                </div>
                <div className="aspect-square bg-primary-container/20 rounded-2xl p-6 flex flex-col justify-between mt-12">
                  <span className="material-symbols-outlined text-primary text-4xl">speed</span>
                  <div>
                    <div className="text-2xl font-black">12ms</div>
                    <div className="text-[10px] uppercase font-bold text-on-surface-variant">Auth Latency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real-Time Settlement Meshes (Bento Grid) */}
        <section className="py-32 bg-surface">
          <div className="container mx-auto px-8">
            <h3 className="font-headline text-4xl md:text-5xl font-black text-on-surface tracking-tighter text-center mb-20">Real-Time Settlement Meshes</h3>
            <div className="grid md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
              {/* Bento Item 1: Large Feature */}
              <div className="md:col-span-2 md:row-span-2 bg-surface-container-highest rounded-2xl p-10 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <img 
                    className="w-full h-full object-cover" 
                    src="/assets/images/fintech-network.png"
                    alt="Global network map with fiber optic glowing lines representing high speed data transmission between continents"
                  />
                </div>
                <div className="relative z-10">
                  <span className="px-3 py-1 bg-primary text-on-primary text-[10px] font-bold uppercase tracking-widest rounded-full">Primary Mesh</span>
                  <h4 className="font-headline text-3xl font-black mt-6 mb-4">Instant Global Liquidity</h4>
                  <p className="text-on-surface-variant leading-relaxed max-w-sm">
                    Access a unified pool of assets regardless of geography. Our mesh eliminates "pre-funding" requirements by settling at the speed of light.
                  </p>
                </div>
                <div className="relative z-10 mt-8">
                  <a href="/contact" className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                    Explore Mesh Architecture <span className="material-symbols-outlined">trending_flat</span>
                  </a>
                </div>
              </div>
              {/* Bento Item 2 */}
              <div className="md:col-span-2 bg-secondary-container/10 border border-secondary-container/20 rounded-2xl p-8 flex flex-col justify-center">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-secondary/20 rounded-xl">
                    <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>currency_exchange</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold mb-2">Cross-Asset Interop</h4>
                    <p className="text-on-surface-variant text-sm">Convert and settle between fiat, digital assets, and commodities in a single atomic flow.</p>
                  </div>
                </div>
              </div>
              {/* Bento Item 3 */}
              <div className="bg-surface-container rounded-2xl p-8 flex flex-col items-center text-center justify-center gap-4">
                <div className="text-3xl font-black text-primary font-headline">0%</div>
                <div className="text-[10px] uppercase font-bold text-on-surface-variant">Slippage Tolerance</div>
              </div>
              {/* Bento Item 4 */}
              <div className="bg-surface-container rounded-2xl p-8 flex flex-col items-center text-center justify-center gap-4">
                <div className="text-3xl font-black text-secondary font-headline">&lt;1s</div>
                <div className="text-[10px] uppercase font-bold text-on-surface-variant">Finality Time</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default FinTech;
