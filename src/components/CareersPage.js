import React from 'react';
import careersContent from '../data/careers-content.json';
import NavBar from './NavBar';
import Footer from './Footer';

function CareersPage() {
  const { badge, title, description, buttons, backgroundImage, backgroundAlt, stat, statLabel, quote } = careersContent.hero;
  const { title: cultureTitle, description: cultureDesc, linkLabel: cultureLinkLabel, items: cultureItems } = careersContent.culture;
  const { label: positionsLabel, title: positionsTitle, items: positionsItems, generalApplication: positionsGeneral } = careersContent.positions;
  const { title: benefitsTitle, description: benefitsDesc, items: benefitsItems, interviewStages } = careersContent.benefits;

  const getColorClass = (color) => {
    const colorMap = {
      primary: 'text-primary',
      secondary: 'text-secondary'
    };
    return colorMap[color] || 'text-primary';
  };

  const getBorderClass = (color) => {
    const colorMap = {
      primary: 'border-primary/30',
      secondary: 'border-secondary/30'
    };
    return colorMap[color] || 'border-primary/30';
  };

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30 selection:text-primary">
      <NavBar links={careersContent.navigation.links} buttons={careersContent.navigation.buttons} />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[819px] flex items-center px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"></div>
            <img className="w-full h-full object-cover opacity-20 grayscale brightness-50" src={backgroundImage} alt={backgroundAlt} />
          </div>
          <div className="relative z-10 max-w-screen-2xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="label-md uppercase tracking-[0.3em] text-secondary font-semibold mb-4 block">{badge}</span>
              <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter text-on-surface leading-[0.9] mb-8">
                {title.line1} <span className="text-gradient">{title.line2}</span>
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-light leading-relaxed">{description}</p>
              <div className="mt-12 flex flex-wrap gap-4">
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    className={`px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-sm transition-all ${
                      button.variant === 'primary'
                        ? 'bg-gradient-to-br from-primary to-primary-container text-on-primary btn-glow'
                        : 'border border-outline-variant/30 hover:bg-surface-container-high text-on-surface'
                    }`}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 hidden lg:block">
              <div className="glass-panel p-8 rounded-xl border border-outline-variant/15 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-secondary/50"></div>
                <div className="text-5xl font-headline font-black text-on-surface mb-2">{stat}</div>
                <div className="text-sm font-label uppercase tracking-widest text-on-surface-variant">{statLabel}</div>
                <div className="mt-8 h-px bg-gradient-to-r from-secondary/50 to-transparent glow-line"></div>
                <div className="mt-8 text-sm leading-relaxed text-on-surface-variant">{quote}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Life at the Ether Section */}
        <section className="py-24 px-8 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-on-surface mb-6">{cultureTitle}</h2>
                <p className="text-on-surface-variant leading-relaxed">{cultureDesc}</p>
              </div>
              <div className="text-sm font-label uppercase tracking-widest text-secondary flex items-center gap-2">
                <span>{cultureLinkLabel}</span>
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </div>
            </div>
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {cultureItems.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    item.size === 'large' ? 'md:col-span-2' : item.size === 'wide' ? 'md:col-span-4 relative h-80' : 'md:col-span-1'
                  } ${
                    item.size === 'wide' ? 'rounded-xl overflow-hidden group' : 'p-8 rounded-xl border border-outline-variant/10'
                  } ${
                    item.size === 'large' ? 'bg-surface-container-high hover:' + getBorderClass(item.color) + ' transition-all' : ''
                  } ${
                    item.size === 'small' ? 'bg-surface-container-highest flex flex-col justify-between' : ''
                  }`}
                >
                  {item.size === 'wide' ? (
                    <>
                      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={item.image} alt={item.imageAlt} />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                        <div className="max-w-md">
                          <h4 className="text-2xl font-headline font-bold text-on-surface">{item.title}</h4>
                          <p className="text-on-surface-variant text-sm mt-2">{item.description}</p>
                        </div>
                        <span className="material-symbols-outlined bg-primary text-on-primary p-4 rounded-full">play_arrow</span>
                      </div>
                    </>
                  ) : item.size === 'large' ? (
                    <>
                      <span className={`material-symbols-outlined ${getColorClass(item.color)} text-4xl mb-6 group-hover:scale-110 transition-transform`}>{item.icon}</span>
                      <div>
                        <h3 className="text-2xl font-headline font-bold mb-4">{item.title}</h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-headline font-bold">{item.title}</h3>
                      <div className={`mt-4 ${item.id === 'focus' ? 'text-primary' : 'text-secondary'} font-mono text-xs tracking-widest uppercase`}>{item.label}</div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-24 px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-16">
              <span className="label-md uppercase tracking-widest text-primary-dim font-bold">{positionsLabel}</span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-on-surface mt-4">{positionsTitle}</h2>
            </div>
            <div className="space-y-4">
              {positionsItems.map((position, index) => (
                <div key={index} className="group relative bg-surface-container-low p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between border-b border-outline-variant/15 hover:bg-surface-container-high transition-all duration-300">
                  <div className="mb-4 md:mb-0">
                    <span className="text-xs font-mono text-secondary mb-2 block tracking-widest uppercase">{position.department}</span>
                    <h3 className="text-2xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">{position.title}</h3>
                    <div className="flex gap-4 mt-4 text-sm text-on-surface-variant">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> {position.location}</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> {position.type}</span>
                    </div>
                  </div>
                  <button className="md:opacity-0 group-hover:opacity-100 transition-opacity bg-outline-variant/20 hover:bg-primary hover:text-on-primary px-6 py-3 rounded text-sm font-bold uppercase tracking-widest">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-on-surface-variant text-sm">{positionsGeneral} <a className="text-primary hover:underline underline-offset-4" href="#">Send us a general transmission.</a></p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-8 bg-surface-container-low relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-16 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-on-surface mb-6">{benefitsTitle}</h2>
              <p className="text-on-surface-variant leading-relaxed">{benefitsDesc}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefitsItems.map((benefit, index) => (
                <div key={index} className="space-y-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-surface-container-high rounded-lg border border-outline-variant/10">
                    <span className="material-symbols-outlined text-secondary">{benefit.icon}</span>
                  </div>
                  <h4 className="text-xl font-headline font-bold">{benefit.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-20 glass-panel p-12 rounded-2xl border border-outline-variant/15 text-center">
              <h3 className="text-3xl font-headline font-bold mb-8">Ready to evolve?</h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                {interviewStages.map((stage, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <div className="hidden md:block w-12 h-px bg-outline-variant/30"></div>}
                    <div className="flex flex-col items-center">
                      <span className="text-xs uppercase tracking-widest text-on-surface-variant mb-2">{stage.label}</span>
                      <span className="text-2xl font-headline font-black text-primary">{stage.stage}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer
        company={{ name: careersContent.footer.company.name, description: careersContent.footer.company.description }}
        columns={careersContent.footer.columns}
        copyright={careersContent.footer.copyright}
        socialIcons={careersContent.footer.socialIcons}
      />
    </div>
  );
}

export default CareersPage;
