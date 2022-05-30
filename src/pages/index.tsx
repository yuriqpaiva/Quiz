import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Quiz from '../components/Quiz';
import AnswerModel from '../models/Answer';
import QuestionModel from '../models/Question';

const questionMock = new QuestionModel(1, 'Melhor cor?', [
  AnswerModel.wrong('Verde'),
  AnswerModel.wrong('Vermelho'),
  AnswerModel.wrong('Azul'),
  AnswerModel.right('Preta'),
]);

const BASE_URL = 'http://localhost:3000/api';

const Home: NextPage = () => {
  const [ids, setIds] = useState<number[]>([]);
  const [question, setQuestion] = useState(questionMock);
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);

  const loadQuestionsIds = async () => {
    const res = await fetch(`${BASE_URL}/quiz`);
    const questionsIds = await res.json();
    setIds(questionsIds);
  };

  const loadQuestion = async (questionId: number) => {
    const res = await fetch(`${BASE_URL}/questions/${questionId}`);
    const questionObject = await res.json(); // doesn't return a class, just an object

    const newQuestion = QuestionModel.fromObject(questionObject);
    setQuestion(newQuestion);
  };

  useEffect(() => {
    loadQuestionsIds();
  }, []);

  useEffect(() => {
    ids.length > 0 && loadQuestion(ids[0]);
  }, [ids]);

  const answerQuestion = (answeredQuestion: QuestionModel) => {
    setQuestion(answeredQuestion);
    if (answeredQuestion.right) {
      setCorrectAnswersCount((counter) => counter + 1);
    }
  };

  const goToNextStep = () => {};

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Quiz
        question={question}
        lastQuestion={true}
        onAnswer={answerQuestion}
        goToNextStep={goToNextStep}
      />
    </div>
  );
};

export default Home;
