import React from 'react';
import softwareContent from '../data/software-content.json';

function SoftwarePage() {
  const { badge, title, description, buttons, backgroundImage, backgroundAlt } = softwareContent.hero;
  
  const { title: ecoTitle, description: ecoDesc, items: ecoItems } = softwareContent.ecommerce;
  const { title: lifecycleTitle, label: lifecycleLabel, steps: lifecycleSteps } = softwareContent.lifecycle;
  const { label: accLabel, title: accTitle, description: accDesc, features: accFeatures } = softwareContent.accounting;
  const { title: ctaTitle, description: ctaDesc, buttonLabel: ctaButtonLabel } = softwareContent.cta;

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary">      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative px-8 py-24 md:py-32 max-w-[1440px] mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <span className="inline-block label-md uppercase tracking-widest text-secondary font-semibold mb-6">
                {badge}
              </span>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface leading-[0.9] mb-8">
                {title.line1} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{title.line2}</span>
              </h1>
              <p className="text-on-surface-variant text-lg max-w-xl mb-10 leading-relaxed">
                {description}
              </p>
              <div className="flex flex-wrap gap-4">
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    className={`font-bold px-8 py-4 rounded-lg transition-all ${
                      button.variant === 'primary'
                        ? 'bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-lg hover:scale-[1.02]'
                        : 'bg-surface-container-highest border border-outline-variant/15 text-on-surface hover:bg-surface-bright'
                    }`}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full"></div>
              <div className="glass-panel border border-outline-variant/15 rounded-xl p-4 shadow-2xl relative overflow-hidden">
                <img
                  className="rounded-lg w-full h-[450px] object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  src={backgroundImage}
                  alt={backgroundAlt}
                />
                <div className="absolute bottom-8 left-8 right-8 p-6 glass-panel border border-outline-variant/15 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">Current Sprint</div>
                      <div className="text-xl font-bold font-headline text-primary">ExidoOS v4.2</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">Status</div>
                      <div className="flex items-center gap-2 text-secondary">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                        <span className="font-bold">Deploying</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ecommerce Bento Grid */}
        <section className="px-8 py-24 bg-surface-container-low">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-headline font-bold tracking-tight mb-4">{ecoTitle}</h2>
              <p className="text-on-surface-variant max-w-2xl">{ecoDesc}</p>
            </div>
            <div className="grid md:grid-cols-12 gap-6 h-auto md:h-[600px]">
              {ecoItems.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    item.size === 'large' ? 'md:col-span-8' : item.size === 'small' ? 'md:col-span-4' : item.size === 'medium' ? 'md:col-span-4' : 'md:col-span-8'
                  } ${
                    item.id === 'shopify' ? 'bg-surface flex flex-col justify-between group overflow-hidden relative' :
                    item.id === 'performance' ? 'bg-surface-container-high flex flex-col items-center text-center justify-center' :
                    item.id === 'erp' ? 'bg-secondary-container/10 border border-secondary/20 flex flex-col justify-center' :
                    'bg-surface flex items-center gap-8 group'
                  } p-8 rounded-xl border border-outline-variant/15`}
                >
                  {item.id === 'shopify' ? (
                    <>
                      <div className="z-10">
                        <span className="material-symbols-outlined text-primary text-4xl mb-6">{item.icon}</span>
                        <h3 className="text-3xl font-bold font-headline mb-4">{item.title}</h3>
                        <p className="text-on-surface-variant max-w-md">{item.description}</p>
                      </div>
                      <img
                        className="absolute bottom-[-10%] right-[-10%] w-2/3 opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-xl"
                        src={item.image}
                        alt={item.imageAlt}
                      />
                    </>
                  ) : item.id === 'performance' ? (
                    <>
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                        <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
                      </div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-on-surface-variant text-sm">{item.description}</p>
                    </>
                  ) : item.id === 'erp' ? (
                    <>
                      <span className="material-symbols-outlined text-secondary text-4xl mb-6">{item.icon}</span>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-on-surface-variant text-sm">{item.description}</p>
                    </>
                  ) : (
                    <>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold font-headline mb-2">{item.title}</h4>
                        <p className="text-on-surface-variant">{item.description}</p>
                      </div>
                      <div className="hidden md:flex gap-2">
                        <div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center border border-outline-variant/15">
                          <span className="material-symbols-outlined text-sm">api</span>
                        </div>
                        <div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center border border-outline-variant/15">
                          <span className="material-symbols-outlined text-sm">terminal</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Lifecycle */}
        <section className="px-8 py-24 max-w-[1440px] mx-auto">
          <div className="text-center mb-20">
            <span className="label-md uppercase tracking-widest text-secondary font-semibold">{lifecycleLabel}</span>
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold mt-4">{lifecycleTitle}</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2"></div>
            {lifecycleSteps.map((step, index) => (
              <div
                key={index}
                className={`relative bg-surface p-8 rounded-xl border border-outline-variant/15 hover:bg-surface-container-low transition-colors z-10 group ${
                  index === 1 || index === 3 ? 'md:mt-12' : ''
                }`}
              >
                <div className="text-5xl font-black text-outline-variant/20 mb-6 group-hover:text-primary/20 transition-colors">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold mb-4 font-headline">{step.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{step.description}</p>
                <div className="mt-8 flex justify-end">
                  <span className="material-symbols-outlined text-primary/40">{step.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enterprise Accounting */}
        <section className="px-8 py-24 bg-[#091328] relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="glass-panel p-8 rounded-2xl border border-outline-variant/15 relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 blur-[60px]"></div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-surface rounded-lg border border-outline-variant/10">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-secondary">account_balance</span>
                      </div>
                      <div>
                        <div className="text-sm font-bold">Ledger Balance</div>
                        <div className="text-xs text-on-surface-variant">Consolidated across 4 entities</div>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-primary font-headline tracking-tighter">$4.2M</div>
                  </div>
                  <div className="h-40 w-full flex items-end gap-2 px-4 pb-4 bg-surface/50 rounded-lg">
                    <div className="flex-1 bg-primary/20 h-[40%] rounded-t-sm"></div>
                    <div className="flex-1 bg-primary/40 h-[60%] rounded-t-sm"></div>
                    <div className="flex-1 bg-primary/60 h-[50%] rounded-t-sm"></div>
                    <div className="flex-1 bg-primary h-[90%] rounded-t-sm shadow-[0_0_15px_rgba(143,245,255,0.4]"></div>
                    <div className="flex-1 bg-primary/40 h-[70%] rounded-t-sm"></div>
                    <div className="flex-1 bg-primary/20 h-[30%] rounded-t-sm"></div>
                  </div>
                  <div className="p-4 bg-surface/30 rounded-lg space-y-3">
                    <div className="flex justify-between text-xs uppercase tracking-widest text-on-surface-variant">
                      <span>Compliance Status</span>
                      <span className="text-secondary font-bold">Certified</span>
                    </div>
                    <div className="w-full h-1 bg-outline-variant/20 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-secondary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="label-md uppercase tracking-widest text-primary font-semibold mb-6 block">
                {accLabel}
              </span>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-8 leading-tight">
                {accTitle}
              </h2>
              <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">{accDesc}</p>
              <ul className="space-y-6">
                {accFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary mt-1">{feature.icon}</span>
                    <div>
                      <h5 className="font-bold text-on-surface">{feature.title}</h5>
                      <p className="text-sm text-on-surface-variant">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 py-24 text-center">
          <div className="max-w-4xl mx-auto glass-panel p-16 rounded-3xl border border-outline-variant/15 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">{ctaTitle}</h2>
            <p className="text-on-surface-variant text-lg mb-10 max-w-2xl mx-auto">{ctaDesc}</p>
            <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold px-12 py-5 rounded-lg shadow-xl hover:scale-[1.05] transition-transform">
              {ctaButtonLabel}
            </button>
          </div>
        </section>
      </main>    </div>
  )
}

export default SoftwarePage;
