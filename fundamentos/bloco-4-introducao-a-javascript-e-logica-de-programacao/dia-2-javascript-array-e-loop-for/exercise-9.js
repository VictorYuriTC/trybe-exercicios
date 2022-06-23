/* 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2. */

const zeroUntilTwentyFive = [];

for(let i = 0; i <= 25; i += 1) {
  zeroUntilTwentyFive.push(i);
};

for(let i = 0; i < zeroUntilTwentyFive.length; i += 1) {
  console.log(zeroUntilTwentyFive[i] / 2);
};
