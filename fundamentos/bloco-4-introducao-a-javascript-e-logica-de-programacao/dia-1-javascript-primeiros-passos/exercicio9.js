// Programa 9: Define três números em constantes e retorna true se pelo menos uma das três for ímpar. Caso contrário, retorna false.

/*
const number1 = 7;
const number2 = 5;
const number3 = 2;

let numberIsOdd = false;
if (((number1 % 2) !== 0) || ((number2 % 2) !== 0) || ((number3 % 2) !== 0)) {
    numerIsOdd = true;
}
console.log(numberIsOdd)
*/

//Programa 9 refatorado:
const number1 = 7;
const number2 = 5;
const number3 = 2;

const numberIsOdd = (((number1 % 2) !== 0) || ((number2 % 2) !== 0) || ((number3 % 2) !== 0));
console.log(numberIsOdd);
