const data = require('./data');

/* 4 - Ordene os livros por data de lançamento em ordem decrescente. */

const sortBooksByReleaseYear = (randomData) => {
  return data.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
}

console.log(sortBooksByReleaseYear(data));
