// Even game: Answer "yes" if number even otherwise answer "no".
import readlineSync from 'readline-sync';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const gameEven = () => {
  const currentNumber = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${currentNumber}`);
  const answerQuestion = readlineSync.question('Your answer: ');
  if (answerQuestion !== isEven(currentNumber)) {
    console.log(`'${answerQuestion}' is wrong answer ;(. Correct answer was '${isEven(currentNumber)}'.`);
    return false;
  }
  return true;
};
export default gameEven;
