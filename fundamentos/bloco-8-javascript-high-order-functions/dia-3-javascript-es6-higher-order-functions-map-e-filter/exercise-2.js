const data = require('./data');

/* 🚀 2 - Construa um array de objetos a partir do array de livros.
Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro,
e uma propriedade age com a idade dessa pessoa quando o livro foi lançado.
O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a
mais velha considerando suas idades quando o livro foi lançado. */

const ALL_AUTHORS_NAME_BIRTH_YEAR = data.map((book) => ({
  authorName: book.author.name,
  authorBirthYear: book.author.birthYear,
}));

const getAllAuthorsNameBirthYear = (randomData) => {
  const ALL_AUTHORS_NAME_BIRTH_YEAR = randomData.map((book) => ({
    authorName: book.author.name,
    authorBirthYear: book.author.birthYear,
  }));
  return ALL_AUTHORS_NAME_BIRTH_YEAR;
}

const getAllAuthorsNameBirthYearSorted = (randomData) => {
  const ALL_AUTHORS_NAME_BIRTH_YEAR_SORTED = getAllAuthorsNameBirthYear(randomData)
    .sort((a, b) => b.authorBirthYear - a.authorBirthYear);
  return ALL_AUTHORS_NAME_BIRTH_YEAR_SORTED;
}

console.log(getAllAuthorsNameBirthYearSorted(data));