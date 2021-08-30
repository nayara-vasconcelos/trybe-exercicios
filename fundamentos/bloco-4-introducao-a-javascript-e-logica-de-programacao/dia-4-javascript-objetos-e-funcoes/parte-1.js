//Exercícios - Parte I - Objetos e For/in.

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

/* 
1) Imprimir no console uma mensagem de boas-vindas para a personagem acima, incluindo o seu nome.

Resultado:
Bem-vinda, Margarida!
*/

console.log('Bem-vinda, ' + info.personagem + '!'); // dot notatiom

console.log('Bem-vinda, ' + info['personagem'] + '!'); //Bracket notation

/*
2) Inserir uma nova propriedade com o nome chave 'recorrente' e o valor 'Sim' e, em seguida, imprimir o objeto no console.

Resultado:
{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
*/

info.recorrente = 'Sim';
console.log(info); // dot notation

info['recorrente'] = 'Sim';
console.log(info); // bracket notation

/*
3) Mostrar todas as chaves do objeto.

Resultado: 
personagem
origem
nota
recorrente 
*/

for (let key in info){
    console.log(key);
}

/* 
4) Mostrar todos os valores das chaves do objeto.

Resultado: 
Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
*/

for (let key in info){
    console.log(info[key]);
}

