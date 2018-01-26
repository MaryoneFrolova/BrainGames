// game GCD: Find the greatest common divisor of given numbers.
import { cons } from 'hexlet-pairs';
import { game } from '..';

const ruleGame = 'What number is missing in this progression?';

const makeProgression = (base, step, size) => {
  const progression = [];
  for (let i = 0; i < size; i += 1) {
    progression.push(base + (step * i));
  }
  return progression;
};

export const taskProgression = () => {
  const baseProg = Math.floor(Math.random() * 10) + 1;
  const stepProg = Math.floor(Math.random() * 10) + 1;
  const sizeProg = 10;
  const question = makeProgression(baseProg, stepProg, sizeProg);

  const number = Math.floor(Math.random() * sizeProg);
  const rightAnswer = question[number];
  question[number] = '..';

  const stringQuestion = question.join(' ');
  return cons(stringQuestion, rightAnswer);
};

const gameProgression = () => {
  game(taskProgression, ruleGame);
};

export default gameProgression;
