import React from 'react';
import content from '../data/content.json';

function Hero() {
  const { badge, title, description, buttons, dashboardImage, dashboardAlt } = content.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden hero-gradient">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[160px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-[160px]"></div>
      </div>
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 w-full text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-[10px] uppercase tracking-[0.3em] font-bold text-secondary border border-secondary/20 rounded-full bg-secondary/5">
          {badge}
        </span>
        <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[0.9] text-glow">
          {title.line1} <br/>
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            {title.line2}
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-on-surface-variant text-lg md:text-xl mb-12 font-light leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`group relative px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                button.variant === 'primary'
                  ? 'bg-gradient-to-br from-primary to-primary-container text-on-primary hover:shadow-[0_0_30px_rgba(143,245,255,0.4)]'
                  : 'bg-surface-container-highest border border-outline-variant/15 text-on-surface hover:bg-surface-bright'
              }`}
            >
              {button.label}
              {button.icon && (
                <span className="material-symbols-outlined align-middle ml-2 text-xl group-hover:translate-x-1 transition-transform">
                  {button.icon}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] h-[400px] glass-panel rounded-xl border border-outline-variant/15 p-1 shadow-2xl overflow-hidden hidden md:block">
        <img
          className="w-full h-full object-cover rounded-lg opacity-80 mix-blend-lighten"
          alt={dashboardAlt}
          src={dashboardImage}
        />
      </div>
    </section>
  );
}

export default Hero;
