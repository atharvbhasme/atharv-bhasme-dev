import { useEffect, useState } from 'react';
import SUN from '../../public/assets/icons/sun-svgrepo-com.svg';
import MOON from '../../public/assets/icons/moon-svgrepo-com.svg';

interface ThemeToggleProps {
  setDarkTheme: (isDark: boolean) => void;
  isEng: boolean
}

const ThemeToggle = ({ setDarkTheme, isEng }: ThemeToggleProps) => {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem('theme') === 'dark';
    } catch (e) {
      return false; // Fallback if localStorage is blocked
    }
  });

  useEffect(() => {
    const body = document.body;
    if (dark) {
      body.classList.add('dark');
      setDarkTheme(true);
    } else {
      body.classList.remove('dark');
      setDarkTheme(false);
    }

    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch (e) {
      console.warn('Failed to save theme preference:', e);
    }
  }, [dark, setDarkTheme]);

  return (
    <button
      onClick={() => setDark(prev => !prev)}
      className="theme-toggle-button"
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={dark}
    >
      <img
        src={dark ? MOON : SUN}
        className="theme-icon"
        alt=""
        aria-hidden="true" // Since we have text label
      />
      <p className="theme-text">{isEng ? (dark ? 'Dark Theme' : 'Light Theme'): (dark ? 'गडद शैली': 'प्रकाश शैली')}</p>
    </button>
  );
};

export default ThemeToggle;