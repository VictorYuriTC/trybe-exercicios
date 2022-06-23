let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'sim',
};

/* 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro
e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178',
'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com
cada uma das chaves. Valor esperado no console:
Copiar
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
*/

let anotherInfo = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain',
  nota: 'O último MacPatinhas',
  recorrente: 'sim',
}

console.log(`
${info.personagem} e ${anotherInfo.personagem}
${info.origem} e ${anotherInfo.origem}
${info.nota} e ${anotherInfo.nota}
Ambos recorrentes`);
