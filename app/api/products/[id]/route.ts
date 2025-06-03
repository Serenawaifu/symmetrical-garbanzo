// app/api/products/[id]/route.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../lib/prisma'; // Adjust the import based on your project structure

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    await prisma.product.delete({
      where: { id: String(id) },
    });
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
