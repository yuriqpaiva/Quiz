import type { NextApiRequest, NextApiResponse } from 'next';
import questions from '../questionsDatabase';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  res.status(200).json({ questao: questions[0].id });
}
