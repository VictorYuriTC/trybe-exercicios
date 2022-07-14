/* 🚀 6.**- Agora vamos criar um novo array de objetos a partir das informações abaixo,
onde cada objeto terá o formato { name: nome do aluno, average: media das notas }.
Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos,
aqui além de reduce será necessário utilizar também a função map.
Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected. */

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const getStudentsNamesAndAverageGrade = (studentsArray, gradesArray) => {
  return studentsArray.map((student, index) => ({
    name: student,
    average: (gradesArray[index]).reduce((gradesAverage, grade) => gradesAverage + grade) / gradesArray[index].length,
  }))
}

console.log(getStudentsNamesAndAverageGrade(students, grades))