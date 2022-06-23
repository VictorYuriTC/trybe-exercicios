/* 3. Faça um programa que retorne o maior de três números.
Defina no começo do programa três constantes com os valores que serão comparados. */

const compareNumber = () => {
  const a = 9;
  const b = 7;
  const c = 8;
  if (a > b && a > c) { return a };
  if (b > a && b > c) { return b };
  if (c > a && c > b) { return c };
}

console.log(compareNumber());
