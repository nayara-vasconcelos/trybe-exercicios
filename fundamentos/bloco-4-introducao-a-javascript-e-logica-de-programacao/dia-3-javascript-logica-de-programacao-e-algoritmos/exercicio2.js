/* 

Exercício 2) Dado um valor n qualquer, seja n > 1, imprima na tela um triângulo retângulo com 5 astericos de base.

1) Declarar uma variável vazia para receber astericos.
2) Declarar uma nova variável para guardar o desenho do triângulo retângulo.
3) Usar um laço de repetição para atualizar variável com a concatenação com a string "*" enquanto o índice for menor que n, e também atualizar o valor da outra variável para concatenar com a variável line e quebra de linha. Somar +1 ao índice a cada laço de repetição.

*/

let n = 5;
let line = '';
let triangle = '';

for (let i = 0; i < n; i += 1) {
  line += '*';
  triangle += line + '\n';
}

console.log(triangle);
