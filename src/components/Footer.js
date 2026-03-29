import React from 'react';
import content from '../data/content.json';

function Footer() {
  const { company, columns, copyright, socialIcons } = content.footer;

  return (
    <footer className="bg-[#091328] w-full rounded-t-none border-t border-[#40485d]/15">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 px-8 md:px-12 py-16 w-full">
        <div className="col-span-2">
          <img src="/assets/images/exido-logo.png" alt="Exido" className="h-8 w-auto mb-4" />
          <p className="text-[#a3aac4] text-xs leading-relaxed max-w-xs mb-8 normal-case font-body">
            {company.description}
          </p>
        </div>
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-4">
            <span className="font-['Inter'] text-xs uppercase tracking-widest text-[#8ff5ff] font-bold">
              {column.title}
            </span>
            {column.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                className="font-['Inter'] text-xs uppercase tracking-widest text-[#a3aac4] hover:text-[#8ff5ff] transition-colors duration-200"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
        <div className="col-span-full mt-12 border-t border-outline-variant/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['Inter'] text-xs uppercase tracking-widest text-[#a3aac4]">
            {copyright}
          </p>
          <div className="flex gap-6">
            {socialIcons.map((icon, index) => (
              <span
                key={index}
                className="material-symbols-outlined text-[#a3aac4] hover:text-primary cursor-pointer transition-colors"
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
