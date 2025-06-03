// app/auth/signin/page.tsx

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('email', { email });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-4">Sign In</h1>
      <form onSubmit={handleEmailSignIn} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded"
          required
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Sign in with Email
        </button>
        <button
          type="button"
          onClick={() => signIn('google')}
          className="p-2 bg-red-500 text-white rounded"
        >
          Sign in with Google
        </button>
      </form>
    </div>
  );
}
