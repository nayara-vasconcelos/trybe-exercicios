//Exercícios - Parte I - Objetos e For/in

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// 1) Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo o seu nome.

console.log('Bem-vinda, ' + info.personagem + '!'); // dot notatiom

console.log('Bem-vinda, ' + info['personagem'] + '!'); //Bracket notation

// 2) Insira uma nova propriedade com o nome chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

info.recorrente = 'Sim';
console.log(info); // dot notation

info['recorrente'] = 'Sim';
console.log(info); // bracket notation

// 3) Faça um for/in que mostre todas as chaves do objeto.

for (let key in info){
    console.log(key);
}