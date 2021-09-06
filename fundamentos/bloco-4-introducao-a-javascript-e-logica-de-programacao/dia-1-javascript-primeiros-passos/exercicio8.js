// Programa 8: Define três números em constantes e retorna true se pelo menos uma das três for par. Caso contrário, retorna false.

const number1 = 7;
const number2 = 5;
const number3 = 0;

/*
if (((number1 % 2) === 0) || ((number2 % 2) === 0) || ((number3 % 2) === 0)) {
    console.log('true');
} else {
    console.log('false');
}
*/

// Programa 8 refatorado:
const numberIsEven = (((number1 % 2) === 0) || ((number2 % 2) === 0) || ((number3 % 2) === 0));
console.log(numberIsEven);
