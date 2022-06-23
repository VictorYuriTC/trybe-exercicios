/* 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string
ending é o final da string word. Considere que a string ending sempre será menor que a string word.
Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be');
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan');
Retorno esperado: false
 */

const endsWithThisSyllable = (word, ending) => {
  return word.endsWith(ending) ? true : false;
}

console.log(endsWithThisSyllable('trybe', 'be'));
console.log(endsWithThisSyllable('joaofernando', 'fernan'));
console.log(endsWithThisSyllable('vida', 'morte'));
console.log(endsWithThisSyllable('convida', 'vida'));