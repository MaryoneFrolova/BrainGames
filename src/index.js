import readlineSync from 'readline-sync';

export const nameUser = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const isEven = number => (number % 2 === 0) ? 'yes' : 'no';

export const game = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = nameUser();
  const countQuestion = 3;
  for (let i = 1; i <= countQuestion; i++) {
    const currentNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${currentNumber}`);
    const answerQuestion = readlineSync.question('Your answer: ');
    if (answerQuestion !== isEven(currentNumber)) {
      console.log(`'${answerQuestion}' is wrong answer ;(. Correct answer was '${isEven(currentNumber)}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
      } 
    else {
      console.log('Correct!');
    }
    if (i === countQuestion) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
