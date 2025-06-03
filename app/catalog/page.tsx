// app/catalog/page.tsx

import Carousel from '../components/Carousel';

const animeItems = [
  {
    id: '1',
    title: 'Attack on Titan',
    imageUrl: 'https://via.placeholder.com/300x450?text=Attack+on+Titan',
    type: 'anime',
  },
  {
    id: '2',
    title: 'Demon Slayer',
    imageUrl: 'https://via.placeholder.com/300x450?text=Demon+Slayer',
    type: 'anime',
  },
  // Add more anime items...
];

const mangaItems = [
  {
    id: '1',
    title: 'One Piece',
    imageUrl: 'https://via.placeholder.com/300x450?text=One+Piece',
    type: 'manga',
  },
  {
    id: '2',
    title: 'Naruto',
    imageUrl: 'https://via.placeholder.com/300x450?text=Naruto',
    type: 'manga',
  },
  // Add more manga items...
];

const manhwaItems = [
  {
    id: '1',
    title: 'Solo Leveling',
    imageUrl: 'https://via.placeholder.com/300x450?text=Solo+Leveling',
    type: 'manhwa',
  },
  {
    id: '2',
    title: 'Tower of God',
    imageUrl: 'https://via.placeholder.com/300x450?text=Tower+of+God',
    type: 'manhwa',
  },
  // Add more manhwa items...
];

export default function Catalog() {
  return (
    <div className="px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Anime</h2>
      <Carousel items={animeItems} />
      <h2 className="text-3xl font-bold mb-6 mt-12">Manga</h2>
      <Carousel items={mangaItems} />
      <h2 className="text-3xl font-bold mb-6 mt-12">Manhwa</h2>
      <Carousel items={manhwaItems} />
    </div>
  );
}
