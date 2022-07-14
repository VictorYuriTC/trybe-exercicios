const data = require('./data');
const removeSpellingAccentsAndCaseSensitive = require('./removeSpellingAccentsAndCaseSensitive');

/* 🚀 5 - Crie um array em ordem alfabética apenas com os nomes
de todas as pessoas autoras de ficção científica ou fantasia. */

const FANTASY = 'fantasia';
const SCI_FI = 'ficcao cientifica';



const getFantasySciFiGenres = (randomData) => {
  return randomData.filter((book) =>
    removeSpellingAccentsAndCaseSensitive(book.genre) === FANTASY.toLowerCase()
    || removeSpellingAccentsAndCaseSensitive(book.genre) === SCI_FI.toLowerCase());
}

const getAuthorsByFantasySciFi = (randomData) => {
  return getFantasySciFiGenres(randomData).map((book) => book.author.name).sort();
}

console.log(getAuthorsByFantasySciFi(data));
