import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Quiz from '../components/Quiz';
import QuestionModel from '../models/Question';
import { useRouter } from 'next/router';

const BASE_URL = 'http://localhost:3000/api';

const Home: NextPage = () => {
  const router = useRouter();

  const [ids, setIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>();
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

  const nextQuestionId = () => {
    if (question) {
      const nextIndex = ids.indexOf(question.id) + 1;

      return ids[nextIndex];
    }
  };

  const goToNextStep = () => {
    const nextId = nextQuestionId();

    nextId ? goToNextQuestion(nextId) : conclude();
  };

  const goToNextQuestion = (nextId: number) => {
    loadQuestion(nextId);
  };

  const conclude = () => {
    router.push({
      pathname: '/result',
      query: {
        total: ids.length,
        correctAnswers: correctAnswersCount,
      },
    });
  };

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
      {question && (
        <Quiz
          question={question}
          lastQuestion={nextQuestionId() ? false : true}
          onAnswer={answerQuestion}
          goToNextStep={goToNextStep}
        />
      )}
    </div>
  );
};

export default Home;
