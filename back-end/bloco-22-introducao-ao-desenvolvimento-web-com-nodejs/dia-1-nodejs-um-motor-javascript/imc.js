const readline = require('readline-sync');

const calculateBMI = (weight, height) => {
  const bmi = (weight / (( height / 100) ** 2));
  return bmi;
};

const showBMI = () => {
  const weight = readline.questionFloat('Qual é o seu peso em kg? ');
  const height = readline.questionInt('\nQual é a sua altura em cm? ');
  const bmi = parseFloat(calculateBMI(weight, height).toPrecision(3));
  let message = '\n';
  const categoriesBMI = {
    thin: 'Abaixo do peso (magreza)',
    normal: 'Peso normal',
    overweight: 'Acima do peso (sobrepeso)',
    obeseClass1: 'Obesidade grau I',
    ObeseClass2: 'Obesidade grau II',
    ObeseClass3: 'Obesidade grau III'
  };

  if (bmi < 18.5) {
    message += `Seu IMC é: ${bmi}\nClassificado como: ${categoriesBMI.thin}\n`;
  } else if ( bmi < 25) {
    message +=`Seu IMC é: ${bmi}\nClassificado como: ${categoriesBMI.normal}\n`;
  } else if ( bmi < 30) {
    message += `Seu IMC é: ${bmi}\nClassificado como: ${categoriesBMI.overweight}\n`;
  } else if ( bmi < 35) {
    message += `Seu IMC é: ${bmi}\nClassificado como: ${categoriesBMI.obeseClass1}\n`;
  } else if ( bmi < 40) {
    message += `Seu IMC é: ${bmi}\nClassificado como: ${categoriesBMI.ObeseClass2}\n`;
  } else {
    message += `Seu IMC é: ${bmi}\nClassificado como: ${categoriesBMI.ObeseClass3}\n`;
  }

  console.log(message);
};

showBMI();
