'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen((v) => !v)} className="p-2">
        <Search />
      </button>
      {open && (
        <input
          type="text"
          placeholder="Search anime, manga, manhwa..."
          className="absolute right-0 mt-2 p-2 border rounded bg-white dark:bg-gray-800"
        />
      )}
    </div>
  );
}
