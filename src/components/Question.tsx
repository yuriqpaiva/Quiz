import QuestionModel from '../models/Question';
import styles from '../styles/Question.module.css';
import Answer from './Answer';
import Label from './Label';

const letters = [
  { value: 'A', color: '#F2C866' },
  { value: 'B', color: '#F266BA' },
  { value: 'C', color: '#85D4F2' },
  { value: 'D', color: '#BCE596' },
];

interface QuestionProps {
  value: QuestionModel;
}

const Question: React.FC<QuestionProps> = ({ value }) => {
  const renderAnswers = () => {
    return value.answers.map((answer, index) => {
      return (
        <Answer
          answer={answer}
          index={index}
          letter={letters[index].value}
          letterBackgroundColor={letters[index].color}
          key={index}
        />
      );
    });
  };

  return (
    <div className={styles.question}>
      <Label text={value.label} />
      {renderAnswers()}
    </div>
  );
};

export default Question;
