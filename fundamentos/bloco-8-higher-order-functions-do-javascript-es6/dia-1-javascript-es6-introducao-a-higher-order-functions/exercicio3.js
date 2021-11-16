/**
 * 3 - Crie uma HOF que receberá três parâmetros.
 * O primeiro será um array de respostas corretas (Gabarito),
 * o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante),
 * e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante.
 * Ao final a HOF deve retornar o total da contagem de respostas certas.
 * Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
 */

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareValues = (array1, array2) => {
  let [equalValues, differentValues, noResponses] = [0, 0, 0];

  array2.forEach((e, i) => {
    if (e === `N.A`) {
      noResponses += 1;
    } else if (e === array1[i]) {
      equalValues += 1;
    } else {
      differentValues += 1;
    }
  });

  return [equalValues, differentValues];
}

const checkStudentGrade = (answersKey, studentTestAnswer, callback) => {
  const [rightResponses, wrongResponses] = callback(answersKey, studentTestAnswer);
  const grade = rightResponses - (wrongResponses * (0.5));

  return grade;
}

// const test = checkStudentGrade(rightAnswers, studentAnswers, compareValues);
// console.log(test);
