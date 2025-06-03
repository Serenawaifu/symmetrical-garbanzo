// app/stream/[id]/page.tsx

import { useRouter } from 'next/router';
import VideoPlayer from '../../components/VideoPlayer';

const episodes = [
  { id: '1', title: 'Episode 1', url: 'https://example.com/episode1.m3u8' },
  { id: '2', title: 'Episode 2', url: 'https://example.com/episode2.m3u8' },
  // Add more episodes...
];

export default function StreamPage() {
  const router = useRouter();
  const { id } = router.query;

  // Fetch anime details based on ID (you can replace this with actual data fetching)
  const animeDetails = {
    title: 'Attack on Titan',
    description: 'A story about humanity fighting against giant humanoid creatures.',
  };

  return (
    <div className="px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">{animeDetails.title}</h1>
      <VideoPlayer url={episodes[0].url} title={animeDetails.title} episodes={episodes} />
      <div className="mt-6">
        <h2 className="text-2xl mb-2">Comments</h2>
        {/* Comments section can be implemented here */}
        <textarea placeholder="Leave a comment..." className="w-full p-2 border border-gray-300 rounded" rows={4} />
        <button className="mt-2 p-2 bg-blue-500 text-white rounded">Submit Comment</button>
      </div>
    </div>
  );
}
