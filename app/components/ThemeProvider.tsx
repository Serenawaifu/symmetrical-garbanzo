'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

export const themes = [
  'light',
  'dark',
  'sakura',
  'midnight',
  'neon',
];

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      themes={themes}
    >
      {children}
    </NextThemesProvider>
  );
}
