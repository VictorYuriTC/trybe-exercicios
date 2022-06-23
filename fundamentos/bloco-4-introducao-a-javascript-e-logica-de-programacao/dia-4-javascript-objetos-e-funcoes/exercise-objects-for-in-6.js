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

/* 🚀 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos,
e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'". */

const { nome, sobrenome, idade, livrosFavoritos } = leitor;
const autor = livrosFavoritos.map((info) => info.autor);
const editora = livrosFavoritos.map(info => info.editora);
const titulo = livrosFavoritos.map(info => info.titulo);

console.log(`O livro favorito de ${ nome } ${ sobrenome } se chama ${ titulo }`);
