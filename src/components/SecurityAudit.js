import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function SecurityAudit() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30">
      <NavBar />
      <main className="pt-32 pb-20 px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* Header Section */}
        <header className="mb-16 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-secondary mb-4 block">
              Platform Compliance Report 2024.Q3
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface mb-6 leading-[0.9]">
              Security <span className="text-primary">Audit</span>
            </h1>
            <p className="text-on-surface-variant text-xl max-w-xl leading-relaxed">
              A high-level technical evaluation of Exido's architectural resilience, data integrity protocols, and global safety standards.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="bg-surface-container-low p-6 rounded-2xl border-l-4 border-primary shadow-xl">
              <p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-1">Last Full Scan</p>
              <p className="text-3xl font-headline font-bold">14 Oct 2024</p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-2xl border-l-4 border-secondary shadow-xl">
              <p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-1">Posture Score</p>
              <p className="text-3xl font-headline font-bold">98.2<span className="text-sm text-on-surface-variant/50 ml-1">/100</span></p>
            </div>
          </div>
        </header>

        {/* Bento Grid: Key Findings */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Overall Health Visualization */}
          <div className="lg:col-span-2 bg-surface-container-low rounded-2xl p-8 relative overflow-hidden group border border-outline-variant/10 shadow-2xl">
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-10">
                <h3 className="font-headline text-2xl font-bold">Threat Mitigation Velocity</h3>
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined">trending_up</span>
                  <span className="text-sm font-bold uppercase tracking-widest">Optimal</span>
                </div>
              </div>
              <div className="flex items-end gap-3 h-56 mb-8">
                <div className="w-full bg-surface-container-highest rounded-t-md h-[30%] hover:bg-primary transition-all duration-500"></div>
                <div className="w-full bg-surface-container-highest rounded-t-md h-[45%] hover:bg-primary transition-all duration-500"></div>
                <div className="w-full bg-surface-container-highest rounded-t-md h-[40%] hover:bg-primary transition-all duration-500"></div>
                <div className="w-full bg-primary/40 rounded-t-md h-[75%] hover:bg-primary transition-all duration-500"></div>
                <div className="w-full bg-primary/60 rounded-t-md h-[85%] hover:bg-primary transition-all duration-500"></div>
                <div className="w-full bg-primary rounded-t-md h-[95%]"></div>
                <div className="w-full bg-primary/80 rounded-t-md h-[90%] hover:bg-primary transition-all duration-500"></div>
              </div>
              <div className="flex justify-between text-xs uppercase font-bold text-on-surface-variant tracking-widest">
                <span>MAY</span>
                <span>JUN</span>
                <span>JUL</span>
                <span>AUG</span>
                <span>SEP</span>
                <span>OCT</span>
                <span>CURRENT</span>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] group-hover:bg-primary/10 transition-colors duration-700"></div>
          </div>

          {/* Vulnerability Counter */}
          <div className="bg-surface-container-high rounded-2xl p-8 flex flex-col justify-between border border-outline-variant/10 shadow-2xl">
            <div>
              <h3 className="font-headline text-2xl font-bold mb-3">Live Findings</h3>
              <p className="text-on-surface-variant text-sm mb-10 leading-relaxed">Real-time tracking of active security items requiring engineering review or structural hardening.</p>
            </div>
            <div className="space-y-8">
              <div className="flex justify-between items-center group cursor-default">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-error animate-pulse"></div>
                  <span className="text-base font-semibold">Critical</span>
                </div>
                <span className="px-4 py-1.5 bg-error-container/20 text-error-dim rounded-full text-sm font-bold border border-error/20">0</span>
              </div>
              <div className="flex justify-between items-center group cursor-default">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-base font-semibold">High Priority</span>
                </div>
                <span className="px-4 py-1.5 bg-secondary-container/20 text-secondary rounded-full text-sm font-bold border border-secondary/20">2</span>
              </div>
              <div className="flex justify-between items-center group cursor-default">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-outline"></div>
                  <span className="text-base font-semibold">Moderate</span>
                </div>
                <span className="px-4 py-1.5 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-bold border border-outline-variant/20">12</span>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology & Remediation Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
          <section className="space-y-10">
            <div>
              <h3 className="text-secondary text-xs uppercase font-bold tracking-[0.3em] mb-6">Security Methodology</h3>
              <h2 className="text-4xl font-headline font-bold mb-8 leading-tight">Zero-Trust Verification Engine</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                Our platform utilizes a multi-layered defense strategy, combining real-time bytecode analysis with manual red-team penetration testing to ensure total system integrity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <div>
                    <p className="text-base font-bold mb-1">Logic Inspection</p>
                    <p className="text-sm text-on-surface-variant">Deep bytecode auditing of ledger operations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                  <div>
                    <p className="text-base font-bold mb-1">Entropy Stress</p>
                    <p className="text-sm text-on-surface-variant">Cryptographic randomness validation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-variant/40 p-1 overflow-hidden rounded-2xl border border-outline-variant/20 shadow-xl">
              <img 
                alt="Cybersecurity server room" 
                className="w-full h-64 object-cover rounded-xl grayscale opacity-60 hover:grayscale-0 transition-all duration-700" 
                src="/assets/images/dashboard-preview.png" 
              />
            </div>
          </section>

          <section className="bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/10 shadow-2xl">
            <div className="px-8 py-8 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container/30">
              <h3 className="font-headline font-bold text-xl">Recent Resolutions</h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">88% Resolution Rate</span>
              </div>
            </div>
            <div className="divide-y divide-outline-variant/10">
              {/* Remediation Item 1 */}
              <div className="p-8 group hover:bg-surface-container-high transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] uppercase font-bold bg-secondary/10 text-secondary border border-secondary/20 px-3 py-1 rounded-full">Resolved</span>
                  <span className="text-xs font-mono text-on-surface-variant opacity-60">ID: EXI-SEC-0042</span>
                </div>
                <h4 className="font-bold text-xl mb-3">Auth-Relay Protocol Hardening</h4>
                <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">Closed potential for unauthenticated metadata access through shadow-route manipulation in the gateway layer.</p>
                <div className="flex items-center gap-6">
                  <div className="flex-1 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-full"></div>
                  </div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] whitespace-nowrap">Verified Fix</span>
                </div>
              </div>

              {/* Remediation Item 2 */}
              <div className="p-8 group hover:bg-surface-container-high transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] uppercase font-bold bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full">In Progress</span>
                  <span className="text-xs font-mono text-on-surface-variant opacity-60">ID: EXI-SEC-0119</span>
                </div>
                <h4 className="font-bold text-xl mb-3">V1 API Fragmentation Guard</h4>
                <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">Deployment of advanced rate-limiting logic to prevent header-based bypass attempts on legacy endpoints.</p>
                <div className="flex items-center gap-6">
                  <div className="flex-1 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[65%]"></div>
                  </div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] whitespace-nowrap">Deploying</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Compliance Certifications */}
        <section className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="font-headline text-3xl font-bold mb-4">Global Compliance Standards</h3>
            <p className="text-on-surface-variant">Exido maintains active certification with the world's most rigorous digital security and privacy frameworks.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'verified_user', title: 'SOC 2', subtitle: 'Type II Compliant', color: 'primary' },
              { icon: 'gavel', title: 'ISO 27001', subtitle: 'Global Standard', color: 'secondary' },
              { icon: 'shield_with_heart', title: 'GDPR', subtitle: 'Privacy Tier A', color: 'primary' },
              { icon: 'account_balance', title: 'FINRA', subtitle: 'Institutional Grade', color: 'secondary' }
            ].map((cert, index) => (
              <div key={index} className="glass-panel p-10 rounded-2xl text-center border border-white/5 hover:-translate-y-2 transition-all duration-300 shadow-xl group">
                <div className={`w-16 h-16 bg-${cert.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-${cert.color}/20 transition-colors`}>
                  <span className={`material-symbols-outlined text-${cert.color} text-3xl`} style={{ fontVariationSettings: "'FILL' 1" }}>{cert.icon}</span>
                </div>
                <p className="font-headline font-extrabold text-2xl tracking-tighter mb-2">{cert.title}</p>
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-[0.2em]">{cert.subtitle}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SecurityAudit;
