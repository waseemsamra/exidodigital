import React from 'react';
import content from '../data/content.json';

function CTA() {
  const { title, description, buttonLabel, backgroundImage, backgroundAlt } = content.cta;

  return (
    <section className="py-40 px-8">
      <div className="max-w-[1200px] mx-auto relative rounded-3xl overflow-hidden bg-surface-container-high border border-outline-variant/15 p-12 md:p-24 text-center">
        <div className="absolute inset-0 opacity-10">
          <img
            className="w-full h-full object-cover"
            alt={backgroundAlt}
            src={backgroundImage}
          />
        </div>
        <div className="relative z-10">
          <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
            {title.line1} <br/>
            <span className="text-primary">{title.line2}</span>
          </h2>
          <p className="text-on-surface-variant text-lg mb-12 max-w-xl mx-auto">
            {description}
          </p>
          <a href="/contact" className="px-12 py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-lg font-bold text-xl hover:shadow-[0_0_40px_rgba(143,245,255,0.4)] transition-all duration-300 inline-block">
            {buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
