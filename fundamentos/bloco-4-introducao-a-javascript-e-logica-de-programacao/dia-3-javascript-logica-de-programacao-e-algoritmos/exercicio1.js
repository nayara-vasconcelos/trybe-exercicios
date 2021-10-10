/* 

Exercício 1) Dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asterisco de lado de tamanho n.

1) Declarar uma variável vazia para receber asterisco.
2) Declarar uma nova variável para guardar o desenho do quadrado.
3) Usar um laço de repetição para atualizar variável com a concatenação com a string "*" enquanto o índice for menor que n. Somar +1 ao índice a cada laço de repetição.
4) Usar um laço de repetição para atualizar essa nova variável com a concatenação com a "\n" enquanto o índice for menor que n. Somar +1 ao índice a cada laço de repetição.

*/

let n = 5;
let line = '';
let square = '';

for (let i = 0; i < n; i += 1) {
  line += '*';
}

for (let i = 0; i < n; i += 1) {
  square += line + "\n";
}

console.log(square);
