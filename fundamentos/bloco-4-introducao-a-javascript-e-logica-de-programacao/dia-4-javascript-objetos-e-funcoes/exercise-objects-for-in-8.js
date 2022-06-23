let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
}; 

/* 🚀 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato:
"Julia tem 2 livros favoritos".
 */

const { nome, livrosFavoritos } = leitor;

const harryPotterBook = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}

leitor.livrosFavoritos.push(harryPotterBook);

console.log(`${ nome } tem ${ livrosFavoritos.length } livros favoritos`);
