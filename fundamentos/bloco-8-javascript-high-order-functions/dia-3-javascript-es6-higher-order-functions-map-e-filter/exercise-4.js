const data = require('./data');

/* 🚀 4 - Crie um array ordenado pelos livros com mais de 60 anos
de publicação e ordene-o pelo livro mais velho. */

const getBooksReleaseBefor1962Sorted = (randomData) => {
  return randomData.filter((book) => book.releaseYear < 1962).sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear)
}

console.log(getBooksReleaseBefor1962Sorted(data));
