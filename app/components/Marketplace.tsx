// app/components/Marketplace.tsx

import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Marketplace: React.FC = () => {
  const { data: session } = useSession();
  const { data: products, error } = useSWR('/api/products', fetcher);
  const router = useRouter();

  if (error) return <div>Failed to load</div>;
  if (!products) return <div>Loading...</div>;

  const handleBuy = (productId: string) => {
    router.push(`/checkout/${productId}`);
  };

  return (
    <div className="px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            <button onClick={() => handleBuy(product.id)} className="mt-2 p-2 bg-blue-500 text-white rounded">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
