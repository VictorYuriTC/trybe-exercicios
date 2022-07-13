const data = require('./data');

/* 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947. */

const getFirstAuthorBornIn1947 = (randomData) => {
  return randomData.find((book) => book.author.birthYear === 1947).author.name;
}

console.log(getFirstAuthorBornIn1947(data));