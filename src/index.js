import readlineSync from 'readline-sync';
import gameEven from './games/game-even';
import gameCalc from './games/game-calc';

export const nameUser = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name} \n`);
  return name;
};

const startGame = (nameGame) => {
  switch (nameGame) {
    case 'calc': {
      return gameCalc();
    }
    case 'even': {
      return gameEven();
    }
    default: {
      return gameEven();
    }
  }
};

export const game = (nameGame, task) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  const name = nameUser();
  const countQuestion = 3;
  for (let i = 1; i <= countQuestion; i += 1) {
    if (startGame(nameGame) === false) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
