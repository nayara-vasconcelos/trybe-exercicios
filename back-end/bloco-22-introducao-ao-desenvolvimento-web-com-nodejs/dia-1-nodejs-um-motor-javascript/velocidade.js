const readline = require('readline-sync');

const calculateAvgSpeedSI = (distance, time) => {
  const avgSpeed = distance / time;
  return avgSpeed;
};

const showAvgSpeed = () => {
  const distance = readline.questionInt('Qual a distância percorrida em metros? ');
  const time = (readline.questionInt('\nQual o intervalo de tempo em minutos? ') * 60);
  const avgSpeed = calculateAvgSpeedSI(distance, time).toFixed(2);
  console.log(`\nA velocidade média é ${avgSpeed} m/s.\n`);
};

module.exports = showAvgSpeed;
