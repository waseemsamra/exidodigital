import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';

function CaseStudyDiagnosticAI() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      <NavBar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex flex-col justify-center px-8 md:px-24 hero-gradient overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img 
              alt="" 
              className="w-full h-full object-cover" 
              src="/assets/images/neural-network.png"
            />
          </div>
          <div className="relative z-10 max-w-5xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-secondary"></span>
              <span className="font-headline font-bold uppercase tracking-[0.2em] text-secondary text-xs">Clinical Intelligence Case Study 042</span>
            </div>
            <h1 className="font-headline text-5xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 glow-text">
              Transforming Oncology <br/>
              <span className="text-primary-fixed-dim">with Precision Intelligence</span>
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-12">
              Visualizing AI-driven diagnostic acceleration and genomic analysis. Redefining the speed of care through multi-modal transformer synthesis.
            </p>
            <div className="flex flex-wrap gap-12 border-t border-outline-variant/20 pt-12">
              <div className="flex flex-col">
                <span className="font-headline text-4xl font-black text-primary">65%</span>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant mt-2 font-bold">Faster Treatment</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-4xl font-black text-primary">94%</span>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant mt-2 font-bold">Accuracy Gain</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-4xl font-black text-primary">100%</span>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant mt-2 font-bold">Compliance</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge & Solution Bento Grid */}
        <section className="py-24 px-8 md:px-24 bg-surface">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* The Challenge */}
            <div className="md:col-span-5 bg-surface-container-low p-10 rounded-xl relative overflow-hidden group">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-error mb-6 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                <h3 className="font-headline text-3xl font-bold mb-4">The Challenge: <br/>The Diagnostic Lag</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Addressing the critical 4-week window between biopsy and personalized treatment planning. Traditional oncology workflows suffer from siloed data and manual pathology interpretation, creating life-threatening bottlenecks in patient care.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 opacity-10 translate-x-10 translate-y-10 group-hover:translate-x-0 transition-transform duration-700">
                <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>timer_off</span>
              </div>
            </div>

            {/* The Solution */}
            <div className="md:col-span-7 bg-surface-container-high p-10 rounded-xl border border-primary/5">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-1">
                  <span className="material-symbols-outlined text-primary mb-6 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
                  <h3 className="font-headline text-3xl font-bold mb-4">The Solution: <br/>HEAL_AI Clinical Kernel</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Deployment of a secure, zero-trust clinical intelligence layer for real-time pathology and radiological synthesis. The Kernel bridges clinical silos to provide an unified diagnostic view in milliseconds.
                  </p>
                </div>
                <div className="w-full md:w-64 aspect-square glass-panel rounded-lg flex items-center justify-center border border-outline-variant/10">
                  <img 
                    alt="AI Brain" 
                    className="w-full h-full object-cover rounded-lg opacity-60" 
                    src="/assets/images/brain-image.png"
                  />
                </div>
              </div>
            </div>

            {/* The Tech Stack */}
            <div className="md:col-span-12 bg-surface-container-low p-12 rounded-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-md">
                  <h4 className="font-headline text-sm uppercase tracking-[0.3em] text-secondary font-extrabold mb-4">Architecture</h4>
                  <h3 className="font-headline text-4xl font-bold mb-6">The Tech Stack</h3>
                  <p className="text-on-surface-variant">Proprietary infrastructure designed for the highest level of medical integrity and sovereign data protection.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full md:w-auto">
                  <div className="p-6 bg-surface-container-highest border-b-2 border-primary-dim">
                    <span className="material-symbols-outlined text-primary mb-4">lan</span>
                    <h5 className="font-bold text-sm uppercase tracking-wider mb-2">Federated Learning</h5>
                    <p className="text-xs text-on-surface-variant">Private model training across institutions.</p>
                  </div>
                  <div className="p-6 bg-surface-container-highest border-b-2 border-secondary">
                    <span className="material-symbols-outlined text-secondary mb-4">account_tree</span>
                    <h5 className="font-bold text-sm uppercase tracking-wider mb-2">Multi-Modal Transformers</h5>
                    <p className="text-xs text-on-surface-variant">Unified pathology and imaging analysis.</p>
                  </div>
                  <div className="p-6 bg-surface-container-highest border-b-2 border-tertiary">
                    <span className="material-symbols-outlined text-tertiary mb-4">encrypted</span>
                    <h5 className="font-bold text-sm uppercase tracking-wider mb-2">Sovereign Data Enclaves</h5>
                    <p className="text-xs text-on-surface-variant">Zero-trust computational environments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 px-8 md:px-24 bg-surface-container-low relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            <span className="material-symbols-outlined text-6xl text-primary/30 mb-8">format_quote</span>
            <blockquote className="font-headline text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-12">
              "The integration of the HEAL_AI Clinical Kernel has transformed our oncology department from a reactive environment into a predictive powerhouse. We are seeing patient outcomes improve simply because we can act weeks earlier."
            </blockquote>
            <div className="flex items-center gap-6">
              <img 
                alt="Chief Medical Officer" 
                className="w-20 h-20 rounded-full object-cover border-2 border-primary grayscale hover:grayscale-0 transition-all" 
                src="/assets/images/cto-elena.png"
              />
              <div className="text-left">
                <p className="font-bold text-on-surface text-xl">Dr. Julian Vance</p>
                <p className="text-on-surface-variant uppercase tracking-widest text-xs font-bold">Chief Medical Officer, Vanguard Research Hospital</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-8 text-center bg-surface relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
          <div className="relative z-10">
            <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
              Scale Your Clinical <br/><span className="text-primary">Intelligence</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-12 py-5 rounded-lg font-bold text-lg uppercase tracking-widest hover:shadow-[0_0_30px_rgba(143,245,255,0.4)] transition-all inline-block">
                Request Protocol Access
              </a>
              <button className="bg-surface-container-highest border border-outline-variant/30 text-on-surface px-12 py-5 rounded-lg font-bold text-lg uppercase tracking-widest hover:bg-surface-bright transition-all">
                View Tech Specs
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CaseStudyDiagnosticAI;
