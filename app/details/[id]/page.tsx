'use client';

import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

const itemDetails = {
  title: 'Attack on Titan',
  description: 'A story about humanity fighting against giant humanoid creatures.',
  imageUrl: 'https://via.placeholder.com/600x900?text=Attack+on+Titan',
};

export default function DetailPage() {
  const { id } = useParams();
  const { data: session } = useSession();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Rating:', rating);
    console.log('Comment:', comment);
    setComment('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{itemDetails.title}</h1>
      <p className="mb-4">{itemDetails.description}</p>
      <img src={itemDetails.imageUrl} alt={itemDetails.title} className="w-72 mb-6" />

      {session ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Rate this:</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((r) => (
                <button
                  key={r}
                  type="button"
                  className={`p-2 rounded ${rating === r ? 'bg-yellow-500' : 'bg-gray-300'}`}
                  onClick={() => setRating(r)}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium">Comment:</label>
            <textarea
              className="w-full border p-2 rounded"
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your thoughts..."
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
        </form>
      ) : (
        <p className="text-gray-500">Login to rate or comment.</p>
      )}
    </div>
  );
}
