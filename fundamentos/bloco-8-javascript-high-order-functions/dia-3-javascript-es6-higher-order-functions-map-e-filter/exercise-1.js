const data = require('./data');

/* 🚀 1 - Crie um array com strings no formato
NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA */

const ALL_BOOKS_NAME_GENRE_AUTHOR = (randomData) => {
  return randomData.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)
};

console.log(ALL_BOOKS_NAME_GENRE_AUTHOR(data));
