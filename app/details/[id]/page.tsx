// app/details/[id]/page.tsx

import { useRouter } from 'next/router';

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

  // Fetch item details based on ID (you can replace this with actual data fetching)
  const itemDetails = {
    title: 'Attack on Titan',
    description: 'A story about humanity fighting against giant humanoid creatures.',
    imageUrl: 'https://via.placeholder.com/600x900?text=Attack+on+Titan',
  };

  return (
    <div className="px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">{itemDetails.title}</h1>
      <img src={itemDetails.imageUrl} alt={itemDetails.title} className="rounded-lg mb-4" />
      <p className="text-lg">{itemDetails.description}</p>
      {/* Add rating and commenting functionality here */}
    </div>
  );
}
