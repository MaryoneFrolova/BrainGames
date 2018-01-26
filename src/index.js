import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const nameUser = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name} \n`);
  return name;
};

export const game = (getTask, ruleGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(ruleGame);
  console.log();
  const name = nameUser();
  const countQuestion = 3;

  const iter = (att) => {
    if (att < 1) {
      return console.log(`Congratulations, ${name}!`);
    }

    const currentTask = getTask();
    const currentQuestion = car(currentTask);
    const rightAnswer = String(cdr(currentTask));

    console.log(`Question: ${currentQuestion}`);
    const answerQuestion = readlineSync.question('Your answer: ');

    if (answerQuestion !== rightAnswer) {
      console.log(`'${answerQuestion}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }

    console.log('Correct!');
    return iter(att - 1);
  };

  iter(countQuestion);
};
