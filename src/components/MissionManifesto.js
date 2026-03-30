import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function MissionManifesto() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary">
      <NavBar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex flex-col justify-center items-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface to-surface"></div>
            <img 
              alt="Manifesto Hero" 
              className="w-full h-full object-cover opacity-30 grayscale" 
              src="/assets/images/dashboard-preview.png" 
            />
          </div>
          <div className="relative z-10 max-w-5xl text-center">
            <div className="inline-block px-3 py-1 mb-8 border border-outline-variant/30 bg-surface-container-low/50 backdrop-blur-md rounded-full">
              <span className="text-primary font-label text-[10px] tracking-[0.3em] uppercase">Phase One: Foundation</span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-background leading-tight mb-8">
              The Architecture of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">Unyielding Precision.</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed font-light">
              We are building the digital foundations of the next era. A synthesis of cold logic and fluid power, engineered for those who demand absolute sovereignty in the Exido.
            </p>
            <div className="mt-12 flex justify-center gap-6">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary self-center"></div>
              <span className="material-symbols-outlined text-primary text-3xl animate-pulse">keyboard_double_arrow_down</span>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary self-center"></div>
            </div>
          </div>
        </section>

        {/* Core Truths Section */}
        <section className="max-w-[1440px] mx-auto px-8 py-32">
          <div className="mb-16">
            <h2 className="font-headline text-sm uppercase tracking-[0.4em] text-secondary mb-4">The Philosophy</h2>
            <h3 className="font-headline text-4xl font-bold tracking-tight">Our Core Truths</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Digital Obsidian */}
            <div className="md:col-span-7 bg-surface-container-low p-10 relative overflow-hidden group border border-outline-variant/10">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">deployed_code</span>
                <h4 className="font-headline text-3xl font-bold mb-6">Digital Obsidian</h4>
                <p className="font-body text-on-surface-variant leading-relaxed max-w-lg">
                  We reject the ephemeral. Digital Obsidian represents our pursuit of indestructible, high-performance code and infrastructure that withstands the entropy of time. Every line is forged in the fires of rigorous testing, resulting in a stack that is as dark, sharp, and resilient as the volcanic glass itself.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 group-hover:opacity-20 transition-opacity">
                <img alt="Security pattern" className="w-full h-full object-cover grayscale" src="/assets/images/dashboard-preview.png" />
              </div>
            </div>
            {/* Autonomous Intelligence */}
            <div className="md:col-span-5 bg-surface-container-high p-10 border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">psychology</span>
                <h4 className="font-headline text-3xl font-bold mb-6">Autonomous Intelligence</h4>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  AI is not a tool; it is a foundational, self-healing layer. We integrate intelligence that doesn't just respond to commands but anticipates failure and optimizes flow before the human eye can register a delta.
                </p>
              </div>
              <div className="mt-12 h-1 bg-surface-container-highest w-full overflow-hidden">
                <div className="h-full bg-secondary w-2/3 shadow-[0_0_10px_#ac89ff]"></div>
              </div>
            </div>
            {/* The Human Nexus */}
            <div className="md:col-span-12 bg-surface-container p-12 border border-outline-variant/10 flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h4 className="font-headline text-3xl font-bold mb-6">The Human Nexus</h4>
                <p className="font-body text-on-surface-variant text-lg leading-relaxed">
                  Technology without intent is noise. The Human Nexus is where intuition directs the precision of the 'Exido'. We provide the telemetry; you provide the soul. Our interfaces are designed to amplify human cognition, not replace it.
                </p>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="aspect-square bg-surface-container-low border border-outline-variant/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-container text-5xl">schema</span>
                </div>
                <div className="aspect-square bg-surface-container-low border border-outline-variant/10 overflow-hidden">
                  <img alt="Circuitry" className="w-full h-full object-cover opacity-40 grayscale hover:scale-110 transition-transform duration-700" src="/assets/images/dashboard-preview.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Ethics Section */}
        <section className="bg-surface-container-low py-32">
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="font-headline text-sm uppercase tracking-[0.4em] text-primary mb-4">The Standard</h2>
              <h3 className="font-headline text-4xl font-bold">Engineering Ethics</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {[
                {
                  number: '01',
                  color: 'text-primary',
                  title: 'Zero-Trust',
                  description: 'Security is not a feature; it is an inherent property. We assume no perimeter is safe and verify every single interaction, every single time.'
                },
                {
                  number: '02',
                  color: 'text-secondary',
                  title: 'Atomic Transparency',
                  description: 'Total visibility into the logic of the machine. We provide granular audit trails that allow for forensic-level understanding of every automated decision.'
                },
                {
                  number: '03',
                  color: 'text-primary-container',
                  title: 'Algorithmic Integrity',
                  description: 'Logic must be unyielding. Our algorithms are mathematically verified to ensure they perform exactly as designed, with zero drift and zero bias.'
                }
              ].map((ethic, index) => (
                <div key={index} className="p-12 bg-surface backdrop-blur-xl border-l border-outline-variant/20 hover:bg-surface-container-high transition-colors group">
                  <div className={`${ethic.color} font-headline text-6xl font-black mb-8 opacity-20 group-hover:opacity-100 transition-opacity`}>{ethic.number}</div>
                  <h4 className="font-headline text-xl font-bold mb-4 uppercase tracking-widest">{ethic.title}</h4>
                  <p className="font-body text-on-surface-variant text-sm leading-relaxed">{ethic.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-32 px-8 overflow-hidden">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-20 items-start">
            <div className="md:w-1/3">
              <h2 className="font-headline text-sm uppercase tracking-[0.4em] text-secondary mb-4">Continuum</h2>
              <h3 className="font-headline text-5xl font-bold mb-8 leading-tight">The Horizon of Exido</h3>
              <p className="font-body text-on-surface-variant text-lg">
                We are not just iterating on software. We are redefining the relationship between the physical world and the digital layer.
              </p>
            </div>
            <div className="md:w-2/3 relative">
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary via-secondary to-transparent"></div>
              <div className="space-y-24">
                {[
                  {
                    era: 'Era I: Stabilization',
                    color: 'text-primary',
                    dotColor: 'bg-primary',
                    title: 'Post-SaaS Architectures',
                    description: 'Moving beyond centralized subscription models toward sovereign, distributed node-based deployments.'
                  },
                  {
                    era: 'Era II: Integration',
                    color: 'text-secondary',
                    dotColor: 'bg-secondary',
                    title: 'Cyber-Physical Sovereignty',
                    description: 'Synchronizing logic with material assets. Ensuring that critical infrastructure remains secure and responsive.'
                  },
                  {
                    era: 'Era III: Transcendence',
                    color: 'text-on-surface-variant opacity-50',
                    dotColor: 'bg-white/20',
                    title: 'Universal Synthetics',
                    description: 'The final phase of atmospheric computing where the interface becomes invisible and the response is instantaneous.',
                    opacity: 'opacity-50'
                  }
                ].map((point, index) => (
                  <div key={index} className="relative flex flex-col md:flex-row items-center gap-8 group">
                    <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 ${point.dotColor} rounded-full shadow-[0_0_15px_currentColor]`}></div>
                    <div className="md:w-1/2 md:text-right pr-12 hidden md:block">
                      <span className={`font-headline font-bold text-lg ${point.color}`}>{point.era}</span>
                    </div>
                    <div className="md:w-1/2 md:pl-12 pl-12">
                      <h4 className={`font-headline text-xl font-bold mb-2 ${point.opacity || ''}`}>{point.title}</h4>
                      <p className={`font-body text-on-surface-variant text-sm ${point.opacity || ''}`}>{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-screen-xl mx-auto px-8 mb-32">
          <div className="relative bg-gradient-to-br from-surface-container-high to-surface-container-low p-16 rounded-xl border border-outline-variant/20 overflow-hidden text-center">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary opacity-5 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary opacity-5 blur-[100px] rounded-full"></div>
            <div className="relative z-10">
              <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8">Join the Vanguard</h2>
              <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-12 text-lg">
                The manifesto is just the beginning. Access the technical whitepapers to understand the underlying mechanics of the Exido.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <button className="bg-primary text-on-primary font-headline font-bold px-10 py-4 rounded-lg shadow-[0_0_20px_rgba(143,245,255,0.3)] hover:scale-105 transition-all">
                  Read the Whitepaper
                </button>
                <button className="bg-surface-container-highest border border-outline-variant/30 text-primary font-headline font-bold px-10 py-4 rounded-lg hover:bg-surface-bright transition-all">
                  Join the Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default MissionManifesto;
