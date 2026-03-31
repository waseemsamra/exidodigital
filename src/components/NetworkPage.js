import React from 'react';
import networkContent from '../data/network-content.json';
import { Link } from 'react-router-dom';

function NetworkPage() {
  const { badge, title, description, buttons, backgroundImage, backgroundAlt } = networkContent.hero;
  
  
  const { label: featuresLabel, title: featuresTitle, description: featuresDesc, items: featuresItems } = networkContent.features;
  const { title: networkTitle, image: networkImage, imageAlt: networkImageAlt, items: networkItems } = networkContent.network;
  const { title: reliabilityTitle, description: reliabilityDesc, items: reliabilityItems } = networkContent.reliability;
  const { title: ctaTitle, buttons: ctaButtons } = networkContent.cta;

  const getColorClass = (color) => {
    const colorMap = {
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary'
    };
    return colorMap[color] || 'text-primary';
  };

  const getBorderClass = (color) => {
    const colorMap = {
      primary: 'border-primary/20',
      secondary: 'border-secondary/20',
      tertiary: 'border-tertiary/20'
    };
    return colorMap[color] || 'border-primary/20';
  };

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30">      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[819px] flex items-center justify-center px-6 hero-gradient overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary blur-[120px] rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary blur-[120px] rounded-full"></div>
          </div>
          <div className="max-w-5xl text-center relative z-10">
            <span className="inline-block label-md uppercase tracking-widest text-secondary font-semibold mb-6">
              {badge}
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter text-on-surface leading-[0.9] mb-8">
              {title.line1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">{title.line2}</span> {title.line3}
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={`w-full sm:w-auto px-10 py-5 rounded-lg font-bold text-lg transition-all ${
                    button.variant === 'primary'
                      ? 'bg-gradient-to-r from-primary to-primary-container text-on-primary hover:shadow-[0_0_30px_rgba(143,245,255,0.4] transform active:scale-95'
                      : 'bg-surface-container-highest border border-outline-variant/30 text-on-surface hover:bg-surface-bright'
                  }`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="max-w-[1440px] mx-auto px-8 py-32">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-2">{featuresLabel}</span>
              <h2 className="text-4xl font-headline font-bold tracking-tight">{featuresTitle}</h2>
            </div>
            <p className="max-w-md text-on-surface-variant text-sm">{featuresDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {featuresItems.map((item, index) => (
              <div
                key={index}
                className={`${
                  item.size === 'large' ? 'md:col-span-8' : item.size === 'small' ? 'md:col-span-4' : 'md:col-span-12'
                } ${
                  item.size === 'wide' ? 'glass-panel flex flex-col md:flex-row items-center gap-12 overflow-hidden' :
                  item.size === 'large' ? 'glass-panel relative group overflow-hidden' :
                  'bg-surface-container-low border border-outline-variant/10'
                } ${item.size !== 'wide' ? 'p-10' : 'p-10'} rounded-xl`}
              >
                {item.size === 'large' ? (
                  <>
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <span className={`material-symbols-outlined ${getColorClass(item.color)} text-4xl mb-6`}>{item.icon}</span>
                        <h3 className="text-3xl font-headline font-bold mb-4">{item.title}</h3>
                        <p className="text-on-surface-variant text-lg max-w-md">{item.description}</p>
                      </div>
                      <div className="mt-12 flex gap-4">
                        {item.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-3 py-1 bg-surface-container text-primary text-xs font-bold rounded uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 group-hover:opacity-50 transition-opacity">
                      <img className="w-full h-full object-cover grayscale" src={item.image} alt={item.imageAlt} />
                    </div>
                  </>
                ) : item.size === 'small' ? (
                  <>
                    <div>
                      <span className={`material-symbols-outlined ${getColorClass(item.color)} text-4xl mb-6`}>{item.icon}</span>
                      <h3 className="text-2xl font-headline font-bold mb-4">{item.title}</h3>
                      <p className="text-on-surface-variant">{item.description}</p>
                    </div>
                    <div className="mt-8 pt-8 border-t border-outline-variant/10">
                      <div className="text-4xl font-black text-on-surface mb-1">{item.stat}</div>
                      <div className="text-xs uppercase tracking-widest text-on-surface-variant">{item.statLabel}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex-1">
                      <span className={`material-symbols-outlined ${getColorClass(item.color)} text-4xl mb-6`}>{item.icon}</span>
                      <h3 className="text-3xl font-headline font-bold mb-4">{item.title}</h3>
                      <p className="text-on-surface-variant text-lg">{item.description}</p>
                      <Link to="/network" className="mt-8 text-primary font-bold hover:underline flex items-center gap-2">
                        {item.linkLabel} <span className="material-symbols-outlined">arrow_forward</span>
                      </Link>
                    </div>
                    <div className="flex-1 w-full h-64 bg-surface-container-lowest rounded-lg border border-outline-variant/20 relative overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-around px-8">
                        <div className="w-1 bg-primary h-32 rounded-full animate-pulse opacity-80"></div>
                        <div className="w-1 bg-secondary h-48 rounded-full glow-line"></div>
                        <div className="w-1 bg-primary h-24 rounded-full opacity-60"></div>
                        <div className="w-1 bg-secondary h-56 rounded-full glow-line"></div>
                        <div className="w-1 bg-primary h-40 rounded-full"></div>
                      </div>
                      <div className="z-10 bg-surface/80 backdrop-blur-md px-4 py-2 rounded-lg border border-outline-variant/30">
                        <span className="text-xs font-bold text-on-surface tracking-tighter uppercase">AI Efficiency: {item.efficiency}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Global Network Section */}
        <section className="bg-[#000000] py-32 px-8 overflow-hidden">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-headline font-extrabold tracking-tighter mb-8 leading-tight">{networkTitle}</h2>
              <div className="space-y-8">
                {networkItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center ${getBorderClass(item.color)} border`}>
                      <span className={`material-symbols-outlined ${getColorClass(item.color)}`}>{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-on-surface-variant">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative glass-panel rounded-2xl p-4 aspect-square max-w-xl mx-auto shadow-2xl">
              <img className="w-full h-full object-cover rounded-xl opacity-80" src={networkImage} alt={networkImageAlt} />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <div className="bg-primary/20 border border-primary text-primary px-4 py-2 rounded-full font-bold text-xs backdrop-blur-xl animate-pulse">
                  MONITORING: NORTH AMERICA STACK
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-surface/90 p-3 rounded border border-outline-variant/30">
                    <div className="text-[10px] text-on-surface-variant uppercase">Latency</div>
                    <div className="text-lg font-bold text-primary">8.4ms</div>
                  </div>
                  <div className="bg-surface/90 p-3 rounded border border-outline-variant/30">
                    <div className="text-[10px] text-on-surface-variant uppercase">Loss</div>
                    <div className="text-lg font-bold text-secondary">0.00%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reliability Section */}
        <section className="max-w-[1440px] mx-auto px-8 py-32 border-t border-outline-variant/10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">{reliabilityTitle}</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">{reliabilityDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {reliabilityItems.map((item, index) => (
              <div
                key={index}
                className={`p-8 border-l-2 ${getBorderClass(item.color)} hover:${getBorderClass(item.color.replace('/20', ''))} transition-colors bg-surface-container-low`}
              >
                <div className="text-6xl font-black text-on-surface mb-4 tracking-tighter">{item.value}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-on-surface-variant">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-8 py-40 text-center">
          <div className="glass-panel p-16 rounded-3xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
            <h2 className="text-5xl font-headline font-bold mb-8">{ctaTitle}</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {ctaButtons.map((button, index) => (
                <button
                  key={index}
                  className={`px-12 py-5 rounded-lg font-bold text-lg transition-all ${
                    button.variant === 'primary'
                      ? 'bg-primary text-on-primary hover:shadow-[0_0_25px_rgba(143,245,255,0.5] transform hover:scale-105 active:scale-95'
                      : 'text-on-surface border border-outline hover:bg-surface-variant'
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

export default NetworkPage;
