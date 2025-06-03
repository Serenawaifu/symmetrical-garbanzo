// app/admin/products/page.tsx

import React, { useState } from 'react';
import useSWR, { mutate } from 'swr';
import { useSession } from 'next-auth/react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const AdminProducts: React.FC = () => {
  const { data: session } = useSession();
  const { data: products, error } = useSWR('/api/products', fetcher);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '' });

  if (error) return <div>Failed to load</div>;
  if (!products) return <div>Loading...</div>;

  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) return;

    const response = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...newProduct, owner: session.user.email }),
    });

    if (response.ok) {
      setNewProduct({ name: '', description: '', price: '' });
      mutate('/api/products'); // Re-fetch products
    }
  };

  const handleDelete = async (productId: string) => {
    await fetch(`/api/products/${productId}`, {
      method: 'DELETE',
    });
    mutate('/api/products'); // Re-fetch products
  };

  return (
    <div className="px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Admin Panel - Manage Products</h1>
      <form onSubmit={handleProductSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-2"
          required
        />
        <textarea
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-2"
          required
        />
        <input
          type="number"
          placeholder="Price (USD)"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-2"
          required
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Add Product
        </button>
      </form>
      <div>
        {products.map((product) => (
          <div key={product.id} className="border-b border-gray-300 mb-4 pb-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            <button onClick={() => handleDelete(product.id)} className="mt-2 p-2 bg-red-500 text-white rounded">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;
