/**
 * 2 - Desenvolva uma HOF que retorna o resultado de um sorteio.
 * Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado.
 * O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
 */

const sameNumbers = (num1, num2) => (num1 === num2);

const doorPrizeResult = (betNumber, callback) => {
  const drawNumber = Math.floor(Math.random() * 6);
  // Math.radom sorteia um número flutuante aleatório entre 0 (incluso) e 1 (excluso);
  // Math.floor arrendonda um número para o menor número inteiro mais próximo.

  const hitTheBet = callback(drawNumber, betNumber);

  const msg = hitTheBet ? `Parabéns você ganhou!` : `Tente novamente!`;
  return msg;
}

// const test = doorPrizeResult(2, sameNumbers);
// console.log(test);
