import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function ETLSAutomationBlog() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary">
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center overflow-hidden px-8 md:px-20 py-24 bg-surface-container-low">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <span className="material-symbols-outlined text-secondary text-sm">calendar_today</span>
              <span className="font-label text-xs tracking-widest text-secondary uppercase">March 15, 2024</span>
            </div>
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-tight">
              ETL Automation: The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Data Integration</span>
            </h1>
            <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              How Exido's autonomous ETL pipelines are revolutionizing enterprise data workflows with zero-touch orchestration and real-time synchronization.
            </p>
            <div className="mt-12 flex items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden">
                  <img 
                    src="/assets/images/waseem_samra.png" 
                    alt="Waseem Samra"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-on-surface">Waseem Samra</p>
                  <p className="text-xs text-on-surface-variant">Chief Technology Officer</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-sm">schedule</span>
                <span>8 min read</span>
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
                In today's data-driven enterprise landscape, the ability to extract, transform, and load (ETL) data efficiently has become a critical competitive advantage. Traditional ETL processes, however, are plagued by manual intervention, error-prone workflows, and inability to scale with modern data volumes.
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                At Exido, we've reimagined ETL from the ground up. Our autonomous ETL automation platform eliminates manual touchpoints, reduces errors by 94%, and enables real-time data synchronization across your entire enterprise ecosystem.
              </p>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <p className="font-headline text-4xl font-black text-primary mb-2">94%</p>
                <p className="text-on-surface-variant text-sm uppercase tracking-widest">Error Reduction</p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <p className="font-headline text-4xl font-black text-secondary mb-2">10x</p>
                <p className="text-on-surface-variant text-sm uppercase tracking-widest">Faster Processing</p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <p className="font-headline text-4xl font-black text-tertiary mb-2">24/7</p>
                <p className="text-on-surface-variant text-sm uppercase tracking-widest">Autonomous Operation</p>
              </div>
            </div>

            {/* Section 1 */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">The Challenge: Legacy ETL Limitations</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  Traditional ETL systems were designed for a different era of computing. They rely on batch processing, require extensive manual configuration, and struggle to handle the velocity and variety of modern data sources.
                </p>
                <p>
                  Common pain points include:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                    <span><strong>Manual Schema Mapping:</strong> Data engineers spend 60% of their time manually mapping source and target schemas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                    <span><strong>Batch Latency:</strong> Traditional batch ETL creates data staleness of 24-48 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                    <span><strong>Error Propagation:</strong> Single point failures cascade through entire pipelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                    <span><strong>Scaling Challenges:</strong> Infrastructure cannot elastically scale with data volume spikes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">The Exido Solution: Autonomous ETL Automation</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  Exido's ETL automation platform leverages advanced machine learning and distributed computing to create self-managing data pipelines that adapt, optimize, and heal themselves.
                </p>
                
                <h3 className="font-headline text-2xl font-bold text-on-surface mt-8 mb-4">Key Features:</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
                      <h4 className="font-headline text-lg font-bold text-on-surface">Intelligent Schema Discovery</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm">
                      Our AI automatically detects source schemas, infers data types, and suggests optimal transformations—reducing setup time from weeks to minutes.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-secondary text-3xl">sync</span>
                      <h4 className="font-headline text-lg font-bold text-on-surface">Real-Time Synchronization</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm">
                      Stream-based processing ensures data is available in target systems within milliseconds of source changes.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-tertiary text-3xl">healing</span>
                      <h4 className="font-headline text-lg font-bold text-on-surface">Self-Healing Pipelines</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm">
                      Automatic error detection and recovery with intelligent retry logic and fallback mechanisms.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl">scale</span>
                      <h4 className="font-headline text-lg font-bold text-on-surface">Elastic Scaling</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm">
                      Infrastructure automatically scales compute resources based on data volume and processing complexity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Architecture Overview</h2>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 mb-8">
                <div className="aspect-video bg-surface-container-highest rounded-lg flex items-center justify-center border border-outline-variant/10">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-primary text-6xl mb-4">hub</span>
                    <p className="text-on-surface-variant text-sm">Interactive Architecture Diagram</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  The Exido ETL platform consists of four core components working in harmony:
                </p>
                <ol className="space-y-4 ml-6 list-decimal">
                  <li className="leading-relaxed">
                    <strong className="text-on-surface">Intelligent Connectors:</strong> Pre-built adapters for 200+ data sources including databases, APIs, cloud storage, and streaming platforms. Each connector includes built-in schema validation and data quality checks.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-on-surface">Transformation Engine:</strong> A distributed processing engine that executes transformations in parallel across multiple nodes. Supports SQL, Python, and visual transformation builders.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-on-surface">Orchestration Layer:</strong> Centralized workflow management with dependency tracking, scheduling, and event-driven triggers. Includes full audit logging and compliance reporting.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-on-surface">Monitoring & Observability:</strong> Real-time dashboards showing pipeline health, data quality metrics, and performance analytics. Alerting integrates with Slack, PagerDuty, and ServiceNow.
                  </li>
                </ol>
              </div>
            </div>

            {/* Section 4 - Case Study */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Customer Success: Global Retailer Case Study</h2>
              <div className="bg-gradient-to-br from-surface-container-high to-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-lg bg-surface-container-highest flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-3xl">storefront</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold text-on-surface">Fortune 500 Retailer</h3>
                    <p className="text-on-surface-variant text-sm">Global retail chain with 2,000+ stores</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-surface p-4 rounded-lg">
                    <p className="text-2xl font-bold text-primary mb-1">85%</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest">Reduction in ETL Development Time</p>
                  </div>
                  <div className="bg-surface p-4 rounded-lg">
                    <p className="text-2xl font-bold text-secondary mb-1">$2.4M</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest">Annual Cost Savings</p>
                  </div>
                  <div className="bg-surface p-4 rounded-lg">
                    <p className="text-2xl font-bold text-tertiary mb-1">99.9%</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest">Pipeline Uptime</p>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-primary pl-6 py-4 my-6">
                  <p className="text-on-surface-variant italic leading-relaxed">
                    "Exido's ETL automation transformed our data operations. What used to take our team weeks now happens automatically. We've shifted from maintaining pipelines to deriving business value from our data."
                  </p>
                  <footer className="mt-4 text-sm text-on-surface">
                    — Chief Data Officer, Global Retail Corporation
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Section 5 - Getting Started */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Getting Started with Exido ETL</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  Implementing autonomous ETL with Exido is straightforward:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <h4 className="font-headline text-lg font-bold text-on-surface mb-2">Connect Sources</h4>
                    <p className="text-on-surface-variant text-sm">
                      Use our intelligent connectors to link your data sources. Auto-discovery identifies schemas automatically.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                      <span className="text-secondary font-bold">2</span>
                    </div>
                    <h4 className="font-headline text-lg font-bold text-on-surface mb-2">Define Transformations</h4>
                    <p className="text-on-surface-variant text-sm">
                      Configure transformations using our visual builder or SQL. AI suggests optimizations based on data patterns.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center mb-4">
                      <span className="text-tertiary font-bold">3</span>
                    </div>
                    <h4 className="font-headline text-lg font-bold text-on-surface mb-2">Deploy & Monitor</h4>
                    <p className="text-on-surface-variant text-sm">
                      Deploy pipelines with one click. Monitor performance and data quality from unified dashboards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary/10 via-surface-container-high to-secondary/10 p-12 rounded-2xl border border-outline-variant/10 text-center">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Ready to Automate Your ETL?</h2>
              <p className="text-on-surface-variant mb-8 max-w-2xl mx-auto">
                Join leading enterprises that have transformed their data operations with Exido's autonomous ETL platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(143,245,255,0.4)] transition-all">
                  Schedule a Demo
                </Link>
                <Link to="/contact" className="bg-surface-container-highest border border-outline-variant/30 text-on-surface px-8 py-4 rounded-lg font-bold hover:bg-surface-bright transition-all">
                  Contact Sales
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
                  <p className="text-xs text-secondary uppercase tracking-widest mb-2">Data Engineering</p>
                  <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">Building Real-Time Data Pipelines</h3>
                  <p className="text-on-surface-variant text-sm mt-2">Learn how to architect streaming data pipelines for modern enterprises.</p>
                </div>
              </Link>
              
              <Link to="/news" className="group bg-surface rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all">
                <div className="aspect-video bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-4xl">article</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-primary uppercase tracking-widest mb-2">Cloud Architecture</p>
                  <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">Multi-Cloud Data Strategy</h3>
                  <p className="text-on-surface-variant text-sm mt-2">Best practices for managing data across multiple cloud providers.</p>
                </div>
              </Link>
              
              <Link to="/news" className="group bg-surface rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all">
                <div className="aspect-video bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary text-4xl">article</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-tertiary uppercase tracking-widest mb-2">AI & Automation</p>
                  <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">AI-Driven Data Quality</h3>
                  <p className="text-on-surface-variant text-sm mt-2">Using machine learning to automatically detect and fix data quality issues.</p>
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

export default ETLSAutomationBlog;
