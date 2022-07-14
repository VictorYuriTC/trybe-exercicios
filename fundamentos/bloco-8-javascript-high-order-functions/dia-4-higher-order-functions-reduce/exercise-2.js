const data = require('./data');

/* 2 - Crie uma string com os nomes de todas as pessoas autoras. */

// part of this solution found at Trybe Course

const getAllAuthorsNames = (randomData) => {
  const allAuthorNames = randomData.reduce((allNames, book, index, array) => {
    if (index === array.length - 1) { return `${allNames} ${book.author.name}.` };
    return `${allNames} ${book.author.name},`;
  }, '');
  return allAuthorNames.trim();
}

console.log(getAllAuthorsNames(data))