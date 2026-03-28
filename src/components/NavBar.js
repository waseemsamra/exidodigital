import React from 'react';
import content from '../data/content.json';

function NavBar() {
  const { logo, links, buttons } = content.navigation;

  return (
    <header className="fixed top-0 w-full z-50 bg-[#060e20] shadow-[0_0_40px_rgba(248,241,255,0.04)]">
      <div className="flex items-center justify-between px-8 py-4 max-w-[1440px] mx-auto bg-[#091328]">
        <div className="text-2xl font-bold tracking-tighter text-[#dee5ff]">{logo}</div>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link, index) => (
            <a
              key={index}
              className={`font-['Plus_Jakarta_Sans'] tracking-tight text-sm font-semibold transition-colors ${
                link.active
                  ? 'text-[#8ff5ff] border-b-2 border-[#8ff5ff] pb-1'
                  : 'text-[#a3aac4] hover:text-[#dee5ff]'
              }`}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`px-5 py-2 text-sm font-semibold transition-all ${
                button.variant === 'ghost'
                  ? 'text-[#a3aac4] hover:text-[#dee5ff]'
                  : 'px-6 py-2 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-lg font-bold text-sm hover:shadow-[0_0_15px_rgba(143,245,255,0.3)] transition-all duration-300 transform active:scale-95'
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
