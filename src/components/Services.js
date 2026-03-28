import React from 'react';
import content from '../data/content.json';

function Services() {
  const { header, items } = content.services;

  return (
    <section className="py-32 px-8 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-xl">
          <label className="text-secondary font-label text-xs uppercase tracking-[0.3em] mb-4 block">
            {header.label}
          </label>
          <h2 className="font-headline text-5xl font-bold tracking-tight text-on-surface">
            {header.title}
          </h2>
        </div>
        <p className="text-on-surface-variant max-w-sm text-right leading-relaxed">
          {header.description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full md:h-[800px]">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${
              item.size === 'large'
                ? 'md:col-span-8'
                : item.size === 'small'
                ? 'md:col-span-4'
                : item.size === 'medium'
                ? 'md:col-span-5'
                : 'md:col-span-7'
            } ${
              item.id === 'marketing' || item.id === 'ai-data'
                ? 'glass-panel'
                : item.id === 'ecommerce-mobile'
                ? 'bg-surface-container-low'
                : 'bg-surface-container-highest'
            } rounded-xl border border-outline-variant/15 p-8 flex flex-col justify-between ${
              item.id !== 'marketing' ? 'group overflow-hidden relative' : ''
            } ${
              item.id === 'ecommerce-mobile' || item.id === 'enterprise'
                ? 'hover:bg-surface-container-high transition-colors'
                : ''
            }`}
          >
            <div className={item.id === 'ai-data' || item.id === 'marketing' ? 'relative z-10' : ''}>
              <span className="material-symbols-outlined text-4xl mb-6 ${item.id === 'ai-data' || item.id === 'enterprise' ? 'text-primary' : 'text-secondary'}">
                {item.icon}
              </span>
              <h3 className="font-headline text-3xl font-bold mb-4">{item.title}</h3>
              <p className={`text-on-surface-variant ${item.id === 'ai-data' ? 'text-lg max-w-md' : 'leading-relaxed'}`}>
                {item.description}
              </p>
              {item.id === 'marketing' && (
                <button className="mt-6 text-secondary text-xs font-bold uppercase tracking-widest hover:underline">
                  {item.buttonLabel}
                </button>
              )}
            </div>

            {item.id === 'ai-data' && (
              <>
                <img
                  className="absolute bottom-0 right-0 w-1/2 h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                  alt={item.imageAlt}
                  src={item.image}
                />
                <div className="mt-12 flex gap-4 relative z-10">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold tracking-widest text-primary uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}

            {item.id === 'ecommerce-mobile' && (
              <ul className="space-y-3 mt-8">
                {item.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-3 text-sm font-medium"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {item.id === 'enterprise' && (
              <div className="mt-12 h-32 w-full bg-surface-container rounded border-b-2 border-primary/30 flex items-end p-4">
                <div className="w-full flex items-end gap-1 h-full">
                  <div className="bg-primary/20 w-full h-1/2"></div>
                  <div className="bg-primary/40 w-full h-2/3"></div>
                  <div className="bg-primary/60 w-full h-1/3"></div>
                  <div className="bg-primary w-full h-full shadow-[0_0_10px_#8ff5ff]"></div>
                </div>
              </div>
            )}

            {item.id === 'marketing' && (
              <div className="hidden lg:block w-48 h-48 rounded-full border border-dashed border-outline-variant animate-[spin_20s_linear_infinite] flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-outline-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-secondary">
                    insights
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
