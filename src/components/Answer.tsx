import React from 'react';
import AnswerModel from '../models/Answer';
import styles from '../styles/Answer.module.css';

interface AnswerProps {
  answer: AnswerModel;
  index: number;
  letter: string;
  letterBackgroundColor: string;
}

const Answer: React.FC<AnswerProps> = ({
  answer,
  index,
  letter,
  letterBackgroundColor,
}) => {
  return (
    <div className={styles.answer}>
      <div className={styles.answer__content}>
        <div className={styles.answer__front}>
          <div
            className={styles.answer__letter}
            style={{ backgroundColor: letterBackgroundColor }}
          >
            {letter}
          </div>
          <div className={styles.answer__value}>{answer.value}</div>
        </div>
        <div className={styles.answer__back}></div>
      </div>
    </div>
  );
};

export default Answer;
