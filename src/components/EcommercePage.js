import React from 'react';
import ecommerceContent from '../data/ecommerce-content.json';
import NavBar from './NavBar';
import Footer from './Footer';

function EcommercePage() {
  const { badge, title, description, buttons, backgroundImage, backgroundAlt } = ecommerceContent.hero;
  const { header, items: headlessItems } = ecommerceContent.headlessCommerce;
  const { title: opsTitle, items: opsItems, backgroundImage: opsBgImage, backgroundAlt: opsBgAlt } = ecommerceContent.operations;
  const { items: metricsItems } = ecommerceContent.metrics;
  const { label: caseLabel, title: caseTitle, buttonLabel, image: caseImage, imageAlt: caseImageAlt } = ecommerceContent.caseStudy;
  const { title: ctaTitle, description: ctaDescription, buttonLabel: ctaButtonLabel } = ecommerceContent.cta;


  return (
    <div className="bg-background text-on-surface font-body selection:bg-secondary/30">
      <NavBar links={ecommerceContent.navigation.links} buttons={ecommerceContent.navigation.buttons} />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center justify-center px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt=""
              className="w-full h-full object-cover opacity-40"
              src={backgroundImage}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"></div>
          </div>
          <div className="relative z-10 max-w-[1000px] text-center">
            <span className="inline-block label-md uppercase tracking-[0.3em] text-secondary font-bold mb-6">
              {badge}
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter mb-8 leading-tight text-on-background">
              {title.line1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">{title.line2}</span> {title.line3}
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={`px-10 py-5 rounded-lg font-bold text-lg transition-all ${
                    button.variant === 'primary'
                      ? 'bg-gradient-to-br from-primary to-primary-container text-on-primary hover:shadow-[0_0_25px_rgba(143,245,255,0.4] transform hover:-translate-y-1'
                      : 'glass-panel text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Headless Commerce Section */}
        <section className="py-32 px-8 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4">{header.title}</h2>
              <p className="text-on-surface-variant text-lg">{header.description}</p>
            </div>
            <div className="text-right hidden md:block">
              <span className="text-sm font-mono text-outline uppercase tracking-widest">{header.protocol}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {headlessItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-surface-container-low p-10 rounded-xl overflow-hidden hover:bg-surface-container-high transition-all duration-500 border border-outline-variant/10"
              >
                <div className="mb-8">
                  <span className={`material-symbols-outlined text-4xl ${
                    item.iconFill ? 'text-secondary' : item.id === 'microservices' ? 'text-primary' : 'text-primary'
                  }`} style={item.iconFill ? { fontVariationSettings: "'FILL' 1" } : {}}>
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">{item.title}</h3>
                <p className="text-on-surface-variant mb-6">{item.description}</p>
                <div className="mt-auto pt-4 border-t border-outline-variant/10">
                  <span className={`text-sm font-bold uppercase tracking-widest ${
                    item.id === 'api-first' ? 'text-secondary' : 'text-primary'
                  }`}>
                    {item.tags.join(' • ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Payment & Logistics Section */}
        <section className="bg-surface-container-low py-32 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
            <img
              alt=""
              className="w-full h-full object-cover"
              src={opsBgImage}
            />
          </div>
          <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-12">{opsTitle}</h2>
              <div className="space-y-12">
                {opsItems.map((item, index) => (
                  <div key={index} className="flex gap-8">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full glass-panel flex items-center justify-center">
                      <span className={`material-symbols-outlined ${
                        item.iconColor === 'secondary' ? 'text-secondary' : 'text-primary'
                      }`}>
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-on-surface-variant">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics Section */}
        <section className="py-32 px-8 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/10 rounded-2xl overflow-hidden border border-outline-variant/10">
            {metricsItems.map((metric, index) => (
              <div key={index} className="bg-surface p-16 text-center group">
                <div className="text-sm font-label uppercase tracking-widest text-on-surface-variant mb-6">
                  {metric.label}
                </div>
                <div className={`text-7xl font-headline font-extrabold mb-4 glow-text ${
                  metric.color === 'secondary' ? 'text-secondary' : 'text-primary'
                }`}>
                  {metric.value}
                </div>
                <div className={`h-1 w-12 mx-auto rounded-full group-hover:w-24 transition-all ${
                  metric.color === 'secondary' ? 'bg-secondary' : 'bg-primary'
                }`}></div>
                <p className="mt-6 text-sm text-on-surface-variant italic">{metric.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-16 px-8 max-w-[1440px] mx-auto">
          <a
            className="block group relative bg-surface-container-high rounded-xl overflow-hidden border border-outline-variant/15 p-12 hover:border-primary/30 transition-all duration-500"
            href="#"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                <span className="label-md font-bold uppercase text-primary tracking-widest block mb-4">
                  {caseLabel}
                </span>
                <h3 className="text-3xl md:text-4xl font-headline font-bold mb-6">{caseTitle}</h3>
                <div className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all text-primary">
                  {buttonLabel} <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <div className="relative rounded-lg overflow-hidden h-48 border border-outline-variant/20">
                  <img
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={caseImage}
                  />
                </div>
              </div>
            </div>
          </a>
        </section>

        {/* Final CTA Section */}
        <section className="py-40 px-8 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter mb-10 text-on-background">
              {ctaTitle}
            </h2>
            <p className="text-xl text-on-surface-variant mb-14 max-w-2xl mx-auto leading-relaxed">
              {ctaDescription}
            </p>
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-12 py-6 rounded-lg font-bold text-xl hover:shadow-[0_0_30px_rgba(143,245,255,0.5] transition-all transform hover:scale-105 active:scale-95">
              {ctaButtonLabel}
            </button>
          </div>
        </section>
      </main>
      <Footer
        company={{ name: ecommerceContent.footer.company.name, description: ecommerceContent.footer.company.description }}
        columns={ecommerceContent.footer.columns}
        copyright={ecommerceContent.footer.copyright}
        socialIcons={[]}
      />
    </div>
  )
}

export default EcommercePage;
