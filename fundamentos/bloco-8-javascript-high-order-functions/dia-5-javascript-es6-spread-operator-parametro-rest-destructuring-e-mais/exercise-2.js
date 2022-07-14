/* 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. */

const sum = (...numbers) => {
  return numbers.reduce((sum, number) => sum + number);
}

console.log(sum(1, 4, 6))