import React from 'react';
import servicesContent from '../data/services-content.json';
import { Link } from 'react-router-dom';

function ServicesPage() {
  const { badge, title, description, buttons, backgroundImage, backgroundAlt } = servicesContent.hero;
  const { title: servicesTitle, description: servicesDesc, items: servicesItems } = servicesContent.services;

  const { stats } = servicesContent;
  const { title: ctaTitle, description: ctaDesc, buttons: ctaButtons } = servicesContent.cta;

  const getColorClass = (color) => {
    const colorMap = {
      primary: 'text-primary',
      secondary: 'text-secondary'
    };
    return colorMap[color] || 'text-primary';
  };

  const getBorderClass = (color) => {
    const colorMap = {
      primary: 'border-primary/20',
      secondary: 'border-secondary/20'
    };
    return colorMap[color] || 'border-primary/20';
  };

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30">
      <main className="pt-32">
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-12 mb-32 grid md:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="font-label text-xs font-bold uppercase tracking-[0.4em] text-secondary mb-6 block">
              {badge}
            </span>
            <h1 className="font-headline text-7xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[0.95]">
              {title.line1} <br/><span className="text-primary italic">{title.line2}</span>
            </h1>
            <p className="text-on-surface-variant text-xl leading-relaxed max-w-xl mb-10">
              {description}
            </p>
            <div className="flex items-center gap-6">
              {buttons.map((button, index) => (
                button.variant === 'primary' ? (
                  <button
                    key={index}
                    className="bg-power-cell text-on-primary px-8 py-4 font-bold text-sm uppercase tracking-widest rounded-lg hover:shadow-[0_0_20px_rgba(143,245,255,0.5] transition-all"
                  >
                    {button.label}
                  </button>
                 ) : (
                  <a
                    key={index}
                    href={button.href}
                    className="text-primary font-bold text-sm uppercase tracking-widest hover:underline decoration-2 underline-offset-8"
                  >
                    {button.label}
                  </a>
                )
              ))}
            </div>
          </div>
          <div className="relative h-[600px] w-full bg-surface-container-low rounded-xl overflow-hidden group">
            <img
              className="w-full h-full object-cover opacity-60 mix-blend-screen group-hover:scale-110 transition-transform duration-700"
              src={backgroundImage}
              alt={backgroundAlt}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
          </div>
        </section>

        {/* Service Bento Grid */}
        <section className="max-w-[1440px] mx-auto px-12 mb-40" id="services">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">{servicesTitle}</h2>
              <div className="w-24 h-1 bg-secondary rounded-full"></div>
            </div>
            <p className="text-on-surface-variant max-w-xs text-sm italic">{servicesDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicesItems.filter(s => !['ecommerce-card', 'mobile-app-dev', 'data-warehousing', 'hosting'].includes(s.id)).map((service, index) => (
              <div
                key={index}
                className={`${
                  service.size === 'large' ? 'md:col-span-2' : service.size === 'wide' ? 'md:col-span-2' : ''
                } ${
                  service.id === 'marketing' ? 'bg-surface-variant/60 glass-blur-md' :
                  service.id === 'accounting' ? 'bg-obsidian-gradient' :
                  service.id === 'ai-bi' ? 'bg-surface-container-low' :
                  'bg-surface-container-high'
                } p-10 rounded-xl ${
                  service.id !== 'marketing' && service.id !== 'accounting' && service.id !== 'ai-bi' ? 'border border-outline-variant/10 hover:' + getBorderClass(service.color) + ' transition-colors' : ''
                } ${
                  service.id === 'ai-bi' ? 'relative overflow-hidden group border border-outline-variant/10' : ''
                }`}
              >
                {service.id === 'ai-bi' ? (
                  <>
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        <span className={`material-symbols-outlined text-4xl ${getColorClass(service.color)} mb-6`}>
                          {service.icon}
                        </span>
                        <h3 className="font-headline text-3xl font-bold mb-4">{service.title}</h3>
                        <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">{service.description}</p>
                      </div>
                      <Link
                        to={service.link}
                        className={`${getColorClass(service.color)} font-bold text-sm uppercase tracking-widest mt-12 hover:translate-x-2 transition-transform inline-flex items-center gap-2`}
                      >
                        {service.linkLabel || 'Learn More'} <span className="material-symbols-outlined text-base">arrow_forward</span>
                      </Link>
                    </div>
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500">
                      <img className="w-full h-full object-cover" src={service.image} alt={service.imageAlt} />
                    </div>
                  </>
                ) : service.id === 'marketing' ? (
                  <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                    <div className="flex-1">
                      <span className={`material-symbols-outlined text-4xl ${getColorClass(service.color)} mb-6`}>
                        {service.icon}
                      </span>
                      <h3 className="font-headline text-3xl font-bold mb-4">{service.title}</h3>
                      <p className="text-on-surface-variant text-lg leading-relaxed">{service.description}</p>
                      <Link
                        to={service.link}
                        className="bg-surface text-on-surface mt-8 px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest border border-outline-variant/30 hover:bg-surface-container-high transition-all inline-block"
                      >
                        {service.buttonLabel}
                      </Link>
                    </div>
                    <div className="w-full md:w-64 h-48 rounded-lg overflow-hidden shrink-0 shadow-2xl">
                      <img className="w-full h-full object-cover" src={service.image} alt={service.imageAlt} />
                    </div>
                  </div>
                ) : service.id === 'accounting' ? (
                  <div className="flex items-center justify-between">
                    <div className="max-w-md">
                      <span className={`material-symbols-outlined text-4xl ${getColorClass(service.color)} mb-6`}>
                        {service.icon}
                      </span>
                      <h3 className="font-headline text-3xl font-bold mb-4">{service.title}</h3>
                      <p className="text-on-surface-variant text-lg leading-relaxed">{service.description}</p>
                      <Link
                        to={service.link}
                        className={`${getColorClass(service.color)} font-bold text-xs uppercase tracking-widest hover:underline underline-offset-8 inline-flex items-center gap-2 mt-4`}
                      >
                        {service.linkLabel || 'Learn More'} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="w-32 h-32 rounded-full border-4 border-dashed border-secondary/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-1000">
                        <span className={`material-symbols-outlined text-5xl ${getColorClass(service.color)}`}>
                          token
                        </span>
                      </div>
                    </div>
                  </div>
                ) : service.id === 'infrastructure' || service.id === 'software-dev' || service.id === 'network' ? (
                  <>
                    <span className={`material-symbols-outlined text-4xl ${getColorClass(service.color)} mb-6`}>
                      {service.icon}
                    </span>
                    <h3 className="font-headline text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-10">{service.description}</p>
                    <Link
                      to={service.link}
                      className={`${getColorClass(service.color)} font-bold text-xs uppercase tracking-widest hover:underline underline-offset-8`}
                    >
                      {service.linkLabel || 'Learn More'}
                    </Link>
                  </>
                ) : (
                  <>
                    <span className={`material-symbols-outlined text-4xl ${getColorClass(service.color)} mb-6`}>
                      {service.icon}
                    </span>
                    <h3 className="font-headline text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-10">{service.description}</p>
                    <button className={`${getColorClass(service.color)} font-bold text-xs uppercase tracking-widest hover:underline underline-offset-8`}>
                      {service.linkLabel}
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
          {/* E-Commerce, Mobile App Dev, Data Warehousing and Hosting Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            {servicesItems.filter(s => ['ecommerce-card', 'mobile-app-dev', 'data-warehousing', 'hosting'].includes(s.id)).map((service, index) => (
              <div
                key={index}
                className="bg-surface-container-low p-10 rounded-xl relative overflow-hidden group border border-outline-variant/10"
              >
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <span className={`material-symbols-outlined text-4xl ${getColorClass(service.color)} mb-6`}>
                      {service.icon}
                    </span>
                    <h3 className="font-headline text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">{service.description}</p>
                  </div>
                  <Link
                    to={service.link}
                    className={`${getColorClass(service.color)} font-bold text-sm uppercase tracking-widest mt-12 hover:translate-x-2 transition-transform inline-flex items-center gap-2`}
                  >
                    {service.linkLabel || 'Learn More'} <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img className="w-full h-full object-cover" src={service.image} alt={service.imageAlt} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global Impact Stats */}
        <section className="bg-surface-container-low py-32 mb-40 border-y border-outline-variant/10">
          <div className="max-w-[1440px] mx-auto px-12 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="font-headline text-6xl font-black text-primary mb-2">
                  {stat.value}
                </div>
                <div className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="max-w-[1440px] mx-auto px-12 mb-20 relative">
          <div className="bg-surface-bright/40 glass-blur-md p-20 rounded-xl border border-outline-variant/20 text-center relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>
            <h2 className="font-headline text-5xl font-extrabold mb-8 tracking-tighter">{ctaTitle}</h2>
            <p className="text-on-surface-variant text-xl max-w-2xl mx-auto mb-12">{ctaDesc}</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              {ctaButtons.map((button, index) => (
                <button
                  key={index}
                  className={`px-10 py-5 font-bold text-sm uppercase tracking-widest rounded-lg transition-all ${
                    button.variant === 'primary'
                      ? 'bg-power-cell text-on-primary hover:shadow-[0_0_30px_rgba(143,245,255,0.4]'
                      : 'bg-surface text-on-surface border border-outline-variant hover:bg-surface-container-high'
                  }`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ServicesPage;
