//Programa 3: Imprime o maior número entre 3 entradas.

const a = 9;
const b = 6;
const c = 12;

if (a > b && a > c) {
    console.log(`O maior número é: ${a}`);
} else if (c > a && c > b) {
    console.log(`O maior número é: ${c}`);
} else {
    console.log(`O maior número é: ${b}`);
}

