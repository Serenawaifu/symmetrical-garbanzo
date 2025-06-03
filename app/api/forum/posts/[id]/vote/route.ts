// app/api/forum/posts/[id]/vote/route.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../../lib/prisma'; // Adjust the import based on your project structure

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'POST') {
    const { type } = req.body;
    const post = await prisma.post.findUnique({ where: { id: String(id) } });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const updatedVotes = type === 'upvote' ? post.votes + 1 : post.votes - 1;

    await prisma.post.update({
      where: { id: String(id) },
      data: { votes: updatedVotes },
    });

    res.status(200).json({ votes: updatedVotes });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
