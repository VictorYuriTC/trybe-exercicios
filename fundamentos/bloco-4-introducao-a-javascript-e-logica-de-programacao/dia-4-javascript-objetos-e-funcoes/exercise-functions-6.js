/* 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o
somatório de todos os números de 1 até N.
Valor de teste: N = 5.
Valor esperado no retorno da função: 1+2+3+4+5 = 15. */

const sumAllIntegersBefore = (n) => {
  if (n < 0) { return 'Selecione um númnero inteiro não negativo!' }
  let i = 0;
  let result = n;
  while (i < n) {
    result += i;
    i += 1;
  }
  return result;
}

console.log(sumAllIntegersBefore(4));
console.log(sumAllIntegersBefore(1));
console.log(sumAllIntegersBefore(9));
