/* 🚀 3 - A função myFizzBuzz(num) recebe um número num e retorna
"fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se
for divisível apenas por 3, retorna "buzz" se divisível apenas por 5,
retorna o próprio número caso não seja divisível por 3 ou 5 e retorna
false caso num não seja um número.

1. Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
2. Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
3. Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
4. Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
5. Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado */

const myFizzBuzz = require('./my-fizz-buzz.js');

describe('test myFizzBuzz function', () => {
  it('should return fizzBuzz when a given number is divisible by 3 and 5', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });
  it('should return fizz when a given number is divisible by 3 and not divisible by 5', () => {
    expect(myFizzBuzz(9)).toEqual('fizz');
  });
  it('should return buzz when a given number is not divisible by 3 and divisible by 5', () => {
    expect(myFizzBuzz(10)).toEqual('buzz');
  });
  it('should return the number given as argument when it is neither divisible by 3 nor 5', () => {
    expect(myFizzBuzz(8)).toEqual(8);
  })
  it('should return false when called an argument that is not a number', () => {
    expect(myFizzBuzz('Teemo')).toBeFalsy();
//  expect(myFizzBuzz('Teemo')).toBe(false);
//  expect(myFizzBuzz('Teemo')).toEqual(false)
  });
});
