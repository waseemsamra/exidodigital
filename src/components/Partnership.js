import React from 'react';

function Partnership() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary">      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[716px] flex items-center overflow-hidden px-12">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10"></div>
            <img 
              className="w-full h-full object-cover" 
              src="/assets/images/partnership-hero.png"
              alt="Abstract 3D rendering of interlocking translucent data prisms with vibrant cyan and purple light refraction in a dark digital space"
            />
          </div>
          <div className="relative z-20 max-w-4xl">
            <span className="label-md uppercase tracking-[0.2em] text-secondary font-headline mb-4 block">Ecosystem Synergy</span>
            <h1 className="text-7xl font-extrabold font-headline tracking-tighter text-on-surface mb-6 leading-[0.9]">
              STRATEGIC<br/><span className="text-primary glow-text">PARTNERSHIPS</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
              Integrating elite cloud infrastructure, advanced security protocols, and pioneering AI research to redefine the boundaries of atmospheric computing.
            </p>
            <div className="flex gap-4">
              <a href="#form" className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg font-headline font-bold transition-transform hover:scale-[1.02]">
                Apply for Partnership
              </a>
              <a href="#directory" className="px-8 py-4 border border-outline-variant/30 text-on-surface font-headline font-bold rounded-lg hover:bg-surface-container-high transition-all">
                View Directory
              </a>
            </div>
          </div>
        </section>

        {/* Partner Categories (Bento Grid) */}
        <section id="directory" className="py-24 px-12 bg-surface">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-headline font-bold tracking-tight mb-2">Partner Directory</h2>
              <p className="text-on-surface-variant">Global network of innovation leaders</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 border border-outline-variant/20 rounded-lg hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined">filter_list</span>
              </button>
              <div className="bg-surface-container-low px-4 py-2 rounded-lg flex items-center border-b-2 border-outline-variant">
                <span className="material-symbols-outlined text-on-surface-variant mr-2">search</span>
                <input className="bg-transparent border-none focus:ring-0 text-sm w-48 p-0" placeholder="Search partners..." type="text"/>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {/* Cloud Providers */}
            <div className="col-span-12 md:col-span-8 bg-surface-container-low p-8 rounded-xl relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">cloud_done</span>
                  <h3 className="text-2xl font-headline font-bold">Cloud Infrastructure</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-container-high/50 p-6 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-surface-variant rounded flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-secondary">database</span>
                    </div>
                    <h4 className="font-headline font-bold mb-1">Nexus Cloud</h4>
                    <p className="text-xs text-on-surface-variant">Tier 1 Compute & Storage</p>
                  </div>
                  <div className="bg-surface-container-high/50 p-6 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-surface-variant rounded flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-secondary">lan</span>
                    </div>
                    <h4 className="font-headline font-bold mb-1">Exido Grid</h4>
                    <p className="text-xs text-on-surface-variant">Distributed Mesh Networking</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 group-hover:opacity-20 transition-opacity">
                <img 
                  className="w-full h-full object-cover" 
                  src="/assets/images/partnership-cloud.png"
                  alt="Highly detailed blue and cyan digital mesh network representation of global data connectivity"
                />
              </div>
            </div>
            {/* AI Labs */}
            <div className="col-span-12 md:col-span-4 bg-surface-container p-8 rounded-xl border-l-4 border-secondary">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">psychology</span>
              <h3 className="text-2xl font-headline font-bold mb-4">AI Research Labs</h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-between p-3 rounded hover:bg-surface-container-high transition-colors">
                  <span className="font-body text-sm">Synthetix Intelligence</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward_ios</span>
                </li>
                <li className="flex items-center justify-between p-3 rounded hover:bg-surface-container-high transition-colors">
                  <span className="font-body text-sm">Deep Logic Foundry</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward_ios</span>
                </li>
                <li className="flex items-center justify-between p-3 rounded hover:bg-surface-container-high transition-colors">
                  <span className="font-body text-sm">Neural Path Systems</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward_ios</span>
                </li>
              </ul>
            </div>
            {/* Security Firms */}
            <div className="col-span-12 md:col-span-4 glass-panel p-8 rounded-xl border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">shield_lock</span>
              <h3 className="text-2xl font-headline font-bold mb-2">Security Alliances</h3>
              <p className="text-sm text-on-surface-variant mb-6">Securing the edge with zero-trust architecture and cryptographic verified partners.</p>
              <a href="/security-audit" className="text-primary font-headline font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                Browse Audited <span className="material-symbols-outlined">trending_flat</span>
              </a>
            </div>
            <div className="col-span-12 md:col-span-8 bg-surface-container-low p-8 rounded-xl relative overflow-hidden flex items-center">
              <div className="w-2/3">
                <h3 className="text-3xl font-headline font-bold mb-4">Enterprise Integrations</h3>
                <p className="text-on-surface-variant mb-6">Direct API bridges with the world's leading ERP and CRM platforms, ensuring seamless data atmospheric synchronization.</p>
                <div className="flex gap-4">
                  <div className="h-10 w-24 bg-surface-variant/50 rounded flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                    <span className="text-[10px] font-bold uppercase tracking-tighter">Velocity CRM</span>
                  </div>
                  <div className="h-10 w-24 bg-surface-variant/50 rounded flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                    <span className="text-[10px] font-bold uppercase tracking-tighter">Apex ERP</span>
                  </div>
                  <div className="h-10 w-24 bg-surface-variant/50 rounded flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                    <span className="text-[10px] font-bold uppercase tracking-tighter">Flux Flow</span>
                  </div>
                </div>
              </div>
              <div className="w-1/3 flex justify-center">
                <span className="material-symbols-outlined text-[120px] text-outline-variant/10">hub</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tiered Partner Program */}
        <section className="py-24 px-12 bg-surface-container-low relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-headline font-bold tracking-tight mb-4">Partner Tiers</h2>
            <p className="text-on-surface-variant">Structured growth tracks designed for mutual atmospheric expansion.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Silver */}
            <div className="bg-surface p-8 rounded-lg border-b-2 border-outline-variant/30 flex flex-col">
              <h3 className="font-headline font-bold text-lg mb-6 text-on-surface-variant uppercase tracking-widest">Silver</h3>
              <div className="text-4xl font-headline font-extrabold mb-8">$10K<span className="text-sm font-normal text-on-surface-variant">/annual comm.</span></div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start gap-2 text-sm">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>Standard API Access</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>Community Support</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>Directory Listing</span>
                </li>
              </ul>
              <a href="#form" className="w-full py-3 border border-outline-variant/30 font-headline font-bold text-sm uppercase tracking-widest hover:bg-surface-container-high transition-colors text-center">Select Tier</a>
            </div>
            {/* Gold */}
            <div className="bg-surface p-8 rounded-lg border-b-2 border-secondary/50 flex flex-col scale-105 relative z-10 shadow-2xl shadow-secondary/5">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary text-[10px] px-3 py-1 font-bold uppercase tracking-widest rounded-full">Popular</div>
              <h3 className="font-headline font-bold text-lg mb-6 text-secondary uppercase tracking-widest">Gold</h3>
              <div className="text-4xl font-headline font-extrabold mb-8">$50K<span className="text-sm font-normal text-on-surface-variant">/annual comm.</span></div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start gap-2 text-sm">
                  <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>Priority API Routing</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>Marketing Co-Op Credits</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>Dedicated Partner Manager</span>
                </li>
              </ul>
              <a href="#form" className="w-full py-3 bg-secondary text-on-secondary font-headline font-bold text-sm uppercase tracking-widest text-center">Select Tier</a>
            </div>
            {/* Platinum */}
            <div className="bg-surface p-8 rounded-lg border-b-2 border-primary/50 flex flex-col">
              <h3 className="font-headline font-bold text-lg mb-6 text-primary uppercase tracking-widest">Platinum</h3>
              <div className="text-4xl font-headline font-extrabold mb-8">$250K<span className="text-sm font-normal text-on-surface-variant">/annual comm.</span></div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start gap-2 text-sm">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>Custom Endpoint Dev</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>Executive Access Panels</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>Joint IP Development</span>
                </li>
              </ul>
              <a href="#form" className="w-full py-3 border border-primary/30 text-primary font-headline font-bold text-sm uppercase tracking-widest hover:bg-primary/5 transition-colors text-center">Select Tier</a>
            </div>
            {/* Strategic */}
            <div className="bg-[#0b1731] p-8 rounded-lg border-b-2 border-on-surface flex flex-col">
              <h3 className="font-headline font-bold text-lg mb-6 text-on-surface uppercase tracking-widest">Strategic</h3>
              <div className="text-3xl font-headline font-extrabold mb-8 leading-tight">Bespoke<br/>Alliances</div>
              <p className="text-sm text-on-surface-variant mb-10">Exclusive tier for foundational ecosystem architects and nation-state scale integration.</p>
              <a href="/contact" className="w-full mt-auto py-3 bg-on-surface text-surface font-headline font-bold text-sm uppercase tracking-widest text-center">Contact Sales</a>
            </div>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="py-24 px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-headline font-bold tracking-tight mb-8">Synergistic Benefits</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">rocket_launch</span>
                </div>
                <div>
                  <h4 className="text-xl font-headline font-bold mb-1">Accelerated GTM</h4>
                  <p className="text-on-surface-variant">Leverage Exido's global brand authority to shorten sales cycles by up to 40%.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">analytics</span>
                </div>
                <div>
                  <h4 className="text-xl font-headline font-bold mb-1">Deep Data Insights</h4>
                  <p className="text-on-surface-variant">Gain access to atmospheric telemetry data to optimize your product's performance on our substrate.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">groups</span>
                </div>
                <div>
                  <h4 className="text-xl font-headline font-bold mb-1">Co-Innovation Labs</h4>
                  <p className="text-on-surface-variant">Collaborate directly with our R&D teams in our virtual "Void Spaces" for rapid prototyping.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-surface-container rounded-3xl overflow-hidden relative">
              <img 
                className="w-full h-full object-cover opacity-60" 
                src="/assets/images/partnership-server.png"
                alt="Futuristic high-tech server room with glowing blue fiber optic cables and atmospheric light particles"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-surface via-transparent to-primary/20"></div>
              <div className="absolute bottom-10 left-10 p-6 glass-panel rounded-xl border border-outline-variant/30 max-w-[280px]">
                <p className="text-primary font-headline font-bold text-2xl mb-2">99.99%</p>
                <p className="text-xs uppercase tracking-widest font-headline font-semibold">Uptime commitment across all verified partner nodes</p>
              </div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute -z-10 -top-20 -right-20 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full"></div>
          </div>
        </section>

        {/* Become a Partner Form */}
        <section id="form" className="py-24 px-12 bg-surface-container-low">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-headline font-bold tracking-tight mb-6">Initiate Partnership</h2>
              <p className="text-on-surface-variant mb-10 leading-relaxed">
                Ready to integrate with Exido? Fill out the inquiry form and our Ecosystem Architect team will contact you within 24 atmospheric cycles.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <span className="text-sm">alliances@exidodigital.com</span>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <span className="text-sm">Digital Hub 01, Metaverse District</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 bg-surface-container p-12 rounded-2xl border border-outline-variant/15">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="col-span-1">
                  <label className="block text-xs uppercase tracking-widest font-headline font-bold text-on-surface-variant mb-2">Contact Name</label>
                  <input 
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-secondary transition-all focus:ring-0 text-on-surface px-0 py-3" 
                    placeholder="John Doe" 
                    type="text"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-xs uppercase tracking-widest font-headline font-bold text-on-surface-variant mb-2">Corporate Email</label>
                  <input 
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-secondary transition-all focus:ring-0 text-on-surface px-0 py-3" 
                    placeholder="john@enterprise.com" 
                    type="email"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-xs uppercase tracking-widest font-headline font-bold text-on-surface-variant mb-2">Company Name</label>
                  <input 
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-secondary transition-all focus:ring-0 text-on-surface px-0 py-3" 
                    placeholder="Global Systems Inc." 
                    type="text"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-xs uppercase tracking-widest font-headline font-bold text-on-surface-variant mb-2">Partner Type</label>
                  <select className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-secondary transition-all focus:ring-0 text-on-surface px-0 py-3 appearance-none">
                    <option>Cloud Provider</option>
                    <option>Security Firm</option>
                    <option>AI Research</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-xs uppercase tracking-widest font-headline font-bold text-on-surface-variant mb-2">Synergy Intent</label>
                  <textarea 
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-secondary transition-all focus:ring-0 text-on-surface px-0 py-3 resize-none" 
                    placeholder="How do you envision our partnership?" 
                    rows="4"
                  ></textarea>
                </div>
                <div className="col-span-2 mt-4">
                  <button 
                    type="submit"
                    className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold px-10 py-4 rounded-lg uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(143,245,255,0.15)] hover:shadow-primary/30 transition-all"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>    </div>
  );
}

export default Partnership;
