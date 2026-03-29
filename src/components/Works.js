import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function Works() {
  const [activeFilter, setActiveFilter] = React.useState('All');

  const projects = [
    // AI Projects (3)
    {
      id: 1,
      category: 'AI',
      label: 'AI & Retail',
      title: 'Autonomous Inventory Mesh for Retailers',
      description: 'Self-correcting supply chain intelligence that predicts demand fluctuations with 94% accuracy.',
      color: 'primary',
      slug: 'autonomous-inventory',
      image: '/assets/images/analytics-dashboard.png'
    },
    {
      id: 2,
      category: 'AI',
      label: 'AI & Healthcare',
      title: 'Diagnostic AI Engine for Medical Imaging',
      description: 'Deep learning models achieving 99.2% accuracy in early detection of radiological anomalies.',
      color: 'primary',
      slug: 'diagnostic-ai',
      image: '/assets/images/neural-network.png'
    },
    {
      id: 3,
      category: 'AI',
      label: 'AI & Finance',
      title: 'Predictive Trading Algorithm for Hedge Funds',
      description: 'Neural network-based market analysis processing 50M+ data points per second for alpha generation.',
      color: 'primary',
      slug: 'predictive-trading',
      image: '/assets/images/neural-network-3d.png'
    },
    // Ecommerce Projects (3)
    {
      id: 4,
      category: 'Ecommerce',
      label: 'Ecommerce Platform',
      title: 'Headless Commerce for Luxury Brands',
      description: 'Omnichannel retail experience serving 2M+ customers with sub-100ms page load times globally.',
      color: 'secondary',
      slug: 'headless-commerce',
      image: '/assets/images/ecommerce-hero.png'
    },
    {
      id: 5,
      category: 'Ecommerce',
      label: 'Ecommerce & AI',
      title: 'Personalized Shopping Assistant Engine',
      description: 'AI-driven product recommendations increasing average order value by 47% for enterprise retailers.',
      color: 'secondary',
      slug: 'shopping-assistant',
      image: '/assets/images/ecommerce-card.png'
    },
    {
      id: 6,
      category: 'Ecommerce',
      label: 'Ecommerce Infrastructure',
      title: 'Real-Time Inventory Synchronization Platform',
      description: 'Distributed ledger system managing 100K+ SKUs across 500+ physical and digital storefronts.',
      color: 'secondary',
      slug: 'inventory-sync',
      image: '/assets/images/shopify-mobile.png'
    },
    // Mobile Projects (3)
    {
      id: 7,
      category: 'Mobile',
      label: 'Mobile & IoT',
      title: 'Connected Vehicle Fleet Management App',
      description: 'Native iOS/Android platform managing 15,000+ vehicles with real-time AI route optimization.',
      color: 'tertiary',
      slug: 'fleet-management',
      image: '/assets/images/mobile-hero.png'
    },
    {
      id: 8,
      category: 'Mobile',
      label: 'Mobile Banking',
      title: 'Secure Banking App with Biometric Auth',
      description: 'Financial services app with 99.99% uptime serving 5M+ daily active users across 12 countries.',
      color: 'tertiary',
      slug: 'banking-app',
      image: '/assets/images/mobile-interface.png'
    },
    {
      id: 9,
      category: 'Mobile',
      label: 'Mobile Health',
      title: 'Remote Patient Monitoring Platform',
      description: 'HIPAA-compliant mobile health app with real-time vitals streaming and AI-powered alerts.',
      color: 'tertiary',
      slug: 'patient-monitoring',
      image: '/assets/images/mobile-card.png'
    },
    // Security Projects (3)
    {
      id: 10,
      category: 'Security',
      label: 'FinTech Security',
      title: 'Biometric Security Kernel for FinTech',
      description: 'Multi-layered authentication architecture processing 10k transactions per second with military-grade encryption.',
      color: 'secondary',
      slug: 'biometric-security',
      image: '/assets/images/security-ops.png'
    },
    {
      id: 11,
      category: 'Security',
      label: 'Security & Logistics',
      title: 'Global Logistics Corp: Zero-Trust Fleet Transformation',
      description: 'A complete overhaul of mission-critical fleet management systems using blockchain verification and edge-computing security protocols.',
      color: 'secondary',
      slug: 'zero-trust-fleet',
      image: '/assets/images/logistics-hub.png'
    },
    {
      id: 12,
      category: 'Security',
      label: 'Enterprise Security',
      title: 'Zero-Trust Network Architecture for Fortune 500',
      description: 'Complete security infrastructure overhaul with micro-segmentation and continuous verification protocols.',
      color: 'secondary',
      slug: 'zero-trust-network',
      image: '/assets/images/server-rack.png'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  return (
    <div className="bg-surface selection:bg-primary selection:text-on-primary overflow-x-hidden">
      <NavBar />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="px-8 pt-20 pb-32 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="label-md uppercase tracking-[0.2em] text-secondary font-semibold mb-6 block">
              The Portfolio
            </span>
            <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter leading-none mb-8 text-on-surface">
              Engineering the <span className="text-primary text-glow">Extraordinary.</span>
            </h1>
            <p className="body-lg text-on-surface-variant max-w-xl leading-relaxed">
              Transforming complex enterprise challenges into high-performance digital reality through precision engineering and sovereign architectural patterns.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-full border border-outline-variant/20 absolute -top-10 -right-10 w-64 h-64 animate-pulse"></div>
            <div className="aspect-video glass-panel rounded-xl relative overflow-hidden flex items-center justify-center group">
              <img 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" 
                src="/assets/images/dashboard-preview.png" 
                alt="Digital obsidian texture with glowing cyan circuit lines" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
            </div>
          </div>
        </section>

        {/* Impact Metrics Bar */}
        <section className="bg-surface-container-low py-12 mb-32">
          <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="space-y-2">
              <div className="text-5xl font-headline font-black text-on-surface">500+</div>
              <div className="label-md uppercase tracking-widest text-on-surface-variant">Projects Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-headline font-black text-secondary">12+</div>
              <div className="label-md uppercase tracking-widest text-on-surface-variant">Industries Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-headline font-black text-primary">240%</div>
              <div className="label-md uppercase tracking-widest text-on-surface-variant">Average ROI Increase</div>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="px-8 mb-32 max-w-[1440px] mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-surface-container h-[600px] flex items-end group">
            <img 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" 
              src="/assets/images/dashboard-preview.png" 
              alt="Futuristic logistics hub at night with cyan light trails" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
            <div className="relative z-10 p-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
              <div>
                <span className="inline-block px-3 py-1 rounded bg-secondary-container text-on-secondary-container text-xs font-bold mb-4">
                  SECURITY & LOGISTICS
                </span>
                <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-on-surface">
                  Global Logistics Corp: Zero-Trust Fleet Transformation
                </h2>
                <p className="text-on-surface-variant body-md max-w-lg mb-8">
                  A complete overhaul of mission-critical fleet management systems using blockchain verification and edge-computing security protocols.
                </p>
                <button className="gradient-button px-8 py-4 rounded-lg text-on-primary font-bold tracking-tight hover:shadow-[0_0_20px_rgba(143,245,255,0.4)] transition-all bg-gradient-to-br from-primary to-primary-container">
                  View Case Study
                </button>
              </div>
              <div className="flex flex-col gap-6 lg:items-end">
                <div className="glass-panel p-6 rounded-xl w-full max-w-xs">
                  <div className="text-primary text-3xl font-bold mb-1">99.9%</div>
                  <div className="text-on-surface-variant text-sm uppercase tracking-tighter">Mitigation Rate</div>
                </div>
                <div className="glass-panel p-6 rounded-xl w-full max-w-xs">
                  <div className="text-secondary text-3xl font-bold mb-1">40ms</div>
                  <div className="text-on-surface-variant text-sm uppercase tracking-tighter">Global Latency</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filterable Works Grid */}
        <section className="px-8 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h3 className="font-headline text-4xl font-bold mb-4">Select Operations</h3>
              <p className="text-on-surface-variant">Exploring the frontier of digital architecture.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setActiveFilter('All')}
                className={`px-6 py-2 rounded-full border font-medium text-sm transition-all ${
                  activeFilter === 'All' 
                    ? 'border-primary text-primary' 
                    : 'border-outline-variant text-on-surface-variant hover:border-on-surface-variant'
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveFilter('AI')}
                className={`px-6 py-2 rounded-full border font-medium text-sm transition-all ${
                  activeFilter === 'AI' 
                    ? 'border-primary text-primary' 
                    : 'border-outline-variant text-on-surface-variant hover:border-on-surface-variant'
                }`}
              >
                AI
              </button>
              <button 
                onClick={() => setActiveFilter('Ecommerce')}
                className={`px-6 py-2 rounded-full border font-medium text-sm transition-all ${
                  activeFilter === 'Ecommerce' 
                    ? 'border-secondary text-secondary' 
                    : 'border-outline-variant text-on-surface-variant hover:border-on-surface-variant'
                }`}
              >
                Ecommerce
              </button>
              <button 
                onClick={() => setActiveFilter('Mobile')}
                className={`px-6 py-2 rounded-full border font-medium text-sm transition-all ${
                  activeFilter === 'Mobile' 
                    ? 'border-tertiary text-tertiary' 
                    : 'border-outline-variant text-on-surface-variant hover:border-on-surface-variant'
                }`}
              >
                Mobile
              </button>
              <button 
                onClick={() => setActiveFilter('Security')}
                className={`px-6 py-2 rounded-full border font-medium text-sm transition-all ${
                  activeFilter === 'Security' 
                    ? 'border-secondary text-secondary' 
                    : 'border-outline-variant text-on-surface-variant hover:border-on-surface-variant'
                }`}
              >
                Security
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group bg-surface-container-low rounded-xl overflow-hidden flex flex-col h-full border border-outline-variant/5 hover:border-primary/20 transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className={`absolute inset-0 bg-${project.color}/10 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className={`label-sm uppercase text-${project.color} tracking-widest mb-3`}>{project.label}</span>
                  <h4 className="font-headline text-xl font-bold mb-4 text-on-surface">{project.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>
                  <a className={`inline-flex items-center gap-2 text-${project.color} text-sm font-bold uppercase tracking-wider group/link`} href={`/works/${project.slug}`}>
                    View Case Study
                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 mt-32 max-w-[1440px] mx-auto">
          <div className="bg-surface-container-high rounded-2xl p-16 relative overflow-hidden text-center border border-outline-variant/10">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
            <h2 className="font-headline text-4xl md:text-5xl font-black mb-6 max-w-2xl mx-auto text-on-surface">
              Architect Your Transformation.
            </h2>
            <p className="body-md text-on-surface-variant max-w-xl mx-auto mb-10 leading-relaxed">
              Let's build the next era of your digital infrastructure. Our engineers are ready to initialize your deployment strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="gradient-button px-10 py-4 rounded-lg text-on-primary font-bold tracking-tight hover:shadow-[0_0_25px_rgba(143,245,255,0.4)] transition-all flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary-container">
                Initialize Consultation
                <span className="material-symbols-outlined text-lg">terminal</span>
              </a>
              <button className="bg-surface-container-highest border border-outline-variant px-10 py-4 rounded-lg text-on-surface font-bold tracking-tight hover:bg-surface-bright transition-all">
                View Capability Deck
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Works;
