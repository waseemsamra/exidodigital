import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';

function CaseStudyBiometricSecurity() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary">
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[870px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
            <img 
              src="/assets/images/security-ops.png" 
              alt="Biometric security system with fingerprint scanner and facial recognition interface for financial services"
              className="w-full h-full object-cover grayscale-[0.5] contrast-[1.1]" 
            />
          </div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="inline-block label-sm text-secondary font-bold tracking-[0.3em] uppercase mb-6 drop-shadow-[0_0_4px_#ac89ff]">
                Phase 04: Active Implementation
              </span>
              <h1 className="font-headline text-6xl font-extrabold tracking-tighter text-on-background leading-tight mb-8">
                Biometric Security with <span className="text-primary glow-text">Zero-Trust Architecture</span>
              </h1>
              <p className="text-on-surface-variant text-xl leading-relaxed font-light max-w-xl mb-12">
                How Exido's multi-layered authentication architecture processes 10K+ transactions per second with military-grade encryption for FinTech security.
              </p>
              <div className="flex items-center space-x-8">
                <button className="hero-gradient text-on-primary px-10 py-4 font-headline font-bold text-sm uppercase tracking-widest hover:shadow-[0_0_25px_#8ff5ff] transition-all duration-300 rounded-lg">
                  Read Full Report
                </button>
                <div className="flex flex-col">
                  <span className="text-primary font-bold font-headline text-2xl">10K+</span>
                  <span className="text-on-surface-variant text-[10px] uppercase tracking-widest">Transactions/Sec</span>
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
                  <span className="material-symbols-outlined text-8xl text-secondary">fingerprint</span>
                </div>
                <span className="text-secondary font-headline text-6xl font-black mb-2 block">99.97%</span>
                <h3 className="text-on-background font-headline text-xl font-bold mb-4">Fraud Prevention</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Multi-modal biometric verification eliminating account takeover and synthetic identity fraud.</p>
              </div>
              
              <div className="glass-panel p-10 rounded-xl border-l-4 border-primary">
                <span className="text-primary font-headline text-4xl font-black mb-2 block">&lt;50ms</span>
                <h3 className="text-on-background font-headline text-lg font-bold mb-2">Auth Latency</h3>
                <p className="text-on-surface-variant text-xs uppercase tracking-widest">Real-Time Verification</p>
              </div>

              <div className="glass-panel p-10 rounded-xl">
                <span className="text-secondary font-headline text-4xl font-black mb-2 block">0</span>
                <h3 className="text-on-background font-headline text-lg font-bold mb-2">Data Breaches</h3>
                <p className="text-on-surface-variant text-xs uppercase tracking-widest">Perfect Security Record</p>
              </div>

              <div className="md:col-span-4 glass-panel p-8 flex justify-between items-center rounded-xl bg-surface-container-high/40">
                <div className="flex items-center space-x-4">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="font-headline font-bold uppercase tracking-widest text-sm">Data Integrity Protocol: 100% Verified across Security Mesh</span>
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
                <h2 className="font-headline text-4xl font-extrabold text-on-background mb-8 tracking-tight">The Authentication Crisis</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                  A leading FinTech platform faced escalating credential stuffing attacks and synthetic identity fraud. Traditional password-based authentication was vulnerable to breaches, while SMS 2FA suffered from SIM swapping attacks. They needed enterprise-grade security without sacrificing user experience.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-error text-sm mt-1">close</span>
                    <span>Rising account takeover attempts via credential stuffing</span>
                  </li>
                  <li className="flex items-start space-x-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-error text-sm mt-1">close</span>
                    <span>SIM swapping attacks bypassing SMS 2FA</span>
                  </li>
                  <li className="flex items-start space-x-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-error text-sm mt-1">close</span>
                    <span>Friction causing user drop-off during onboarding</span>
                  </li>
                </ul>
              </div>

              <div>
                <span className="text-primary label-md uppercase font-bold tracking-widest mb-4 block">02. The Solution</span>
                <h2 className="font-headline text-4xl font-extrabold text-on-background mb-8 tracking-tight">Biometric Security Kernel</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  We deployed a proprietary <span className="text-on-background font-semibold">Multi-Layered Biometric Authentication Platform</span> combining device fingerprinting, behavioral biometrics, and cryptographic key management for passwordless security at scale.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col space-y-8">
              <div className="glass-panel p-1 rounded-2xl">
                <img 
                  src="/assets/images/security-ops.png" 
                  alt="Biometric authentication architecture showing multi-factor verification layers and threat detection"
                  className="w-full h-80 object-cover rounded-xl" 
                />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 bg-surface-container-low rounded-xl">
                  <span className="material-symbols-outlined text-secondary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                  <h4 className="font-headline font-bold text-on-background mb-2">Zero-Trust Framework</h4>
                  <p className="text-on-surface-variant text-xs">Continuous verification with device attestation, location analysis, and behavioral patterns for every transaction.</p>
                </div>
                <div className="p-8 bg-surface-container-low rounded-xl">
                  <span className="material-symbols-outlined text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>encryption</span>
                  <h4 className="font-headline font-bold text-on-background mb-2">Military-Grade Encryption</h4>
                  <p className="text-on-surface-variant text-xs">AES-256 encryption with hardware-backed key storage in secure enclaves preventing credential extraction.</p>
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
                <span className="material-symbols-outlined text-3xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>fingerprint</span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-4 text-on-background">Multi-Modal Biometrics</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed px-4">Face recognition, fingerprint, and voice authentication with liveness detection preventing spoofing.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-surface-container-highest rounded-full flex items-center justify-center mb-8 border border-outline-variant/20 group-hover:border-primary transition-colors duration-500">
                <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-4 text-on-background">Behavioral Analytics</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed px-4">ML models analyzing typing patterns, device handling, and navigation behavior for continuous auth.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-surface-container-highest rounded-full flex items-center justify-center mb-8 border border-outline-variant/20 group-hover:border-secondary transition-colors duration-500">
                <span className="material-symbols-outlined text-3xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>key</span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-4 text-on-background">Hardware Key Management</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed px-4">Secure enclave storage with hardware-backed cryptographic keys preventing credential theft.</p>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-32 px-12 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/5 blur-[120px] rounded-full"></div>
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <span className="material-symbols-outlined text-6xl text-secondary mb-12 opacity-40">format_quote</span>
            <blockquote className="font-headline text-4xl md:text-5xl font-bold text-on-background leading-tight mb-12 tracking-tight">
              "The biometric security kernel eliminated our fraud problem while improving user experience. Our customers love the seamless passwordless login, and our fraud losses dropped 94%."
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-surface-container-high border border-outline-variant mb-4 overflow-hidden">
                <img 
                  src="/assets/images/cto-elena.png" 
                  alt="Professional portrait of FinTech security executive"
                  className="w-full h-full object-cover" 
                />
              </div>
              <p className="font-headline font-bold text-on-background text-lg uppercase tracking-wider">Chief Security Officer</p>
              <p className="text-on-surface-variant text-xs uppercase tracking-[0.2em] mt-1">Leading FinTech Platform</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-12">
          <div className="max-w-7xl mx-auto bg-surface-bright/40 rounded-2xl p-20 text-center border border-outline-variant/10 backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all duration-700"></div>
            <h2 className="font-headline text-5xl font-black text-on-background mb-8 tracking-tighter">Secure Your Financial Platform.</h2>
            <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto">Discover how biometric authentication can eliminate fraud while improving user experience.</p>
            <a href="/contact" className="hero-gradient text-on-primary px-12 py-5 font-headline font-bold text-sm uppercase tracking-widest hover:shadow-[0_0_30px_#8ff5ff] transition-all duration-300 rounded-lg inline-block">
              Schedule a consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CaseStudyBiometricSecurity;
