// app/api/forum/posts/route.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma'; // Adjust the import based on your project structure

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(posts);
  } else if (req.method === 'POST') {
    const { title, content, user, category } = req.body;
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        user,
        category,
        votes: 0,
      },
    });
    res.status(201).json(newPost);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
