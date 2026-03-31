import React from 'react';

function Support() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30">      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[716px] flex items-center overflow-hidden px-12">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover opacity-40 mix-blend-screen" 
              src="/assets/images/support-hero.png"
              alt="3D abstract network visualization with glowing cyan and violet nodes connected by crystalline fiber-optic lines on a deep black void background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-secondary"></span>
              <span className="text-secondary font-headline text-xs tracking-[0.2em] uppercase font-bold">Nexus Global Support</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter text-on-surface mb-8 leading-[0.9]">
              The Pulse of <br/><span className="text-primary glow-text">Resolution.</span>
            </h1>
            <p className="text-on-surface-variant text-xl max-w-xl mb-10 leading-relaxed">
              Navigate the Exido infrastructure with atmospheric precision. Our support ecosystem is engineered for zero-latency problem solving and high-fidelity technical assistance.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col gap-1 px-6 py-4 bg-surface-container-low border-b-2 border-primary/50 backdrop-blur-md">
                <span className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">Current Uptime</span>
                <span className="text-primary font-headline text-2xl font-bold">99.999%</span>
              </div>
              <div className="flex flex-col gap-1 px-6 py-4 bg-surface-container-low border-b-2 border-secondary/50 backdrop-blur-md">
                <span className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">Global Nodes</span>
                <span className="text-secondary font-headline text-2xl font-bold">14,204</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Quick Links Bento Grid */}
        <section className="px-12 py-24 bg-surface">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Search Documentation */}
            <div className="md:col-span-8 bg-surface-container-low p-10 flex flex-col justify-between group">
              <div>
                <span className="material-symbols-outlined text-primary mb-4 text-4xl">menu_book</span>
                <h2 className="text-3xl font-headline font-bold text-on-surface mb-4">Technical Documentation</h2>
                <p className="text-on-surface-variant max-w-lg mb-8">Access the complete atlas of Exido. From API endpoints to security protocols, find your path through the data stream.</p>
              </div>
              <div className="relative">
                <input 
                  className="w-full bg-surface-container-high border-none border-b-2 border-outline-variant focus:border-secondary transition-all py-4 px-6 text-on-surface outline-none font-body" 
                  placeholder="Search the documentation library..." 
                  type="text"
                />
                <span className="material-symbols-outlined absolute right-4 top-4 text-outline">search</span>
              </div>
            </div>
            {/* Developer Portal */}
            <div className="md:col-span-4 bg-surface-container-highest p-10 flex flex-col justify-between hover:bg-surface-bright transition-colors cursor-pointer border-b-4 border-secondary">
              <div>
                <span className="material-symbols-outlined text-secondary mb-4 text-4xl">terminal</span>
                <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">Developer Portal</h2>
                <p className="text-on-surface-variant text-sm">Join the architect community. Get SDKs, sandbox keys, and direct environment access.</p>
              </div>
              <div className="flex items-center gap-2 text-secondary font-bold text-sm tracking-wide mt-8">
                ENTER PORTAL <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
            {/* System Status Mini */}
            <div className="md:col-span-4 bg-surface-container-low p-8 flex items-center gap-6">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#8ff5ff]"></div>
              <div>
                <h3 className="text-on-surface font-headline font-bold">All Systems Operational</h3>
                <p className="text-on-surface-variant text-xs">Updated 2 minutes ago</p>
              </div>
            </div>
            {/* Community */}
            <div className="md:col-span-4 bg-surface-container-low p-8 flex items-center gap-6">
              <span className="material-symbols-outlined text-primary">groups</span>
              <div>
                <h3 className="text-on-surface font-headline font-bold">Community Discord</h3>
                <p className="text-on-surface-variant text-xs">4,200+ online architects</p>
              </div>
            </div>
            {/* Security Whitepaper */}
            <div className="md:col-span-4 bg-surface-container-low p-8 flex items-center gap-6">
              <span className="material-symbols-outlined text-primary">verified_user</span>
              <div>
                <h3 className="text-on-surface font-headline font-bold">Trust Center</h3>
                <p className="text-on-surface-variant text-xs">View latest security audits</p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Tiers */}
        <section className="px-12 py-24 bg-surface-container-low relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
          <div className="mb-16 flex justify-between items-end">
            <div className="max-w-xl">
              <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-4 tracking-tight">Global Support Tiers</h2>
              <p className="text-on-surface-variant">Calibrated assistance levels for every scale of deployment. Choose your level of atmospheric depth.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Standard */}
            <div className="bg-surface p-10 flex flex-col border border-outline-variant/10">
              <span className="text-on-surface-variant text-xs font-bold tracking-[0.3em] uppercase mb-2">Tier 01</span>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-6">Standard</h3>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>Email Support (24h response)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>Community Forum Access</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>Standard Documentation</span>
                </li>
              </ul>
              <div className="mt-auto">
                <a href="/contact" className="w-full py-3 border border-outline-variant text-on-surface text-sm font-bold hover:bg-surface-container transition-colors text-center">Select Tier</a>
              </div>
            </div>
            {/* Enterprise */}
            <div className="bg-surface p-10 flex flex-col border-t-4 border-primary relative">
              <div className="absolute -top-4 right-8 bg-primary text-on-primary text-[10px] font-bold px-3 py-1 rounded-full">POPULAR</div>
              <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-2">Tier 02</span>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-6">Enterprise</h3>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start gap-3 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>4h Targeted Response Time</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>Dedicated Account Liaison</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>Infrastructure Customization</span>
                </li>
              </ul>
              <div className="mt-auto">
                <a href="/contact" className="w-full py-3 bg-gradient-to-br from-primary to-primary-container text-on-primary text-sm font-bold pulse-glow text-center">Elevate Now</a>
              </div>
            </div>
            {/* Obsidian */}
            <div className="bg-surface-container-highest p-10 flex flex-col border border-secondary/30 relative">
              <span className="text-secondary text-xs font-bold tracking-[0.3em] uppercase mb-2">Tier 03</span>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-6">Obsidian</h3>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start gap-3 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                  <span className="text-on-surface">Instant &lt; 15m Response</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                  <span>On-Premise Technical Sprints</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                  <span>24/7/365 Direct Ops Hotline</span>
                </li>
              </ul>
              <div className="mt-auto">
                <a href="/contact" className="w-full py-3 bg-secondary text-on-secondary text-sm font-bold hover:brightness-110 transition-all text-center">Contact Sales</a>
              </div>
            </div>
          </div>
        </section>

        {/* Secure Ticket Form */}
        <section className="px-12 py-32 bg-surface grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-headline font-extrabold text-on-surface mb-8 tracking-tighter">Open a <span className="text-secondary">Secure Ticket.</span></h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
              Your data integrity is our priority. All support communication is encrypted end-to-end and routed through our private obsidian-relay nodes.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 flex items-center justify-center bg-surface-container-low rounded-full">
                  <span className="material-symbols-outlined text-primary">lock</span>
                </div>
                <div>
                  <h4 className="text-on-surface font-bold">AES-256 Encryption</h4>
                  <p className="text-on-surface-variant text-sm">Military-grade protection for all attachments.</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 flex items-center justify-center bg-surface-container-low rounded-full">
                  <span className="material-symbols-outlined text-primary">history</span>
                </div>
                <div>
                  <h4 className="text-on-surface font-bold">Audit Trails</h4>
                  <p className="text-on-surface-variant text-sm">Full transparency on who accesses your ticket.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-panel p-10 border border-outline-variant/20 shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Subject Identity</label>
                  <input 
                    className="bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-primary py-3 px-4 text-on-surface outline-none transition-all" 
                    placeholder="Full Name" 
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Workspace ID</label>
                  <input 
                    className="bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-primary py-3 px-4 text-on-surface outline-none transition-all" 
                    placeholder="EXIDO-XXXX" 
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Incident Classification</label>
                <select className="bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-primary py-3 px-4 text-on-surface outline-none appearance-none">
                  <option>Technical Error / Bug</option>
                  <option>Account & Billing</option>
                  <option>Security Incident</option>
                  <option>Infrastructure Request</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Data Payload (Description)</label>
                <textarea 
                  className="bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-primary py-3 px-4 text-on-surface outline-none transition-all" 
                  placeholder="Describe the behavior..." 
                  rows="4"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-br from-primary to-primary-container py-4 text-on-primary font-bold tracking-tight rounded-sm hover:brightness-110 active:scale-[0.98] transition-all"
              >
                Transmit Ticket
              </button>
            </form>
          </div>
        </section>
      </main>    </div>
  );
}

export default Support;
