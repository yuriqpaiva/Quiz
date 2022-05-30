import React from 'react';
import QuestionModel from '../models/Question';
import styles from '../styles/Quiz.module.css';
import Button from './Button';
import Question from './Question';

interface QuizProps {
  question: QuestionModel;
  lastQuestion: boolean;
  onAnswer: (question: QuestionModel) => void;
  goToNextStep: () => void;
}

const Quiz: React.FC<QuizProps> = ({
  question,
  lastQuestion,
  onAnswer,
  goToNextStep,
}) => {
  const answerReceived = (index: number) => {
    if (question.notAnswered) {
      onAnswer(question.answerQuestion(index));
    }
  };

  return (
    <div className={styles.quiz}>
      {question && (
        <Question
          question={question}
          timeToAnswer={6}
          answerReceived={answerReceived}
          timesUp={goToNextStep}
        />
      )}
      <Button
        onClick={goToNextStep}
        text={lastQuestion ? 'Finalizar' : 'Próxima'}
      />
    </div>
  );
};

export default Quiz;
