import React from 'react';
import AnswerModel from '../models/Answer';
import styles from '../styles/Answer.module.css';

interface AnswerProps {
  answer: AnswerModel;
  index: number;
  letter: string;
  letterBackgroundColor: string;
  onClick: (index: number) => void;
}

const Answer: React.FC<AnswerProps> = ({
  answer,
  index,
  letter,
  letterBackgroundColor,
  onClick,
}) => {
  const classAnswerRevealed = answer.revealed
    ? styles['answer__content--revealed']
    : '';

  return (
    <div className={styles.answer} onClick={() => onClick(index)}>
      <div className={`${styles.answer__content} ${classAnswerRevealed}`}>
        <div className={styles.answer__front}>
          <div
            className={styles.answer__letter}
            style={{ backgroundColor: letterBackgroundColor }}
          >
            {letter}
          </div>
          <div className={styles.answer__value}>{answer.value}</div>
        </div>
        <div className={styles.answer__back}>
          {answer.right ? (
            <div className={styles.answer__correct}>
              <div>A resposta certa é...</div>
              <div className={styles.answer__value}>{answer.value}</div>
            </div>
          ) : (
            <div className={styles.answer__incorrect}>
              <div>A resposta informada está errada</div>
              <div className={styles.answer__value}>{answer.value}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Answer;
