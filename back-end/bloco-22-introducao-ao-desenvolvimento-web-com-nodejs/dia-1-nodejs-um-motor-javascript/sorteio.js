const readline = require('readline-sync');

const sortNumber = () => {
  const sortedNumber = Math.round((Math.random() * 10));
  return sortedNumber;
};

const playGuessTheNumber = () => {
  let playAgain = false;
  do {
    const sortedNumber = sortNumber();
    let bet = readline.questionInt('\nVocê consegue acertar o número sorteado?\nEscolha um número entre 0 e 10.\nAposta: ');

    while(bet > 10 || bet < 0) {
      bet = readline.questionInt('\nNúmero inválido! Escolha um número entre 0 e 10.\nAposta: ');
    }

    if(bet === sortedNumber) {
      console.log('\nParabéns, número correto!');
    } else {
      console.log(`\nOpa, não foi dessa vez. O número era ${sortedNumber}.`);
    }

    playAgain = readline.keyInYN('\nVocê gostaria de tentar novamente? ');
  } while (playAgain);
};

module.exports = playGuessTheNumber;
