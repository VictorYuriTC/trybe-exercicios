let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

/* 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
Valor esperado no console:
Copiar
Bem-vinda, Margarida */

const greeting = ({ personagem }) => {
  return `Bem-vinda, ${ personagem }`;
}

console.log(greeting(info));
