import { randomizeArray } from '../functions/randomizeArray';
import AnswerModel from './Answer';

class QuestionModel {
  private _id: number;
  private _label: string;
  private _answers: AnswerModel[];
  private _right: boolean;

  constructor(
    id: number,
    label: string,
    answers: AnswerModel[],
    right: boolean = false
  ) {
    this._id = id;
    this._label = label;
    this._answers = answers;
    this._right = right;
  }

  get id() {
    return this._id;
  }

  get label() {
    return this._label;
  }

  get answers() {
    return this._answers;
  }

  private answersToObject(answers: AnswerModel[]) {
    return answers.map((answer) => answer.toObject());
  }

  get right() {
    return this._right;
  }

  get answered() {
    for (let answer of this.answers) {
      if (answer.revealed) return true;
    }

    return false;
  }

  answerQuestion(index: number): QuestionModel {
    const gotItRight = this.answers[index]?.right;
    const answers = this._answers.map((answer, answerIndex) => {
      const selectedAnswer = index === answerIndex;
      const mustReveal = selectedAnswer || answer.right;

      return mustReveal ? answer.reveal() : answer;
    });

    return new QuestionModel(this.id, this.label, answers, gotItRight);
  }

  randomizeAnswers(): QuestionModel {
    const randomAnswers = randomizeArray(this._answers);
    return new QuestionModel(this.id, this.label, randomAnswers, this.right);
  }

  toObject() {
    return {
      id: this.id,
      label: this.label,
      answers: this.answersToObject(this.answers),
      right: this.right,
      answered: this.answered,
    };
  }
}

export default QuestionModel;
