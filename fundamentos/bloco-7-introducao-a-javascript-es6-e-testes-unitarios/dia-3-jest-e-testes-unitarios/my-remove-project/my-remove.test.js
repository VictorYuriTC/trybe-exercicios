/* 🚀 2 - A função myRemove(arr, item) recebe um array arr e
retorna uma cópia desse array sem o elemento item caso ele exista no array

1. Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
2. Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
3. Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado */

const myRemove = require('./my-remove');

describe('tests myRemove function', () => {
  it('should return the expected array when called with an array and a number as arguments', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
