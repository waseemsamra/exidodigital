import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function GlobalNodeExpansionBlog() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary">
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center overflow-hidden px-8 md:px-20 py-24 bg-surface-container-low">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="material-symbols-outlined text-primary text-sm">public</span>
              <span className="font-label text-xs tracking-widest text-primary uppercase">Infrastructure Update</span>
            </div>
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-tight">
              Global Node Expansion: Reaching the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Edge of the Atmosphere</span>
            </h1>
            <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Exido announces the largest infrastructure expansion in company history, deploying 500+ new edge nodes across 40 countries to deliver unprecedented global coverage and sub-10ms latency worldwide.
            </p>
            <div className="mt-12 flex items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-sm">person</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-on-surface">Exido Infrastructure Team</p>
                  <p className="text-xs text-on-surface-variant">Official Company Announcement</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-sm">schedule</span>
                <span>5 min read</span>
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
                In a landmark expansion that underscores Exido's commitment to global accessibility, the company today announced the deployment of over 500 new edge computing nodes across 40 countries, representing a 300% increase in global infrastructure capacity.
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                This unprecedented expansion brings Exido's atmospheric computing platform closer to enterprises worldwide, enabling sub-10ms latency for 95% of the global population and establishing the foundation for the next generation of real-time enterprise applications.
              </p>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <p className="font-headline text-4xl font-black text-primary mb-2">500+</p>
                <p className="text-on-surface-variant text-sm uppercase tracking-widest">New Edge Nodes</p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <p className="font-headline text-4xl font-black text-secondary mb-2">40</p>
                <p className="text-on-surface-variant text-sm uppercase tracking-widest">Countries Covered</p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <p className="font-headline text-4xl font-black text-tertiary mb-2">&lt;10ms</p>
                <p className="text-on-surface-variant text-sm uppercase tracking-widest">Global Latency</p>
              </div>
            </div>

            {/* Section 1 */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">The Expansion Strategy</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  The global node expansion represents a strategic investment in edge computing infrastructure designed to eliminate latency barriers and bring computational power closer to end users. This expansion focuses on three key regions:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                    <span><strong>Asia-Pacific Region:</strong> 200+ nodes deployed across 15 countries including Japan, Singapore, Australia, India, and South Korea</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                    <span><strong>Europe & Middle East:</strong> 180+ nodes across 18 countries with major hubs in Frankfurt, London, Amsterdam, Dubai, and Tel Aviv</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                    <span><strong>Americas:</strong> 120+ nodes throughout North and South America with expanded presence in Brazil, Mexico, and Canada</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Technical Innovation at the Edge</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  Each new node in the expanded network incorporates Exido's latest generation of atmospheric computing technology, featuring:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl">speed</span>
                      <h4 className="font-headline text-lg font-bold text-on-surface">Quantum-Ready Processors</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm">
                      Next-generation processors designed to integrate with emerging quantum computing capabilities while maintaining backward compatibility.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-secondary text-3xl">memory</span>
                      <h4 className="font-headline text-lg font-bold text-on-surface">Distributed Storage Mesh</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm">
                      Intelligent data replication across multiple nodes ensures 99.999% availability and automatic failover in milliseconds.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-tertiary text-3xl">security</span>
                      <h4 className="font-headline text-lg font-bold text-on-surface">Obsidian Security Layer</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm">
                      Every node implements the revolutionary Obsidian Layer security architecture with zero-trust principles and military-grade encryption.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl">eco</span>
                      <h4 className="font-headline text-lg font-bold text-on-surface">Sustainable Operations</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm">
                      All new nodes are powered by 100% renewable energy sources with advanced cooling systems that reduce energy consumption by 40%.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Impact on Global Customers</h2>
              <div className="bg-gradient-to-br from-surface-container-high to-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-lg bg-surface-container-highest flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-3xl">group</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold text-on-surface">Enterprise Customer Benefits</h3>
                    <p className="text-on-surface-variant text-sm">Real-world impact from the global expansion</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-surface p-4 rounded-lg">
                    <p className="text-2xl font-bold text-primary mb-1">67%</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest">Latency Reduction</p>
                  </div>
                  <div className="bg-surface p-4 rounded-lg">
                    <p className="text-2xl font-bold text-secondary mb-1">99.999%</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest">Uptime SLA</p>
                  </div>
                  <div className="bg-surface p-4 rounded-lg">
                    <p className="text-2xl font-bold text-tertiary mb-1">3x</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest">Throughput Increase</p>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-primary pl-6 py-4 my-6">
                  <p className="text-on-surface-variant italic leading-relaxed">
                    "The expanded node network has transformed our ability to serve customers globally. We're now delivering real-time experiences to users in regions that were previously unreachable with sub-50ms latency."
                  </p>
                  <footer className="mt-4 text-sm text-on-surface">
                    — CTO, Global E-commerce Platform
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Section 4 - Timeline */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Deployment Timeline</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  The global expansion is being executed in three phases over 18 months:
                </p>
                <div className="relative border-l-2 border-primary/30 ml-6 pl-8 space-y-8">
                  <div className="relative">
                    <div className="absolute -left-[41px] w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-surface"></div>
                    </div>
                    <h4 className="font-headline text-lg font-bold text-on-surface mb-2">Phase 1: Q1 2024 (Completed)</h4>
                    <p className="text-on-surface-variant">
                      Initial deployment of 180 nodes across 15 countries in Asia-Pacific and Europe. Focus on major metropolitan areas and financial centers.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[41px] w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-surface"></div>
                    </div>
                    <h4 className="font-headline text-lg font-bold text-on-surface mb-2">Phase 2: Q3 2024 (In Progress)</h4>
                    <p className="text-on-surface-variant">
                      Expansion into emerging markets including Latin America, Southeast Asia, and Middle East. 220 nodes scheduled for deployment.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[41px] w-6 h-6 rounded-full bg-tertiary flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-surface"></div>
                    </div>
                    <h4 className="font-headline text-lg font-bold text-on-surface mb-2">Phase 3: Q1 2025 (Planned)</h4>
                    <p className="text-on-surface-variant">
                      Final phase completing global coverage with 100+ nodes in Africa, Central Asia, and remote regions. Full atmospheric coverage achieved.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary/10 via-surface-container-high to-secondary/10 p-12 rounded-2xl border border-outline-variant/10 text-center">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Experience Global Edge Computing</h2>
              <p className="text-on-surface-variant mb-8 max-w-2xl mx-auto">
                Join thousands of enterprises already benefiting from Exido's expanded global infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(143,245,255,0.4)] transition-all">
                  Schedule Infrastructure Consultation
                </Link>
                <Link to="/contact" className="bg-surface-container-highest border border-outline-variant/30 text-on-surface px-8 py-4 rounded-lg font-bold hover:bg-surface-bright transition-all">
                  View Coverage Map
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
              <Link to="/news/obsidian-layer" className="group bg-surface rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all">
                <div className="aspect-video bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-4xl">article</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-secondary uppercase tracking-widest mb-2">Cloud Security</p>
                  <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">Exido's Obsidian Layer: Redefining Cloud Security</h3>
                  <p className="text-on-surface-variant text-sm mt-2">How Exido's revolutionary zero-trust architecture is setting new industry standards.</p>
                </div>
              </Link>
              
              <Link to="/news/atmospheric-viz" className="group bg-surface rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all">
                <div className="aspect-video bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-4xl">article</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-primary uppercase tracking-widest mb-2">User Experience</p>
                  <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">Atmospheric Data Visualization Sets New UI Benchmark</h3>
                  <p className="text-on-surface-variant text-sm mt-2">How Exido's revolutionary UI/UX approach is transforming enterprise data experience.</p>
                </div>
              </Link>
              
              <Link to="/news/etl-automation" className="group bg-surface rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all">
                <div className="aspect-video bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary text-4xl">article</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-tertiary uppercase tracking-widest mb-2">Data Engineering</p>
                  <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">ETL Automation: The Future of Data Integration</h3>
                  <p className="text-on-surface-variant text-sm mt-2">How Exido's autonomous ETL pipelines are revolutionizing enterprise data workflows.</p>
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

export default GlobalNodeExpansionBlog;
