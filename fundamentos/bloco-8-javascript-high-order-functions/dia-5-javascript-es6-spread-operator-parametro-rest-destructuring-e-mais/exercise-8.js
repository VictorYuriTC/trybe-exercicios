/* 8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento: */

const greet = (personName, selectedGreeting) => {
  if (!selectedGreeting) { selectedGreeting = 'Hi'};
  return `${selectedGreeting} ${personName}`
};

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'