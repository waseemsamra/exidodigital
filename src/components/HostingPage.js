import React from 'react';
import hostingContent from '../data/hosting-content.json';
import NavBar from './NavBar';
import Footer from './Footer';

function HostingPage() {
  const { badge, title, description, buttons, backgroundImage, backgroundAlt } = hostingContent.hero;
  
  const { title: tiersTitle, items: tiersItems } = hostingContent.tiers;
  const { label: emailLabel, title: emailTitle, description: emailDesc, image: emailImage, imageAlt: emailImageAlt, features: emailFeatures } = hostingContent.email;
  const { title: meshTitle, description: meshDesc, image: meshImage, imageAlt: meshImageAlt, stats: meshStats } = hostingContent.mesh;
  const { items: metricsItems } = hostingContent.metrics;
  const { title: ctaTitle, description: ctaDesc, buttonLabel: ctaButtonLabel, note: ctaNote } = hostingContent.cta;

  const getColorClass = (color) => {
    const colorMap = {
      primary: 'text-primary',
      secondary: 'text-secondary',
      'on-surface': 'text-on-surface'
    };
    return colorMap[color] || 'text-primary';
  };

  const getBgClass = (color) => {
    const colorMap = {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      'on-surface': 'bg-on-surface'
    };
    return colorMap[color] || 'bg-primary';
  };

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary">
      <NavBar links={hostingContent.navigation.links} buttons={hostingContent.navigation.buttons} />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[819px] flex items-center px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover opacity-30 mix-blend-luminosity" src={backgroundImage} alt={backgroundAlt} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-block mb-6 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
                <span className="text-xs font-bold tracking-widest uppercase text-primary">{badge}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface mb-8 leading-[0.9]">
                {title.line1} <span className="text-primary italic">{title.line2}</span> {title.line3}
              </h1>
              <p className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">{description}</p>
              <div className="flex flex-wrap gap-4">
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    className={`px-8 py-4 rounded-lg font-bold uppercase tracking-wider text-sm transition-all ${
                      button.variant === 'primary'
                        ? 'obsidian-gradient text-on-primary shadow-[0_0_20px_rgba(143,245,255,0.3] hover:scale-105'
                        : 'bg-surface-container-high border border-outline-variant/30 text-on-surface hover:bg-surface-bright'
                    }`}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full"></div>
                <div className="relative bg-surface-container-low border border-outline-variant/10 rounded-2xl p-8 backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Global Status</span>
                    <span className="w-2 h-2 rounded-full bg-primary glow-primary"></span>
                  </div>
                  <div className="space-y-6">
                    <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-full shadow-[0_0_10px_#8ff5ff]"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-surface-container rounded-lg">
                        <div className="text-[10px] text-on-surface-variant uppercase mb-1">Latency</div>
                        <div className="text-xl font-headline font-bold text-primary">8.4ms</div>
                      </div>
                      <div className="p-4 bg-surface-container rounded-lg">
                        <div className="text-[10px] text-on-surface-variant uppercase mb-1">Throughput</div>
                        <div className="text-xl font-headline font-bold text-secondary">4.2 TB/s</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hosting Tier Grid */}
        <section className="py-24 px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-headline font-bold tracking-tight mb-4">{tiersTitle}</h2>
              <div className="w-12 h-1 bg-primary"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiersItems.map((tier, index) => (
                <div
                  key={index}
                  className={`group relative bg-surface-container-high p-8 rounded-xl border ${tier.featured ? 'border-primary/30 ring-1 ring-primary/20 shadow-[0_0_40px_-10px_rgba(143,245,255,0.15] transform scale-105 z-10' : 'border-outline-variant/10 hover:bg-surface-bright'} transition-all duration-500`}
                >
                  {tier.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-3 py-1 rounded text-[10px] font-bold text-on-primary uppercase tracking-widest">Elite</div>
                  )}
                  <div className={`mb-6 ${getColorClass(tier.color)}`}>
                    <span className="material-symbols-outlined text-4xl">{tier.icon}</span>
                  </div>
                  <h3 className="text-xl font-headline font-bold mb-4">{tier.title}</h3>
                  <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">{tier.description}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-xs font-medium">
                        <span className={`material-symbols-outlined ${getColorClass(tier.color)} text-sm`}>check_circle</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-outline-variant/10">
                    <span className="text-2xl font-headline font-bold">{tier.price}</span>
                    <span className="text-xs text-on-surface-variant uppercase ml-1">{tier.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Secure Email Kernels */}
        <section className="py-24 px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/10 blur-[120px]"></div>
              <img className="relative z-10 rounded-xl grayscale opacity-80 hover:grayscale-0 transition-all duration-700" src={emailImage} alt={emailImageAlt} />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4">{emailLabel}</h2>
              <h3 className="text-4xl font-headline font-bold mb-6 leading-tight">{emailTitle}</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">{emailDesc}</p>
              <div className="space-y-6">
                {emailFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-low border border-outline-variant/10">
                    <span className="material-symbols-outlined text-secondary">{feature.icon}</span>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-on-surface-variant">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Global Edge Infrastructure */}
        <section className="py-24 px-8 bg-[#091328]">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-headline font-bold mb-4">{meshTitle}</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto mb-16">{meshDesc}</p>
            <div className="relative w-full aspect-[21/9] bg-surface-container rounded-3xl p-8 overflow-hidden group">
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #40485d 1px, transparent 0', backgroundSize: '40px 40px' }}></div>
              <div className="relative h-full flex items-center justify-center">
                <img className="max-w-full h-auto opacity-40 group-hover:opacity-60 transition-opacity duration-1000" src={meshImage} alt={meshImageAlt} />
                <div className="absolute top-[20%] left-[15%]"><span className="flex h-3 w-3 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span></span></div>
                <div className="absolute top-[45%] left-[45%]"><span className="flex h-3 w-3 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span></span></div>
                <div className="absolute top-[30%] right-[25%]"><span className="flex h-3 w-3 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span></span></div>
                <div className="absolute bottom-[25%] left-[30%]"><span className="flex h-3 w-3 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span></span></div>
              </div>
              <div className="absolute bottom-8 left-8 flex gap-8">
                {meshStats.map((stat, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <div className="w-px h-10 bg-outline-variant/30"></div>}
                    <div>
                      <div className="text-[10px] uppercase font-bold text-on-surface-variant mb-1">{stat.label}</div>
                      <div className="text-2xl font-headline font-bold">{stat.value}</div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Performance & Reliability Metrics */}
        <section className="py-24 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {metricsItems.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className={`text-6xl md:text-7xl font-headline font-black mb-4 ${getColorClass(metric.color)} ${metric.color === 'primary' ? 'glow-primary' : metric.color === 'secondary' ? 'glow-secondary' : ''} group-hover:scale-110 transition-transform`}>{metric.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{metric.label}</div>
                <p className="mt-4 text-sm text-on-surface-variant px-8 italic">{metric.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-8">
          <div className="max-w-5xl mx-auto bg-surface-container-high rounded-2xl p-12 text-center relative overflow-hidden border border-outline-variant/10">
            <div className="absolute inset-0 obsidian-gradient opacity-5"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">{ctaTitle}</h2>
              <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-10">{ctaDesc}</p>
              <button className="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(143,245,255,0.4] transition-all">
                {ctaButtonLabel}
              </button>
              <p className="mt-6 text-xs text-on-surface-variant">{ctaNote}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer
        company={{ name: hostingContent.footer.company.name, description: hostingContent.footer.company.description }}
        columns={hostingContent.footer.columns}
        copyright={hostingContent.footer.copyright}
        socialIcons={[]}
      />
    </div>
  )
}

export default HostingPage;
