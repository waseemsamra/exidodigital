import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';

function CaseStudyPredictiveTrading() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30">
      <NavBar />
      <main className="pt-24">
        <section className="px-8 py-20 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-widest">AI & Finance</span>
              <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter mb-6">Predictive Trading Algorithm for Hedge Funds</h1>
              <p className="text-on-surface-variant text-xl leading-relaxed mb-8">Neural network-based market analysis processing 50M+ data points per second for alpha generation.</p>
              <div className="flex flex-wrap gap-6">
                <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary">
                  <p className="text-3xl font-headline font-bold text-primary">240%</p>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mt-1">ROI Improvement</p>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-secondary">
                  <p className="text-3xl font-headline font-bold text-secondary">50M+</p>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mt-1">Data Points/Sec</p>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-tertiary">
                  <p className="text-3xl font-headline font-bold text-tertiary">&lt;10μs</p>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mt-1">Latency</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video glass-panel rounded-xl overflow-hidden">
                <img src="/assets/images/dashboard-preview.png" alt="Trading algorithm dashboard" className="w-full h-full object-cover opacity-60" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-20 px-8">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-headline text-4xl font-bold mb-6">The Challenge</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-6">A quantitative hedge fund managing $10B+ AUM struggled with legacy trading systems that couldn't process alternative data sources fast enough to capture market inefficiencies.</p>
                <p className="text-on-surface-variant text-lg leading-relaxed">Their existing models relied on structured financial data with significant latency, missing opportunities in the microseconds where alpha is generated.</p>
              </div>
              <div className="space-y-6">
                <div className="bg-surface p-6 rounded-xl border border-outline-variant/10">
                  <h3 className="font-headline text-xl font-bold mb-4">Key Challenges</h3>
                  <ul className="space-y-3 text-on-surface-variant">
                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-error mt-2"></span><span>High latency in signal processing</span></li>
                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-error mt-2"></span><span>Limited alternative data integration</span></li>
                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-error mt-2"></span><span>Inconsistent alpha generation</span></li>
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
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">neurology</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">Deep Learning Models</h3>
                <p className="text-on-surface-variant leading-relaxed">Transformer-based architecture processing market data, news sentiment, and satellite imagery for predictive signals.</p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-secondary text-2xl">speed</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">Ultra-Low Latency</h3>
                <p className="text-on-surface-variant leading-relaxed">FPGA-accelerated inference achieving sub-10 microsecond decision cycles for high-frequency strategies.</p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-tertiary text-2xl">security</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">Risk Management</h3>
                <p className="text-on-surface-variant leading-relaxed">Real-time portfolio risk monitoring with automated position sizing and dynamic hedging protocols.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-20 px-8">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="font-headline text-4xl font-bold mb-12 text-center">Measurable Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center"><p className="text-5xl font-headline font-black text-primary mb-2">240%</p><p className="text-sm uppercase tracking-widest text-on-surface-variant">ROI Improvement</p></div>
              <div className="text-center"><p className="text-5xl font-headline font-black text-secondary mb-2">50M+</p><p className="text-sm uppercase tracking-widest text-on-surface-variant">Data Points/Sec</p></div>
              <div className="text-center"><p className="text-5xl font-headline font-black text-tertiary mb-2">&lt;10μs</p><p className="text-sm uppercase tracking-widest text-on-surface-variant">Decision Latency</p></div>
              <div className="text-center"><p className="text-5xl font-headline font-black text-primary mb-2">$2.4B</p><p className="text-sm uppercase tracking-widest text-on-surface-variant">Alpha Generated</p></div>
            </div>
          </div>
        </section>

        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto bg-surface-container-high rounded-2xl p-12 text-center border border-outline-variant/10">
            <h2 className="font-headline text-3xl font-bold mb-4">Ready to Gain Your Edge?</h2>
            <p className="text-on-surface-variant mb-8">Discover how AI-powered trading can transform your fund's performance.</p>
            <a href="/contact" className="inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-4 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(143,245,255,0.4)] transition-all">Schedule a Consultation</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CaseStudyPredictiveTrading;
