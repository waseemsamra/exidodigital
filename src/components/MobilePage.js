import React from 'react';
import mobileContent from '../data/mobile-content.json';
import NavBar from './NavBar';
import Footer from './Footer';

function MobilePage() {
  const { badge, title, description, buttons, backgroundImage, backgroundAlt, phoneImage, phoneAlt } = mobileContent.hero;
  
  const { label: archLabel, title: archTitle, description: archDesc, items: archItems } = mobileContent.architecture;
  const { title: featuresTitle, items: featuresItems } = mobileContent.features;
  const { title: sdkTitle, description: sdkDesc, diagram, cards: sdkCards } = mobileContent.sdk;
  const { label: caseLabel, title: caseTitle, description: caseDesc, buttonLabel: caseButtonLabel, image: caseImage, imageAlt: caseImageAlt } = mobileContent.caseStudy;
  const { title: ctaTitle, description: ctaDesc, buttons: ctaButtons } = mobileContent.cta;

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary/30 selection:text-primary">
      <NavBar links={mobileContent.navigation.links} buttons={mobileContent.navigation.buttons} />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden px-8">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-40 mix-blend-screen"
              src={backgroundImage}
              alt={backgroundAlt}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-3 py-1 bg-surface-container-high border border-outline-variant/20 rounded text-[10px] font-bold tracking-[0.2em] text-secondary uppercase">
                {badge}
              </div>
              <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-[-0.04em] leading-[0.9] text-on-surface">
                {title.line1} <span className="text-primary block">{title.line2}</span> for the Edge
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-lg font-light leading-relaxed">
                {description}
              </p>
              <div className="flex items-center gap-6 pt-4">
                {buttons.map((button, index) => (
                  button.variant === 'primary' ? (
                    <button
                      key={index}
                      className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold px-8 py-4 rounded-lg shadow-[0_0_25px_rgba(143,245,255,0.2] hover:scale-105 transition-transform"
                    >
                      {button.label}
                    </button>
                  ) : (
                    <button
                      key={index}
                      className="flex items-center gap-2 font-semibold text-primary hover:text-primary-container transition-colors group"
                    >
                      {button.label}
                      <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                        {button.icon}
                      </span>
                    </button>
                  )
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute -inset-4 bg-secondary/10 blur-[100px] rounded-full"></div>
              <div className="glass-panel p-2 rounded-[2.5rem] border border-outline-variant/30 shadow-2xl transform rotate-3 scale-95 overflow-hidden">
                <img className="rounded-[2.2rem] w-full" src={phoneImage} alt={phoneAlt} />
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-32 bg-surface-container-low px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div>
                <span className="font-label text-xs font-bold uppercase tracking-widest text-secondary mb-4 block">
                  {archLabel}
                </span>
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface">
                  {archTitle}
                </h2>
              </div>
              <p className="text-on-surface-variant max-w-sm text-sm">{archDesc}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {archItems.map((item, index) => (
                <div
                  key={index}
                  className={`bg-surface-container p-8 rounded-xl border-l-4 hover:bg-surface-container-high transition-colors group ${
                    item.color === 'primary' ? 'border-primary' : item.color === 'secondary' ? 'border-secondary' : 'border-tertiary'
                  }`}
                >
                  <div className={`w-12 h-12 mb-8 rounded flex items-center justify-center ${
                    item.color === 'primary' ? 'bg-primary/10 text-primary' : item.color === 'secondary' ? 'bg-secondary/10 text-secondary' : 'bg-tertiary/10 text-tertiary'
                  }`}>
                    <span className="material-symbols-outlined text-3xl" style={item.iconFill ? { fontVariationSettings: "'FILL' 1" } : {}}>
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{item.description}</p>
                  <div className={`flex items-center gap-2 text-xs font-bold tracking-tighter uppercase opacity-0 group-hover:opacity-100 transition-opacity ${
                    item.color === 'primary' ? 'text-primary' : item.color === 'secondary' ? 'text-secondary' : 'text-tertiary'
                  }`}>
                    {item.linkLabel} <span className="material-symbols-outlined text-sm">north_east</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Suite */}
        <section className="py-32 bg-surface px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="font-headline text-4xl md:text-5xl font-black mb-6">{featuresTitle}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {featuresItems.map((feature, index) => (
                <div key={index} className="space-y-4 group">
                  <div className={`${
                    feature.color === 'primary' ? 'text-primary' : feature.color === 'secondary' ? 'text-secondary' : 'text-tertiary'
                  } opacity-50 group-hover:opacity-100 transition-opacity`}>
                    <span className="material-symbols-outlined text-5xl">{feature.icon}</span>
                  </div>
                  <h4 className="font-headline text-lg font-bold">{feature.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SDK & Integration Section */}
        <section className="py-32 bg-surface-container-low px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 glass-panel p-12 rounded-2xl flex flex-col justify-between min-h-[500px] border border-outline-variant/10">
              <div>
                <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">{sdkTitle}</h2>
                <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">{sdkDesc}</p>
              </div>
              <div className="relative mt-12 h-64 border border-outline-variant/20 rounded-xl overflow-hidden bg-surface-container-lowest">
                <div className="absolute inset-0 flex items-center justify-around px-12">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center text-primary shadow-[0_0_20px_rgba(143,245,255,0.2]">
                      <span className="material-symbols-outlined">smartphone</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest">{diagram.client}</span>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary via-secondary to-primary-container relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface px-4 py-1 border border-outline-variant/30 rounded-full text-[10px] font-bold">
                      {diagram.gateway}
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 rounded-lg bg-surface-variant border border-secondary flex items-center justify-center text-secondary shadow-[0_0_30px_rgba(172,137,255,0.2]">
                      <span className="material-symbols-outlined text-4xl">psychology</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest">{diagram.core}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-6">
              {sdkCards.map((card, index) => (
                <div
                  key={index}
                  className={`flex-1 p-8 rounded-2xl border border-outline-variant/10 ${
                    card.color === 'secondary' ? 'bg-secondary-container' : 'bg-surface-container-highest'
                  }`}
                >
                  <span className={`material-symbols-outlined mb-4 ${
                    card.color === 'secondary' ? 'text-on-secondary-container' : 'text-primary'
                  }`}>{card.icon}</span>
                  <h4 className={`font-headline text-xl font-bold mb-2 ${
                    card.color === 'secondary' ? 'text-on-secondary-container' : ''
                  }`}>{card.title}</h4>
                  <p className={`text-sm ${
                    card.color === 'secondary' ? 'text-on-secondary-container/80' : 'text-on-surface-variant'
                  }`}>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-24 px-8">
          <div className="max-w-7xl mx-auto glass-panel p-1 rounded-3xl border border-outline-variant/20 overflow-hidden group">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 p-8 md:p-16 items-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
              <div className="order-2 md:order-1">
                <span className="text-xs font-bold tracking-widest text-secondary uppercase mb-6 block">
                  {caseLabel}
                </span>
                <h2 className="font-headline text-4xl font-bold mb-6">{caseTitle}</h2>
                <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">{caseDesc}</p>
                <a className="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all" href="#">
                  {caseButtonLabel} <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
              <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/10 transform group-hover:scale-105 transition-transform duration-700">
                <img className="w-full h-full object-cover" src={caseImage} alt={caseImageAlt} />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-8 text-center bg-gradient-to-b from-surface to-surface-container-low">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface">
              {ctaTitle}
            </h2>
            <p className="text-on-surface-variant text-xl font-light">{ctaDesc}</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              {ctaButtons.map((button, index) => (
                <button
                  key={index}
                  className={`w-full md:w-auto font-bold px-12 py-5 rounded-lg transition-all ${
                    button.variant === 'primary'
                      ? 'bg-primary text-on-primary shadow-[0_0_30px_rgba(143,245,255,0.4] hover:shadow-[0_0_50px_rgba(143,245,255,0.6]'
                      : 'bg-surface-container-highest border border-outline-variant/30 text-on-surface hover:bg-surface-bright'
                  }`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer
        company={{ name: mobileContent.footer.company.name, description: mobileContent.footer.company.description }}
        columns={mobileContent.footer.columns}
        copyright={mobileContent.footer.copyright}
        socialIcons={mobileContent.footer.socialIcons}
      />
    </div>
  )
}

export default MobilePage;
