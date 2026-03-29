import React from 'react';
import aboutContent from '../data/about-content.json';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function AboutPage() {
  const { badge, title, description, backgroundImage, backgroundAlt } = aboutContent.hero;
  
  
  const { title: missionTitle, image: missionImage, imageAlt: missionImageAlt, stat, statLabel, items: missionItems } = aboutContent.mission;
  const { title: leadershipTitle, description: leadershipDesc, members: leadershipMembers } = aboutContent.leadership;
  const { label: valuesLabel, title: valuesTitle, items: valuesItems } = aboutContent.values;
  const { title: globalTitle, description: globalDesc, image: globalImage, imageAlt: globalImageAlt, zones: globalZones } = aboutContent.global;
  const { title: ctaTitle, description: ctaDesc, buttons: ctaButtons } = aboutContent.cta;

  const getColorClass = (color) => {
    const colorMap = {
      primary: 'text-primary',
      secondary: 'text-secondary',
      error: 'text-error',
      'primary-container': 'text-primary-container'
    };
    return colorMap[color] || 'text-primary';
  };

  return (
    <div className="selection:bg-primary-container selection:text-on-primary-container">
      <NavBar links={aboutContent.navigation.links} buttons={aboutContent.navigation.buttons} />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[819px] flex items-center overflow-hidden px-8 md:px-20 py-24">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover opacity-30 mix-blend-luminosity" src={backgroundImage} alt={backgroundAlt} />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-4xl">
            <span className="headline-font uppercase tracking-widest text-secondary text-[10px] font-bold mb-4 block">{badge}</span>
            <h1 className="headline-font text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
              {title.line1} <span className="gradient-text">{title.line2}</span>
            </h1>
            <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed">{description}</p>
            <div className="mt-12 flex gap-4">
              <div className="h-[1px] w-24 bg-primary self-center"></div>
              <span className="headline-font text-primary-container text-sm font-bold self-center">ENGINEERING SUPREMACY</span>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="bg-surface-container-low py-24 px-8 md:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square bg-surface-container-high rounded-xl overflow-hidden border border-outline-variant/15 p-1 shadow-2xl">
                <img className="w-full h-full object-cover rounded-lg" src={missionImage} alt={missionImageAlt} />
              </div>
              <div className="absolute -bottom-10 -right-10 glass-card p-8 rounded-xl border border-outline-variant/15 hidden md:block">
                <p className="headline-font text-4xl font-black text-primary mb-1">{stat}</p>
                <p className="label-font text-[10px] uppercase tracking-widest text-on-surface-variant">{statLabel}</p>
              </div>
            </div>
            <div>
              <h2 className="headline-font text-4xl md:text-5xl font-bold mb-8 leading-tight">{missionTitle.line1} <span className="text-secondary">{missionTitle.line2}</span></h2>
              <div className="space-y-8">
                {missionItems.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex gap-4 items-start mb-2">
                      <span className={`material-symbols-outlined ${getColorClass(item.color)}`}>{item.icon}</span>
                      <h3 className="headline-font text-xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-on-surface-variant leading-relaxed pl-10">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-32 px-8 md:px-20 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-20">
              <h2 className="headline-font text-5xl font-bold tracking-tight">{leadershipTitle.line1} <br/>the <span className="text-primary">{leadershipTitle.line2}</span></h2>
              <p className="text-on-surface-variant max-w-xs text-right text-sm">{leadershipDesc}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadershipMembers.map((member, index) => (
                <div key={index} className="group relative overflow-hidden bg-surface-container-low p-6 rounded-lg transition-all duration-500 hover:bg-surface-container-high">
                  <div className="aspect-[3/4] mb-6 overflow-hidden bg-surface-container-highest rounded-sm">
                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src={member.image} alt={member.imageAlt} />
                  </div>
                  <h4 className="headline-font text-2xl font-bold">{member.name}</h4>
                  <p className="font-body text-secondary text-xs uppercase tracking-widest font-bold mt-1">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-24 px-8 md:px-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <p className="label-font text-primary uppercase tracking-[0.3em] text-[10px] mb-4">{valuesLabel}</p>
              <h2 className="headline-font text-4xl font-bold">{valuesTitle}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {valuesItems.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    item.size === 'large' ? 'md:col-span-2' : item.size === 'wide' ? 'md:col-span-4' : 'md:col-span-1'
                  } ${
                    item.size === 'wide' ? 'bg-surface-bright/40 flex flex-col md:flex-row items-center justify-between' : 'bg-surface'
                  } ${
                    item.size === 'wide' ? 'p-12' : 'p-8 md:p-12'
                  } flex ${item.size === 'wide' ? '' : 'flex-col justify-between'} border border-outline-variant/10 group`}
                >
                  {item.size === 'large' ? (
                    <>
                      <span className={`material-symbols-outlined text-4xl ${getColorClass(item.color)}`}>{item.icon}</span>
                      <div>
                        <h3 className="headline-font text-2xl font-bold mb-4">{item.title}</h3>
                        <p className="text-on-surface-variant leading-relaxed">{item.description}</p>
                      </div>
                    </>
                  ) : item.size === 'small' ? (
                    <>
                      <span className={`material-symbols-outlined text-3xl ${getColorClass(item.color)} mb-6`}>{item.icon}</span>
                      <div>
                        <h3 className="headline-font text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-on-surface-variant text-sm">{item.description}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="max-w-xl">
                        <h3 className="headline-font text-3xl font-bold mb-4">{item.title}</h3>
                        <p className="text-on-surface-variant">{item.description}</p>
                      </div>
                      <div className="mt-8 md:mt-0 flex gap-12">
                        <div className="text-center">
                          <p className="headline-font text-4xl font-black gradient-text">{item.stat}</p>
                          <p className="label-font text-[10px] uppercase text-on-surface-variant">{item.statLabel}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Reach Section */}
        <section className="py-32 px-8 md:px-20 bg-surface overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="headline-font text-4xl md:text-5xl font-bold">{globalTitle}</h2>
            <p className="text-on-surface-variant mt-4">{globalDesc}</p>
          </div>
          <div className="relative max-w-5xl mx-auto h-[400px] bg-surface-container-low rounded-3xl border border-outline-variant/10 shadow-inner p-4 overflow-hidden">
            <img className="w-full h-full object-cover opacity-60 rounded-2xl" src={globalImage} alt={globalImageAlt} />
            {globalZones.map((zone, index) => (
              <div key={index} className={`absolute ${index === 0 ? 'top-10 left-10' : 'bottom-20 right-20'} glass-card px-4 py-2 rounded-lg border ${zone.color === 'primary' ? 'border-primary/20' : 'border-secondary/20'}`}>
                <p className={`text-[10px] ${zone.color === 'primary' ? 'text-primary' : 'text-secondary'} font-bold uppercase tracking-widest`}>{zone.name}</p>
                <p className="text-sm font-bold">{zone.locations}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-8 md:px-20">
          <div className="max-w-7xl mx-auto bg-surface-container-high rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10"></div>
            <div className="relative z-10 px-12 py-20 md:flex items-center justify-between">
              <div className="mb-12 md:mb-0">
                <h2 className="headline-font text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">{ctaTitle.line1} <span className="gradient-text">{ctaTitle.line2}</span></h2>
                <p className="text-on-surface-variant max-w-md leading-relaxed">{ctaDesc}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                {ctaButtons.map((button, index) => (
                  <button
                    key={index}
                    className={`px-10 py-4 rounded-lg font-bold transition-all ${
                      button.variant === 'primary'
                        ? 'primary-gradient-btn text-on-primary shadow-lg'
                        : 'border border-outline-variant hover:bg-surface-container-highest'
                    }`}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer
        company={{ name: aboutContent.footer.company.name, description: aboutContent.footer.company.description }}
        columns={aboutContent.footer.columns}
        copyright={aboutContent.footer.copyright}
        socialIcons={aboutContent.footer.socialIcons}
      />
    </div>
  )
}

export default AboutPage;
