// game Calculation: What is the result of the expression?
import { cons } from 'hexlet-pairs';
import { game } from '..';

const ruleGame = 'What is the result of the expression? \n';

const signString = (numberSign) => {
  if (numberSign === 0) {
    return '+';
  }
  if (numberSign === 1) {
    return '-';
  }
  return '*';
};

const getAnswer = (firstNumber, secondNumber, numberSign) => {
  if (numberSign === 0) {
    return firstNumber + secondNumber;
  }
  if (numberSign === 1) {
    return firstNumber - secondNumber;
  }
  return firstNumber * secondNumber;
};

export const taskCalc = () => {
  const firstNumber = Math.floor(Math.random() * 100) + 1;
  const secondNumber = Math.floor(Math.random() * 100) + 1;
  const numberSign = Math.floor(Math.random() * 3);
  const stringSign = signString(numberSign);
  const stringQuestion = `${firstNumber} ${stringSign} ${secondNumber}`;
  const rightAnswer = getAnswer(firstNumber, secondNumber, numberSign);
  return cons(stringQuestion, rightAnswer);
};

const gameCalc = () => {
  game(taskCalc, ruleGame);
};

export default gameCalc;
