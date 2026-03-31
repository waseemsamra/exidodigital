import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import content from '../data/content.json';

const NavBar = React.memo(function NavBar() {
  const { links, buttons } = content.navigation;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-lg">
      <div className="flex items-center justify-between px-8 py-4 w-full bg-white">
        <a href="/" className="hover:opacity-80 transition-opacity">
          <img src="/assets/images/exido-logo.png" alt="Exido" className="h-10 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link, index) => (
            link.label === 'About' ? (
              <div key={index} className="relative group">
                <a
                  className="font-['Plus_Jakarta_Sans'] tracking-tight text-sm font-semibold transition-colors text-gray-600 hover:text-[#060e20] flex items-center gap-1 cursor-pointer"
                  href={link.href}
                >
                  {link.label}
                  <span className="material-symbols-outlined text-xs group-hover:rotate-180 transition-transform">expand_more</span>
                </a>
                <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="w-56 bg-surface-container-high border border-outline-variant/20 rounded-lg shadow-2xl overflow-hidden">
                    <a href="/about" className="block px-4 py-3 text-sm text-on-surface hover:bg-surface-container-highest transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary text-lg">business</span>
                        <div>
                          <div className="font-semibold">About Us</div>
                          <div className="text-xs text-on-surface-variant">Our story & mission</div>
                        </div>
                      </div>
                    </a>
                    <a href="/mission-manifesto" className="block px-4 py-3 text-sm text-on-surface hover:bg-surface-container-highest transition-colors border-t border-outline-variant/10">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-secondary text-lg">menu_book</span>
                        <div>
                          <div className="font-semibold">Mission & Manifesto</div>
                          <div className="text-xs text-on-surface-variant">Our philosophy</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={index}
                to={link.href}
                className={({ isActive }) => 
                  `font-['Plus_Jakarta_Sans'] tracking-tight text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-[#060e20] border-b-2 border-[#060e20] pb-1'
                      : 'text-gray-600 hover:text-[#060e20]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          ))}
          <NavLink
            to="/platform"
            className={({ isActive }) => 
              `font-['Plus_Jakarta_Sans'] tracking-tight text-sm font-semibold transition-colors ${
                isActive
                  ? 'text-[#060e20] border-b-2 border-[#060e20] pb-1'
                  : 'text-gray-600 hover:text-[#060e20]'
              }`
            }
          >
            Platform
          </NavLink>
          <NavLink
            to="/industries"
            className={({ isActive }) => 
              `font-['Plus_Jakarta_Sans'] tracking-tight text-sm font-semibold transition-colors ${
                isActive
                  ? 'text-[#060e20] border-b-2 border-[#060e20] pb-1'
                  : 'text-gray-600 hover:text-[#060e20]'
              }`
            }
          >
            Industries
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => 
              `font-['Plus_Jakarta_Sans'] tracking-tight text-sm font-semibold transition-colors ${
                isActive
                  ? 'text-[#060e20] border-b-2 border-[#060e20] pb-1'
                  : 'text-gray-600 hover:text-[#060e20]'
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {buttons.map((button, index) => (
            button.variant === 'ghost' ? (
              <a
                key={index}
                href={button.href}
                className="px-5 py-2 text-sm font-semibold transition-all text-gray-600 hover:text-[#060e20]"
              >
                {button.label}
              </a>
            ) : (
              <a
                key={index}
                href={button.href}
                className="px-6 py-2 bg-[#060e20] text-white rounded-lg font-bold text-sm hover:opacity-90 transition-all duration-300 transform active:scale-95"
              >
                {button.label}
              </a>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-outline-variant/20">
          <div className="px-8 py-4 space-y-4">
            {links.map((link, index) => (
              link.label === 'About' ? (
                <div key={index}>
                  <button
                    className="flex items-center justify-between w-full text-gray-600 font-semibold py-2"
                    onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  >
                    <span>{link.label}</span>
                    <span className={`material-symbols-outlined text-sm transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`}>expand_more</span>
                  </button>
                  {aboutDropdownOpen && (
                    <div className="pl-4 mt-2 space-y-3 border-l-2 border-gray-200">
                      <a href="/about" onClick={closeMobileMenu} className="block text-gray-600 hover:text-[#060e20] text-sm py-1">About Us</a>
                      <a href="/mission-manifesto" onClick={closeMobileMenu} className="block text-gray-600 hover:text-[#060e20] text-sm py-1">Mission & Manifesto</a>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={index}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="block text-gray-600 hover:text-[#060e20] font-semibold py-2"
                >
                  {link.label}
                </a>
              )
            ))}
            <NavLink to="/platform" onClick={closeMobileMenu} className={({ isActive }) => `block font-semibold py-2 ${isActive ? 'text-[#060e20] border-b-2 border-[#060e20]' : 'text-gray-600 hover:text-[#060e20]'}`}>Platform</NavLink>
            <NavLink to="/works" onClick={closeMobileMenu} className={({ isActive }) => `block font-semibold py-2 ${isActive ? 'text-[#060e20] border-b-2 border-[#060e20]' : 'text-gray-600 hover:text-[#060e20]'}`}>Works</NavLink>
            <NavLink to="/industries" onClick={closeMobileMenu} className={({ isActive }) => `block font-semibold py-2 ${isActive ? 'text-[#060e20] border-b-2 border-[#060e20]' : 'text-gray-600 hover:text-[#060e20]'}`}>Industries</NavLink>
            <NavLink to="/contact" onClick={closeMobileMenu} className={({ isActive }) => `block font-semibold py-2 ${isActive ? 'text-[#060e20] border-b-2 border-[#060e20]' : 'text-gray-600 hover:text-[#060e20]'}`}>Contact</NavLink>
            <div className="pt-4 border-t border-gray-200 space-y-3">
              {buttons.map((button, index) => (
                button.variant === 'ghost' ? (
                  <a
                    key={index}
                    href={button.href}
                    onClick={closeMobileMenu}
                    className="block w-full text-left text-gray-600 hover:text-[#060e20] font-semibold py-2"
                  >
                    {button.label}
                  </a>
                ) : (
                  <a
                    key={index}
                    href={button.href}
                    onClick={closeMobileMenu}
                    className="block w-full text-center px-6 py-3 bg-[#060e20] text-white rounded-lg font-bold text-sm"
                  >
                    {button.label}
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
});

export default NavBar;
