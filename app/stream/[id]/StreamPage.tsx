// app/stream/[id]/page.tsx

import { useState } from 'react';

export default function StreamPage() {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission logic here
    console.log('Comment submitted:', comment);
    setComment(''); // Clear the comment input
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl mb-2">Comments</h2>
      <form onSubmit={handleCommentSubmit}>
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
  );
}
