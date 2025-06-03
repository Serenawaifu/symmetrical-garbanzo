'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        aria-label="Toggle search"
        className="p-2"
        onClick={() => setOpen((v) => !v)}
      >
        <Search size={20} />
      </button>
      {open && (
        <input
          type="text"
          placeholder="Search anime, manga, manhwa..."
          className="absolute right-0 top-10 w-64 p-2 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow"
          autoFocus
        />
      )}
    </div>
  );
}
