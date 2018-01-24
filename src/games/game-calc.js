// game Calculation: What is the result of the expression?
import readlineSync from 'readline-sync';

const signString = (numberSign) => {
  if (numberSign === 0) {
    return '+';
  }
  if (numberSign === 1) {
    return '-';
  }
  return '*';
};

const getAnswer = (firstNumber, secondNumber, numberSign) => {
  if (numberSign === 0) {
    return firstNumber + secondNumber;
  }
  if (numberSign === 1) {
    return firstNumber - secondNumber;
  }
  return firstNumber * secondNumber;
};

const gameCalc = () => {
  const firstNumber = Math.floor(Math.random() * 100) + 1;
  const secondNumber = Math.floor(Math.random() * 100) + 1;
  const numberSign = Math.floor(Math.random() * 3);
  const stringSign = signString(numberSign);
  const rightAnswer = getAnswer(firstNumber, secondNumber, numberSign);
  console.log(`Question: ${firstNumber} ${stringSign} ${secondNumber}`);
  const answerQuestion = readlineSync.question('Your answer: ');
  if (Number(answerQuestion) !== Number(rightAnswer)) {
    console.log(`'${answerQuestion}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    return false;
  }
  return true;
};
export default gameCalc;
