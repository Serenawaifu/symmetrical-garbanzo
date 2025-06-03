import SakuraBackground from './components/SakuraBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen z-10">
      <SakuraBackground />
      <section id="anime" className="py-24 px-6">
        <h2 className="text-3xl font-bold mb-4">Anime</h2>
        <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
          {/* Anime content placeholder */}
          Coming soon...
        </div>
      </section>
      <section id="manga" className="py-24 px-6">
        <h2 className="text-3xl font-bold mb-4">Manga</h2>
        <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
          {/* Manga content placeholder */}
          Coming soon...
        </div>
      </section>
      <section id="manhwa" className="py-24 px-6">
        <h2 className="text-3xl font-bold mb-4">Manhwa</h2>
        <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
          {/* Manhwa content placeholder */}
          Coming soon...
        </div>
      </section>
      <section id="marketplace" className="py-24 px-6">
        <h2 className="text-3xl font-bold mb-4">Marketplace</h2>
        <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
          {/* Marketplace content placeholder */}
          Coming soon...
        </div>
      </section>
    </main>
  );
}
