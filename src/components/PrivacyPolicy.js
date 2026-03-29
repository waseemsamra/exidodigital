import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function PrivacyPolicy() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30">
      <NavBar />
      <main className="pt-24 px-8 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        {/* Hero Header */}
        <header className="mb-20">
          <div className="flex flex-col lg:flex-row justify-between items-end border-b border-outline-variant/15 pb-8 gap-6">
            <div className="max-w-2xl">
              <span className="label-md uppercase tracking-[0.2em] text-secondary font-bold text-xs mb-4 block">
                Compliance & Trust
              </span>
              <h1 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter text-on-surface mb-6 leading-none">
                Privacy Policy
              </h1>
              <p className="text-lg text-on-surface-variant font-light leading-relaxed">
                Our commitment to data sovereignty and transparent computational ethics. This document outlines how Exido manages user identity and data streams.
              </p>
            </div>
            <div className="text-right">
              <div className="text-on-surface-variant text-xs uppercase tracking-widest mb-1">Last Updated</div>
              <div className="text-primary font-headline font-bold">OCT 24, 2024</div>
            </div>
          </div>
        </header>

        {/* Content Sections */}
        <div className="space-y-32">
          {/* Section 1: Introduction */}
          <section className="relative" id="introduction">
            <div className="absolute -left-10 top-0 w-1 h-12 bg-secondary/50 hidden md:block"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <h2 className="text-2xl font-headline font-bold text-on-surface tracking-tight">Introduction</h2>
              </div>
              <div className="lg:col-span-8">
                <div className="space-y-6 text-on-surface-variant leading-relaxed font-light">
                  <p>Exido ("we," "our," or "us") operates the high-performance ether-compute platform. We respect your privacy and are committed to protecting it through our compliance with this policy.</p>
                  <p>This policy describes the types of information we may collect from you or that you may provide when you visit the Exido console or use our distributed API services.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Data Collection */}
          <section id="data-collection">
            <div className="mb-12">
              <h2 className="text-2xl font-headline font-bold text-on-surface tracking-tight mb-4">Data Collection</h2>
              <div className="h-1 w-24 bg-primary"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-surface-container-low p-8 rounded-lg border border-outline-variant/10 group hover:bg-surface-container-high transition-all">
                <div className="mb-6 bg-primary/10 w-12 h-12 flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-primary">person_search</span>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-4">Direct Identifiers</h3>
                <p className="text-on-surface-variant font-light leading-relaxed">
                  We collect information that identifies you specifically, including your legal name, authorized email address, and encrypted billing credentials. This is required for secure authentication and service provisioning.
                </p>
              </div>
              <div className="bg-surface-container-highest p-8 rounded-lg border border-outline-variant/10 group">
                <h3 className="text-xl font-headline font-bold text-on-surface mb-4">Telemetric Data</h3>
                <p className="text-on-surface-variant font-light leading-relaxed text-sm">
                  Automated collection of IP addresses, hardware signatures, and browser latency benchmarks.
                </p>
                <div className="mt-8 flex justify-end">
                  <span className="material-symbols-outlined text-secondary/40 text-4xl group-hover:scale-110 transition-transform">sensors</span>
                </div>
              </div>
              <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/10">
                <h3 className="text-xl font-headline font-bold text-on-surface mb-4">Usage Patterns</h3>
                <p className="text-on-surface-variant font-light leading-relaxed text-sm">
                  We monitor API call frequencies and resource allocation to optimize the global node network.
                </p>
              </div>
              <div className="md:col-span-2 relative overflow-hidden bg-surface-container-low p-8 rounded-lg border border-outline-variant/10 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-xl font-headline font-bold text-on-surface mb-4">Cookies & Persistence</h3>
                  <p className="text-on-surface-variant font-light leading-relaxed">
                    Local storage tokens are utilized to maintain session integrity across distributed environments. No third-party tracking scripts are executed within the core console.
                  </p>
                </div>
                <div className="w-full md:w-48 h-32 rounded bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary/20 text-6xl">database</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Use of Data */}
          <section className="glass-panel p-12 rounded-xl border border-outline-variant/5 bg-surface-container-low/40" id="usage">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-headline font-extrabold text-on-surface mb-6 tracking-tight">How We Use Your Information</h2>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  Data utilization is strictly confined to service enhancement and protocol security. We do not engage in data brokerage or advertising profiling.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                    <span className="text-on-surface">Provisioning of distributed compute resources</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                    <span className="text-on-surface">Real-time threat detection and DDoS mitigation</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                    <span className="text-on-surface">Compliance with international regulatory mandates</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-lg"></div>
                <div className="relative p-8 border-l border-primary/20 bg-surface/40 h-full">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Security Advisory</h4>
                  <p className="text-on-surface-variant italic font-light leading-relaxed">
                    "The kinetic integrity of user data is the primary axiom of our infrastructure. Processing is localized whenever possible to minimize cross-border latency and maximize jurisdictional safety."
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest"></div>
                    <span className="text-xs text-on-surface font-semibold">Chief Security Architect</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Security */}
          <section id="security">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-surface-container-low rounded-lg flex flex-col items-center justify-center border border-outline-variant/10">
                    <span className="material-symbols-outlined text-primary text-4xl mb-2">encrypted</span>
                    <span className="text-xs text-on-surface-variant font-medium">AES-256</span>
                  </div>
                  <div className="aspect-square bg-surface-container-high rounded-lg flex flex-col items-center justify-center border border-outline-variant/10 mt-8">
                    <span className="material-symbols-outlined text-secondary text-4xl mb-2">shield</span>
                    <span className="text-xs text-on-surface-variant font-medium">Zero-Trust</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <h2 className="text-3xl font-headline font-bold text-on-surface mb-6 tracking-tight">Security Architecture</h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  We implement industry-standard administrative and technical safeguards to protect your personal information from unauthorized access, use, or disclosure.
                </p>
                <p className="text-on-surface-variant leading-relaxed">
                  All sensitive data streams are encrypted in transit via TLS 1.3 and at rest using military-grade cryptographic protocols. Access is restricted via multi-factor authentication and role-based permissions.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: User Rights */}
          <section className="bg-surface-container-low rounded-lg p-10 border-b border-primary/20" id="rights">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-8">Your Data Sovereignty Rights</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="text-primary font-headline font-black text-2xl">01</div>
                  <div>
                    <h4 className="text-on-surface font-bold mb-2">Right of Access</h4>
                    <p className="text-on-surface-variant text-sm font-light">
                      Request a portable machine-readable copy of all data points we hold related to your account profile.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-primary font-headline font-black text-2xl">02</div>
                  <div>
                    <h4 className="text-on-surface font-bold mb-2">Right to Rectification</h4>
                    <p className="text-on-surface-variant text-sm font-light">
                      Correct inaccuracies in your personal data through the identity portal or by contacting support.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-primary font-headline font-black text-2xl">03</div>
                  <div>
                    <h4 className="text-on-surface font-bold mb-2">Right to Erasure</h4>
                    <p className="text-on-surface-variant text-sm font-light">
                      Exercise your "Right to be Forgotten" by requesting permanent deletion of your identity record and associated logs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Contact */}
          <section className="border-t border-outline-variant/15 pt-20">
            <div className="flex flex-col md:flex-row justify-between gap-12 bg-surface-container-high/30 p-12 rounded-2xl border border-outline-variant/10">
              <div>
                <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">Contact Privacy Operations</h2>
                <p className="text-on-surface-variant font-light max-w-md">
                  For inquiries regarding this policy or to exercise your rights, please contact our Data Protection Officer.
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end justify-center">
                <a className="text-2xl md:text-3xl font-headline font-bold text-primary hover:text-primary-container transition-colors tracking-tight" href="mailto:privacy@exido.io">
                  privacy@exido.io
                </a>
                <p className="text-on-surface-variant text-sm mt-2">Typical response window: 24-48 Business Hours</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
