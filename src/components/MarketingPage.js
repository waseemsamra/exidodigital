import React from 'react';
import marketingContent from '../data/marketing-content.json';

function MarketingPage() {
  const { badge, title, description, buttons, backgroundImage, backgroundAlt } = marketingContent.hero;
  
  const { label: pillarsLabel, title: pillarsTitle, items: pillarsItems } = marketingContent.pillars;
  const { title: engineTitle, description: engineDesc, steps: engineSteps } = marketingContent.growthEngine;
  const { quote, author, stat, statLabel, statNote } = marketingContent.metric;
  const { title: ctaTitle, description: ctaDesc, buttons: ctaButtons } = marketingContent.cta;

  const getColorClass = (color) => {
    const colorMap = {
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary',
      'primary-fixed': 'text-primary-fixed'
    };
    return colorMap[color] || 'text-primary';
  };

  const getBorderClass = (color) => {
    const colorMap = {
      primary: 'border-primary/30',
      secondary: 'border-secondary/30',
      tertiary: 'border-tertiary/30'
    };
    return colorMap[color] || 'border-primary/30';
  };

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30">      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,_rgba(143,245,255,0.05_0%,_transparent_50%]"></div>
            <img
              className="w-full h-full object-cover opacity-20 mix-blend-screen"
              src={backgroundImage}
              alt={backgroundAlt}
            />
          </div>
          <div className="relative z-10 max-w-[1440px] mx-auto px-8 w-full">
            <div className="max-w-4xl">
              <span className="label-sm uppercase tracking-widest text-secondary font-semibold mb-4 block">
                {badge}
              </span>
              <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter text-on-surface leading-[0.9] mb-8">
                {title.line1}<br/>{title.line2} <span className="gradient-text">{title.line3}</span>
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-12">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                {buttons.map((button, index) => (
                  button.variant === 'primary' ? (
                    <button
                      key={index}
                      className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg font-bold text-lg hover:shadow-[0_0_20px_rgba(143,245,255,0.4] transition-all transform active:scale-95"
                    >
                      {button.label}
                    </button>
                  ) : (
                    <button
                      key={index}
                      className="flex items-center gap-3 px-8 py-4 rounded-lg border border-outline-variant/30 text-on-surface font-semibold hover:bg-surface-container-high transition-all"
                    >
                      <span className="material-symbols-outlined">{button.icon}</span>
                      {button.label}
                    </button>
                  )
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Growth Pillars Section */}
        <section className="py-32 bg-surface-container-low px-8">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="label-md uppercase tracking-widest text-on-surface-variant mb-2 block">
                  {pillarsLabel}
                </span>
                <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface">
                  {pillarsTitle}
                </h2>
              </div>
              <div className="hidden lg:block h-[1px] flex-1 mx-12 bg-outline-variant/20"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillarsItems.map((pillar, index) => (
                <div
                  key={index}
                  className={`group relative bg-surface-container-highest p-8 rounded-xl border border-outline-variant/10 hover:${getBorderClass(pillar.color)} transition-all duration-500 overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                    <span
                      className={`material-symbols-outlined text-6xl ${getColorClass(pillar.color)}`}
                      style={pillar.iconFill ? { fontVariationSettings: "'FILL' 1" } : {}}
                    >
                      {pillar.icon}
                    </span>
                  </div>
                  <span className={`${getColorClass(pillar.color)} font-mono text-sm mb-6 block`}>
                    {pillar.number} // {pillar.label}
                  </span>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">{pillar.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-8">{pillar.description}</p>
                  <ul className="space-y-3">
                    {pillar.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-on-surface/70">
                        <span className={`material-symbols-outlined ${getColorClass(pillar.color)} text-lg`}>
                          check_circle
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Engine Section */}
        <section className="py-32 bg-surface overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="text-center mb-24">
              <h2 className="font-headline text-5xl font-extrabold tracking-tight text-on-surface mb-6">
                {engineTitle}
              </h2>
              <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">{engineDesc}</p>
            </div>
            <div className="relative flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-4">
              {engineSteps.map((step, index) => (
                <React.Fragment key={index}>
                  <div className="relative z-10 w-full max-w-xs text-center group">
                    <div className={`w-24 h-24 mx-auto mb-8 glass-panel rounded-full flex items-center justify-center border ${step.color === 'secondary' ? 'border-secondary/20 group-hover:border-secondary' : step.color === 'primary-fixed' ? 'border-primary-fixed/20 group-hover:border-primary-fixed' : 'border-primary/20 group-hover:border-primary'} transition-all`}>
                      <span className={`material-symbols-outlined text-3xl ${getColorClass(step.color)}`}>
                        {step.icon}
                      </span>
                    </div>
                    <h4 className="font-headline text-xl font-bold text-on-surface mb-3">{step.title}</h4>
                    <p className="text-sm text-on-surface-variant">{step.description}</p>
                  </div>
                  {index < engineSteps.length - 1 && (
                    <div className={`hidden lg:block flex-1 h-[2px] bg-gradient-to-r ${
                      index === 0 ? 'from-primary/40 to-secondary/40' :
                      index === 1 ? 'from-secondary/40 to-primary-fixed/40' :
                      'from-primary-fixed/40 to-primary/40'
                    }`}></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Metric Section */}
        <section className="py-24 bg-surface-container-low border-y border-outline-variant/10">
          <div className="max-w-[1440px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <span className="material-symbols-outlined text-6xl text-secondary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>
                format_quote
              </span>
              <blockquote className="text-3xl font-headline font-bold text-on-surface leading-tight mb-8">
                "{quote}"
              </blockquote>
              <p className="text-on-surface-variant font-semibold">{author}</p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative p-12 glass-panel rounded-2xl border border-primary/20 text-center">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-on-primary">trending_up</span>
                </div>
                <div className="text-7xl font-headline font-black text-primary tracking-tighter mb-2">{stat}</div>
                <div className="text-on-surface-variant uppercase tracking-widest font-bold text-sm">{statLabel}</div>
                <div className="mt-6 text-xs text-on-surface-variant/60 font-mono tracking-tighter">{statNote}</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5"></div>
          <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
            <h2 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter mb-8">
              {ctaTitle.line1} <span className="gradient-text">{ctaTitle.line2}</span>
            </h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">{ctaDesc}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {ctaButtons.map((button, index) => (
                <button
                  key={index}
                  className={`px-10 py-5 rounded-lg font-bold text-xl transition-all ${
                    button.variant === 'primary'
                      ? 'bg-gradient-to-br from-primary to-primary-container text-on-primary hover:shadow-[0_0_30px_rgba(143,245,255,0.4]'
                      : 'border border-outline-variant text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>    </div>
  )
}

export default MarketingPage;
