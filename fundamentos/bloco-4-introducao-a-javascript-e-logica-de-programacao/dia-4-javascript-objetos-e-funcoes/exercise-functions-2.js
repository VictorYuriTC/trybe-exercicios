/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4. */

const findTheHighestNumber = (arrayWithNumbers) => {
  let highestNumber = arrayWithNumbers[0];
  for (number in arrayWithNumbers) {
    if (number > highestNumber) { highestNumber = number };
  }
  return highestNumber;
}

const randomNumbers = [10, 10000, 6, 4, -160, 27, 240, 4, -25, 4, 4, 4, 4];

console.log(findTheHighestNumber(randomNumbers))