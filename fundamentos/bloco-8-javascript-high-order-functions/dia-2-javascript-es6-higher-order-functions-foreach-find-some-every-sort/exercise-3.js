const data = require('./data');

/* 3 - Encontre o primeiro livro cujo nome possui 26 caracteres. */

const getFirstBookWith26Characters = (randomData) => {
  return randomData.map((book) => book.name)
    .find((name) => name.length === 26);
}

console.log(getFirstBookWith26Characters(data));