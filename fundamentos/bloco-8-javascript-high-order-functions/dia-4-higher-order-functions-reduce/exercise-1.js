/* 1 - Dada uma matriz, transforme em um array. */

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (randomArray) => {
  return randomArray.reduce((acc, array) => [...acc, ...array])
}

console.log(flatten(arrays));
