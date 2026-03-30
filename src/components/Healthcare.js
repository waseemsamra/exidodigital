import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function Healthcare() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30">
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden px-8">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10"></div>
            <img 
              alt="Futuristic high-tech medical visualization of a glowing DNA double helix structure with floating digital data nodes in deep cyan and purple atmosphere" 
              className="w-full h-full object-cover object-right" 
              src="/assets/images/healthcare-hero.png"
            />
          </div>
          <div className="relative z-20 max-w-screen-xl mx-auto w-full">
            <div className="max-w-3xl">
              <span className="inline-block py-1 px-3 mb-6 bg-secondary-container/20 border border-secondary/30 rounded text-secondary font-headline text-[10px] font-extrabold tracking-[0.2em] uppercase">
                Industry Specialization: Medicine
              </span>
              <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-none mb-8">
                Precision <span className="gradient-text">Intelligence</span> for Global Healthcare
              </h1>
              <p className="text-xl text-on-surface-variant font-light leading-relaxed mb-10 max-w-xl">
                Synthesizing obsidian-tier security with kinetic processing power to revolutionize diagnostics, clinical data management, and remote patient care.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="#diagnostics" className="primary-gradient-btn text-on-primary font-headline font-bold px-8 py-4 rounded-lg flex items-center gap-3">
                  Explore Ecosystem 
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <a href="/contact" className="bg-surface-container-highest/40 backdrop-blur-md border border-outline-variant/30 text-on-surface font-headline font-bold px-8 py-4 rounded-lg hover:bg-surface-container-highest transition-colors">
                  Technical Whitepaper
                </a>
              </div>
            </div>
          </div>
          {/* Floating Data Chip */}
          <div className="absolute bottom-12 right-12 hidden lg:block">
            <div className="glass-panel p-6 rounded-xl w-80 shadow-2xl">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <span className="material-symbols-outlined text-primary">analytics</span>
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Real-time Metrics</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-on-surface-variant">Diagnostic Accuracy</span>
                    <span className="text-primary font-bold">99.8%</span>
                  </div>
                  <div className="h-1 bg-surface-container-low rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[99.8%] glow-accent"></div>
                  </div>
                </div>
                <div className="pt-2">
                  <span className="text-2xl font-headline font-bold">14.2PB</span>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Clinical Data Synthesized / Hour</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid: AI-Driven Diagnostics */}
        <section id="diagnostics" className="py-24 px-8 max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight mb-4">AI-Driven Diagnostics</h2>
              <p className="text-on-surface-variant text-lg">Harnessing neural compute clusters to detect anomalies at the sub-cellular level before clinical presentation.</p>
            </div>
            <div className="text-right">
              <span className="label-md uppercase text-secondary font-bold tracking-[0.2em] text-xs">Diagnostic Framework v4.2</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large Image/Data Card */}
            <div className="md:col-span-8 h-[500px] rounded-2xl overflow-hidden relative group">
              <img 
                alt="Microscopic view of cellular structures highlighted with neon blue and violet fluorescent dyes, appearing like a cosmic nebula" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="/assets/images/healthcare-diagnostic.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-headline font-bold mb-2">Multi-Spectral Neural Analysis</h3>
                  <p className="text-on-surface-variant max-w-md">Processing MRI, CT, and Pet-Scan data simultaneously to construct a unified digital twin of the patient pathology.</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-surface-container-high/80 backdrop-blur text-[10px] font-bold uppercase rounded border border-outline-variant/50">Bio-Sync</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold uppercase rounded border border-primary/30">Active Analysis</span>
                </div>
              </div>
            </div>
            {/* Stats/Insight Cards Column */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="flex-1 glass-panel p-8 rounded-2xl flex flex-col justify-between">
                <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>neurology</span>
                <div>
                  <h4 className="text-xl font-headline font-bold mb-2">Latency-Free Inference</h4>
                  <p className="text-sm text-on-surface-variant">Edge computing nodes deployed directly in surgical suites for real-time robotic guidance.</p>
                </div>
              </div>
              <div className="flex-1 bg-surface-container-low p-8 rounded-2xl border-l-4 border-primary">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">magnification_small</span>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">Pathology Focus</p>
                    <p className="font-headline font-bold">Oncology Early-Detection</p>
                  </div>
                </div>
                <p className="text-4xl font-headline font-extrabold text-primary mb-2">94%</p>
                <p className="text-xs text-on-surface-variant">Improvement in Stage-1 detection rates across longitudinal trials.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Clinical Data Lakes */}
        <section className="py-24 bg-surface-container-low/30 relative">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                {/* Data Visualization Elements */}
                <div className="relative w-full aspect-square max-w-xl mx-auto">
                  <div className="absolute inset-0 bg-secondary/10 blur-[120px] rounded-full"></div>
                  <div className="relative z-10 grid grid-cols-2 gap-4">
                    <div className="glass-panel p-6 rounded-2xl border-t border-secondary/20 translate-y-8">
                      <div className="flex items-center justify-between mb-8">
                        <span className="text-[10px] font-bold text-secondary uppercase">Encryption</span>
                        <span className="material-symbols-outlined text-secondary text-sm">lock</span>
                      </div>
                      <p className="text-3xl font-headline font-bold tracking-tighter mb-1">AES-512</p>
                      <p className="text-[10px] text-on-surface-variant uppercase">Quantum-Resistant Layer</p>
                    </div>
                    <div className="glass-panel p-6 rounded-2xl border-t border-primary/20">
                      <div className="flex items-center justify-between mb-8">
                        <span className="text-[10px] font-bold text-primary uppercase">Uptime</span>
                        <span className="material-symbols-outlined text-primary text-sm">bolt</span>
                      </div>
                      <p className="text-3xl font-headline font-bold tracking-tighter mb-1">99.999%</p>
                      <p className="text-[10px] text-on-surface-variant uppercase">Obsidian Infrastructure</p>
                    </div>
                    <div className="glass-panel p-6 rounded-2xl border-t border-outline-variant/20 col-span-2">
                      <div className="flex items-center gap-6">
                        <div className="flex-1 space-y-2">
                          <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                            <div className="h-full bg-secondary w-3/4"></div>
                          </div>
                          <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-1/2"></div>
                          </div>
                          <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                            <div className="h-full bg-tertiary w-5/6"></div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-bold">Node Synchronization</p>
                          <p className="text-[10px] text-on-surface-variant">Global Mesh Active</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="label-md uppercase text-primary font-bold tracking-[0.2em] text-xs mb-4 inline-block">Data Sovereignty</span>
                <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight mb-6">Secure Clinical Data Lakes</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  Kinetic Ether provides a zero-trust architecture for health information exchanges. Our Data Lakes allow for anonymized, collaborative research at massive scale without compromising individual patient privacy.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1">verified_user</span>
                    <div>
                      <span className="font-bold block">HIPAA & GDPR Immutable Compliance</span>
                      <span className="text-sm text-on-surface-variant">Automated auditing and cryptographic lineage for every data touchpoint.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1">hub</span>
                    <div>
                      <span className="font-bold block">Interoperable EHR Mesh</span>
                      <span className="text-sm text-on-surface-variant">Seamlessly bridge legacy silos with modern API-first health records.</span>
                    </div>
                  </li>
                </ul>
                <a href="/industries" className="text-primary font-headline font-bold flex items-center gap-2 group">
                  Learn about Data Sovereignty
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Telehealth Infrastructure */}
        <section className="py-24 px-8 max-w-screen-2xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight mb-6">Telehealth Infrastructure</h2>
            <p className="text-on-surface-variant text-lg">Deploying low-latency, high-fidelity virtual care platforms that bring world-class expertise to any coordinate on Earth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative p-px rounded-2xl overflow-hidden bg-gradient-to-b from-outline-variant/30 to-transparent">
              <div className="bg-surface p-8 rounded-[15px] h-full transition-colors group-hover:bg-surface-container-low">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>video_chat</span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-4">4K Ultra-Low Latency</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">Proprietary codecs designed for low-bandwidth environments, ensuring crystal clear visual diagnostics regardless of network quality.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group relative p-px rounded-2xl overflow-hidden bg-gradient-to-b from-outline-variant/30 to-transparent">
              <div className="bg-surface p-8 rounded-[15px] h-full transition-colors group-hover:bg-surface-container-low">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>devices_wearables</span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-4">IoT Integration Layer</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">Direct streaming from wearables and home-medical devices into the provider dashboard during live sessions.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group relative p-px rounded-2xl overflow-hidden bg-gradient-to-b from-outline-variant/30 to-transparent">
              <div className="bg-surface p-8 rounded-[15px] h-full transition-colors group-hover:bg-surface-container-low">
                <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>language</span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-4">Global Edge Network</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">Strategic node placement ensures sub-50ms latency for real-time surgical consultations across continents.</p>
              </div>
            </div>
          </div>
          {/* Full-width Callout */}
          <div className="mt-20 relative rounded-3xl overflow-hidden min-h-[400px] flex items-center px-12">
            <div className="absolute inset-0">
              <img 
                alt="Modern clinical research lab with sterile equipment and blue ambient lighting, reflecting a professional high-tech medical environment" 
                className="w-full h-full object-cover grayscale opacity-30" 
                src="/assets/images/healthcare-lab.png"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-headline font-extrabold mb-6">Ready to integrate Kinetic Intelligence?</h3>
              <p className="text-on-surface-variant mb-8 text-lg">Partner with Kinetic Ether to build the next generation of life-saving digital infrastructure.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="primary-gradient-btn text-on-primary font-headline font-bold px-8 py-3 rounded-lg">Speak with an Engineer</a>
                <a href="/contact" className="bg-white/5 backdrop-blur-md border border-white/10 text-on-surface font-headline font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">Request Platform Demo</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Healthcare;
