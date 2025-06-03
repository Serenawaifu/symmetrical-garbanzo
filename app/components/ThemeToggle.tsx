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
    <div className="flex items-center gap-2">
      <button
        aria-label="Light mode"
        className={`p-2 rounded ${theme === 'light' ? 'bg-gray-200' : ''}`}
        onClick={() => setTheme('light')}
      >
        <Sun size={18} />
      </button>
      <button
        aria-label="Dark mode"
        className={`p-2 rounded ${theme === 'dark' ? 'bg-gray-700' : ''}`}
        onClick={() => setTheme('dark')}
      >
        <Moon size={18} />
      </button>
      <div className="relative group">
        <button
          aria-label="More themes"
          className="p-2 rounded"
        >
          <Palette size={18} />
        </button>
        <div className="absolute left-0 mt-2 bg-white dark:bg-gray-800 rounded shadow-lg p-2 hidden group-hover:block z-50">
          {themes.slice(2).map((t) => (
            <button
              key={t}
              className={`block px-3 py-1 rounded text-sm w-full text-left ${theme === t ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
              onClick={() => setTheme(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
