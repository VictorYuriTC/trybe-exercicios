/* 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for
negativo e "zero" caso contrário. */

const positiveOrNegative = () => {
  const randomNumber = -7;
  if (randomNumber > 0) { return 'positive'};
  return 'negative';
}

console.log(positiveOrNegative());