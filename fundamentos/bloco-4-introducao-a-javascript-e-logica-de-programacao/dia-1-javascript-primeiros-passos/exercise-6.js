/*

6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas,
sem aumentar a quantidade de condicionais.

*/

const chessPieceMoves = (chessPiece) => {
  const selectedPiece = chessPiece.toLowerCase();
  if (selectedPiece === 'bishop') { return `That piece only moves towards diagonals.` };
  if (selectedPiece === 'king') { return `That piece moves to all directions, expect in L.`};
  if (selectedPiece === 'knight') { return `That piece only moves in L.`};
  if (selectedPiece === 'pawn') { return `This piece only moves forward and diagonally, depending on the context.`};
  if (selectedPiece === 'queen') { return `This piece moves to all directions, expect in L.`}
  if (selectedPiece === 'rook') { return `This piece only moves forward and sideward.`}
}

console.log(chessPieceMoves('king'));
console.log(chessPieceMoves('knight'));
console.log(chessPieceMoves('rook'));
