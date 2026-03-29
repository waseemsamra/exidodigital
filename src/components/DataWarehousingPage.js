import React from 'react';
import datawarehousingContent from '../data/datawarehousing-content.json';
import NavBar from './NavBar';
import Footer from './Footer';

function DataWarehousingPage() {
  const { badge, title, description, buttons, backgroundImage, backgroundAlt } = datawarehousingContent.hero;
  
  const { label: engineLabel, title: engineTitle, description: engineDesc, items: engineItems } = datawarehousingContent.engine;
  const { title: etlTitle, items: etlItems } = datawarehousingContent.etl;
  const { title: governanceTitle, description: governanceDesc, items: governanceItems } = datawarehousingContent.governance;
  const { title: analyticsTitle, description: analyticsDesc, image: analyticsImage, imageAlt: analyticsImageAlt, features: analyticsFeatures } = datawarehousingContent.analytics;
  const { title: ctaTitle, description: ctaDesc, buttonLabel: ctaButtonLabel, note: ctaNote } = datawarehousingContent.cta;

  const getColorClass = (color) => {
    const colorMap = {
      primary: 'text-primary',
      secondary: 'text-secondary',
      'primary-container': 'text-primary-container'
    };
    return colorMap[color] || 'text-primary';
  };

  const getBorderClass = (color) => {
    const colorMap = {
      primary: 'border-primary',
      secondary: 'border-secondary',
      'primary-container': 'border-primary-container'
    };
    return colorMap[color] || 'border-primary';
  };

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30 selection:text-primary">
      <NavBar links={datawarehousingContent.navigation.links} buttons={datawarehousingContent.navigation.buttons} />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[870px] flex items-center overflow-hidden px-8">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover opacity-40 mix-blend-screen" src={backgroundImage} alt={backgroundAlt} />
            <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/60 to-surface"></div>
            <div className="absolute inset-0 hero-gradient-data"></div>
          </div>
          <div className="relative z-10 max-w-[1440px] mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <span className="inline-block px-3 py-1 bg-surface-container-high border-l-2 border-secondary text-secondary text-xs font-bold tracking-[0.2em] uppercase">{badge}</span>
              <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-none text-on-surface glow-text">
                {title.line1} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">{title.line2}</span> <br/>
                {title.line3}
              </h1>
              <p className="text-on-surface-variant text-lg max-w-lg leading-relaxed font-light">{description}</p>
              <div className="flex flex-wrap gap-6 pt-4">
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    className={`font-bold px-8 py-4 rounded-lg flex items-center gap-2 transition-all ${
                      button.variant === 'primary'
                        ? 'bg-primary text-on-primary hover:scale-[1.02]'
                        : 'border border-outline-variant/30 hover:bg-surface-container-high'
                    }`}
                  >
                    {button.label}
                    {button.icon && <span className="material-symbols-outlined">{button.icon}</span>}
                  </button>
                ))}
              </div>
            </div>
            <div className="hidden md:block relative group">
              <div className="absolute -inset-10 bg-secondary/10 blur-[100px] rounded-full group-hover:bg-secondary/20 transition-all"></div>
              <div className="glass-panel p-8 rounded-xl border border-outline-variant/20 relative overflow-hidden">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="h-32 bg-surface-container-high rounded border border-outline-variant/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>database</span>
                    </div>
                    <div className="h-24 bg-surface-container rounded border border-outline-variant/10 p-4">
                      <div className="text-[10px] text-on-surface-variant uppercase mb-2 tracking-widest">Ingestion Rate</div>
                      <div className="text-2xl font-bold font-headline text-primary">2.4 PB/s</div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="h-24 bg-surface-container rounded border border-outline-variant/10 p-4">
                      <div className="text-[10px] text-on-surface-variant uppercase mb-2 tracking-widest">Active Queries</div>
                      <div className="text-2xl font-bold font-headline text-secondary">14,292</div>
                    </div>
                    <div className="h-32 bg-surface-container-high rounded border border-outline-variant/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Warehouse Engine */}
        <section className="py-24 px-8 bg-surface-container-low">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase block mb-4">{engineLabel}</span>
                <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-on-surface">{engineTitle}</h2>
              </div>
              <p className="text-on-surface-variant max-w-md text-right hidden md:block">{engineDesc}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {engineItems.map((item, index) => (
                <div key={index} className={`bg-surface p-10 rounded-lg border-b-2 ${getBorderClass(item.color)} hover:bg-surface-container transition-all group`}>
                  <span className={`material-symbols-outlined ${getColorClass(item.color)} text-3xl mb-6`}>{item.icon}</span>
                  <h3 className="text-xl font-bold mb-4 font-headline">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrated ETL Pipelines */}
        <section className="py-32 px-8 overflow-hidden">
          <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="space-y-8 relative z-10">
                <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">{etlTitle}</h2>
                <div className="space-y-6">
                  {etlItems.map((item, index) => (
                    <div key={index} className={`flex gap-4 p-4 rounded-lg bg-surface-container-high border border-outline-variant/10 hover:${getBorderClass(item.color.replace('border-', 'border-'))} transition-colors`}>
                      <div className="w-12 h-12 rounded bg-surface-dim flex items-center justify-center shrink-0">
                        <span className={`material-symbols-outlined ${getColorClass(item.color)}`}>{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-on-surface">{item.title}</h4>
                        <p className="text-xs text-on-surface-variant mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-xl p-1 shadow-2xl">
              <div className="bg-surface-dim rounded-lg p-8 relative overflow-hidden border border-outline-variant/20">
                <div className="flex items-center justify-between relative h-64">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-surface-container-highest rounded-full flex items-center justify-center border border-outline-variant/30">
                      <span className="material-symbols-outlined text-sm">cloud</span>
                    </div>
                    <div className="w-12 h-12 bg-surface-container-highest rounded-full flex items-center justify-center border border-outline-variant/30">
                      <span className="material-symbols-outlined text-sm">devices</span>
                    </div>
                    <div className="w-12 h-12 bg-surface-container-highest rounded-full flex items-center justify-center border border-outline-variant/30">
                      <span className="material-symbols-outlined text-sm">dataset</span>
                    </div>
                  </div>
                  <div className="flex-grow mx-8 relative flex items-center">
                    <div className="w-full h-[2px] bg-gradient-to-r from-primary/50 via-secondary/50 to-primary-container/50"></div>
                    <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-primary rounded-full blur-[2px] -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-secondary rounded-full blur-[2px] -translate-y-1/2"></div>
                  </div>
                  <div className="w-32 h-40 bg-surface-container-high rounded border-2 border-primary/20 flex flex-col items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>database</span>
                    <span className="text-[10px] font-bold tracking-widest text-primary">OBSIDIAN CORE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Governance & Lineage */}
        <section className="py-24 px-8 bg-surface-container-low/50">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-headline font-bold text-center">{governanceTitle}</h2>
              <p className="text-on-surface-variant text-center mt-4">{governanceDesc}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-full md:h-[500px]">
              {governanceItems.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    item.size === 'large' ? 'md:col-span-2 md:row-span-2' : item.size === 'wide' ? 'md:col-span-2' : 'md:col-span-1'
                  } ${
                    item.size === 'large' || item.size === 'wide' ? 'bg-surface-container-high p-8' : 'bg-surface p-8'
                  } rounded-xl border border-outline-variant/10 flex ${item.size === 'large' ? 'flex-col justify-between' : item.size === 'wide' ? 'items-center gap-6' : 'flex-col justify-center'}`}
                >
                  {item.size === 'large' ? (
                    <>
                      <div>
                        <span className={`material-symbols-outlined ${getColorClass(item.color)} text-4xl mb-4`}>{item.icon}</span>
                        <h3 className="text-2xl font-bold font-headline mb-4">{item.title}</h3>
                        <p className="text-on-surface-variant">{item.description}</p>
                      </div>
                      <div className="mt-8 pt-8 border-t border-outline-variant/10 flex gap-4">
                        {item.badges.map((badge, badgeIndex) => (
                          <span key={badgeIndex} className="px-3 py-1 bg-surface rounded text-[10px] font-bold text-primary border border-primary/20">{badge}</span>
                        ))}
                      </div>
                    </>
                  ) : item.size === 'wide' ? (
                    <>
                      <div className="shrink-0 w-16 h-16 bg-surface rounded-full flex items-center justify-center">
                        <span className={`material-symbols-outlined ${getColorClass(item.color)} text-3xl`}>{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold font-headline">{item.title}</h4>
                        <p className="text-on-surface-variant text-sm mt-1">{item.description}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={`text-3xl font-bold font-headline ${getColorClass(item.id === 'accuracy' ? 'secondary' : 'primary')}`}>{item.value}</div>
                      <div className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-2">{item.label}</div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* High-Performance Analytics */}
        <section className="py-32 px-8">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <img className="rounded-lg shadow-2xl border border-outline-variant/20" src={analyticsImage} alt={analyticsImageAlt} />
            </div>
            <div className="md:w-1/2 order-1 md:order-2 space-y-6">
              <h2 className="text-4xl font-headline font-bold">{analyticsTitle}</h2>
              <p className="text-on-surface-variant text-lg">{analyticsDesc}</p>
              <ul className="space-y-4">
                {analyticsFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-8">
          <div className="max-w-[1200px] mx-auto bg-gradient-to-br from-surface-container-high to-surface-container-lowest rounded-2xl p-16 text-center border border-outline-variant/20 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-5xl font-headline font-bold tracking-tight">{ctaTitle}</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto text-lg font-light">{ctaDesc}</p>
              <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold px-12 py-5 rounded-lg text-lg hover:shadow-[0_0_30px_rgba(143,245,255,0.4] transition-all">
                {ctaButtonLabel}
              </button>
              <p className="text-xs text-on-surface-variant uppercase tracking-widest">{ctaNote}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer
        company={{ name: datawarehousingContent.footer.company.name, description: datawarehousingContent.footer.company.description }}
        columns={datawarehousingContent.footer.columns}
        copyright={datawarehousingContent.footer.copyright}
        socialIcons={[]}
      />
    </div>
  )
}

export default DataWarehousingPage;
