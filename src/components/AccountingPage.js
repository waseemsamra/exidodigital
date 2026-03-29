import React from 'react';
import accountingContent from '../data/accounting-content.json';
import NavBar from './NavBar';
import Footer from './Footer';

function AccountingPage() {
  const { badge, title, description, buttons, backgroundImage, backgroundAlt } = accountingContent.hero;
  
  const { label: engineLabel, title: engineTitle, description: engineDesc, items: engineItems } = accountingContent.engine;
  const { label: complianceLabel, title: complianceTitle, image: complianceImage, imageAlt: complianceImageAlt, certification, certificationDesc, items: complianceItems } = accountingContent.compliance;
  const { title: integrationsTitle, description: integrationsDesc, partners, items: integrationItems } = accountingContent.integrations;
  const { label: intelligenceLabel, title: intelligenceTitle, description: intelligenceDesc, items: intelligenceItems, alerts } = accountingContent.intelligence;
  const { title: ctaTitle, description: ctaDesc, buttonLabel: ctaButtonLabel } = accountingContent.cta;

  const getColorClass = (color) => {
    const colorMap = {
      primary: 'text-primary',
      secondary: 'text-secondary'
    };
    return colorMap[color] || 'text-primary';
  };

  const getBorderClass = (color) => {
    const colorMap = {
      primary: 'border-primary',
      secondary: 'border-secondary'
    };
    return colorMap[color] || 'border-primary';
  };

  const getBgClass = (color) => {
    const colorMap = {
      primary: 'bg-primary',
      secondary: 'bg-secondary'
    };
    return colorMap[color] || 'bg-primary';
  };

  return (
    <div className="bg-surface text-on-surface selection:bg-primary selection:text-on-primary">
      <NavBar links={accountingContent.navigation.links} buttons={accountingContent.navigation.buttons} />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[870px] flex items-center px-8 md:px-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 -left-24 w-96 h-96 bg-secondary opacity-10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-primary opacity-10 blur-[120px] rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-5xl">
            <div className="label-md uppercase tracking-[0.3em] text-secondary font-bold mb-6">{badge}</div>
            <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.05] text-on-surface mb-8">
              {title.line1} <br/>{title.line2} <br/>{title.line3}
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">{description}</p>
            <div className="flex flex-col md:flex-row gap-6">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={`px-10 py-5 font-bold rounded-lg transition-all ${
                    button.variant === 'primary'
                      ? 'bg-gradient-to-br from-primary to-primary-container text-on-primary-container shadow-[0_0_25px_-5px_rgba(143,245,255,0.4] hover:shadow-[0_0_35px_-5px_rgba(143,245,255,0.6]'
                      : 'bg-surface-container-highest text-primary border border-outline-variant/20 hover:bg-surface-bright'
                  }`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-4/5 mr-12 rounded-xl overflow-hidden glass-panel border border-outline-variant/15 p-1 glow-shadow">
            <img className="w-full h-full object-cover grayscale brightness-50 opacity-80" src={backgroundImage} alt={backgroundAlt} />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 p-6 glass-panel rounded-lg border border-outline-variant/30">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-secondary tracking-widest uppercase">Global Treasury</span>
                <span className="text-primary text-xs font-bold">+24.8% Yield</span>
              </div>
              <div className="h-24 flex items-end gap-1">
                <div className="flex-1 bg-primary/20 h-1/2"></div>
                <div className="flex-1 bg-primary/30 h-3/4"></div>
                <div className="flex-1 bg-primary/40 h-2/3"></div>
                <div className="flex-1 bg-primary/60 h-full"></div>
                <div className="flex-1 bg-secondary/40 h-5/6"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Accounting Engine */}
        <section className="py-24 px-8 md:px-24 bg-surface-container-low">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">{engineLabel}</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-4">{engineTitle}</h2>
            </div>
            <p className="text-on-surface-variant max-w-sm text-right">{engineDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            {engineItems.map((item, index) => (
              <div
                key={index}
                className={`${
                  item.size === 'large' ? 'md:col-span-8' : item.size === 'small' ? 'md:col-span-4' : item.size === 'medium' ? 'md:col-span-4' : 'md:col-span-8'
                } ${
                  item.size === 'large' ? 'bg-surface-container-high flex flex-col justify-end group relative overflow-hidden' :
                  item.size === 'small' ? 'bg-secondary-container flex flex-col justify-between' :
                  item.size === 'medium' ? 'bg-surface-container-highest flex flex-col justify-between' :
                  'bg-surface relative overflow-hidden'
                } rounded-xl ${item.size !== 'small' ? 'p-10' : 'p-10'} ${item.size !== 'small' ? 'border border-outline-variant/10' : ''}`}
              >
                {item.size === 'large' ? (
                  <>
                    <div className="absolute top-0 right-0 p-8">
                      <span className="material-symbols-outlined text-primary text-6xl opacity-20 group-hover:opacity-100 transition-opacity duration-500">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                      <p className="text-on-surface-variant max-w-md">{item.description}</p>
                    </div>
                  </>
                ) : item.size === 'small' ? (
                  <>
                    <span className="material-symbols-outlined text-on-secondary-container text-4xl">{item.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/70 text-sm">{item.description}</p>
                    </div>
                  </>
                ) : item.size === 'medium' ? (
                  <>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-on-surface-variant text-sm">{item.description}</p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-outline-variant/20 flex justify-between items-center">
                      <span className="text-primary text-xs font-bold">{item.accuracy}</span>
                      <span className="material-symbols-outlined text-primary">arrow_forward</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex gap-4 mb-8">
                      <div className="h-2 w-12 bg-primary rounded-full"></div>
                      <div className="h-2 w-12 bg-surface-container-high rounded-full"></div>
                      <div className="h-2 w-12 bg-surface-container-high rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                      <p className="text-on-surface-variant text-sm max-w-md">{item.description}</p>
                    </div>
                    <div className="mt-8 flex items-end gap-2 h-20 opacity-40">
                      <div className="w-full bg-secondary h-[40%]"></div>
                      <div className="w-full bg-secondary h-[60%]"></div>
                      <div className="w-full bg-secondary h-[55%]"></div>
                      <div className="w-full bg-primary h-[85%]"></div>
                      <div className="w-full bg-primary h-[95%]"></div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Compliance & Security */}
        <section className="py-24 px-8 md:px-24 bg-surface">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary opacity-5 blur-[100px]"></div>
              <div className="glass-panel border border-outline-variant/20 rounded-2xl p-2 glow-shadow">
                <img className="rounded-xl w-full grayscale opacity-60" src={complianceImage} alt={complianceImageAlt} />
              </div>
              <div className="absolute -bottom-8 -right-8 p-8 glass-panel border border-outline-variant/30 rounded-xl max-w-xs">
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                  <span className="font-bold text-sm tracking-widest uppercase">{certification}</span>
                </div>
                <p className="text-xs text-on-surface-variant">{certificationDesc}</p>
              </div>
            </div>
            <div>
              <span className="text-xs font-bold text-secondary uppercase tracking-[0.2em]">{complianceLabel}</span>
              <h2 className="text-5xl font-extrabold mt-6 mb-8">{complianceTitle}</h2>
              <div className="space-y-12">
                {complianceItems.map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="h-12 w-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 border border-outline-variant/20">
                      <span className="material-symbols-outlined text-primary">{item.icon}</span>
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

        {/* Integrations */}
        <section className="py-24 px-8 md:px-24 bg-surface-container-low overflow-hidden">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">{integrationsTitle}</h2>
            <p className="text-on-surface-variant">{integrationsDesc}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 hover:opacity-100 transition-opacity duration-700 mb-20">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center gap-3 px-8 py-4 glass-panel border border-outline-variant/10 rounded-full">
                <span className="font-black text-lg text-on-surface tracking-tighter">{partner}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {integrationItems.map((item, index) => (
              <div key={index} className={`p-8 bg-surface-container-high rounded-xl border-b-2 ${getBorderClass(item.color)}`}>
                <span className={`material-symbols-outlined ${getColorClass(item.color)} mb-4`}>{item.icon}</span>
                <h4 className="font-bold mb-2 uppercase text-xs tracking-widest">{item.title}</h4>
                <p className="text-sm text-on-surface-variant">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Financial Intelligence */}
        <section className="py-32 px-8 md:px-24 bg-surface relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops] from-secondary/5 via-transparent to-transparent"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold text-secondary uppercase tracking-[0.2em]">{intelligenceLabel}</span>
              <h2 className="text-5xl font-extrabold mt-6 mb-8">{intelligenceTitle}</h2>
              <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">{intelligenceDesc}</p>
              <div className="space-y-8">
                {intelligenceItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1">{item.icon}</span>
                    <div>
                      <h5 className="font-bold text-on-surface">{item.title}</h5>
                      <p className="text-sm text-on-surface-variant">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-container-high rounded-3xl p-1 border border-outline-variant/15 glow-shadow">
              <div className="bg-surface p-8 rounded-[1.4rem]">
                <div className="flex justify-between items-center mb-10">
                  <h4 className="font-bold">Anomalous Activity Monitor</h4>
                  <span className="px-3 py-1 bg-error-container/20 text-error text-[10px] font-bold rounded-full uppercase tracking-widest">3 Alerts Active</span>
                </div>
                <div className="space-y-6">
                  {alerts.map((alert, index) => (
                    <div key={index} className={`flex items-center justify-between p-4 bg-surface-container-low rounded-lg border-l-4 ${
                      alert.type === 'error' ? 'border-error' : alert.type === 'secondary' ? 'border-secondary' : 'border-primary'
                    }`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-2 h-2 rounded-full ${getBgClass(alert.type)} ${alert.type === 'error' ? 'animate-pulse' : ''}`}></div>
                        <span className="text-sm font-medium">{alert.title}</span>
                      </div>
                      <span className="text-sm font-bold text-on-surface">{alert.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12 h-32 w-full relative">
                  <svg className="w-full h-full" viewBox="0 0 400 100">
                    <path d="M0 80 Q 50 20, 100 70 T 200 40 T 300 60 T 400 10" fill="none" stroke="#ac89ff" strokeLinecap="round" strokeWidth="3"></path>
                    <path d="M0 80 Q 50 20, 100 70 T 200 40 T 300 60 T 400 10 V 100 H 0 Z" fill="url(#grad" opacity="0.1"></path>
                    <defs>
                      <linearGradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#ac89ff', stopOpacity: 1 }}></stop>
                        <stop offset="100%" style={{ stopColor: '#ac89ff', stopOpacity: 0 }}></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-8 md:px-24 mb-12">
          <div className="bg-gradient-to-br from-surface-container-low to-surface-container-high rounded-[2rem] p-16 text-center border border-outline-variant/10 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary opacity-10 blur-[100px]"></div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 relative z-10">{ctaTitle.line1} <br/>{ctaTitle.line2}</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto mb-12 relative z-10 text-lg">{ctaDesc}</p>
            <button className="relative z-10 px-12 py-6 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black rounded-lg text-lg uppercase tracking-widest shadow-2xl hover:scale-[1.02] transition-transform">
              {ctaButtonLabel}
            </button>
          </div>
        </section>
      </main>
      <Footer
        company={{ name: accountingContent.footer.company.name, description: accountingContent.footer.company.description }}
        columns={accountingContent.footer.columns}
        copyright={accountingContent.footer.copyright}
        socialIcons={[]}
      />
    </div>
  )
}

export default AccountingPage;
