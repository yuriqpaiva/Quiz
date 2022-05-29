import type { NextPage } from 'next';
import Question from '../components/Question';
import AnswerModel from '../models/Answer';
import QuestionModel from '../models/Question';

const Home: NextPage = () => {
  const question = new QuestionModel(1, 'Melhor cor?', [
    AnswerModel.wrong('Verde'),
    AnswerModel.wrong('Vermelho'),
    AnswerModel.wrong('Azul'),
    AnswerModel.wrong('Preta'),
  ]);

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Question value={question} />
    </div>
  );
};

export default Home;
