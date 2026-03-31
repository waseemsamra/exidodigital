import React from 'react';

function CaseStudyFleetManagement() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30">      <main className="pt-24">
        <section className="px-8 py-20 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded bg-tertiary/10 text-tertiary text-xs font-bold mb-4 uppercase tracking-widest">Mobile & IoT</span>
              <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter mb-6">Connected Vehicle Fleet Management App</h1>
              <p className="text-on-surface-variant text-xl leading-relaxed mb-8">Native iOS/Android platform managing 15,000+ vehicles with real-time AI route optimization.</p>
              <div className="flex flex-wrap gap-6">
                <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-tertiary">
                  <p className="text-3xl font-headline font-bold text-tertiary">15K+</p>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mt-1">Vehicles Managed</p>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary">
                  <p className="text-3xl font-headline font-bold text-primary">24%</p>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mt-1">Reduced Fuel Costs</p>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-secondary">
                  <p className="text-3xl font-headline font-bold text-secondary">99.9%</p>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mt-1">Platform Uptime</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video glass-panel rounded-xl overflow-hidden">
                <img src="/assets/images/dashboard-preview.png" alt="Fleet management app" className="w-full h-full object-cover opacity-60" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-20 px-8">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-headline text-4xl font-bold mb-6">The Challenge</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-6">A national logistics company struggled with inefficient fleet operations, resulting in excessive fuel costs, missed deliveries, and driver dissatisfaction. Their legacy dispatch system couldn't provide real-time visibility or optimize routes dynamically.</p>
                <p className="text-on-surface-variant text-lg leading-relaxed">With 15,000+ vehicles across 50 states, they needed a unified mobile platform that could connect drivers, dispatchers, and customers in real-time.</p>
              </div>
              <div className="space-y-6">
                <div className="bg-surface p-6 rounded-xl border border-outline-variant/10">
                  <h3 className="font-headline text-xl font-bold mb-4">Key Challenges</h3>
                  <ul className="space-y-3 text-on-surface-variant">
                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-error mt-2"></span><span>30% empty miles due to poor routing</span></li>
                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-error mt-2"></span><span>No real-time vehicle tracking</span></li>
                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-error mt-2"></span><span>Manual paperwork consuming 2hrs/driver daily</span></li>
                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-error mt-2"></span><span>Customer complaints about delivery visibility</span></li>
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
                <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-tertiary text-2xl">smartphone</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">Native Mobile Apps</h3>
                <p className="text-on-surface-variant leading-relaxed">iOS and Android driver apps with offline-first architecture, electronic logging, and proof of delivery capture.</p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">route</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">AI Route Optimization</h3>
                <p className="text-on-surface-variant leading-relaxed">Machine learning algorithms analyzing traffic, weather, and delivery windows to optimize routes in real-time.</p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-secondary text-2xl">location_on</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">Real-Time Tracking</h3>
                <p className="text-on-surface-variant leading-relaxed">Live GPS tracking with geofencing, ETA predictions, and automated customer notifications.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-20 px-8">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="font-headline text-4xl font-bold mb-12 text-center">Measurable Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center"><p className="text-5xl font-headline font-black text-tertiary mb-2">15K+</p><p className="text-sm uppercase tracking-widest text-on-surface-variant">Vehicles Managed</p></div>
              <div className="text-center"><p className="text-5xl font-headline font-black text-primary mb-2">24%</p><p className="text-sm uppercase tracking-widest text-on-surface-variant">Reduced Fuel Costs</p></div>
              <div className="text-center"><p className="text-5xl font-headline font-black text-secondary mb-2">99.9%</p><p className="text-sm uppercase tracking-widest text-on-surface-variant">Platform Uptime</p></div>
              <div className="text-center"><p className="text-5xl font-headline font-black text-tertiary mb-2">40%</p><p className="text-sm uppercase tracking-widest text-on-surface-variant">Fewer Empty Miles</p></div>
            </div>
          </div>
        </section>

        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto bg-surface-container-high rounded-2xl p-12 text-center border border-outline-variant/10">
            <h2 className="font-headline text-3xl font-bold mb-4">Ready to Optimize Your Fleet?</h2>
            <p className="text-on-surface-variant mb-8">Discover how mobile-first fleet management can reduce costs and improve efficiency.</p>
            <a href="/contact" className="inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-4 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(143,245,255,0.4)] transition-all">Schedule a Consultation</a>
          </div>
        </section>
      </main>    </div>
  );
}

export default CaseStudyFleetManagement;
