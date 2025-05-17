import { useEffect, useState } from 'react';
import SUN from '../../public/assets/icons/sun-svgrepo-com.svg';
import MOON from '../../public/assets/icons/moon-svgrepo-com.svg';

interface ThemeToggleProps {
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeToggle = ({ setDarkTheme }: ThemeToggleProps) => {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const body = document.body;
    if (dark) {
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkTheme(true);
    } else {
      body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkTheme(false);
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(prev => !prev)}
      className="theme-toggle-button"
    >
      <img
        src={dark ? MOON : SUN}
        className="theme-icon"
        alt={dark ? 'Moon Icon' : 'Sun Icon'}
      />
    </button>
  );
};

export default ThemeToggle;
