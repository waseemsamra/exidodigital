import React from 'react';
import aiContent from '../data/ai-content.json';

function AIPage() {
  const { badge, title, description, buttons, stats } = aiContent.hero;
  const { header, items } = aiContent.solutions;
  const cta = aiContent.cta;
  const footer = aiContent.footer;


  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary/30">      <main className="pt-24 min-h-screen">
        {/* Hero Section */}
        <section className="relative px-8 pt-20 pb-32 overflow-hidden circuit-pattern">
          <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <span className="inline-block px-3 py-1 bg-surface-container-high text-primary border border-outline-variant/15 text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
                {badge}
              </span>
              <h1 className="font-headline text-6xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] text-on-surface mb-8">
                {title.line1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary-container">{title.line2}</span>
              </h1>
              <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed mb-10">
                {description}
              </p>
              <div className="flex flex-wrap gap-4">
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    className={`px-8 py-4 rounded-lg font-bold transition-all ${
                      button.variant === 'primary'
                        ? 'bg-primary text-on-primary hover:shadow-[0_0_20px_rgba(143,245,255,0.4)]'
                        : 'bg-surface-container-highest text-on-surface border border-outline-variant/15 hover:bg-surface-bright'
                    }`}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 blur-[100px] rounded-full"></div>
              <div className="glass-panel border border-outline-variant/15 p-8 rounded-xl shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-error-dim/40"></div>
                    <div className="w-3 h-3 rounded-full bg-secondary/40"></div>
                    <div className="w-3 h-3 rounded-full bg-primary/40"></div>
                  </div>
                  <span className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest">Live Neural Feed</span>
                </div>
                <div className="space-y-6">
                  <div className="h-[200px] flex items-end gap-2 px-2">
                    <div className="w-full bg-surface-container-low rounded-t-sm h-[40%]"></div>
                    <div className="w-full bg-gradient-to-t from-secondary/20 to-secondary rounded-t-sm h-[75%] glow-line"></div>
                    <div className="w-full bg-surface-container-low rounded-t-sm h-[30%]"></div>
                    <div className="w-full bg-surface-container-low rounded-t-sm h-[55%]"></div>
                    <div className="w-full bg-gradient-to-t from-primary/20 to-primary rounded-t-sm h-[90%] glow-line"></div>
                    <div className="w-full bg-surface-container-low rounded-t-sm h-[45%]"></div>
                    <div className="w-full bg-surface-container-low rounded-t-sm h-[60%]"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-surface-container-low rounded-lg border border-outline-variant/10">
                      <span className="block text-[10px] text-on-surface-variant uppercase font-bold mb-1">Inference Rate</span>
                      <span className="text-2xl font-headline font-bold text-primary">{stats.inferenceRate}</span>
                    </div>
                    <div className="p-4 bg-surface-container-low rounded-lg border border-outline-variant/10">
                      <span className="block text-[10px] text-on-surface-variant uppercase font-bold mb-1">Latency</span>
                      <span className="text-2xl font-headline font-bold text-secondary">{stats.latency}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="px-8 py-24 bg-surface-container-low">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{header.title}</h2>
                <p className="text-on-surface-variant">{header.description}</p>
              </div>
              <div className="hidden md:block h-px flex-grow mx-12 bg-outline-variant/15 mb-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    item.size === 'large'
                      ? 'md:col-span-8'
                      : item.size === 'small'
                      ? 'md:col-span-4'
                      : item.size === 'medium'
                      ? 'md:col-span-4'
                      : 'md:col-span-8'
                  } ${
                    item.id === 'etl-pipelines'
                      ? 'bg-gradient-to-br from-surface-container-high to-background'
                      : item.id === 'data-warehousing'
                      ? 'bg-surface-container-high'
                      : item.id === 'bi-dashboards'
                      ? 'bg-surface'
                      : 'bg-surface-container-highest'
                  } rounded-xl ${item.id !== 'bi-dashboards' ? 'p-10' : 'p-10'} flex ${
                    item.id === 'etl-pipelines' ? 'items-center gap-12' : 'flex-col justify-between'
                  } border border-outline-variant/15 ${
                    item.id === 'ai-integration' ? 'relative overflow-hidden group' : ''
                  } ${
                    item.id === 'bi-dashboards' ? 'group hover:border-secondary/30 transition-all' : ''
                  }`}
                >
                  {item.id === 'ai-integration' && (
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-110">
                      <img
                        className="w-full h-full object-cover grayscale brightness-50"
                        alt={item.imageAlt}
                        src={item.image}
                      />
                    </div>
                  )}
                  {item.id === 'data-warehousing' && (
                    <div className="absolute inset-0 circuit-pattern opacity-40"></div>
                  )}
                  <div className={`${item.id === 'ai-integration' || item.id === 'etl-pipelines' ? 'relative z-10' : ''} ${item.id === 'bi-dashboards' ? '' : ''}`}>
                    {item.id === 'bi-dashboards' ? (
                      <>
                        <div className="mb-10 p-4 bg-secondary-container/10 rounded-full w-fit">
                          <span className="material-symbols-outlined text-3xl text-secondary">{item.icon}</span>
                        </div>
                        <h3 className="font-headline text-2xl font-bold mb-4">{item.title}</h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-10">{item.description}</p>
                      </>
                    ) : item.id === 'etl-pipelines' ? null : (
                      <>
                        <span className={`material-symbols-outlined text-4xl mb-6 ${
                          item.id === 'data-warehousing' ? 'text-primary-fixed-dim' : 'text-primary'
                        }`}>{item.icon}</span>
                        <h3 className={`font-headline font-bold mb-4 ${
                          item.id === 'ai-integration' ? 'text-3xl' : 'text-2xl'
                        }`}>{item.title}</h3>
                        <p className={`text-on-surface-variant ${
                          item.id === 'ai-integration' ? 'max-w-md leading-relaxed' : 'text-sm leading-relaxed'
                        }`}>{item.description}</p>
                      </>
                    )}
                  </div>

                  {item.id === 'ai-integration' && (
                    <div className="mt-8 relative z-10">
                      <ul className="space-y-3">
                        {item.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3 text-sm text-on-surface">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.id === 'bi-dashboards' && (
                    <div className="mt-auto pt-6 border-t border-outline-variant/10">
                      <button className="text-secondary font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                        {item.buttonLabel} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                    </div>
                  )}

                  {item.id === 'data-warehousing' && (
                    <div className="mt-auto relative z-10">
                      <div className="flex -space-x-3">
                        {item.platforms.map((platform, platformIndex) => (
                          <div
                            key={platformIndex}
                            className={`w-10 h-10 rounded-full border-2 border-surface flex items-center justify-center text-[10px] font-bold ${
                              platformIndex === 0 ? 'bg-primary/20' : platformIndex === 1 ? 'bg-secondary/20' : 'bg-tertiary-dim/20'
                            }`}
                          >
                            {platform}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.id === 'etl-pipelines' && (
                    <>
                      <div className="hidden lg:block w-1/3 flex-shrink-0">
                        <img
                          className="w-full aspect-square object-cover rounded-lg border border-outline-variant/20"
                          alt={item.imageAlt}
                          src={item.image}
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <span className="material-symbols-outlined text-4xl text-primary mb-6">database</span>
                        <h3 className="font-headline text-3xl font-bold mb-4">{item.title}</h3>
                        <p className="text-on-surface-variant mb-8">{item.description}</p>
                        <div className="grid grid-cols-2 gap-8">
                          {item.stats.map((stat, statIndex) => (
                            <div key={statIndex}>
                              <span className={`block text-xl font-bold mb-1 ${
                                statIndex === 0 ? 'text-primary' : 'text-secondary'
                              }`}>{stat.value}</span>
                              <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">{stat.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 py-32 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="font-headline text-5xl md:text-6xl font-black mb-10 tracking-tighter">{cta.title}</h2>
            <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto">{cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {cta.buttons.map((button, index) => (
                <button
                  key={index}
                  className={`px-10 py-5 rounded-lg font-bold text-lg transition-all ${
                    button.variant === 'primary'
                      ? 'bg-primary text-on-primary hover:shadow-[0_0_30px_rgba(143,245,255,0.3]'
                      : 'bg-surface-bright text-on-surface border border-outline-variant/30 hover:bg-surface-container-highest'
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

export default AIPage;
