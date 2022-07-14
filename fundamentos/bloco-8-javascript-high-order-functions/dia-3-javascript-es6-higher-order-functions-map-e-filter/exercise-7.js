const data = require('./data');

/* 🚀 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais. */

// as a dot ( . ) represents an initial, it can be used as a const to sum the amount of initials
// if the last comparison is removed, H. P. Lovecraft is shown along with J. R. R. Tolkien

const getAuthorThatHas3Initials = (randomData) => {
  const initial = '.';
  return randomData.map((book) => book.author.name)
    .map((name) => name
    .split('')).filter((splitName) => 
      splitName[1] === initial 
      && splitName[4] === initial 
      && splitName[7] === initial)
      .join('')
      .replaceAll(',', '');
}

console.log(getAuthorThatHas3Initials(data));
