// Programa 8: Define três números em constantes e retorna true se pelo menos uma das três for par. Caso contrário, retorna false.

/*
const number1 = 7;
const number2 = 5;
const number3 = 0;

let numberIsEven = false;
if (((number1 % 2) === 0) || ((number2 % 2) === 0) || ((number3 % 2) === 0)) {
    numberIsEven = true;
}
console.log(numberIsEven);
*/

// Programa 8 refatorado:
const number1 = 7;
const number2 = 5;
const number3 = 0;

let numberIsEven = (((number1 % 2) === 0) || ((number2 % 2) === 0) || ((number3 % 2) === 0));
console.log(numberIsEven);
