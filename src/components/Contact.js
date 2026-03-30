import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function Contact() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary">
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[614px] flex flex-col justify-center items-center pt-24 pb-12 overflow-hidden bg-mesh-hero">
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{ backgroundImage: "url('/assets/images/contact-hero.png')" }}
          ></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="font-headline text-xs tracking-[0.2em] font-extrabold uppercase text-secondary px-4 py-1.5 border border-secondary/20 rounded-full bg-secondary/5">Connection Protocol</span>
            </div>
            <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter text-on-surface mb-6 leading-none">
              Initialize the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Connection</span>
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto font-body leading-relaxed">
              Deploy high-fidelity solutions across your enterprise architecture. Our global teams are standing by to synchronize with your project requirements.
            </p>
          </div>
          {/* Abstract Digital Mesh Visualization */}
          <div className="absolute -bottom-1/4 w-full h-full opacity-30 blur-3xl pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary rounded-full mix-blend-screen filter blur-[120px]"></div>
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-secondary rounded-full mix-blend-screen filter blur-[100px]"></div>
          </div>
        </section>

        {/* Consultation Architecture Form Section */}
        <section className="relative z-20 py-24 px-6 md:px-12 bg-surface">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Information Column */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface mb-6">Consultation Architecture</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Every collaboration begins with a precise assessment of digital infrastructure needs. Complete the secure initialization sequence below to begin.
                </p>
              </div>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface-container-high border border-outline-variant/15 text-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface">Direct Command</h4>
                    <p className="text-on-surface-variant text-sm">ops@exido.io</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface-container-high border border-outline-variant/15 text-secondary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface">Live Interface</h4>
                    <p className="text-on-surface-variant text-sm">Available 24/7 for Tier-1 Infrastructure Partners</p>
                  </div>
                </div>
              </div>

              {/* Trust Section */}
              <div className="pt-12 border-t border-outline-variant/15">
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                  <div>
                    <h3 className="font-headline font-bold text-on-surface">Secure Channel Guaranteed</h3>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">256-Bit TLS 1.3 Encryption</p>
                  </div>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-primary uppercase">Response Metric</span>
                    <span className="text-xs font-mono text-on-surface-variant">TARGET: &lt;24H</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full w-[94%] bg-gradient-to-r from-primary to-secondary shadow-[0_0_8px_#8ff5ff]"></div>
                  </div>
                  <p className="mt-4 text-xs text-on-surface-variant leading-relaxed italic">
                    All communications are routed through our Digital Obsidian security layer, ensuring absolute confidentiality and data integrity.
                  </p>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="glass-panel p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
                {/* Form Mesh Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
                <form className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Name</label>
                      <input 
                        className="w-full bg-surface-container-low border-b-2 border-outline-variant py-3 px-0 focus:outline-none focus:border-secondary transition-all text-on-surface placeholder:text-outline/40" 
                        placeholder="Identity String" 
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Enterprise Email</label>
                      <input 
                        className="w-full bg-surface-container-low border-b-2 border-outline-variant py-3 px-0 focus:outline-none focus:border-secondary transition-all text-on-surface placeholder:text-outline/40" 
                        placeholder="node@enterprise.com" 
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Organization</label>
                      <input 
                        className="w-full bg-surface-container-low border-b-2 border-outline-variant py-3 px-0 focus:outline-none focus:border-secondary transition-all text-on-surface placeholder:text-outline/40" 
                        placeholder="Entity Name" 
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Service Interest</label>
                      <select className="w-full bg-surface-container-low border-b-2 border-outline-variant py-3 px-0 focus:outline-none focus:border-secondary transition-all text-on-surface appearance-none cursor-pointer">
                        <option value="ai">AI & Neural Networks</option>
                        <option value="cloud">Cloud Architecture</option>
                        <option value="security">Security Infrastructure</option>
                        <option value="data">Data Engineering</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Message</label>
                    <textarea 
                      className="w-full bg-surface-container-low border-b-2 border-outline-variant py-3 px-0 focus:outline-none focus:border-secondary transition-all text-on-surface placeholder:text-outline/40 resize-none" 
                      placeholder="Describe the mission parameters..." 
                      rows="4"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold py-5 rounded-lg text-sm uppercase tracking-widest hover:shadow-[0_0_25px_#8ff5ff40] active:scale-[0.98] transition-all group flex items-center justify-center gap-3"
                  >
                    Execute Connection Sequence
                    <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="py-24 bg-surface-container-low relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-20">
              <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tight text-on-surface mb-4">Global Hubs</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Physical coordination points for our distributed intelligence network.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Austin */}
              <div className="bg-surface group p-8 rounded-2xl border border-outline-variant/5 hover:border-primary/30 transition-all duration-500">
                <div className="h-48 w-full rounded-xl overflow-hidden mb-8 grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    className="w-full h-full object-cover" 
                    src="/assets/images/singapore-hub.png"
                    alt="Modern skyscrapers in Dubai with futuristic architecture and blue twilight sky"
                  />
                </div>
                <h3 className="font-headline text-2xl font-bold mb-2">United Arab Emirates</h3>
                <p className="text-primary text-sm font-bold uppercase tracking-widest mb-6">Dubai (HQ)</p>
                <div className="space-y-3 text-on-surface-variant text-sm font-body">
                  <p className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-xs">location_on</span> 
                    Business Bay, Dubai, UAE
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-xs">call</span> 
                    +971 54 786 2225
                  </p>
                </div>
              </div>

              {/* Berlin */}
              <div className="bg-surface group p-8 rounded-2xl border border-outline-variant/5 hover:border-secondary/30 transition-all duration-500">
                <div className="h-48 w-full rounded-xl overflow-hidden mb-8 grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    className="w-full h-full object-cover" 
                    src="/assets/images/contact-berlin.png"
                    alt="Futuristic glass architecture of Berlin central district with violet lighting at dusk"
                  />
                </div>
                <h3 className="font-headline text-2xl font-bold mb-2">Europe</h3>
                <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-6">Berlin HUB</p>
                <div className="space-y-3 text-on-surface-variant text-sm font-body">
                  <p className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-xs">location_on</span> 
                    Rosenthaler Str. 40, 10119 Berlin
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-xs">call</span> 
                    +49 30 555-0123
                  </p>
                </div>
              </div>

              {/* Singapore */}
              <div className="bg-surface group p-8 rounded-2xl border border-outline-variant/5 hover:border-primary/30 transition-all duration-500">
                <div className="h-48 w-full rounded-xl overflow-hidden mb-8 grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    className="w-full h-full object-cover" 
                    src="/assets/images/contact-singapore.png"
                    alt="Cinematic night view of Singapore skyline with digital glowing lights reflected in water"
                  />
                </div>
                <h3 className="font-headline text-2xl font-bold mb-2">Asia</h3>
                <p className="text-primary text-sm font-bold uppercase tracking-widest mb-6">Singapore HUB</p>
                <div className="space-y-3 text-on-surface-variant text-sm font-body">
                  <p className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-xs">location_on</span> 
                    10 Collyer Quay, Ocean Financial Centre
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-xs">call</span> 
                    +65 6555 0101
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Abstract Background Detail */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 border border-outline-variant/10 rounded-full"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 border border-outline-variant/10 rounded-full"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
