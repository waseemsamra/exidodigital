import React from 'react';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high border border-outline-variant/20 hover:bg-surface-container-highest transition-all text-on-surface font-semibold text-sm"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <span className="material-symbols-outlined text-base">
        {theme === 'dark' ? 'light_mode' : 'dark_mode'}
      </span>
      <span className="hidden sm:inline">
        {theme === 'dark' ? 'Light' : 'Dark'}
      </span>
    </button>
  );
}

export default ThemeToggle;
