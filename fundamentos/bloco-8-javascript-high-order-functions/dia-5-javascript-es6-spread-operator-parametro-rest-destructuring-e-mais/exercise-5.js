/* 5 - Escreva a função swap, que dado um array de 3 elementos,
retorna um novo array com o primeiro e terceiro elementos trocados.
Detalhe: você precisa fazer essa função gastando 1 linha só: */

const myList = [1, 2, 3];

const swap = ([A, B, C]) => {
  return [C, B, A];
}

const swapAlternative = (arrayWithThreeElements) => {
  return arrayWithThreeElements.reverse();
}

console.log(swap(myList));
console.log(swapAlternative(myList));
