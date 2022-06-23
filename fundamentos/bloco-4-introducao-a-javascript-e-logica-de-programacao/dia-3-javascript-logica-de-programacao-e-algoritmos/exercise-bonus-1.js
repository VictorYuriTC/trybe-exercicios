/* 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer,
seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
Copiar
n = 5

*****
*****
*****
*****
***** */



const createSquare = (n) => {
  for (let x = 0; x < n; x += 1) {
    square = '';
    for (let y = 0; y < n; y += 1) {
      square += '*';
    }
    console.log(square);
  }
}

createSquare(6);
