/* 8. 🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par.
Caso contrário, ele retorna false.

Bonus: use somente um if. */

const atLeastOneEvenNumber = () => {
  const a = 7;
  const b = 11;
  const c = 2;
  if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) { return true };
  return false;
};

console.log(atLeastOneEvenNumber());
