const data = require('./data');

/* 🚀 4- Encontre o livro com o maior nome. */

const getBookWithLongestName = (randomData) => {
  return randomData.reduce((bookWithLongestName, book) => book.name.length > bookWithLongestName.name.length 
    ? bookWithLongestName = book 
    : bookWithLongestName);
}

console.log(getBookWithLongestName(data));
