import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function AtmosphericDataVizBlog() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary">
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center overflow-hidden px-8 md:px-20 py-24 bg-surface-container-low">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <span className="material-symbols-outlined text-secondary text-sm">newspaper</span>
              <span className="font-label text-xs tracking-widest text-secondary uppercase">Wired Feature</span>
            </div>
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-tight">
              The Atmospheric Depth of Data Visualization at Exido Sets a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">New UI Benchmark</span>
            </h1>
            <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              How Exido's revolutionary approach to data visualization is transforming how enterprises interact with complex datasets through immersive, atmospheric interfaces.
            </p>
            <div className="mt-12 flex items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-sm">edit</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-on-surface">Wired Design Team</p>
                  <p className="text-xs text-on-surface-variant">Published on Wired</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-sm">schedule</span>
                <span>7 min read</span>
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
                In an age where data overload has become the norm, Exido has pioneered a revolutionary approach to data visualization that transcends traditional dashboard design. Their "atmospheric depth" methodology creates immersive data environments that enable users to intuitively understand complex relationships within massive datasets.
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                As featured in Wired, Exido's innovative UI/UX philosophy is setting new industry standards for how enterprises interact with their most valuable asset: information.
              </p>
            </div>

            {/* Quote Highlight */}
            <div className="bg-gradient-to-br from-secondary/10 via-surface-container-high to-primary/10 p-12 rounded-2xl border border-outline-variant/10 mb-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-4xl text-secondary">format_quote</span>
                <div>
                  <h3 className="font-headline text-xl font-bold text-on-surface">Wired Design Recognition</h3>
                  <p className="text-on-surface-variant text-sm">Leading technology and design publication</p>
                </div>
              </div>
              <blockquote className="border-l-4 border-secondary pl-6 py-4 my-6">
                <p className="text-on-surface text-xl italic leading-relaxed">
                  "The atmospheric depth of data visualization at Exido sets a new UI benchmark. This isn't just beautiful design—it's a fundamental reimagining of how humans interact with complex data systems."
                </p>
              </blockquote>
            </div>

            {/* Section 1 */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">The Problem: Traditional Dashboard Limitations</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  Traditional business intelligence dashboards were designed for a simpler era of data. They present information in flat, two-dimensional charts and graphs that fail to capture the multidimensional nature of modern enterprise data.
                </p>
                <p>
                  Common limitations include:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg mt-0.5">visibility_off</span>
                    <span><strong>Information Overload:</strong> Users are presented with too many metrics without clear hierarchy or context</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg mt-0.5">visibility_off</span>
                    <span><strong>Static Presentations:</strong> Traditional dashboards don't adapt to user behavior or changing data patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg mt-0.5">visibility_off</span>
                    <span><strong>Lack of Context:</strong> Data points are displayed in isolation without showing relationships or dependencies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg mt-0.5">visibility_off</span>
                    <span><strong>Cognitive Friction:</strong> Users must mentally translate abstract charts into actionable insights</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Introducing Atmospheric Depth Visualization</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  Exido's atmospheric depth approach treats data visualization as an immersive environment rather than a flat presentation. By leveraging depth, motion, and spatial relationships, users can intuitively navigate complex datasets as if exploring a physical space.
                </p>
                
                <h3 className="font-headline text-2xl font-bold text-on-surface mt-8 mb-4">Core Principles:</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl">layers</span>
                      <h4 className="font-headline text-lg font-bold text-on-surface">Spatial Hierarchy</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm">
                      Important metrics appear closer and more prominent. Less critical information recedes into the background, creating natural visual hierarchy without clutter.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-secondary text-3xl">motion_photos_on</span>
                      <h4 className="font-headline text-lg font-bold text-on-surface">Dynamic Motion</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm">
                      Data flows and transitions guide attention to anomalies and trends. Motion is used purposefully to highlight changes without overwhelming the user.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-tertiary text-3xl">palette</span>
                      <h4 className="font-headline text-lg font-bold text-on-surface">Atmospheric Color</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm">
                      Color gradients create depth perception and emotional context. Warm colors indicate urgency while cool colors represent stability.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl">touch_app</span>
                      <h4 className="font-headline text-lg font-bold text-on-surface">Interactive Exploration</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm">
                      Users can navigate through data layers, zoom into details, and rotate perspectives to discover insights from multiple angles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Design Philosophy: Form Meets Function</h2>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 mb-8">
                <div className="aspect-video bg-surface-container-highest rounded-lg flex items-center justify-center border border-outline-variant/10">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-primary text-6xl mb-4">dashboard</span>
                    <p className="text-on-surface-variant text-sm">Atmospheric Depth Interface Example</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  Exido's design philosophy centers on the belief that beautiful design and functional utility are not mutually exclusive. The atmospheric depth approach demonstrates how aesthetic excellence can enhance rather than compromise usability.
                </p>
                <ol className="space-y-4 ml-6 list-decimal">
                  <li className="leading-relaxed">
                    <strong className="text-on-surface">Cognitive Load Reduction:</strong> By presenting data in familiar spatial relationships, users process information 60% faster than with traditional charts
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-on-surface">Pattern Recognition:</strong> The human brain excels at recognizing spatial patterns. Atmospheric visualization leverages this natural ability to reveal insights that might be missed in tabular data
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-on-surface">Emotional Engagement:</strong> Beautiful, immersive interfaces create positive emotional responses that increase user engagement and time spent analyzing data
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-on-surface">Accessibility:</strong> Depth cues and motion provide alternative ways to understand data for users with different cognitive styles and abilities
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
                    <span className="material-symbols-outlined text-primary text-3xl">bar_chart</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold text-on-surface">Global Retail Corporation</h3>
                    <p className="text-on-surface-variant text-sm">Fortune 500 retailer with operations in 50+ countries</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-surface p-4 rounded-lg">
                    <p className="text-2xl font-bold text-primary mb-1">73%</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest">Faster Decision Making</p>
                  </div>
                  <div className="bg-surface p-4 rounded-lg">
                    <p className="text-2xl font-bold text-secondary mb-1">89%</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest">User Adoption Rate</p>
                  </div>
                  <div className="bg-surface p-4 rounded-lg">
                    <p className="text-2xl font-bold text-tertiary mb-1">3.2x</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest">Increase in Data Exploration</p>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-primary pl-6 py-4 my-6">
                  <p className="text-on-surface-variant italic leading-relaxed">
                    "The atmospheric depth visualization transformed how our executives interact with data. What used to require hours of analysis now happens in minutes. The interface is so intuitive, it feels like second nature."
                  </p>
                  <footer className="mt-4 text-sm text-on-surface">
                    — Chief Data Officer, Global Retail Corporation
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Section 5 - Industry Recognition */}
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Design Awards & Recognition</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  Exido's atmospheric depth visualization has received widespread acclaim from the design and technology communities:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <h4 className="font-headline text-lg font-bold text-on-surface mb-3">Wired Design Innovation Award</h4>
                    <p className="text-on-surface-variant text-sm">
                      Recognized for breakthrough approach to enterprise data visualization that sets new industry benchmarks.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <h4 className="font-headline text-lg font-bold text-on-surface mb-3">UX Design Excellence</h4>
                    <p className="text-on-surface-variant text-sm">
                      Awarded for exceptional user experience design that balances aesthetic beauty with functional utility.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <h4 className="font-headline text-lg font-bold text-on-surface mb-3">Data Visualization Innovation</h4>
                    <p className="text-on-surface-variant text-sm">
                      Honored for pioneering atmospheric depth methodology in enterprise analytics platforms.
                    </p>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                    <h4 className="font-headline text-lg font-bold text-on-surface mb-3">Accessibility Excellence</h4>
                    <p className="text-on-surface-variant text-sm">
                      Recognized for creating inclusive data visualization that serves users with diverse cognitive styles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary/10 via-surface-container-high to-secondary/10 p-12 rounded-2xl border border-outline-variant/10 text-center">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Experience Atmospheric Depth Visualization</h2>
              <p className="text-on-surface-variant mb-8 max-w-2xl mx-auto">
                See how Exido's revolutionary UI/UX approach can transform your enterprise data experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(143,245,255,0.4)] transition-all">
                  Schedule a Demo
                </Link>
                <Link to="/contact" className="bg-surface-container-highest border border-outline-variant/30 text-on-surface px-8 py-4 rounded-lg font-bold hover:bg-surface-bright transition-all">
                  Contact Design Team
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
                  <p className="text-xs text-tertiary uppercase tracking-widest mb-2">User Experience</p>
                  <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">The Psychology of Data Visualization</h3>
                  <p className="text-on-surface-variant text-sm mt-2">Understanding how users process and interact with complex data visualizations.</p>
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

export default AtmosphericDataVizBlog;
