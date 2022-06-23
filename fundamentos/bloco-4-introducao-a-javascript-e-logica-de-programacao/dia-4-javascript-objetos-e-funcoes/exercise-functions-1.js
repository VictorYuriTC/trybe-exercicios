/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
Exemplo de palíndromo: arara.
verificaPalindrome('arara');
Retorno esperado: true
verificaPalindrome('desenvolvimento');
Retorno esperado: false */

const isPalindrome = (word) => {
  const wordLowerCase = word.toLowerCase();
  const splittedReversedWord = wordLowerCase.split('').reverse();
  const turnIntoString = splittedReversedWord.join('');
  return turnIntoString === wordLowerCase? true : false;
}

console.log(isPalindrome('arara'));
console.log(isPalindrome('cachorro'));
console.log(isPalindrome('radAR'));
console.log(isPalindrome('Victor'));
console.log(isPalindrome('ovo'));