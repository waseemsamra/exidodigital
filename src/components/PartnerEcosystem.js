import React from 'react';

function PartnerEcosystem() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary/30 selection:text-primary-fixed">      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center px-8 overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
          </div>
          <div className="max-w-[1440px] mx-auto w-full grid lg:grid-cols-2 gap-16 items-center z-10">
            <div className="space-y-8">
              <header>
                <span className="label-md uppercase tracking-[0.3em] text-secondary font-bold text-xs mb-4 block">
                  Ecosystem Architecture
                </span>
                <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface leading-[0.9]">
                  The Strategic <span className="text-primary italic">Nexus.</span>
                </h1>
              </header>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed font-light">
                Accelerating digital sovereignty through a curated lattice of global technology leaders. We don't just integrate; we synchronize at the atomic level of performance.
              </p>
              <div className="flex items-center gap-4">
                <button className="px-8 py-4 digital-obsidian-gradient text-on-primary font-headline font-bold rounded-lg hover:scale-105 transition-transform bg-gradient-to-br from-primary to-primary-container">
                  Explore Alliances
                </button>
                <button className="px-8 py-4 bg-surface-container-highest text-on-surface font-headline font-bold rounded-lg border border-outline-variant/15 hover:bg-surface-bright transition-colors">
                  Technical Docs
                </button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-square bg-surface-container-low rounded-xl overflow-hidden shadow-glow border border-outline-variant/10 relative group">
                <img 
                  alt="Digital Infrastructure" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 transition-transform duration-700" 
                  src="/assets/images/dashboard-preview.png" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="p-6 bg-surface-bright/60 backdrop-blur-xl rounded-lg border border-outline-variant/20">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Global Latency</p>
                        <p className="text-2xl font-headline font-black text-on-surface">&lt; 14ms</p>
                      </div>
                      <div className="h-12 w-24 flex items-end gap-1">
                        <div className="w-2 h-4 bg-secondary"></div>
                        <div className="w-2 h-8 bg-secondary"></div>
                        <div className="w-2 h-6 bg-secondary"></div>
                        <div className="w-2 h-10 bg-secondary"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Infrastructure Partners */}
        <section className="py-24 px-8 bg-surface-container-low">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-headline font-bold text-on-surface mb-4 tracking-tight">Cloud Infrastructure Partners</h2>
                <p className="text-on-surface-variant leading-relaxed">Precision-engineered deployments across the world's most resilient cloud fabrics. Native integration for zero-trust architectures.</p>
              </div>
              <div className="flex gap-2">
                <div className="h-1 w-12 bg-primary"></div>
                <div className="h-1 w-4 bg-outline-variant"></div>
                <div className="h-1 w-4 bg-outline-variant"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {['AWS', 'Azure', 'Google Cloud', 'IBM Cloud'].map((partner, index) => (
                <div key={index} className="group bg-surface hover:bg-surface-container-high p-12 rounded-lg flex items-center justify-center transition-all duration-300 border border-transparent hover:border-primary/20">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-primary transition-colors">
                      {index === 0 ? 'cloud' : index === 1 ? 'terminal' : index === 2 ? 'database' : 'lan'}
                    </span>
                    <p className="mt-4 font-headline font-bold text-on-surface group-hover:text-on-surface transition-colors">{partner}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Technology Alliances */}
        <section className="py-24 px-8 bg-surface">
          <div className="max-w-[1440px] mx-auto">
            <header className="mb-20">
              <h2 className="text-4xl font-headline font-bold text-on-surface mb-2">Specialized Alliances</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-container"></div>
            </header>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  icon: 'psychology',
                  color: 'primary',
                  title: 'Neural Logic Core',
                  description: 'Deep-tier integration with proprietary LLMs for real-time predictive infrastructure scaling and autonomous threat mitigation.'
                },
                {
                  icon: 'shield_lock',
                  color: 'secondary',
                  title: 'Digital Aegis Labs',
                  description: 'Quantum-resistant encryption protocols baked into the network transit layer for absolute data immutability.'
                },
                {
                  icon: 'memory',
                  color: 'tertiary',
                  title: 'Boundary Systems',
                  description: 'Ultra-low latency edge node clusters providing compute power at the literal perimeter of user interaction.'
                }
              ].map((alliance, index) => (
                <div key={index} className="bg-surface-container-low p-8 rounded-lg group hover:-translate-y-2 transition-transform duration-500">
                  <div className={`w-12 h-12 rounded bg-${alliance.color}/10 flex items-center justify-center mb-6`}>
                    <span className={`material-symbols-outlined text-${alliance.color}`}>{alliance.icon}</span>
                  </div>
                  <h3 className="text-xl font-headline font-bold mb-4 text-on-surface">{alliance.title}</h3>
                  <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">{alliance.description}</p>
                  <a className={`text-${alliance.color} text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all`} href="#">
                    View Alliance <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner CTA */}
        <section className="py-32 px-8 bg-surface-container-highest relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#8ff5ff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="label-md uppercase tracking-[0.4em] text-primary font-bold text-xs mb-6 block">Expansion Protocol</span>
            <h2 className="text-5xl md:text-7xl font-headline font-black text-on-surface mb-8 tracking-tighter">
              Scale with the <span className="italic underline decoration-secondary">Obsidian.</span>
            </h2>
            <p className="text-on-surface-variant text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              We are selectively expanding our ecosystem. Join the framework that defines the next generation of digital infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-5 rounded-lg font-headline font-black text-lg shadow-2xl hover:scale-105 transition-transform">
                Apply for Access
              </button>
              <button className="bg-surface px-10 py-5 rounded-lg font-headline font-bold text-lg border border-outline-variant/30 hover:bg-surface-bright transition-colors text-on-surface">
                Download Program PDF
              </button>
            </div>
          </div>
        </section>
      </main>    </div>
  );
}

export default PartnerEcosystem;
