import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function ObsidianLayerBlog() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary">
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center overflow-hidden px-8 md:px-20 py-24 bg-surface-container-low">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="material-symbols-outlined text-primary text-sm">newspaper</span>
              <span className="font-label text-xs tracking-widest text-primary uppercase">TechCrunch Feature</span>
            </div>
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-tight">
              Exido is Redefining Cloud Security with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Obsidian Layer</span>
            </h1>
            <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              How Exido's revolutionary zero-trust architecture is setting new industry standards for cloud-native security and data protection.
            </p>
            <div className="mt-12 flex items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-sm">edit</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-on-surface">TechCrunch Editorial Team</p>
                  <p className="text-xs text-on-surface-variant">Published on TechCrunch</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-sm">schedule</span>
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-24 px-8 md:px-20">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-invert prose-lg max-w-none mb-16">
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                In an era where data breaches cost organizations an average of $4.45 million per incident, traditional cloud security approaches are proving inadequate. Enter Exido's Obsidian Layer—a paradigm-shifting security architecture that's capturing attention across the technology sector.
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                As featured in TechCrunch, Exido's innovative approach to cloud security is fundamentally changing how enterprises think about protecting their most valuable digital assets.
              </p>
            </div>

            {/* Quote Highlight */}
            <div className="bg-gradient-to-br from-primary/10 via-surface-container-high to-secondary/10 p-12 rounded-2xl border border-outline-variant/10 mb-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-4xl text-primary">format_quote</span>
                <div>
                  <h3 className="font-headline text-xl font-bold text-on-surface">TechCrunch Recognition</h3>
                  <p className="text-on-surface-variant text-sm">Industry-leading technology publication</p>
                </div>
              </div>
              <blockquote className="border-l-4 border-primary pl-6 py-4 my-6">
                <p className="text-on-surface text-xl italic leading-relaxed">
                  "Exido is redefining how we think about cloud security with their Obsidian Layer. This isn't just an incremental improvement—it's a fundamental reimagining of what zero-trust security can be."
                </p>
              </blockquote>
            </div>

            {/* Section 1 */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">The Security Challenge: Why Traditional Approaches Fail</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  Traditional cloud security models were built for a different era of computing. They rely on perimeter-based defenses that assume everything inside the network can be trusted—a dangerous assumption in today's distributed, cloud-native environments.
                </p>
                <p>
                  Common vulnerabilities include:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">warning</span>
                    <span><strong>Perimeter Breaches:</strong> Once attackers penetrate the outer defense, they have unrestricted access to internal resources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">warning</span>
                    <span><strong>Lateral Movement:</strong> Compromised credentials allow attackers to move freely across network segments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">warning</span>
                    <span><strong>Insider Threats:</strong> Legitimate user credentials can be weaponized by malicious insiders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">warning</span>
                    <span><strong>Compliance Gaps:</strong> Traditional security struggles to meet modern regulatory requirements</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Introducing the Obsidian Layer</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  The Obsidian Layer represents a fundamental shift in cloud security architecture. Built from the ground up for cloud-native environments, it implements zero-trust principles at every layer of the technology stack.
                </p>
                
                <h3 className="font-headline text-2xl font-bold text-on-surface mt-8 mb-4">Core Principles:</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl">shield</span>
                      <h4 className="font-headline text-lg font-bold text-on-surface">Never Trust, Always Verify</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm">
                      Every access request is authenticated, authorized, and encrypted regardless of origin. No implicit trust based on network location.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-secondary text-3xl">lock</span>
                      <h4 className="font-headline text-lg font-bold text-on-surface">Least Privilege Access</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm">
                      Users and systems receive minimum necessary permissions. Access is dynamically adjusted based on context and risk assessment.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-tertiary text-3xl">visibility</span>
                      <h4 className="font-headline text-lg font-bold text-on-surface">Continuous Monitoring</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm">
                      Real-time behavioral analytics detect anomalies and potential threats before they can cause damage.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl">encryption</span>
                      <h4 className="font-headline text-lg font-bold text-on-surface">End-to-End Encryption</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm">
                      All data is encrypted in transit and at rest using military-grade AES-256 encryption with automatic key rotation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Technical Architecture</h2>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 mb-8">
                <div className="aspect-video bg-surface-container-highest rounded-lg flex items-center justify-center border border-outline-variant/10">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-secondary text-6xl mb-4">security</span>
                    <p className="text-on-surface-variant text-sm">Obsidian Layer Architecture Diagram</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  The Obsidian Layer consists of five integrated security components working in concert:
                </p>
                <ol className="space-y-4 ml-6 list-decimal">
                  <li className="leading-relaxed">
                    <strong className="text-on-surface">Identity Fabric:</strong> Unified identity management with support for SSO, MFA, and passwordless authentication. Integrates with existing identity providers including Okta, Azure AD, and Ping Identity.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-on-surface">Policy Engine:</strong> Centralized policy management with fine-grained access controls. Policies are enforced consistently across all environments—cloud, on-premises, and hybrid.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-on-surface">Micro-Segmentation:</strong> Automatic network segmentation at the workload level. Each application, service, and database operates in its own secure micro-perimeter.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-on-surface">Threat Intelligence:</strong> AI-powered threat detection leveraging global threat intelligence feeds. Machine learning models identify novel attack patterns in real-time.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-on-surface">Audit & Compliance:</strong> Comprehensive audit logging with immutable records. Pre-built compliance reports for SOC 2, HIPAA, GDPR, PCI-DSS, and other regulatory frameworks.
                  </li>
                </ol>
              </div>
            </div>

            {/* Section 4 - Customer Success */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Real-World Impact: Enterprise Deployment</h2>
              <div className="bg-gradient-to-br from-surface-container-high to-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-lg bg-surface-container-highest flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-3xl">account_balance</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold text-on-surface">Global Financial Institution</h3>
                    <p className="text-on-surface-variant text-sm">Fortune 100 bank with operations in 40+ countries</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-surface p-4 rounded-lg">
                    <p className="text-2xl font-bold text-primary mb-1">99.7%</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest">Reduction in Security Incidents</p>
                  </div>
                  <div className="bg-surface p-4 rounded-lg">
                    <p className="text-2xl font-bold text-secondary mb-1">83%</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest">Faster Threat Response</p>
                  </div>
                  <div className="bg-surface p-4 rounded-lg">
                    <p className="text-2xl font-bold text-tertiary mb-1">$4.2M</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest">Annual Security Cost Savings</p>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-secondary pl-6 py-4 my-6">
                  <p className="text-on-surface-variant italic leading-relaxed">
                    "The Obsidian Layer transformed our security posture overnight. We went from reacting to breaches to preventing them. The ROI was evident within the first quarter of deployment."
                  </p>
                  <footer className="mt-4 text-sm text-on-surface">
                    — Chief Information Security Officer, Global Financial Institution
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Section 5 - Industry Recognition */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Industry Recognition & Certifications</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  The Obsidian Layer has received widespread recognition from industry analysts and security experts:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <h4 className="font-headline text-lg font-bold text-on-surface mb-3">Gartner Cool Vendor</h4>
                    <p className="text-on-surface-variant text-sm">
                      Recognized as a Cool Vendor in Security Infrastructure for innovative approach to zero-trust architecture.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <h4 className="font-headline text-lg font-bold text-on-surface mb-3">SOC 2 Type II Certified</h4>
                    <p className="text-on-surface-variant text-sm">
                      Independently audited and certified for security, availability, processing integrity, and confidentiality.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <h4 className="font-headline text-lg font-bold text-on-surface mb-3">FedRAMP Authorized</h4>
                    <p className="text-on-surface-variant text-sm">
                      Authorized for use by U.S. federal agencies under the Federal Risk and Authorization Management Program.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <h4 className="font-headline text-lg font-bold text-on-surface mb-3">ISO 27001 Compliant</h4>
                    <p className="text-on-surface-variant text-sm">
                      Meets international standards for information security management systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary/10 via-surface-container-high to-secondary/10 p-12 rounded-2xl border border-outline-variant/10 text-center">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Secure Your Cloud Infrastructure</h2>
              <p className="text-on-surface-variant mb-8 max-w-2xl mx-auto">
                Join leading enterprises that have transformed their security posture with Exido's Obsidian Layer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(143,245,255,0.4)] transition-all">
                  Schedule a Security Assessment
                </Link>
                <Link to="/contact" className="bg-surface-container-highest border border-outline-variant/30 text-on-surface px-8 py-4 rounded-lg font-bold hover:bg-surface-bright transition-all">
                  Contact Security Team
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-24 px-8 md:px-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-12">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/news" className="group bg-surface rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all">
                <div className="aspect-video bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-4xl">article</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-secondary uppercase tracking-widest mb-2">Cloud Security</p>
                  <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">Zero-Trust Architecture Best Practices</h3>
                  <p className="text-on-surface-variant text-sm mt-2">Essential guidelines for implementing zero-trust security in your organization.</p>
                </div>
              </Link>
              
              <Link to="/news/etl-automation" className="group bg-surface rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all">
                <div className="aspect-video bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-4xl">article</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-primary uppercase tracking-widest mb-2">Data Engineering</p>
                  <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">ETL Automation: The Future of Data Integration</h3>
                  <p className="text-on-surface-variant text-sm mt-2">How Exido's autonomous ETL pipelines are revolutionizing enterprise data workflows.</p>
                </div>
              </Link>
              
              <Link to="/news" className="group bg-surface rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all">
                <div className="aspect-video bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary text-4xl">article</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-tertiary uppercase tracking-widest mb-2">Compliance</p>
                  <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">Navigating Modern Compliance Requirements</h3>
                  <p className="text-on-surface-variant text-sm mt-2">A comprehensive guide to meeting SOC 2, HIPAA, and GDPR requirements.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ObsidianLayerBlog;
