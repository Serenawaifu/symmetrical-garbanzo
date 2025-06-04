'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Sun, Moon, Palette } from 'lucide-react';
import { themes } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="relative">
      <button className="p-2" onClick={() => setTheme('light')}>
        <Sun />
      </button>
      <button className="p-2" onClick={() => setTheme('dark')}>
        <Moon />
      </button>
      <div className="absolute mt-2 bg-white dark:bg-gray-800 border rounded shadow">
        {themes.slice(2).map((t) => (
          <button
            key={t}
            className={`block px-3 py-1 w-full text-left ${
              theme === t ? 'bg-gray-200 dark:bg-gray-700' : ''
            }`}
            onClick={() => setTheme(t)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
