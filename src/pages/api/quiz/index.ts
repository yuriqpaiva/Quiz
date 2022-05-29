import type { NextApiRequest, NextApiResponse } from 'next';
import { randomizeArray } from '../../../functions/randomizeArray';
import questions from '../questionsDatabase';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const questionIds = questions.map((question) => question.id);

  const randomQuestionIds = randomizeArray(questionIds);

  res.status(200).json(randomQuestionIds);
}
