/**
 * 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada.
 * Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id.
 * A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.
 */

const createObject = (fullName) => {
  const email = fullName.toLowerCase()
    .replace(/ /g, '_')
    .concat('@trybe.com');

  const newObject = {
    fullName,
    email
  };

  return newObject;
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Employee Full Name')
  }

  return employees;
}

const employeesList = newEmployees(createObject);

// console.log(employeesList);
