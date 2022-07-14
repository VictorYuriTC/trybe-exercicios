const data = require('./data');

/* 🚀 3- Calcule a média de idade que as pessoas autoras
tinham quando seus respectivos livros foram lançados. */

const getAuthorsAgeWhenBookReleased = (randomData) => {
  return randomData.map((book) => book.releaseYear - book.author.birthYear)
}

const getAuthorsAverageAgeWhenBookReleased = (randomData) => {
  return (getAuthorsAgeWhenBookReleased(randomData)
  .reduce((averageAge, age) => averageAge + age)) / randomData.length;
}

console.log(getAuthorsAverageAgeWhenBookReleased(data))