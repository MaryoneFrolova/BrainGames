// prime game: is this number prime?
import { cons } from 'hexlet-pairs';
import { game } from '..';

const ruleGame = 'Is this number prime?';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let dev = 2; dev ** 2 <= number; dev += 1) {
    if (number % dev === 0) {
      return false;
    }
  }
  return true;
};

export const taskPrime = () => {
  const currentNumber = Math.floor(Math.random() * 100) + 1;
  return cons(currentNumber, (isPrime(currentNumber) ? 'yes' : 'no'));
};

const gamePrime = () => {
  game(taskPrime, ruleGame);
};

export default gamePrime;
