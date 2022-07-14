const data = require('./data');

/* 🚀 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação. */

const getCurrentYear = () => {
  return new Date().getFullYear();
}

const getBooksNameOlderThan60 = (randomData) => {
  return randomData.filter((book) => book.releaseYear < getCurrentYear() - 60).map((book) => book.name);
}

console.log(getBooksNameOlderThan60(data));
