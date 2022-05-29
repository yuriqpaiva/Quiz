import type { NextApiRequest, NextApiResponse } from 'next';
import questions from '../questionsDatabase';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = Number(req.query.id);

  const questionFinded = questions.filter((question) => question.id === id);

  if (questionFinded.length === 1) {
    const selectedQuestion = questionFinded[0].randomizeAnswers();

    res.status(200).json(selectedQuestion.toObject());
  } else {
    res.status(401).json({ message: 'Questão não encontrada' });
  }
}
