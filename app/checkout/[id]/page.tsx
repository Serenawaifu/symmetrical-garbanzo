// app/checkout/[id]/page.tsx

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';
import { useSession } from 'next-auth/react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const CheckoutPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession();
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState('');

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch(`/api/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId: id, quantity, address, user: session?.user.email }),
    });

    const sessionData = await response.json();
    await stripe?.redirectToCheckout({ sessionId: sessionData.id });
  };

  return (
    <div className="px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Checkout</h1>
      <div>
        <label className="block mb-2">Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border p-2 rounded mb-4"
          min="1"
        />
        <label className="block mb-2">Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border p-2 rounded mb-4"
          required
        />
        <button onClick={handleCheckout} className="p-2 bg-blue-500 text-white rounded">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
