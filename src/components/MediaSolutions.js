import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function MediaSolutions() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30">
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              src="/assets/images/media.png"
              alt="Vibrant 3D abstract visualization of glowing digital ribbons and spectrum of light in a dark space, high-tech energy flow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent"></div>
          </div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-1 mb-6 rounded-full bg-surface-container-high border border-outline-variant/20 text-primary font-headline text-xs font-bold tracking-[0.2em] uppercase">
                Next-Gen Media Solutions
              </span>
              <h1 className="text-6xl md:text-8xl font-headline font-black tracking-tighter text-on-surface mb-8 leading-[0.9]">
                Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary-container">Future</span> of Media.
              </h1>
              <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed font-light">
                Deploy enterprise-grade infrastructure built for the next era of content synthesis, global distribution, and sovereign digital rights.
              </p>
              <div className="mt-12 flex flex-wrap gap-6">
                <a href="/contact" className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg font-headline font-extrabold text-sm tracking-widest uppercase hover:shadow-[0_0_20px_rgba(143,245,255,0.3)] transition-all">
                  Explore The Mesh
                </a>
                <a href="/contact" className="border border-outline-variant/30 bg-surface-container-high/40 backdrop-blur-md text-on-surface px-8 py-4 rounded-lg font-headline font-bold text-sm tracking-widest uppercase hover:bg-surface-container-highest transition-all">
                  View Documentation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-32 bg-surface">
          <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <label className="font-headline text-xs font-bold text-secondary tracking-[0.3em] uppercase block mb-4">Foundation</label>
                <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter text-on-surface">Core Capabilities</h2>
              </div>
              <p className="text-on-surface-variant font-body max-w-xs text-right italic">
                The bedrock of high-fidelity entertainment delivery systems.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AI Content Synthesis */}
              <div className="group p-8 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                <span className="material-symbols-outlined text-4xl text-primary mb-8">neurology</span>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-4">AI-Driven Content Synthesis</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">Automating complex production workflows with neural rendering engines and generative kernels that scale with your creative vision.</p>
              </div>
              {/* Global Distribution */}
              <div className="group p-8 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-secondary/10 transition-colors"></div>
                <span className="material-symbols-outlined text-4xl text-secondary mb-8">language</span>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-4">Global Distribution Mesh</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">Ultra-low latency edge streaming powered by a redundant neural network with guaranteed 99.999% uptime for global events.</p>
              </div>
              {/* Digital Rights */}
              <div className="group p-8 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-tertiary/10 transition-colors"></div>
                <span className="material-symbols-outlined text-4xl text-tertiary mb-8">security_update_good</span>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-4">Digital Rights Sovereignty</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">Immutable blockchain-based licensing protocols and automated royalty distribution for transparent ownership and monetization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Media Kernel: Command Center */}
        <section className="py-32 bg-surface-container-low relative">
          <div className="container mx-auto px-8">
            <div className="glass-panel p-12 rounded-2xl border border-outline-variant/10 shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                  <label className="font-headline text-xs font-bold text-primary tracking-[0.3em] uppercase block mb-4">Live Operation</label>
                  <h2 className="text-4xl md:text-6xl font-headline font-black tracking-tighter text-on-surface mb-8">The Media Kernel</h2>
                  <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                    Real-time command and control over your entire media ecosystem. Monitor health, mitigate threats, and optimize throughput from a single high-fidelity interface.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-surface/40 p-6 rounded-lg border-l-2 border-primary">
                      <div className="text-primary font-headline font-black text-3xl mb-1">14.2M</div>
                      <div className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">Concurrent Streams</div>
                    </div>
                    <div className="bg-surface/40 p-6 rounded-lg border-l-2 border-secondary">
                      <div className="text-secondary font-headline font-black text-3xl mb-1">2.4 TB/s</div>
                      <div className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">Global Bitrate</div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="bg-surface rounded-xl p-8 border border-outline-variant/20 shadow-inner relative group overflow-hidden">
                    <div className="flex justify-between items-center mb-8">
                      <span className="text-xs font-bold text-on-surface tracking-widest uppercase">System Flux Monitor</span>
                      <span className="flex items-center gap-2 text-[10px] text-green-400 font-bold uppercase tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Optimal
                      </span>
                    </div>
                    {/* Visual Data Placeholder */}
                    <div className="space-y-6">
                      <div className="h-32 w-full bg-surface-container-high rounded flex items-end gap-1 p-4 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
                        <div className="w-full h-1/2 bg-primary/20 rounded-t-sm glow-line"></div>
                        <div className="w-full h-3/4 bg-primary/20 rounded-t-sm glow-line"></div>
                        <div className="w-full h-1/2 bg-primary/20 rounded-t-sm glow-line"></div>
                        <div className="w-full h-4/5 bg-primary/20 rounded-t-sm glow-line"></div>
                        <div className="w-full h-2/3 bg-primary/20 rounded-t-sm glow-line"></div>
                        <div className="w-full h-full bg-primary/20 rounded-t-sm glow-line"></div>
                        <div className="w-full h-3/4 bg-primary/20 rounded-t-sm glow-line"></div>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="flex justify-between items-center p-3 bg-surface-container-highest/40 rounded border border-outline-variant/10">
                          <span className="text-xs text-on-surface-variant">Piracy Mitigation Events</span>
                          <span className="text-xs font-bold text-secondary">482 Active Blocks</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-surface-container-highest/40 rounded border border-outline-variant/10">
                          <span className="text-xs text-on-surface-variant">Edge Cache Efficiency</span>
                          <span className="text-xs font-bold text-primary">99.4%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Solutions */}
        <section className="py-32 bg-surface">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Personalized Streaming */}
              <div className="relative group rounded-2xl overflow-hidden min-h-[500px] flex flex-col justify-end p-12">
                <img 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="/assets/images/news-satellite.png"
                  alt="Abstract digital connection network with soft neon lights and shallow depth of field, representing behavioral AI data points"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-primary mb-4">psychology</span>
                  <h3 className="text-3xl font-headline font-extrabold text-on-surface mb-4">Hyper-Personalized Streaming</h3>
                  <p className="text-on-surface-variant max-w-md">Deploy real-time recommendation engines that evolve with behavioral AI, creating uniquely tailored audience experiences at a global scale.</p>
                </div>
              </div>
              {/* Immersive Experiences */}
              <div className="relative group rounded-2xl overflow-hidden min-h-[500px] flex flex-col justify-end p-12">
                <img 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="/assets/images/news-abstract.png"
                  alt="Futuristic architectural space with geometric light patterns and vibrant purple and blue glow, representing immersive digital worlds"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-secondary mb-4">vrpano</span>
                  <h3 className="text-3xl font-headline font-extrabold text-on-surface mb-4">Immersive Experiences</h3>
                  <p className="text-on-surface-variant max-w-md">Engineering the high-concurrency backend for VR/AR and metaverse-scale events with zero packet loss and seamless environmental synchronization.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="py-32 bg-surface-container-low border-y border-outline-variant/10">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="text-center md:text-left">
                <div className="font-headline font-black text-6xl text-on-surface mb-4">&lt;10ms</div>
                <div className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">Streaming Latency</div>
                <p className="text-on-surface-variant text-sm leading-relaxed">Near-instantaneous data propagation across our distributed edge mesh, enabling true real-time interactivity.</p>
              </div>
              <div className="text-center md:text-left">
                <div className="font-headline font-black text-6xl text-on-surface mb-4">8K UHD</div>
                <div className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">Native Resolution Support</div>
                <p className="text-on-surface-variant text-sm leading-relaxed">Lossless content delivery pipeline optimized for next-generation display technologies and high-bitrate masters.</p>
              </div>
              <div className="text-center md:text-left">
                <div className="font-headline font-black text-6xl text-on-surface mb-4">Zero Trust</div>
                <div className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">Content Encryption</div>
                <p className="text-on-surface-variant text-sm leading-relaxed">Military-grade per-frame encryption and dynamic watermarking to protect intellectual property at every node.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 bg-surface overflow-hidden relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px]"></div>
          </div>
          <div className="container mx-auto px-8 relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-on-surface mb-12">
              Ready to define the <br/>vanguard of media?
            </h2>
            <a href="/contact" className="group relative inline-block px-12 py-6 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-lg font-headline font-extrabold text-lg tracking-widest uppercase overflow-hidden shadow-2xl scale-100 active:scale-95 transition-all">
              <span className="relative z-10">Engage the Vanguard</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <div className="mt-12 text-on-surface-variant font-headline text-sm tracking-widest uppercase flex items-center justify-center gap-4">
              <span>Consult with an Architect</span>
              <span className="material-symbols-outlined text-primary">arrow_forward</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default MediaSolutions;
