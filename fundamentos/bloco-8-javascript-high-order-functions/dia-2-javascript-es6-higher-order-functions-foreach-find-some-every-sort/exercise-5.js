const data = require('./data');

/* 🚀 5 - Faça uma função que retorne true, se todas as pessoas autoras
nasceram no século XX, ou false, caso contrário. */

const didAllAuthorBornBefore1900 = (randomData) => randomData.every((book) => book.author.birthYear < 1900);

console.log(didAllAuthorBornBefore1900(data));