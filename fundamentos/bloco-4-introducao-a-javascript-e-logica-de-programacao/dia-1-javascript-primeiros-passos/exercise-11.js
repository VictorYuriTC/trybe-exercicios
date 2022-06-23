/*

11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que,
dado um salário bruto, calcule o líquido a ser recebido.

A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

*/

const salaryAfterTaxes = (salary) => {
  let inssTax = 0;
  let incomeTax = 0;
  if (salary <= 1556.94) { inssTax = salary * (8 / 100) };
  if (salary > 1556.94 && salary <= 2594.92) { inssTax = salary * (9 / 100) };
  if (salary > 2594.92 && salary <= 5189.82) { inssTax = salary * (11 / 100) };
  if (salary > 5189.82) { inssTax = 570.88 };
  if (salary <= 1903.98) { incomeTax };
  if (salary > 1903.98 && salary <= 2826.65) { incomeTax = salary * (7.5 / 100) + 142.80 };
  if (salary > 2826.65 && salary <= 3751.05) { incomeTax = salary * (15 / 100) + 354.80 };
  if (salary > 3751.05 && salary <= 4664.68) { incomeTax = salary * (22.5 / 100) + 636.13 };
  if (salary > 4664.68) {incomeTax = salary * (27.5 / 100) + 869.36 };
  return salary - (inssTax + incomeTax);
}

console.log(salaryAfterTaxes(1200));
