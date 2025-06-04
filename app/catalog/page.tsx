import Carousel from '../components/Carousel';

const animeItems = [
  { id: '1', title: 'Attack on Titan', imageUrl: 'https://via.placeholder.com/300x450?text=Attack+on+Titan', type: 'anime' },
  { id: '2', title: 'Demon Slayer', imageUrl: 'https://via.placeholder.com/300x450?text=Demon+Slayer', type: 'anime' },
];

const mangaItems = [
  { id: '3', title: 'One Piece', imageUrl: 'https://via.placeholder.com/300x450?text=One+Piece', type: 'manga' },
  { id: '4', title: 'Naruto', imageUrl: 'https://via.placeholder.com/300x450?text=Naruto', type: 'manga' },
];

const manhwaItems = [
  { id: '5', title: 'Solo Leveling', imageUrl: 'https://via.placeholder.com/300x450?text=Solo+Leveling', type: 'manhwa' },
  { id: '6', title: 'Tower of God', imageUrl: 'https://via.placeholder.com/300x450?text=Tower+of+God', type: 'manhwa' },
];

export default function Catalog() {
  return (
    <div className="p-6 space-y-10">
      <section>
        <h2 className="text-2xl font-bold mb-4">Anime</h2>
        <Carousel items={animeItems} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Manga</h2>
        <Carousel items={mangaItems} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Manhwa</h2>
        <Carousel items={manhwaItems} />
      </section>
    </div>
  );
}
