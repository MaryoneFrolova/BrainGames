// game GCD: Find the greatest common divisor of given numbers.
import { cons } from 'hexlet-pairs';
import { game } from '..';

const ruleGame = 'Balance the given number.';

const balance = (number) => {
  const arraySepareteNumber = String(number).split('').map(Number);
  const min = Math.min.apply(null, arraySepareteNumber);
  const max = Math.max.apply(null, arraySepareteNumber);
  if (max - min > 1) {
    const def = Math.floor((max - min) / 2);
    arraySepareteNumber[arraySepareteNumber.indexOf(min)] += def;
    arraySepareteNumber[arraySepareteNumber.indexOf(max)] -= def;
    return balance(arraySepareteNumber.join(''));
  }
  return arraySepareteNumber.sort((a, b) => a - b).join('');
};

export const taskBalance = () => {
  const number = Math.floor(Math.random() * 1000) + 1;
  const stringQuestion = `${number}`;
  const rightAnswer = balance(number);
  return cons(stringQuestion, rightAnswer);
};

const gameBalance = () => {
  game(taskBalance, ruleGame);
};

export default gameBalance;
