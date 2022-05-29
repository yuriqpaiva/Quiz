import AnswerModel from '../../models/Answer';
import QuestionModel from '../../models/Question';

const questions: QuestionModel[] = [
  new QuestionModel(306, 'Qual bicho transmite a doença de chagas?', [
    AnswerModel.wrong('Abelha'),
    AnswerModel.wrong('Barata'),
    AnswerModel.wrong('Pulga'),
    AnswerModel.right('Barbeiro'),
  ]),
  new QuestionModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
    AnswerModel.wrong('Caju'),
    AnswerModel.wrong('Côco'),
    AnswerModel.wrong('Chuchu'),
    AnswerModel.right('Abóbora'),
  ]),
];

export default questions;
