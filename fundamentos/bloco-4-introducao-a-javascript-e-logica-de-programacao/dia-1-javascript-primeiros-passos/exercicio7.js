/**
 * Programa 7: Converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
 * Regras:
 * Porcentagem >= 90 -> A
 * Porcentagem >= 80 -> B
 * Porcentagem >= 70 -> C
 * Porcentagem >= 60 -> D
 * Porcentagem >= 50 -> E
 * Porcentagem < 50 -> F
 * O programa retorna uma mensagem de erro e encerra se a nota passada for menor que 0 ou maior que 100.
 */

let grade = 0;
if (grade < 0 || grade > 100) {
    console.log('Nota inválida! Digite a nota em porcentagem.');
} else if (grade < 50) {
    console.log('Você tirou um F.');
} else if (grade < 60) {
    console.log('Você tirou um E.');
} else if (grade < 70) {
    console.log('Você tirou um D.');
} else if (grade < 80) {
    console.log('Você tirou um C.');
} else if (grade < 90) {
    console.log('Você tirou um B.');
} else {
    console.log('Você tirou um A. Parabéns!')
}
