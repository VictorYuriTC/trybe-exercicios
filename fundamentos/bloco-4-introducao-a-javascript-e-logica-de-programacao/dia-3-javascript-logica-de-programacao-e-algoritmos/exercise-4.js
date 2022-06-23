/* 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível
por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50. */


const createArrayFromTwoToTwenty = () => {
  let i = 0;
  const twoTillTwenty = [];
  while (i < 50) {
  i += 1;
  twoTillTwenty.push(i);
  }
  return twoTillTwenty;
}

const findPrimeNumber = () => {

}

console.log(createArrayFromTwoToTwenty());
