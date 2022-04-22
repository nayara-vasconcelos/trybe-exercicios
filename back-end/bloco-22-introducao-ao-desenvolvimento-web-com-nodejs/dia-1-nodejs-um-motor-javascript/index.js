const readline = require('readline-sync');

const showBMI = require('./imc');
const showAvgSpeed = require('./velocidade');
const playGuessTheNumber = require('./sorteio');

const showOptions = () => {
  const initialMsg = 'Boas vindas!\n\nO que você gostaria de fazer?';
  const optionsMsg = 'Digite o número da opção desejada.';
  const options = [
    { text: 'Calcular IMC', func: showBMI },
    { text: 'Calcular a velocidade média', func: showAvgSpeed },
    { text: 'Adivinhar um número', func: playGuessTheNumber },
  ];
  const displayedOptions = [options[0].text, options[1].text, options[2].text];

  console.log(initialMsg);
  const chosenOption = readline.keyInSelect(displayedOptions, optionsMsg);
  if (chosenOption >= 0) {
    console.log(`\nVocê escolheu: ${displayedOptions[chosenOption]}\n`);
    options[chosenOption].func();
  }
};

showOptions();
