/* 1 - Crie uma função que retorne um objeto no formato
{ nomeCompleto, email } representando uma nova pessoa
contratada. Passe sua função como parâmetro da HOF newEmployees
para criar cada pessoa contratada em seu respectivo id.
A sua função deve receber como parâmetro o nome completo
da pessoa funcionária e a partir dele gerar automaticamente
um email no formato nome_da_pessoa@trybe.com.

*/

const EMPLOYEES = {
  id1: 'Pedro Guerra', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
  id2: 'Luiza Drumond', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
  id3: 'Carla Paiva', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
}

const getFullNameFromNewEmployees = (newEmployees) => {
  return allEmployeesFullNames = Object.values(newEmployees);
};

const getEmailFromNewEmployees = (newEmployees) => {
  const FULL_NAMES_IN_LOWER_CASE = getFullNameFromNewEmployees(newEmployees).map((name) => `${name.toLowerCase()}`);
  return FULL_NAMES_IN_LOWER_CASE.map((name) => `${name.replaceAll(' ', '_')}@trybe.com`);
}

const returnEmployeeFullNameObject = (newEmployees) => {
  const FULL_NAMES = getFullNameFromNewEmployees(newEmployees);
  const EMAILS = getEmailFromNewEmployees(newEmployees);
  const FULL_NAMES_OBJECT = FULL_NAMES.reduce((allObjectKeys, name) => {
    return { ...allObjectKeys, [name]: ''}
  }, {});
  return FULL_NAMES_OBJECT;
};

console.log(getFullNameFromNewEmployees(EMPLOYEES));
console.log(getEmailFromNewEmployees(EMPLOYEES));
console.log(returnEmployeeFullNameObject(EMPLOYEES));
