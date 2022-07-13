const data = require('./data');

/* 2 - Retorne o nome do livro de menor nome. */

const getBookWithShortestName = (randomData) => {
  return randomData.map((book) => book.name)
    .reduce((bookWithShortestName, bookName) => bookName.length < bookWithShortestName.length
      ? bookWithShortestName = bookName
      : bookWithShortestName)
}

console.log(getBookWithShortestName(data));