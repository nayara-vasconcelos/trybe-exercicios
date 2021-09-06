/**
 * Programa 10: Calcula o salário líquido a partir do salário bruto e descontos do INSS e IR.
 * Referências para as faixas de impostos:
 * INSS (Instituto Nacional do Seguro Social)
 * Salário bruto até R$ 1.556,94: alíquota de 8%
 * Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
 * Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
 * Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
 * IR (Imposto de Renda)
 * Até R$ 1.903,98: isento de imposto de renda
 * De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
 * De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
 * De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
 * Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
*/

const grossSalary = 5189.82;

let aliquotINSS;
let aliquotIR;

if (grossSalary <= 1556.94) {
    aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
    aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
    aliquotINSS = grossSalary * 0.11;
} else {
    aliquotINSS = 570.88
}

const baseSalary = grossSalary - aliquotINSS;
if (baseSalary <= 1903.98) {
    aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
    aliquotIR = (baseSalary * 0.075) - 142.88;
} else if (baseSalary <= 3751.05) {
    aliquotIR = (baseSalary * 0.15) - 354.88;
} else if (baseSalary <= 4664.68) {
    aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
    aliquotIR = (baseSalary * 0.275) - 869.36;
}

const netSalary = grossSalary - aliquotINSS - aliquotIR;
const netSalaryFormatted = netSalary.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
// toLocalString é um método que recebe alguns argumentos e converte um número para uma string, arredondamento e convertendo para a moeda do país desejado.
// Ref: https://www.alura.com.br/artigos/formatando-numeros-no-javascript?gclid=Cj0KCQjw-NaJBhDsARIsAAja6dNz-pFD3KwCkTN7Hery4kMMsRtOjm4j4f5BjFE9f8lhxOw86QGX-AgaAswZEALw_wcB
console.log(`Salário: ${netSalaryFormatted}`);
