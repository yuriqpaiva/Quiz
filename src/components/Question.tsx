import QuestionModel from '../models/Question';
import styles from '../styles/Question.module.css';
import Answer from './Answer';
import Label from './Label';
import Timer from './Timer';

const letters = [
  { value: 'A', color: '#F2C866' },
  { value: 'B', color: '#F266BA' },
  { value: 'C', color: '#85D4F2' },
  { value: 'D', color: '#BCE596' },
];

interface QuestionProps {
  question: QuestionModel;
  answerReceived: (index: number) => void;
  timesUp: () => void;
}

const Question: React.FC<QuestionProps> = ({
  question,
  answerReceived,
  timesUp,
}) => {
  const renderAnswers = () => {
    return question.answers.map((answer, index) => {
      return (
        <Answer
          answer={answer}
          index={index}
          letter={letters[index].value}
          letterBackgroundColor={letters[index].color}
          key={index}
          onClick={answerReceived}
        />
      );
    });
  };

  return (
    <div className={styles.question}>
      <Label text={question.label} />
      <Timer duration={10} timesUp={timesUp} />
      {renderAnswers()}
    </div>
  );
};

export default Question;
