import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-3">
        <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full" />
        <span className="text-2xl font-bold tracking-tight">AnimePlatform</span>
      </div>
      <nav className="flex items-center gap-6">
        <a href="#anime" className="hover:text-pink-500 transition">Anime</a>
        <a href="#manga" className="hover:text-pink-500 transition">Manga</a>
        <a href="#manhwa" className="hover:text-pink-500 transition">Manhwa</a>
        <a href="#marketplace" className="hover:text-pink-500 transition">Marketplace</a>
      </nav>
      <div className="flex items-center gap-4">
        <SearchBar />
        <ThemeToggle />
      </div>
    </header>
  );
}
