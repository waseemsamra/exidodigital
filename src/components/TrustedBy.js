import React from 'react';
import content from '../data/content.json';

function TrustedBy() {
  const { title, companies } = content.trustedBy;

  return (
    <section className="bg-surface-container-low py-24 border-t border-outline-variant/15">
      <div className="max-w-[1440px] mx-auto px-8">
        <p className="text-center font-label text-[10px] uppercase tracking-[0.4em] text-on-surface-variant mb-12">
          {title}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 opacity-40 grayscale transition-all hover:grayscale-0">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center font-headline font-black text-2xl"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;
