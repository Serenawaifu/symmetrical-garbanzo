import React from 'react';
import { useTheme } from '../context/ThemeContext';

const themes = [
  { name: 'Retro Pixel', value: 'retro' },
  { name: 'Sakura Blossom', value: 'sakura' },
  { name: 'Cyberpunk Neon', value: 'cyberpunk' },
  { name: 'Minimal Light', value: 'minimal' },
  { name: 'Cozy Cafe', value: 'cozy' },
];

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="absolute bottom-4 left-4 bg-white p-4 rounded shadow-lg">
      <h3 className="font-bold mb-2">Select Theme</h3>
      <div className="flex flex-col">
        {themes.map((themeOption) => (
          <button
            key={themeOption.value}
            onClick={() => setTheme(themeOption.value as any)}
            className={`p-2 mb-1 rounded ${theme === themeOption.value ? 'bg-gray-300' : 'bg-gray-100'}`}
          >
            {themeOption.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
