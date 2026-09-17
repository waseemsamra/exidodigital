import React from 'react';
import content from '../data/content.json';

function Footer() {
  const { company, columns, copyright, socialIcons } = content.footer;

  return (
    <footer className="bg-surface-container-low w-full rounded-t-none border-t border-outline-variant/15">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 px-8 md:px-12 py-16 w-full">
        <div className="col-span-2">
          <img src="/bluechip-logo.png" alt="Bluechip" className="h-8 w-auto mb-4" />
          <p className="text-on-surface-variant text-xs leading-relaxed max-w-xs mb-8 normal-case font-body">
            {company.description}
          </p>
        </div>
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-4">
            <span className="font-['Inter'] text-xs uppercase tracking-widest text-primary font-bold">
              {column.title}
            </span>
            {column.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                className="font-['Inter'] text-xs tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-200"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
        <div className="col-span-full mt-12 border-t border-outline-variant/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['Inter'] text-xs uppercase tracking-widest text-on-surface-variant">
            {copyright}
          </p>
          <div className="flex gap-6">
            {socialIcons.map((icon, index) => (
              <span
                key={index}
                className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
