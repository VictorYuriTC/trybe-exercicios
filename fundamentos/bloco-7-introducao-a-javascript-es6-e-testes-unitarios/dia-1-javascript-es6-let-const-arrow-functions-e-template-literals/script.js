// About Parte II - Exercise 3:
// constants buttonClick and clickCounter and function countClicks should 
// not initially be called because they break JS without an opened browser

/*

Parte I
Agora você vai fazer alguns exercícios de fixação.

🚀 Se liga nesse foguete!
Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto!
Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

1. 🚀 Altere as variáveis para respeitarem o escopo em que foram declaradas.

Modifique a estrutura da função para que ela seja uma arrow function;

Modifique as variáveis para que respeitem o escopo onde estão declaradas;

Modifique as concatenações para template literals.

Copie o código abaixo:
Copiar
      function testingScope(escopo) {
        if (escopo === true) {
          var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
          console.log(ifScope);
        } else {
          var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
          console.log(elseScope);
        }
        console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
      }

      testingScope(true);

*/

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

/*
2. 🚀 Crie uma função que retorne um array em ordem crescente.
Copie o código abaixo:
Copiar
    const oddsAndEvens = [13, 3, 4, 10, 7, 2];

    // Seu código aqui.

    console.log(oddsAndEvens); // será necessário alterar essa linha 😉

Crie uma função que faça com que o array oddsAndEvens fique na ordem crescente;

Utilize o console.log e template literals para retornar a frase: 'Os números 2,3,4,7,10,13 se
encontram ordenados de forma crescente!'.

Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>);
retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler:
É possível realizar uma função que ordene qualquer array de números.
 */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ascendingOrderWithSort = (arrayWithNumbers) => {
  const sortedArray = arrayWithNumbers.sort((a, b) => a - b);
  console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); // inner function
  return sortedArray;
}

console.log(ascendingOrderWithSort(oddsAndEvens)); // ascending order with sort
console.log(`Os números ${ascendingOrderWithSort(oddsAndEvens)} se encontram ordenados de forma crescente!`); // out of function


/* Parte II
Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.
1. Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.
*/

const returnFactorial = (n) => {
  let result = 0;
  for (let i = n - 1; i > 0; i -= 1) {
    result += (n * i);
  }
  return result;
}

console.log(returnFactorial(4));

/*
2. Crie uma função que receba uma frase e retorne a maior palavra.
Exemplo:
Copiar
      longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'
*/

const longestWord = (randomSentence) => {
  const splittedWords = randomSentence.split(' ');
  return splittedWords.reduce((acc, word) => word.length > acc.length ? acc = word : acc);
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')); // retorna 'aconteceu'

/*
3. 🚀 Crie uma página com um contador de cliques
Sua página deve conter:
Um botão ao qual será associado um event listener;
Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
*/

const buttonClick = document.getElementById('button-click');
const clickCounter = document.getElementById('click-counter');
let points = 0;
clickCounter.innerText = points;

const countClicks = () => {
  buttonClick.addEventListener('click', () => {
    points += 1;
    clickCounter.innerText = points;
  })
}

countClicks();

/*
4. 🚀 Crie duas funções JavaScript com as seguintes especificações:
Não se esqueça de usar template literals
Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
A função deverá receber um nome por parâmetro;
Declare dentro da função uma variável com o nome frase, do tipo const e com o valor igual a 'Tryber x aqui!';
A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
Exemplo:
Parâmetro: 'Bebeto'
Retorno: 'Tryber Bebeto aqui!'

*/

const returnStudentName = (studentName) => {
  const phrase = 'Tryber x aqui!';
  const changedPhrase = phrase.replace('x', studentName);
  return changedPhrase;
}

console.log(returnStudentName('Bebeto'));

/*
Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
A função deverá receber o retorno da Função 1 por parâmetro;
Declare dentro da função uma variável com o nome skills, do tipo const;
A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
Concatene o valor retornado da Função 1, a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
Exemplo de retorno:
Tryber Bebeto aqui!
Minhas três principais habilidades são:
JavaScript
HTML
CSS
 */

const returnStudentNameAndSkills = (studentIntroducingHimself) => {
  const skills = ['HTML', 'CSS', 'JS'];
  return `
  ${studentIntroducingHimself}
  Minhas principais habilidades são:
  ${skills[0]}
  ${skills[1]}
  ${skills[2]}
  `;
}

console.log(returnStudentNameAndSkills(returnStudentName('Bebeto')));
