const data = require('./data');

/* 🚀 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário. */

const anyBookWasReleaseInEighties = (randomData) => {
  return data.some((book) => book.releaseYear > 1979 && book.releaseYear < 1990)
}

console.log(anyBookWasReleaseInEighties(data));
