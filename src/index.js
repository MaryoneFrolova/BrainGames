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

  for (let i = 0; i < countQuestion; i += 1) {
    const currentTask = getTask(); // получаем пару (вопрос, ответ)
    const currentQuestion = car(currentTask);
    const rightAnswer = String(cdr(currentTask));

    console.log(`Question: ${currentQuestion}`);
    const answerQuestion = readlineSync.question('Your answer: ');
    if (answerQuestion !== rightAnswer) {
      console.log(`'${answerQuestion}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};
