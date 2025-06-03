// app/components/Forum.tsx

import React, { useState } from 'react';
import useSWR, { mutate } from 'swr';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface Post {
  id: string;
  title: string;
  content: string;
  votes: number;
  user: string;
  category: string;
  createdAt: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Forum: React.FC = () => {
  const { data: session } = useSession();
  const { data: posts, error } = useSWR<Post[]>('/api/forum/posts', fetcher);
  const [newPost, setNewPost] = useState({ title: '', content: '', category: '' });

  if (error) return <div>Failed to load</div>;
  if (!posts) return <div>Loading...</div>;

  const handlePostSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) return;

    const response = await fetch('/api/forum/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...newPost, user: session.user.email }),
    });

    if (response.ok) {
      setNewPost({ title: '', content: '', category: '' });
      mutate('/api/forum/posts'); // Re-fetch posts
    }
  };

  return (
    <div className="px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Anime Forum</h1>
      {session && (
        <form onSubmit={handlePostSubmit} className="mb-6">
          <input
            type="text"
            placeholder="Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded mb-2"
            required
          />
          <ReactQuill
            value={newPost.content}
            onChange={(content) => setNewPost({ ...newPost, content })}
            className="mb-2"
            theme="snow"
          />
          <input
            type="text"
            placeholder="Category"
            value={newPost.category}
            onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded mb-2"
            required
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Post
          </button>
        </form>
      )}
      <div>
        {posts.map((post) => (
          <div key={post.id} className="border-b border-gray-300 mb-4 pb-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.content}</p>
            <p className="text-gray-500">Posted by {post.user} on {new Date(post.createdAt).toLocaleString()}</p>
            <div className="flex justify-between items-center mt-2">
              <div>
                <button className="mr-2">Upvote</button>
                <button>Downvote</button>
              </div>
              <span>{post.votes} votes</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
