/* 5. 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos
representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. 

Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.

*/

const isTriangle = () => {
  const a = 80;
  const b = 35;
  const c = 65;
  if (a <= 0 || b <= 0 | c <= 0) { return `É impossível um número igual ou menor a 0 ser um ângulo!` }
  return a + b + c === 180 ? true : false;
}

console.log(isTriangle());
