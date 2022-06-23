/*

1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes,
a e b, definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
*Dica: Neste link você encontra mais detalhes sobre operadores matemáticos 😉

*/

const math = () => {
  const a = 6;
  const b = 2;
  return (
    `Math operations:
    summing: ${a + b}
    subtracting: ${a - b}
    multiplying: ${a * b}
    dividing: ${a / b}
    module: ${a % b}`
    )
  
}

console.log(math());