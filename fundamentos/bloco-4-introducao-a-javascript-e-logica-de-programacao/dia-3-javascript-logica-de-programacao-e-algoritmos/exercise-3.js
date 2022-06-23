/* 3- Considere o array de strings abaixo:
Copiar
let array = ['java', 'javascript', 'python', 'html', 'css'];
Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o
número de caracteres de cada palavra. */

let array = ['java', 'javascript', 'python', 'html', 'css']

const findLongestWord = () => {
  let longestWord = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > longestWord.length) { longestWord = array[i] };
  }
  return longestWord;
}

const findShortestWord = () => {
  let shortestWord = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length < shortestWord.length) { shortestWord = array[i] };
  }
  return shortestWord;
}

console.log(findLongestWord());
console.log(findShortestWord());
