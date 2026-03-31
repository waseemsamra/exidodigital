import React from 'react';
import contactContent from '../data/contact-content.json';

function ContactPage() {
  const { badge, title, description, steps } = contactContent.hero;
  
  const { steps: formSteps, submitLabel, securityNote } = contactContent.form;
  const { title: contactTitle, items: contactItems, socialIcons } = contactContent.contact;
  const { title: statusTitle, label: statusLabel, status: statusStatus, percentage: statusPercentage, note: statusNote } = contactContent.status;
  const { title: hubsTitle, subtitle: hubsSubtitle, items: hubsItems } = contactContent.hubs;

  const getColorClass = (color) => {
    const colorMap = {
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-on-tertiary-container'
    };
    return colorMap[color] || 'text-primary';
  };

  const getBgClass = (color) => {
    const colorMap = {
      primary: 'bg-primary/20 text-primary',
      secondary: 'bg-secondary/20 text-secondary',
      tertiary: 'bg-tertiary/20 text-on-tertiary-container'
    };
    return colorMap[color] || 'bg-primary/20 text-primary';
  };

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-secondary/30">      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative px-8 py-20 max-w-screen-2xl mx-auto overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"></div>
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-3xl">
              <span className="text-secondary font-headline font-bold uppercase tracking-[0.2em] text-xs mb-4 block">{badge}</span>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface leading-[1.1] mb-8">
                {title.line1} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{title.line2}</span>
              </h1>
              <p className="text-on-surface-variant text-lg max-w-xl font-light leading-relaxed">{description}</p>
            </div>
            <div className="flex flex-col items-end text-right">
              {steps.map((step, index) => (
                <div key={index} className={`text-4xl font-headline font-bold mb-2 ${step.active ? 'text-primary' : 'text-outline-variant/30'}`}>
                  {step.number} — {step.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="px-8 py-12 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Container */}
            <div className="lg:col-span-8 bg-surface-container-low p-8 md:p-12 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20"></div>
              <form className="space-y-12">
                {/* Step 1: Service Selection */}
                <div>
                  <label className="block text-xs font-headline font-bold uppercase tracking-widest text-on-surface-variant mb-6">{formSteps[0].number}. {formSteps[0].title}</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {formSteps[0].options.map((option, index) => (
                      <button
                        key={index}
                        className={`group flex flex-col items-center justify-center p-6 bg-surface-container-high border-b-2 ${option.selected ? 'border-primary' : 'border-transparent hover:border-primary'} transition-all rounded-lg`}
                        type="button"
                      >
                        <span className={`material-symbols-outlined text-3xl mb-3 ${option.selected ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'} transition-colors`} style={{ fontVariationSettings: option.selected ? "'FILL' 1" : "'FILL' 0" }}>
                          {option.icon}
                        </span>
                        <span className="text-sm font-semibold">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
                {/* Step 2: Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {formSteps[1].fields.map((field, index) => (
                    <div key={index}>
                      <label className="block text-xs font-headline font-bold uppercase tracking-widest text-on-surface-variant mb-2">{field.label}</label>
                      <input
                        className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-surface placeholder:text-outline py-4 transition-all"
                        placeholder={field.placeholder}
                        type={field.type}
                      />
                    </div>
                  ))}
                </div>
                {/* Step 3: Project Scope */}
                <div>
                  <label className="block text-xs font-headline font-bold uppercase tracking-widest text-on-surface-variant mb-2">{formSteps[2].label}</label>
                  <textarea
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-surface placeholder:text-outline py-4 transition-all resize-none"
                    placeholder={formSteps[2].placeholder}
                    rows={formSteps[2].rows}
                  ></textarea>
                </div>
                <div className="flex items-center justify-between pt-6">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-lg">verified_user</span>
                    <span className="text-xs uppercase tracking-tight">{securityNote}</span>
                  </div>
                  <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-4 rounded-lg font-bold uppercase tracking-widest electric-glow transition-all hover:scale-[1.05]" type="submit">
                    {submitLabel}
                  </button>
                </div>
              </form>
            </div>
            {/* Direct Access Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-surface-container-high p-8 rounded-xl shadow-glow">
                <h3 className="font-headline font-bold text-xl mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  {contactTitle}
                </h3>
                <div className="space-y-6">
                  {contactItems.map((item, index) => (
                    <a key={index} className="group flex items-start gap-4" href={item.href}>
                      <div className={`p-3 bg-surface rounded-lg group-hover:${item.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'} transition-colors`}>
                        <span className={`material-symbols-outlined ${getColorClass(item.color)}`}>{item.icon}</span>
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase text-on-surface-variant">{item.label}</div>
                        <div className={`text-on-surface font-medium group-hover:${item.color === 'primary' ? 'text-primary' : 'text-secondary'} transition-colors`}>{item.value}</div>
                      </div>
                    </a>
                  ))}
                  <div className="pt-6 border-t border-outline-variant/20 flex gap-4">
                    {socialIcons.map((icon, index) => (
                      <div key={index} className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
                        <span className="material-symbols-outlined">{icon}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="glass-panel p-8 rounded-xl border border-outline-variant/15 relative">
                <h3 className="font-headline font-bold text-xl mb-4 text-[#dee5ff]">{statusTitle}</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-on-surface-variant">{statusLabel}</span>
                  <span className="text-xs font-bold text-primary px-2 py-0.5 bg-primary/10 rounded">{statusStatus}</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-1 overflow-hidden">
                  <div className="bg-primary h-full w-[99.9%]"></div>
                </div>
                <p className="text-[10px] uppercase text-outline mt-4 font-bold tracking-widest">{statusNote}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Hubs Section */}
        <section className="px-8 py-20 max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
            <h2 className="text-4xl font-headline font-bold tracking-tight">{hubsTitle}</h2>
            <div className="text-on-surface-variant font-headline uppercase text-xs tracking-widest flex items-center gap-3">
              <span className="w-12 h-px bg-outline-variant"></span>
              {hubsSubtitle}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hubsItems.map((hub, index) => (
              <div key={index} className="group relative bg-surface-container-low p-1 rounded-xl transition-all hover:bg-surface-variant/40">
                <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                  <img alt={hub.imageAlt} className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src={hub.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`text-xs ${getBgClass(hub.color)} px-2 py-1 rounded font-bold backdrop-blur-md`}>{hub.label}</span>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <h4 className="text-xl font-headline font-bold mb-2">{hub.city}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4 whitespace-pre-line">{hub.address}</p>
                  <div className={`${getColorClass(hub.color)} text-xs font-bold uppercase flex items-center gap-2 cursor-pointer group-hover:translate-x-2 transition-transform`}>
                    Direct Secure Line <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>    </div>
  )
}

export default ContactPage;
