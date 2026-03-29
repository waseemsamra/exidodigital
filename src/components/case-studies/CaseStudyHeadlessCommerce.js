import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';

function CaseStudyHeadlessCommerce() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30">
      <NavBar />
      <main className="pt-24">
        <section className="px-8 py-20 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded bg-secondary/10 text-secondary text-xs font-bold mb-4 uppercase tracking-widest">Ecommerce Platform</span>
              <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter mb-6">Headless Commerce for Luxury Brands</h1>
              <p className="text-on-surface-variant text-xl leading-relaxed mb-8">Omnichannel retail experience serving 2M+ customers with sub-100ms page load times globally.</p>
              <div className="flex flex-wrap gap-6">
                <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-secondary">
                  <p className="text-3xl font-headline font-bold text-secondary">2M+</p>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mt-1">Customers Served</p>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary">
                  <p className="text-3xl font-headline font-bold text-primary">&lt;100ms</p>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mt-1">Page Load Time</p>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-tertiary">
                  <p className="text-3xl font-headline font-bold text-tertiary">67%</p>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mt-1">Conversion Increase</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video glass-panel rounded-xl overflow-hidden">
                <img src="/assets/images/dashboard-preview.png" alt="Headless commerce dashboard" className="w-full h-full object-cover opacity-60" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-20 px-8">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-headline text-4xl font-bold mb-6">The Challenge</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-6">A luxury fashion conglomerate with 15+ brands struggled with monolithic ecommerce platforms that couldn't deliver personalized experiences across markets. Their legacy system required weeks to launch new campaigns and couldn't handle flash sale traffic spikes.</p>
                <p className="text-on-surface-variant text-lg leading-relaxed">With 40% year-over-year growth in digital demand, they needed a composable architecture that could scale globally while maintaining brand uniqueness.</p>
              </div>
              <div className="space-y-6">
                <div className="bg-surface p-6 rounded-xl border border-outline-variant/10">
                  <h3 className="font-headline text-xl font-bold mb-4">Key Challenges</h3>
                  <ul className="space-y-3 text-on-surface-variant">
                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-error mt-2"></span><span>6-week average campaign launch time</span></li>
                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-error mt-2"></span><span>Site crashes during peak traffic</span></li>
                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-error mt-2"></span><span>Inconsistent brand experiences</span></li>
                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-error mt-2"></span><span>Limited personalization capabilities</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-8">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="font-headline text-4xl font-bold mb-12 text-center">The Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-secondary text-2xl">api</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">API-First Architecture</h3>
                <p className="text-on-surface-variant leading-relaxed">Decoupled frontend and backend enabling independent scaling, rapid iteration, and seamless third-party integrations.</p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">cloud</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">Global Edge CDN</h3>
                <p className="text-on-surface-variant leading-relaxed">Distributed content delivery across 200+ edge locations ensuring sub-100ms response times worldwide.</p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-tertiary text-2xl">tune</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">Personalization Engine</h3>
                <p className="text-on-surface-variant leading-relaxed">AI-driven product recommendations and dynamic content adapting to individual customer preferences and behavior.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-20 px-8">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="font-headline text-4xl font-bold mb-12 text-center">Measurable Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center"><p className="text-5xl font-headline font-black text-secondary mb-2">2M+</p><p className="text-sm uppercase tracking-widest text-on-surface-variant">Customers Served</p></div>
              <div className="text-center"><p className="text-5xl font-headline font-black text-primary mb-2">&lt;100ms</p><p className="text-sm uppercase tracking-widest text-on-surface-variant">Page Load Time</p></div>
              <div className="text-center"><p className="text-5xl font-headline font-black text-tertiary mb-2">67%</p><p className="text-sm uppercase tracking-widest text-on-surface-variant">Conversion Increase</p></div>
              <div className="text-center"><p className="text-5xl font-headline font-black text-secondary mb-2">90%</p><p className="text-sm uppercase tracking-widest text-on-surface-variant">Faster Campaigns</p></div>
            </div>
          </div>
        </section>

        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto bg-surface-container-high rounded-2xl p-12 text-center border border-outline-variant/10">
            <h2 className="font-headline text-3xl font-bold mb-4">Ready to Reimagine Commerce?</h2>
            <p className="text-on-surface-variant mb-8">Discover how headless architecture can accelerate your digital transformation.</p>
            <a href="/contact" className="inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-4 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(143,245,255,0.4)] transition-all">Schedule a Consultation</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CaseStudyHeadlessCommerce;
