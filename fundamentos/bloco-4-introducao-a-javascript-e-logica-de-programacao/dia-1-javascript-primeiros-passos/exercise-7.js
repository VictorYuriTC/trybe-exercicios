/*

7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. 

*/

const setGrade = (gradeInPercentage) => {
  if (gradeInPercentage >= 90) { return `Congratulations! You got A at this exam!`};
  if (gradeInPercentage >= 80) { return `You got B at this exam. Good job, but you still can improve it!`};
  if (gradeInPercentage >= 70) { return `Well, you got C at this exam. Not bad, but study a bit more, son.`};
  if (gradeInPercentage >= 60) { return `Hey, you got D. Keep your eyes out, you can do a lot better!`}
  if (gradeInPercentage >= 50) { return `Errr... I'm afraid to say you got E. What happened, buddy?`};
  if (gradeInPercentage < 50) { return `Sheesh! You got F? Your dad won't like it...`}
}

console.log(setGrade(70));
console.log(setGrade(92));
console.log(setGrade(0));
console.log(setGrade(61));
