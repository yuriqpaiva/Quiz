import AnswerModel from './Answer';

class QuestionModel {
  private _id: number;
  private _label: string;
  private _answers: AnswerModel[];
  private _right: boolean;

  constructor(
    id: number,
    label: string,
    answers: any[],
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

  get right() {
    return this._right;
  }

  get answered() {
    for (let answer of this.answers) {
      if (answer.revealed) return true;
    }

    return false;
  }

  // toObject() {
  //   return {
  //     id: this.id,
  //     label: this.label,
  //     answers: this.answers,
  //     right: this.right,
  //   };
  // }
}

export default QuestionModel;
