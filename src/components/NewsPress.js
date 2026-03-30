import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function NewsPress() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[716px] flex flex-col items-center justify-center overflow-hidden border-b border-outline-variant/10">
          <div className="absolute inset-0 z-0 hero-gradient"></div>
          <div className="absolute inset-0 z-0 opacity-40">
            <img 
              className="w-full h-full object-cover mix-blend-screen" 
              src="/assets/images/news-hero.png"
              alt="Abstract 3D data stream visualization with glowing cyan and violet particles flowing through a dark obsidian void"
            />
          </div>
          <div className="relative z-10 max-w-5xl px-8 text-center">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary mb-4 block">Intelligence & Influence</span>
            <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 text-on-surface leading-tight">
              News <span className="text-primary-dim">&</span> Press Center
            </h1>
            <p className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
              Discover the latest breakthroughs in atmospheric computing and digital obsidian security from the core of Exido.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#newsroom" className="bg-surface-container-highest border border-outline-variant/30 text-on-surface px-8 py-4 rounded-lg font-medium hover:bg-surface-bright transition-all">
                Browse Newsroom
              </a>
              <a href="#media-kit" className="flex items-center gap-2 text-primary hover:underline transition-all">
                Explore Media Assets <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
          {/* Asymmetric Metadata Block */}
          <div className="absolute bottom-12 right-12 hidden lg:block text-right">
            <div className="h-[1px] w-24 bg-secondary glow-line ml-auto mb-4"></div>
            <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Update Frequency</p>
            <p className="font-headline text-2xl font-bold text-on-surface">Daily Stream</p>
          </div>
        </section>

        {/* Content Grid */}
        <section id="newsroom" className="px-8 py-24 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Engineering Blog (Featured / Large) */}
            <div className="lg:col-span-8 flex flex-col gap-12">
              <div className="flex justify-between items-end">
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">Latest Innovation</span>
                  <h2 className="font-headline text-4xl font-bold mt-2">Engineering Blog</h2>
                </div>
                <a className="text-on-surface-variant hover:text-primary text-sm flex items-center gap-1 transition-colors" href="#">
                  View all articles <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
              <div className="group relative overflow-hidden rounded-xl bg-surface-container-low p-1">
                <div className="aspect-[21/9] w-full overflow-hidden rounded-lg relative">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="/assets/images/news-blog.png"
                    alt="Futuristic server room with glowing blue cables and dark metallic surfaces emphasizing high-tech security and data infrastructure"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <span className="bg-primary/20 text-primary-fixed text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block backdrop-blur-md">Deep Tech</span>
                    <h3 className="font-headline text-3xl font-bold text-on-surface group-hover:text-primary transition-colors">Decoding the Obsidian Layer: A New Standard in Quantum Encryption</h3>
                    <p className="text-on-surface-variant mt-4 line-clamp-2 max-w-xl font-light">How our latest cryptographic breakthrough ensures data atmospheric depth even in post-quantum environments.</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Blog Item 2 */}
                <div className="flex flex-col gap-4 group">
                  <div className="aspect-video rounded-lg overflow-hidden bg-surface-container">
                    <img 
                      className="w-full h-full object-cover group-hover:opacity-80 transition-opacity" 
                      src="/assets/images/news-satellite.png"
                      alt="Satellites in orbit around earth at night with glowing data connectivity lines representing global infrastructure"
                    />
                  </div>
                  <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">January 14, 2024 • Infrastructure</p>
                  <h4 className="font-headline text-xl font-semibold group-hover:text-secondary transition-colors">Global Node Expansion: Reaching the Edge of the Atmosphere</h4>
                </div>
                {/* Blog Item 3 */}
                <div className="flex flex-col gap-4 group">
                  <div className="aspect-video rounded-lg overflow-hidden bg-surface-container">
                    <img 
                      className="w-full h-full object-cover group-hover:opacity-80 transition-opacity" 
                      src="/assets/images/news-abstract.png"
                      alt="Minimalist abstract digital landscape with crystalline structures and cyan light pulses"
                    />
                  </div>
                  <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">January 08, 2024 • AI Research</p>
                  <h4 className="font-headline text-xl font-semibold group-hover:text-secondary transition-colors">Neural Synapse Integration for Predictive Commerce Engines</h4>
                </div>
              </div>
            </div>

            {/* Press Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-12">
              {/* In the News */}
              <div>
                <h2 className="font-headline text-2xl font-bold border-l-2 border-secondary pl-4 mb-8">In the News</h2>
                <div className="flex flex-col gap-8">
                  <div className="p-6 rounded-lg bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-all">
                    <p className="font-label text-[10px] text-primary mb-2 uppercase tracking-widest">TechCrunch</p>
                    <h4 className="font-body font-bold text-lg leading-snug">"Exido is redefining how we think about cloud security with their Obsidian Layer."</h4>
                    <a className="mt-4 inline-block text-xs text-on-surface-variant underline hover:text-on-surface" href="#">Read Full Story</a>
                  </div>
                  <div className="p-6 rounded-lg bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-all">
                    <p className="font-label text-[10px] text-primary mb-2 uppercase tracking-widest">Wired</p>
                    <h4 className="font-body font-bold text-lg leading-snug">"The atmospheric depth of data visualization at Exido sets a new UI benchmark."</h4>
                    <a className="mt-4 inline-block text-xs text-on-surface-variant underline hover:text-on-surface" href="#">Read Full Story</a>
                  </div>
                </div>
              </div>

              {/* Press Releases */}
              <div>
                <h2 className="font-headline text-2xl font-bold border-l-2 border-secondary pl-4 mb-8">Press Releases</h2>
                <div className="flex flex-col gap-6">
                  <div className="group cursor-pointer">
                    <p className="text-[10px] text-on-surface-variant font-medium">DEC 20, 2023</p>
                    <h4 className="text-sm font-semibold group-hover:text-primary transition-colors mt-1">Exido Announces $250M Series D Funding Round</h4>
                  </div>
                  <div className="group cursor-pointer">
                    <p className="text-[10px] text-on-surface-variant font-medium">DEC 12, 2023</p>
                    <h4 className="text-sm font-semibold group-hover:text-primary transition-colors mt-1">Strategic Partnership with Global Secure Networks Ltd.</h4>
                  </div>
                  <div className="group cursor-pointer">
                    <p className="text-[10px] text-on-surface-variant font-medium">NOV 28, 2023</p>
                    <h4 className="text-sm font-semibold group-hover:text-primary transition-colors mt-1">Annual 'Digital Obsidian' Summit Scheduled for Q2 2024</h4>
                  </div>
                </div>
                <a href="#" className="w-full mt-8 py-3 bg-surface-container-highest rounded-lg text-sm font-medium hover:text-primary transition-colors text-center">Download All Releases (PDF)</a>
              </div>
            </div>
          </div>
        </section>

        {/* Media Kit Section */}
        <section id="media-kit" className="bg-surface-container-low py-24">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div>
                <span className="font-label text-xs tracking-widest text-secondary uppercase block mb-4">Branding Resources</span>
                <h2 className="font-headline text-5xl font-extrabold tracking-tighter">Media Kit</h2>
              </div>
              <p className="text-on-surface-variant max-w-md text-sm leading-relaxed">
                Authorized press assets including executive photography, brand iconography, and technical diagrams of the Exido ecosystem.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-2 glass-panel p-8 rounded-xl border border-outline-variant/10 group hover:border-primary/40 transition-all">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">image_search</span>
                <h3 className="text-xl font-bold mb-4">High-Res Brand Identity</h3>
                <p className="text-on-surface-variant text-sm mb-8">Full logo suite in SVG, PNG, and AI formats. Includes dark and light mode variations.</p>
                <a href="#" className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                  Download Package <span className="material-symbols-outlined text-sm">download</span>
                </a>
              </div>
              <div className="glass-panel p-8 rounded-xl border border-outline-variant/10 group hover:border-primary/40 transition-all">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">groups</span>
                <h3 className="text-xl font-bold mb-4">Executive Portraits</h3>
                <p className="text-on-surface-variant text-sm mb-8">Official headshots and bios of the leadership team.</p>
                <a href="#" className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                  Download <span className="material-symbols-outlined text-sm">download</span>
                </a>
              </div>
              <div className="glass-panel p-8 rounded-xl border border-outline-variant/10 group hover:border-primary/40 transition-all">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">architecture</span>
                <h3 className="text-xl font-bold mb-4">Product Visuals</h3>
                <p className="text-on-surface-variant text-sm mb-8">Technical diagrams and high-fidelity interface screenshots.</p>
                <a href="#" className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                  Download <span className="material-symbols-outlined text-sm">download</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Press Contact Module */}
        <section className="py-24 px-8 max-w-4xl mx-auto">
          <div className="relative overflow-hidden p-12 rounded-2xl bg-surface-container">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <span className="material-symbols-outlined text-9xl">mail_lock</span>
            </div>
            <div className="relative z-10">
              <h2 className="font-headline text-3xl font-bold mb-2">Press Inquiries</h2>
              <p className="text-on-surface-variant mb-10">Our communications team is available for media requests, interviews, and detailed briefings.</p>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Full Name</label>
                  <input 
                    className="bg-surface-container-low border-b-2 border-outline-variant focus:border-secondary outline-none py-3 px-2 text-on-surface transition-all placeholder:text-on-surface-variant/30" 
                    placeholder="Johnathan Doe" 
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Publication</label>
                  <input 
                    className="bg-surface-container-low border-b-2 border-outline-variant focus:border-secondary outline-none py-3 px-2 text-on-surface transition-all placeholder:text-on-surface-variant/30" 
                    placeholder="The Digital Journal" 
                    type="text"
                  />
                </div>
                <div className="flex flex-col md:col-span-2">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Message / Inquiry Details</label>
                  <textarea 
                    className="bg-surface-container-low border-b-2 border-outline-variant focus:border-secondary outline-none py-3 px-2 text-on-surface transition-all placeholder:text-on-surface-variant/30" 
                    placeholder="Please describe your request..." 
                    rows="4"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button 
                    type="submit"
                    className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-4 rounded-lg font-bold shadow-[0_0_20px_rgba(143,245,255,0.2)] hover:shadow-[0_0_30px_rgba(143,245,255,0.4)] transition-all"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
              <div className="mt-12 flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-base">alternate_email</span>
                  <span className="text-on-surface-variant">press@exido.io</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-base">call</span>
                  <span className="text-on-surface-variant">+1 (888) OBSIDIAN</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default NewsPress;
