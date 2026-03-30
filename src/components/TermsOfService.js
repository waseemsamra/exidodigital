import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function TermsOfService() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30 min-h-screen">
      <NavBar />
      <main className="pt-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero Header */}
          <div className="mb-16 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-secondary font-headline mb-4 block">
              Last Updated: October 2024
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter text-on-surface leading-tight mb-8">
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Service</span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl font-body mx-auto md:mx-0">
              Welcome to Exido. These terms govern your use of our digital infrastructure, cloud architecture, and data-driven authority platforms. By accessing our console, you agree to the protocols outlined below.
            </p>
          </div>

          {/* Legal Sections */}
          <div className="space-y-12">
            {/* Section 1: Introduction */}
            <section className="p-8 md:p-12 rounded-xl bg-surface-container-low relative overflow-hidden" id="introduction">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <h2 className="text-3xl font-bold text-on-surface mb-6 flex items-center gap-3">
                <span className="text-primary material-symbols-outlined">info</span>
                1. Introduction
              </h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                <p>Exido provides advanced computational environments and real-time data orchestration services. These Terms of Service ("Terms") constitute a legally binding agreement between you and Exido regarding your access to and use of the services.</p>
                <p>Please read these Terms carefully. If you do not agree with all of these Terms, then you are expressly prohibited from using the Site and our services and you must discontinue use immediately.</p>
              </div>
            </section>

            {/* Section 2: Service Provision */}
            <section className="p-8 md:p-12 rounded-xl bg-surface-container-low border-l-4 border-primary" id="service-provision">
              <h2 className="text-3xl font-bold text-on-surface mb-6 flex items-center gap-3">
                <span className="text-primary material-symbols-outlined">settings_input_component</span>
                2. Service Provision
              </h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                <p>Exido grants you a non-exclusive, non-transferable, revocable license to access and use our platform strictly in accordance with these Terms. We reserve the right to withdraw or amend this service, and any service or material we provide on the platform, in our sole discretion without notice.</p>
                <ul className="list-none space-y-4 pt-2">
                  <li className="flex items-start gap-4">
                    <span className="text-secondary mt-1 material-symbols-outlined">check_circle</span>
                    <span>Uptime guarantees are subject to Service Level Agreements (SLA) as specified in your enterprise contract.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-secondary mt-1 material-symbols-outlined">check_circle</span>
                    <span>Computational resources are dynamically allocated based on tier usage and system health.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3: User Conduct */}
            <section className="p-8 md:p-12 rounded-xl bg-surface-container-high" id="user-conduct">
              <h2 className="text-3xl font-bold text-on-surface mb-6">3. User Conduct</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                Users are expected to maintain the integrity of the network. Prohibited activities include but are not limited to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-on-surface-variant font-body">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Reverse engineering of proprietary ether-logic.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Unauthorized penetration testing or fuzzing.
                  </li>
                </ul>
                <ul className="space-y-3 text-on-surface-variant font-body">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Automated scraping of data-streams.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Distributed denial-of-service attempts.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4: Liability */}
            <section className="p-8 md:p-12 rounded-xl bg-surface-container-high" id="liability">
              <h2 className="text-3xl font-bold text-on-surface mb-6">4. Liability</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                In no event will Exido, its affiliates, or their licensors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the platform, including any direct, indirect, special, incidental, consequential, or punitive damages. This limitation applies regardless of the legal theory on which the claim is based.
              </p>
            </section>

            {/* Section 5: Governing Law */}
            <section className="p-8 md:p-12 rounded-xl bg-surface-container-lowest border border-outline-variant/15" id="governing-law">
              <h2 className="text-3xl font-bold text-on-surface mb-6">5. Governing Law</h2>
              <div className="text-on-surface-variant text-lg leading-relaxed">
                <p>All matters relating to the Website and these Terms of Use and any dispute or claim arising therefrom or related thereto (in each case, including non-contractual disputes or claims), shall be governed by and construed in accordance with the internal laws of the jurisdiction where Exido is headquartered, without giving effect to any choice or conflict of law provision or rule.</p>
              </div>
            </section>

            {/* Contact CTA */}
            <div className="p-12 rounded-xl bg-gradient-to-br from-surface-container-high to-surface-container-low border border-outline-variant/10 text-center">
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Need further clarification?</h3>
              <p className="text-on-surface-variant mb-8 text-base">Our legal architecture team is available for consultative inquiries regarding these protocols.</p>
              <a href="mailto:legal@exidodigital.com" className="inline-block bg-surface-container-highest border border-outline-variant/30 text-primary px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-surface-bright transition-all">
                Contact Compliance
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default TermsOfService;
