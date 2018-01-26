// Even game: Answer "yes" if number even otherwise answer "no".
import { cons } from 'hexlet-pairs';
import { game } from '..';

const ruleGame = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const taskEven = () => {
  const currentNumber = Math.floor(Math.random() * 100) + 1;
  return cons(currentNumber, isEven(currentNumber));
};

const gameEven = () => {
  game(taskEven, ruleGame);
};

export default gameEven;
