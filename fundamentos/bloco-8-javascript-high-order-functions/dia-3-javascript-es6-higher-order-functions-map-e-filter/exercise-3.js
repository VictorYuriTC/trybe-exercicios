const data = require('./data');
const removeSpellingAccentsAndCaseSensitive = require('./removeSpellingAccentsAndCaseSensitive');

/* 🚀 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia. */

// part of removeSpellingAccentsAndCaseSensitive function found at
// https://javascriptf1.com/snippet/remove-accents-from-a-string-in-javascript

const getBooksByGenre = (randomData, ...selecteGenres) => {
  const selecteGenresLowerCase = selecteGenres.map((genre) => genre.toLowerCase());
  return randomData.filter((book) => removeSpellingAccentsAndCaseSensitive(book.genre).includes(...selecteGenresLowerCase));
}

console.log(getBooksByGenre(data, 'ficcao cientifica', 'fantasia'));

// tried to create a function that could return books by genre where
// a random data and random genres could be used as arguments,
// however, only the genre turned to be shown