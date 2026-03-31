import React from 'react';
import securityContent from '../data/security-content.json';

function SecurityPage() {
  const { badge, title, description, buttons, backgroundImage, backgroundAlt } = securityContent.hero;
  
  const { label: pillarsLabel, title: pillarsTitle, description: pillarsDesc, items: pillarsItems } = securityContent.pillars;
  const { title: statsTitle, description: statsDesc, stat, statLabel, image: statsImage, imageAlt: statsImageAlt, items: statsItems } = securityContent.stats;
  const { title: ctaTitle, description: ctaDesc, buttons: ctaButtons } = securityContent.cta;

  const getColorClass = (color) => {
    const colorMap = {
      primary: 'text-primary',
      secondary: 'text-secondary'
    };
    return colorMap[color] || 'text-primary';
  };

  const getBgClass = (color) => {
    const colorMap = {
      primary: 'bg-primary/10',
      secondary: 'bg-secondary/10'
    };
    return colorMap[color] || 'bg-primary/10';
  };

  return (
    <div className="font-body selection:bg-primary selection:text-on-primary">      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[819px] flex items-center px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-surface to-transparent z-10"></div>
            <img
              className="w-full h-full object-cover opacity-30"
              src={backgroundImage}
              alt={backgroundAlt}
            />
          </div>
          <div className="relative z-20 max-w-4xl">
            <span className="label-md uppercase tracking-widest text-secondary font-bold mb-4 block">
              {badge}
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter text-on-surface leading-tight mb-8">
              {title.line1} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{title.line2}</span>
            </h1>
            <p className="text-on-surface-variant text-xl max-w-2xl mb-10 leading-relaxed">
              {description}
            </p>
            <div className="flex gap-6">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={`px-8 py-4 font-bold rounded-lg transition-all flex items-center gap-2 ${
                    button.variant === 'primary'
                      ? 'bg-primary text-on-primary hover:shadow-[0_0_20px_rgba(143,245,255,0.4]'
                      : 'border border-outline-variant text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  {button.icon && <span className="material-symbols-outlined">{button.icon}</span>}
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Bento Grid: Core Solutions */}
        <section className="px-8 py-24 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-xs font-bold text-outline tracking-[0.3em] uppercase mb-2 block">
                {pillarsLabel}
              </span>
              <h2 className="text-4xl font-headline font-bold text-on-surface">{pillarsTitle}</h2>
            </div>
            <p className="text-on-surface-variant max-w-md text-right">{pillarsDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            {pillarsItems.map((item, index) => (
              <div
                key={index}
                className={`${
                  item.size === 'large' ? 'md:col-span-7' : item.size === 'tall' ? 'md:col-span-5' : 'md:col-span-4'
                } ${
                  item.size === 'large' ? 'glass-panel flex flex-col justify-between group cursor-pointer hover:bg-surface-container-highest/80 transition-all' :
                  item.size === 'tall' ? 'bg-surface-container-low flex flex-col relative overflow-hidden group' :
                  'border'
                } ${
                  item.size !== 'tall' && item.size !== 'large' ? (
                    item.id === 'hybrid' ? 'bg-surface-container-highest' :
                    item.id === 'audits' ? 'bg-surface-container-low hover:border-primary/30 transition-colors' :
                    'bg-surface-container-high'
                  ) : ''
                } rounded-xl ${item.size !== 'tall' ? 'p-10' : 'p-8'} border border-outline-variant/15`}
              >
                {item.size === 'large' ? (
                  <>
                    <div>
                      <div className={`w-12 h-12 ${getBgClass(item.color)} rounded-lg flex items-center justify-center mb-6`}>
                        <span className={`material-symbols-outlined ${getColorClass(item.color)} text-3xl`}>{item.icon}</span>
                      </div>
                      <h3 className="text-3xl font-headline font-bold mb-4">{item.title}</h3>
                      <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">{item.description}</p>
                    </div>
                    <div className="flex items-center gap-4 pt-8">
                      <div className="h-px flex-1 bg-outline-variant/30"></div>
                      <span className={`${getColorClass(item.color)} font-bold text-sm tracking-widest uppercase`}>{item.linkLabel}</span>
                    </div>
                  </>
                ) : item.size === 'tall' ? (
                  <>
                    <div className="absolute -right-10 -top-10 opacity-10 group-hover:opacity-20 transition-opacity">
                      <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                    </div>
                    <div className="relative z-10 flex flex-col h-full">
                      <div className={`w-10 h-10 ${getBgClass(item.color)} rounded-lg flex items-center justify-center mb-6`}>
                        <span className={`material-symbols-outlined ${getColorClass(item.color)}`}>{item.icon}</span>
                      </div>
                      <h3 className="text-2xl font-headline font-bold mb-4">{item.title}</h3>
                      <p className="text-on-surface-variant mb-6">{item.description}</p>
                      <div className="mt-auto bg-surface-container-high p-4 rounded-lg border border-outline-variant/10">
                        <div className="flex justify-between items-center mb-2">
                          <span className={`text-xs font-bold ${getColorClass(item.color)} uppercase`}>Active Cipher</span>
                          <span className="text-xs text-on-surface-variant">{item.cipher}</span>
                        </div>
                        <div className="h-1 bg-surface-variant w-full rounded-full overflow-hidden">
                          <div className="h-full bg-secondary w-3/4 glow-line"></div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <span className={`material-symbols-outlined ${getColorClass(item.color)} mb-4`}>{item.icon}</span>
                    <h4 className="text-xl font-headline font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-on-surface-variant">{item.description}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-surface-container-low py-24 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                className="rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                src={statsImage}
                alt={statsImageAlt}
              />
              <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-lg shadow-xl">
                <p className="text-on-primary font-black text-5xl font-headline leading-none">{stat}</p>
                <p className="text-on-primary-container text-xs font-bold uppercase tracking-widest mt-2">{statLabel}</p>
              </div>
            </div>
            <div className="lg:pl-12">
              <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">{statsTitle}</span>
              <h2 className="text-5xl font-headline font-bold text-on-surface mb-8 leading-tight">{statsDesc}</h2>
              <div className="space-y-8">
                {statsItems.map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="text-3xl font-black text-outline/30 font-headline">{item.number}</div>
                    <div>
                      <h4 className="text-xl font-bold text-on-surface mb-2">{item.title}</h4>
                      <p className="text-on-surface-variant">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-8 text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-surface-container-high to-surface-container rounded-3xl p-16 border border-outline-variant/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-6">{ctaTitle}</h2>
            <p className="text-on-surface-variant text-lg mb-10 max-w-xl mx-auto">{ctaDesc}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {ctaButtons.map((button, index) => (
                <button
                  key={index}
                  className={`px-10 py-4 font-bold rounded-lg transition-all ${
                    button.variant === 'primary'
                      ? 'bg-primary text-on-primary hover:scale-105'
                      : 'glass-panel text-on-surface border border-outline-variant hover:bg-surface-bright'
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

export default SecurityPage;
