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

/* 
5) Definir um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Imprimir os valores de cada objeto juntos de acordo com cada uma das chaves.

Resultado:
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes
*/

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178', // Caractere de escape: \'
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  }
  
  for (let key in info) {
      if (key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim') {
          console.log('Ambos recorrentes');
      } else {
          console.log(info[key] + ' e ' + info2[key]);
      }
  }
