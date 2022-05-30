import type { NextPage } from 'next';
import { useState } from 'react';
import Button from '../components/Button';
import Question from '../components/Question';
import AnswerModel from '../models/Answer';
import QuestionModel from '../models/Question';

const questionMock = new QuestionModel(1, 'Melhor cor?', [
  AnswerModel.wrong('Verde'),
  AnswerModel.wrong('Vermelho'),
  AnswerModel.wrong('Azul'),
  AnswerModel.right('Preta'),
]);

const Home: NextPage = () => {
  const [question, setQuestion] = useState(questionMock);

  const answerReceived = (index: number) => {
    if (question.notAnswered) {
      const questionAnswered = question.answerQuestion(index);
      setQuestion(questionAnswered);
    }
  };

  const timesUp = () => {
    if (question.notAnswered) {
      setQuestion(question.answerQuestion(-1));
    }
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
      <Question
        question={question}
        answerReceived={answerReceived}
        timesUp={timesUp}
        timeToAnswer={2}
      />
      <Button text="Próxima" href='/result'/>
    </div>
  );
};

export default Home;
