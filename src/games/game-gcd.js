// game Calculation: What is the result of the expression?
import { cons } from 'hexlet-pairs';
import { game } from '..';

const ruleGame = 'Find the greatest common divisor of given numbers. \n';

const gcd = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

export const taskGcd = () => {
  const firstNumber = Math.floor(Math.random() * 100) + 1;
  const secondNumber = Math.floor(Math.random() * 100) + 1;
  const stringQuestion = `${firstNumber} ${secondNumber}`;
  const rightAnswer = gcd(firstNumber, secondNumber);
  return cons(stringQuestion, rightAnswer);
};

const gameGcd = () => {
  game(taskGcd, ruleGame);
};

export default gameGcd;
