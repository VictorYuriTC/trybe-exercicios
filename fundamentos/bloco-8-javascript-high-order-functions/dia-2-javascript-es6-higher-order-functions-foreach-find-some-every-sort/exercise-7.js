const books = require('./data');
const data = require('./data');

/* 7 - Faça uma função que retorne true, caso nenhum author
tenha nascido no mesmo ano, e false, caso contrário. */

const noAuthorWasBornInTheSameYear = (randomData) => {
  return randomData.every((book) => !books
  .some((bookSome) => bookSome.author.birthYear === book.author.birthYear
  && bookSome.author.name !== book.author.name));
}

console.log(noAuthorWasBornInTheSameYear(data))

// could not solve this without seeing this solution on Trybe Course