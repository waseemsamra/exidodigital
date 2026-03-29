import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function InsightHub() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary/30 selection:text-primary-fixed">
      <NavBar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative px-8 py-20 max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block label-sm uppercase tracking-[0.2em] text-secondary font-semibold mb-4">
              Knowledge Base
            </span>
            <h1 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter text-on-surface mb-6">
              Insight <span className="text-primary">Hub</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Explore our curated collection of research papers, case studies, and technical deep-dives into emerging technologies.
            </p>
          </div>
        </section>

        {/* Featured Insights */}
        <section className="px-8 py-16 max-w-[1440px] mx-auto">
          <h2 className="text-3xl font-headline font-bold mb-12">Featured Research</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article className="group cursor-pointer bg-surface-container-high rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all">
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  alt="AI Research" 
                  className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" 
                  src="/assets/images/dashboard-preview.png" 
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">AI & Machine Learning</span>
                  <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                  <span className="text-[10px] text-on-surface-variant font-medium">DEC 2025</span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-3 group-hover:text-primary transition-colors">
                  Neural Architecture Search in Production Environments
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                  How automated model optimization is transforming enterprise AI deployment strategies.
                </p>
                <a href="#" className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                  Read More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </article>

            {/* Article 2 */}
            <article className="group cursor-pointer bg-surface-container-high rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all">
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  alt="Data Analytics" 
                  className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" 
                  src="/assets/images/dashboard-preview.png" 
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-secondary">Data Engineering</span>
                  <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                  <span className="text-[10px] text-on-surface-variant font-medium">NOV 2025</span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-3 group-hover:text-primary transition-colors">
                  Real-Time Data Pipelines at Scale
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                  Building resilient streaming architectures for high-frequency data processing.
                </p>
                <a href="#" className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                  Read More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </article>

            {/* Article 3 */}
            <article className="group cursor-pointer bg-surface-container-high rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all">
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  alt="Security" 
                  className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" 
                  src="/assets/images/dashboard-preview.png" 
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">Cybersecurity</span>
                  <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                  <span className="text-[10px] text-on-surface-variant font-medium">OCT 2025</span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-3 group-hover:text-primary transition-colors">
                  Zero-Trust Architecture for Modern Enterprises
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                  Implementing comprehensive security frameworks in distributed systems.
                </p>
                <a href="#" className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                  Read More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Categories Section */}
        <section className="px-8 py-16 bg-surface-container-low">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-3xl font-headline font-bold mb-12">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['AI & Machine Learning', 'Data Engineering', 'Cybersecurity', 'Cloud Infrastructure', 'Mobile Development', 'Ecommerce', 'Enterprise Systems', 'Digital Marketing'].map((category, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-6 bg-surface-container-high rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all group text-center"
                >
                  <span className="material-symbols-outlined text-3xl text-primary mb-3 group-hover:scale-110 transition-transform">
                    category
                  </span>
                  <h3 className="text-sm font-bold text-on-surface">{category}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="px-8 py-24 max-w-[1440px] mx-auto">
          <div className="bg-surface-container-high rounded-2xl p-12 text-center border border-outline-variant/10">
            <span className="material-symbols-outlined text-5xl text-primary mb-6">mail</span>
            <h2 className="text-3xl font-headline font-bold mb-4">Stay Updated</h2>
            <p className="text-on-surface-variant text-lg mb-8 max-w-xl mx-auto">
              Get the latest research insights delivered to your inbox monthly.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="your.email@company.com" 
                className="flex-grow bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-surface px-4 py-4 transition-all rounded-lg"
              />
              <button 
                type="submit"
                className="bg-primary text-on-primary font-bold px-8 py-4 rounded-lg hover:bg-primary-container transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default InsightHub;
