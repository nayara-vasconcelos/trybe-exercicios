/**
 * Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo.
 * Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
 */

// Parte I:

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

/**
 * 1 - Crie uma função que retorna o dano do dragão.
 * O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
 */

const dragonAttack = () => {
  const { strength: maxDamage } = dragon;
  const minDamage = 15;
  const dragonDamage = Math.floor((Math.random() * (maxDamage - minDamage + 1))) + minDamage;

  return dragonDamage;
}

/**
 * 2 - Crie uma função que retorna o dano causado pelo warrior.
 * O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
 */

 const warriorAttack = () => {
  const { strength: minDamage, weaponDmg } = warrior;
  const maxDamage = weaponDmg * minDamage;
  const warriorDamage = Math.floor((Math.random() * (maxDamage - minDamage + 1))) + minDamage;

  return warriorDamage;
}

/**
 * 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
 * O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
 * A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
 */

 const mageAttack = () => {
  const { intelligence: minDamage, mana } = mage;
  const maxDamage = minDamage * 2;

  const turnStatus = {
    manaSpent: 0,
    mageDamage: `Não possui mana suficiente`
  };

  if (mana > 15) {
    const mageDamage = Math.floor((Math.random() * (maxDamage - minDamage + 1))) + minDamage;
    turnStatus.manaSpent = 15;
    turnStatus.mageDamage = mageDamage;
  }

  return turnStatus;
}


// Parte 2:

const gameActions = {
  /**
   * 1 - Crie a primeira HOF que compõe o objeto gameActions.
  * Ela será a função que simula o turno do personagem warrior.
  * Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon.
  * Além disso, ela também deve atualizar o valor da chave damage do warrior.
  */

  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack();
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },

  /**
   * 2 - Crie a segunda HOF que compõe o objeto gameActions.
   * Ela será a função que simula o turno do personagem mage.
   * Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon.
   * Além disto ela também deve atualizar o valor das chaves damage e mana do mage.
   */

  mageTurn: (mageAttack) => {
    const { mageDamage, manaSpent } = mageAttack();
    mage.mana -= manaSpent;
    if (typeof mageDamage === 'number') {
      mage.damage = mageDamage;
      dragon.healthPoints -= mageDamage;
    } else {
      console.log(mageDamage);
    }
  },

  /**
   * 3 - Crie a terceira HOF que compõe o objeto gameActions.
   * Ela será a função que simula o turno do monstro dragon.
   * Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior.
   * Além disto ela também deve atualizar o valor da chave damage do monstro.
   */

  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack();
    dragon.damage = dragonDamage;
    warrior.healthPoints -= dragonDamage;
    mage.healthPoints -= dragonDamage;
  },

  /**
   * 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.
   */

  turnResults: () => battleMembers
};
