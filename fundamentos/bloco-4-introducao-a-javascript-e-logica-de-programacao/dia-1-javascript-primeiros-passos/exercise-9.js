/* 9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
Bonus: use somente um if. */

const atLeastOneOdd = (a, b, c) => {
  return a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0 ? true : false;
};

console.log(atLeastOneOdd(4, 6, 8));
console.log(atLeastOneOdd(5, 0, 10));
console.log(atLeastOneOdd(14, 2050486, 0));
console.log(atLeastOneOdd(1234232478934724, 233498934727342, -1));