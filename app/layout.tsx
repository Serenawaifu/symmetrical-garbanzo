import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import Header from './components/Header';

export const metadata = {
  title: 'AnimePlatform',
  description: 'Anime, Manga, Manhwa, Marketplace — inspired by Azuki, HiAnime, MyAnimeList',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
