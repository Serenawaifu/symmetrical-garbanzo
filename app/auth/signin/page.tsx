'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { ethers } from 'ethers';

export default function SignIn() {
  const [email, setEmail] = useState('');

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('email', { email });
  };

  const handleWeb3SignIn = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      const res = await fetch('/api/auth/web3', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address }),
      });

      if (res.ok) {
        console.log('Logged in with Web3:', address);
      } else {
        console.error('Web3 login failed');
      }
    } else {
      alert('No Ethereum provider found');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-900 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>

      <form onSubmit={handleEmailSignIn} className="mb-4">
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Sign in with Email
        </button>
      </form>

      <button onClick={() => signIn('google')} className="w-full bg-red-500 text-white p-2 rounded mb-2">
        Sign in with Google
      </button>

      <button onClick={handleWeb3SignIn} className="w-full bg-purple-600 text-white p-2 rounded">
        Sign in with Web3 Wallet
      </button>
    </div>
  );
}
