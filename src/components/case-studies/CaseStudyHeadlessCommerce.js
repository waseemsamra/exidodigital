import React from 'react';

function CaseStudyHeadlessCommerce() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary">      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[870px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
            <img 
              src="/assets/images/shopify-mobile.png" 
              alt="Luxury ecommerce platform with high-end fashion products, elegant UI design, and seamless shopping experience"
              className="w-full h-full object-cover grayscale-[0.5] contrast-[1.1]" 
            />
          </div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="inline-block label-sm text-secondary font-bold tracking-[0.3em] uppercase mb-6 drop-shadow-[0_0_4px_#ac89ff]">
                Phase 02: Active Implementation
              </span>
              <h1 className="font-headline text-6xl font-extrabold tracking-tighter text-on-background leading-tight mb-8">
                Headless Commerce for <span className="text-primary glow-text">Luxury Brands</span>
              </h1>
              <p className="text-on-surface-variant text-xl leading-relaxed font-light max-w-xl mb-12">
                How Exido's headless architecture delivers omnichannel retail experiences serving 2M+ customers with sub-100ms page load times globally.
              </p>
              <div className="flex items-center space-x-8">
                <button className="hero-gradient text-on-primary px-10 py-4 font-headline font-bold text-sm uppercase tracking-widest hover:shadow-[0_0_25px_#8ff5ff] transition-all duration-300 rounded-lg">
                  Read Full Report
                </button>
                <div className="flex flex-col">
                  <span className="text-primary font-bold font-headline text-2xl">2M+</span>
                  <span className="text-on-surface-variant text-[10px] uppercase tracking-widest">Customers Served</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Results */}
        <section className="py-24 px-12 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-2 glass-panel p-10 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-8xl text-secondary">shopping_bag</span>
                </div>
                <span className="text-secondary font-headline text-6xl font-black mb-2 block">67%</span>
                <h3 className="text-on-background font-headline text-xl font-bold mb-4">Conversion Increase</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Improved checkout flow and personalized product discovery driving higher cart completion.</p>
              </div>
              
              <div className="glass-panel p-10 rounded-xl border-l-4 border-primary">
                <span className="text-primary font-headline text-4xl font-black mb-2 block">&lt;100ms</span>
                <h3 className="text-on-background font-headline text-lg font-bold mb-2">Page Load Time</h3>
                <p className="text-on-surface-variant text-xs uppercase tracking-widest">Global Performance</p>
              </div>

              <div className="glass-panel p-10 rounded-xl">
                <span className="text-secondary font-headline text-4xl font-black mb-2 block">90%</span>
                <h3 className="text-on-background font-headline text-lg font-bold mb-2">Faster Campaigns</h3>
                <p className="text-on-surface-variant text-xs uppercase tracking-widest">Time to Market</p>
              </div>

              <div className="md:col-span-4 glass-panel p-8 flex justify-between items-center rounded-xl bg-surface-container-high/40">
                <div className="flex items-center space-x-4">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="font-headline font-bold uppercase tracking-widest text-sm">Data Integrity Protocol: 100% Verified across Commerce Mesh</span>
                </div>
                <div className="h-px flex-grow mx-12 bg-outline-variant/20"></div>
                <div className="flex space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse delay-75"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Breakdown: Challenge & Solution */}
        <section className="py-32 px-12 bg-surface">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <div className="mb-16">
                <span className="text-secondary label-md uppercase font-bold tracking-widest mb-4 block">01. The Challenge</span>
                <h2 className="font-headline text-4xl font-extrabold text-on-background mb-8 tracking-tight">The Monolith Problem</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                  A luxury fashion conglomerate with 15+ brands struggled with monolithic ecommerce platforms that couldn't deliver personalized experiences across markets. Their legacy system required weeks to launch new campaigns and couldn't handle flash sale traffic spikes.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-error text-sm mt-1">close</span>
                    <span>6-week average campaign launch time</span>
                  </li>
                  <li className="flex items-start space-x-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-error text-sm mt-1">close</span>
                    <span>Site crashes during peak traffic events</span>
                  </li>
                  <li className="flex items-start space-x-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-error text-sm mt-1">close</span>
                    <span>Inconsistent brand experiences across channels</span>
                  </li>
                </ul>
              </div>

              <div>
                <span className="text-primary label-md uppercase font-bold tracking-widest mb-4 block">02. The Solution</span>
                <h2 className="font-headline text-4xl font-extrabold text-on-background mb-8 tracking-tight">Headless Architecture</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  We implemented a proprietary <span className="text-on-background font-semibold">API-First Commerce Platform</span> with distributed edge CDN ensuring sub-100ms response times worldwide and independent frontend scaling for each brand.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col space-y-8">
              <div className="glass-panel p-1 rounded-2xl">
                <img 
                  src="/assets/images/ecommerce-hero.png" 
                  alt="Headless commerce architecture visualization showing API connections between frontend and backend systems"
                  className="w-full h-80 object-cover rounded-xl" 
                />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 bg-surface-container-low rounded-xl">
                  <span className="material-symbols-outlined text-secondary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>api</span>
                  <h4 className="font-headline font-bold text-on-background mb-2">API-First Architecture</h4>
                  <p className="text-on-surface-variant text-xs">Decoupled frontend and backend enabling independent scaling, rapid iteration, and seamless third-party integrations.</p>
                </div>
                <div className="p-8 bg-surface-container-low rounded-xl">
                  <span className="material-symbols-outlined text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
                  <h4 className="font-headline font-bold text-on-background mb-2">Global Edge CDN</h4>
                  <p className="text-on-surface-variant text-xs">Distributed content delivery across 200+ edge locations ensuring sub-100ms response times worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Component */}
        <section className="py-32 px-12 bg-surface-container-low">
          <div className="max-w-7xl mx-auto text-center mb-20">
            <span className="text-primary-dim label-sm font-bold tracking-[0.4em] uppercase mb-4 block">The Exido Architecture</span>
            <h2 className="font-headline text-5xl font-black text-on-background tracking-tighter">The Tech Stack</h2>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-surface-container-highest rounded-full flex items-center justify-center mb-8 border border-outline-variant/20 group-hover:border-secondary transition-colors duration-500">
                <span className="material-symbols-outlined text-3xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>api</span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-4 text-on-background">Headless Commerce</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed px-4">Decoupled frontend and backend enabling rapid iteration and independent scaling across brands.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-surface-container-highest rounded-full flex items-center justify-center mb-8 border border-outline-variant/20 group-hover:border-primary transition-colors duration-500">
                <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-4 text-on-background">Edge CDN</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed px-4">200+ edge locations worldwide delivering sub-100ms page loads for global customers.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-surface-container-highest rounded-full flex items-center justify-center mb-8 border border-outline-variant/20 group-hover:border-secondary transition-colors duration-500">
                <span className="material-symbols-outlined text-3xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>tune</span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-4 text-on-background">Personalization Engine</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed px-4">AI-driven product recommendations and dynamic content adapting to individual preferences.</p>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-32 px-12 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/5 blur-[120px] rounded-full"></div>
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <span className="material-symbols-outlined text-6xl text-secondary mb-12 opacity-40">format_quote</span>
            <blockquote className="font-headline text-4xl md:text-5xl font-bold text-on-background leading-tight mb-12 tracking-tight">
              "Exido's headless platform transformed our digital commerce. We now launch campaigns in days instead of weeks, and our conversion rates have never been higher."
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-surface-container-high border border-outline-variant mb-4 overflow-hidden">
                <img 
                  src="/assets/images/design-julian.png" 
                  alt="Professional portrait of luxury retail executive"
                  className="w-full h-full object-cover" 
                />
              </div>
              <p className="font-headline font-bold text-on-background text-lg uppercase tracking-wider">Chief Digital Officer</p>
              <p className="text-on-surface-variant text-xs uppercase tracking-[0.2em] mt-1">Luxury Fashion Conglomerate</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-12">
          <div className="max-w-7xl mx-auto bg-surface-bright/40 rounded-2xl p-20 text-center border border-outline-variant/10 backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all duration-700"></div>
            <h2 className="font-headline text-5xl font-black text-on-background mb-8 tracking-tighter">Reimagine Your Commerce Platform.</h2>
            <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto">Discover how headless architecture can accelerate your digital transformation.</p>
            <a href="/contact" className="hero-gradient text-on-primary px-12 py-5 font-headline font-bold text-sm uppercase tracking-widest hover:shadow-[0_0_30px_#8ff5ff] transition-all duration-300 rounded-lg inline-block">
              Schedule a consultation
            </a>
          </div>
        </section>
      </main>    </div>
  );
}

export default CaseStudyHeadlessCommerce;
