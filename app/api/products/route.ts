// app/api/products/route.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma'; // Adjust the import based on your project structure

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const products = await prisma.product.findMany();
    res.json(products);
  } else if (req.method === 'POST') {
    const { name, description, price, owner } = req.body;
    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price,
        owner,
      },
    });
    res.status(201).json(newProduct);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
