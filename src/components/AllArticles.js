import React from 'react';
import { Link } from 'react-router-dom';

function AllArticles() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary">      <main className="pt-20">
        {/* Hero Section: The Intelligence Stream */}
        <section className="relative h-[716px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10"></div>
            <img 
              className="w-full h-full object-cover opacity-60 scale-110" 
              src="/assets/images/industries-hero.png"
              alt="Abstract 3D digital visualization of flowing crystalline structures and neon light filaments in deep indigo and cyan hues"
            />
          </div>
          <div className="relative z-20 max-w-screen-2xl mx-auto px-8 w-full">
            <div className="max-w-3xl">
              <span className="label-md uppercase tracking-[0.2em] text-secondary font-bold mb-4 block">Archive Hub</span>
              <h1 className="text-7xl md:text-8xl font-headline font-extrabold tracking-tighter text-on-surface leading-[0.9] mb-6 text-glow">
                The Intelligence <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Stream</span>
              </h1>
              <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
                Exploring the frontier of Digital Obsidian engineering, AI research, and high-performance architectures.
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filter System */}
        <section className="max-w-screen-2xl mx-auto px-8 -mt-12 relative z-30">
          <div className="bg-surface-container-low p-2 rounded-xl border border-outline-variant/15 shadow-2xl flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full flex items-center bg-surface-container-high rounded-lg px-4 py-3 group">
              <span className="material-symbols-outlined text-on-surface-variant mr-3 group-focus-within:text-primary transition-colors">search</span>
              <input 
                className="bg-transparent border-none focus:ring-0 text-on-surface w-full font-body placeholder:text-on-surface-variant/50" 
                placeholder="Search the archive..." 
                type="text"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2 p-1">
              <button className="px-6 py-2.5 rounded-lg bg-primary text-on-primary font-bold text-sm transition-all shadow-[0_0_15px_rgba(143,245,255,0.3)]">All</button>
              <button className="px-6 py-2.5 rounded-lg bg-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-all text-sm font-medium">AI</button>
              <button className="px-6 py-2.5 rounded-lg bg-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-all text-sm font-medium">Security</button>
              <button className="px-6 py-2.5 rounded-lg bg-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-all text-sm font-medium">Infrastructure</button>
              <button className="px-6 py-2.5 rounded-lg bg-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-all text-sm font-medium">Ecommerce</button>
              <button className="px-6 py-2.5 rounded-lg bg-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-all text-sm font-medium">Mobile</button>
            </div>
          </div>
        </section>

        {/* Featured Article Section */}
        <section className="max-w-screen-2xl mx-auto px-8 py-20">
          <div className="group relative overflow-hidden rounded-2xl bg-surface-container-low h-[500px] flex flex-col md:flex-row border border-outline-variant/10">
            <div className="w-full md:w-3/5 h-1/2 md:h-full relative overflow-hidden">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="/assets/images/news-blog.png"
                alt="Futuristic robotic arm precisely manipulating a glowing microchip in a dark, high-tech laboratory setting"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent hidden md:block"></div>
            </div>
            <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-secondary-container/20 text-secondary text-[10px] font-bold tracking-widest uppercase border border-secondary/20">Featured</span>
                <span className="text-on-surface-variant text-xs font-label">12 Min Read</span>
              </div>
              <Link to="/news/obsidian-layer" className="text-4xl font-headline font-extrabold tracking-tight mb-4 group-hover:text-primary transition-colors">
                Exido's Obsidian Layer: Redefining Cloud Security
              </Link>
              <p className="text-on-surface-variant mb-8 line-clamp-3 font-light text-lg">
                An in-depth analysis of next-generation cognitive models that prioritize energy efficiency and sparse activation patterns for enterprise-scale deployment.
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center border border-outline-variant/20">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
                </div>
                <div>
                  <p className="text-sm font-bold">TechCrunch Editorial Team</p>
                  <p className="text-xs text-on-surface-variant">Industry-leading technology publication</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Grid */}
        <section className="max-w-screen-2xl mx-auto px-8 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - ETL Automation */}
            <Link to="/news/etl-automation" className="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all group">
              <div className="h-56 relative">
                <img 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
                  src="/assets/images/news-blog.png"
                  alt="Cybersecurity concept with digital code sequences and lock icon overlaid on a dark technical circuit background"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-background/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold text-primary border border-primary/20">Data Engineering</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">Mar 15, 2024</span>
                  <span className="text-[10px] text-on-surface-variant font-label">8 min read</span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-3 group-hover:text-primary transition-colors">ETL Automation: The Future of Data Integration</h3>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">How Exido's autonomous ETL pipelines are revolutionizing enterprise data workflows with zero-touch orchestration.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-tertiary">Exido Engineering Team</span>
                  <button className="text-primary hover:translate-x-1 transition-transform">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </Link>

            {/* Card 2 - Global Expansion */}
            <Link to="/news/global-expansion" className="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all group">
              <div className="h-56 relative">
                <img 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
                  src="/assets/images/news-satellite.png"
                  alt="Global data network visualization with glowing earth and interconnected lines against dark space"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-background/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold text-primary border border-primary/20">Infrastructure</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">Jan 14, 2024</span>
                  <span className="text-[10px] text-on-surface-variant font-label">15 min read</span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-3 group-hover:text-primary transition-colors">Global Node Expansion: Reaching the Edge of the Atmosphere</h3>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">Exido's historic 500+ node deployment across 40 countries brings sub-10ms latency to 95% of the global population.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-tertiary">Exido Infrastructure Team</span>
                  <button className="text-primary hover:translate-x-1 transition-transform">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </Link>

            {/* Card 3 - Atmospheric Viz */}
            <Link to="/news/atmospheric-viz" className="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all group">
              <div className="h-56 relative">
                <img 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
                  src="/assets/images/news-abstract.png"
                  alt="Abstract mobile UI interface elements floating in 3D space with high-contrast dark theme lighting"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-background/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold text-secondary border border-secondary/20">User Experience</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">Jan 08, 2024</span>
                  <span className="text-[10px] text-on-surface-variant font-label">7 min read</span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-3 group-hover:text-primary transition-colors">Atmospheric Data Visualization Sets New UI Benchmark</h3>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">How Exido's revolutionary UI/UX approach is transforming how enterprises interact with complex datasets.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-tertiary">Wired Design Team</span>
                  <button className="text-primary hover:translate-x-1 transition-transform">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </Link>

            {/* Card 4 - Neural Synapse */}
            <Link to="/news/neural-synapse" className="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all group">
              <div className="h-56 relative">
                <img 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
                  src="/assets/images/news-abstract.png"
                  alt="AI neural network visualization with glowing nodes and connections"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-background/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold text-tertiary border border-tertiary/20">AI Research</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">Jan 08, 2024</span>
                  <span className="text-[10px] text-on-surface-variant font-label">8 min read</span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-3 group-hover:text-primary transition-colors">Neural Synapse Integration for Predictive Commerce Engines</h3>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">Exido's breakthrough AI research introduces neural synapse technology that predicts consumer behavior with 94% accuracy.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-tertiary">Exido AI Research Lab</span>
                  <button className="text-primary hover:translate-x-1 transition-transform">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </Link>
          </div>

          {/* Pagination/Load More */}
          <div className="mt-16 flex justify-center">
            <button className="bg-surface-container-high border border-outline-variant/20 px-8 py-3 rounded-lg text-sm font-bold text-on-surface hover:bg-surface-bright transition-colors">
              Load More Articles
            </button>
          </div>
        </section>

        {/* Research Papers Section */}
        <section className="bg-surface-container-low py-32">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="text-5xl font-headline font-extrabold tracking-tighter mb-4">Research <span className="text-secondary">Papers</span></h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">Rigorous technical explorations and academic submissions from our core engineering team.</p>
              </div>
              <button className="text-primary font-bold flex items-center gap-2 group">
                Browse all whitepapers 
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">trending_flat</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-2xl border border-outline-variant/10 flex gap-6 group hover:border-secondary/30 transition-all">
                <div className="w-16 h-16 shrink-0 bg-secondary/10 rounded flex items-center justify-center border border-secondary/20">
                  <span className="material-symbols-outlined text-secondary text-3xl">description</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2 block">Whitepaper #042</span>
                  <h4 className="text-xl font-headline font-bold mb-2 group-hover:text-secondary transition-colors">Asymmetric Data Sharding for Global Scale</h4>
                  <p className="text-on-surface-variant text-sm mb-6">A mathematical approach to optimizing data locality in heterogeneous cloud environments.</p>
                  <Link to="/news/asymmetric-sharding" className="text-secondary text-sm font-bold uppercase tracking-tighter flex items-center gap-2">
                    Download PDF <span className="material-symbols-outlined text-sm">download</span>
                  </Link>
                </div>
              </div>
              <div className="glass-card p-8 rounded-2xl border border-outline-variant/10 flex gap-6 group hover:border-secondary/30 transition-all">
                <div className="w-16 h-16 shrink-0 bg-secondary/10 rounded flex items-center justify-center border border-secondary/20">
                  <span className="material-symbols-outlined text-secondary text-3xl">terminal</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2 block">Technical Deep-Dive</span>
                  <h4 className="text-xl font-headline font-bold mb-2 group-hover:text-secondary transition-colors">Real-time Anomaly Detection via Ether-Net</h4>
                  <p className="text-on-surface-variant text-sm mb-6">Utilizing temporal convolution networks for proactive infrastructure threat mitigation.</p>
                  <Link to="/news/ether-net-anomaly" className="text-secondary text-sm font-bold uppercase tracking-tighter flex items-center gap-2">
                    Read Full Paper <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription Section */}
        <section className="max-w-screen-2xl mx-auto px-8 py-32">
          <div className="bg-gradient-to-br from-surface-container-highest to-surface-container-low rounded-[2rem] p-12 md:p-24 border border-outline-variant/10 relative overflow-hidden text-center">
            {/* Glowing background accents */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="material-symbols-outlined text-primary text-5xl mb-6">cycle</span>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter mb-6">Synchronize Your <span className="text-primary">Intelligence</span></h2>
              <p className="text-on-surface-variant text-lg mb-10 font-light">Join 40,000+ engineers receiving bi-weekly deep dives into high-performance computing and neural architecture.</p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  className="flex-1 bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-secondary transition-all px-6 py-4 text-on-surface focus:ring-0" 
                  placeholder="Enter your corporate email" 
                  type="email"
                />
                <button className="bg-primary text-on-primary font-bold px-10 py-4 rounded-lg hover:shadow-[0_0_20px_rgba(143,245,255,0.4)] transition-all">
                  Subscribe Now
                </button>
              </form>
              <p className="text-[10px] text-on-surface-variant mt-6 uppercase tracking-widest opacity-60">Encrypted delivery guaranteed. Unsubscribe anytime.</p>
            </div>
          </div>
        </section>
      </main>    </div>
  );
}

export default AllArticles;
