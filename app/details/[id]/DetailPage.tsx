// app/details/[id]/page.tsx

import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function DetailPage() {
  const { data: session } = useSession();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission logic here
    console.log('Comment submitted:', comment);
  };

  return (
    <div className="px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">{itemDetails.title}</h1>
      <img src={itemDetails.imageUrl} alt={itemDetails.title} className="rounded-lg mb-4" />
      <p className="text-lg">{itemDetails.description}</p>

      {session ? (
        <div className="mt-6">
          <h2 className="text-2xl mb-2">Rate this item:</h2>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((rate) => (
              <button
                key={rate}
                onClick={() => handleRating(rate)}
                className={`p-2 rounded ${rating === rate ? 'bg-yellow-500' : 'bg-gray-300'}`}
              >
                {rate}
              </button>
            ))}
          </div>
          <form onSubmit={handleCommentSubmit} className="mt-4">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Leave a comment..."
              className="w-full p-2 border border-gray-300 rounded"
              rows={4}
              required
            />
            <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
              Submit Comment
            </button>
          </form>
        </div>
      ) : (
        <p className="mt-6 text-red-500">Please log in to rate or comment.</p>
      )}
    </div>
  );
}
