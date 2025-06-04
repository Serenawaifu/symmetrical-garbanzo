'use client';

import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="p-4 flex justify-between items-center border-b">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" width={32} height={32} alt="Logo" />
        <h1 className="text-xl font-bold">AnimePlatform</h1>
      </div>
      <nav className="flex gap-4">
        <a href="#">Anime</a>
        <a href="#">Manga</a>
        <a href="#">Manhwa</a>
        <a href="#">Marketplace</a>
      </nav>
      <div className="flex items-center gap-2">
        <SearchBar />
        <ThemeToggle />
        {session ? (
          <>
            <span>{session.user?.email}</span>
            <button onClick={() => signOut()} className="p-2 bg-red-500 text-white rounded">
              Logout
            </button>
          </>
        ) : (
          <button onClick={() => signIn()} className="p-2 bg-blue-500 text-white rounded">
            Login
          </button>
        )}
      </div>
    </header>
  );
}
