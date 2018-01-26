// game GCD: Find the greatest common divisor of given numbers.
import { cons } from 'hexlet-pairs';
import { game } from '..';

const ruleGame = 'Balance the given number.';

const balance = (number) => {
  let currentNumber = number;
  if (number / 10 === 0) {
    return number;
  }
  let result = 0;
  let count = 1;
  let sum = 0;
  while (parseInt(currentNumber / 10, 10) !== 0) {
    sum += currentNumber % 10;
    count += 1; // количество цифр числа
    currentNumber = parseInt(currentNumber / 10, 10);
  }
  sum += currentNumber % 10; // сумма всех цифр числа
  const avarage = parseInt(sum / count, 10); // среднее приходящееся на каждое число
  let def = sum % count; // количество единиц, которые нужно добавить с конца
  for (let i = 0; i < count; i += 1) {
    result += avarage * (10 ** i);
    if (def > 0) {
      result += 10 ** i;
      def -= 1;
    }
  }
  return result;
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
