const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/*

1. Crie uma função para adicionar o turno da noite na lesson2.
Essa função deve possuir três parâmetros, sendo eles: o objeto
a ser modificado, a chave que deverá ser adicionada e o valor dela.

*/

const changeOrAddKeyAndValue = (lessonObject, newKeyToTheLesson, newValueToTheLesson) => {
  lessonObject[newKeyToTheLesson] = newValueToTheLesson;
  return lessonObject;
}

console.log(changeOrAddKeyAndValue(lesson2, 'turno', 'noite'));

/*

2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

*/

const VICTOR = {
  name: 'Victor',
  champ: 'Nunu'
}

const showObjectKeys = (randomObject) => {
  return Object.keys(randomObject);
}

console.log(showObjectKeys(VICTOR));

/*

3. Crie uma função para mostrar o tamanho de um objeto.

*/

const PAULO = {
  name: 'Paulo',
  champ: 'Riven',
  lane: 'mid'
}

const showObjectLength = (randomObject) => {
  return Object.keys(randomObject).length;
}

console.log(showObjectLength(PAULO));

/*

4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

*/

const RICARDO = {
  name: 'Ricardo',
  champ: 'Garen'
}

const showObjectValues = (randomObject) => {
  return Object.values(randomObject);
}

console.log(showObjectValues(RICARDO));

/*

5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign.
Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.


Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte: */


const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

/*

6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

*/

const getNumberOfStudents = (allLessons) => {
  let allStudents = 0;
  const allLessonsIds = Object.keys(allLessons);

  for (index in allLessonsIds) {
    allStudents += allLessons[allLessonsIds[index]].numeroEstudantes;
  }

  return `There are ${allStudents} in our school.`;
};

console.log(getNumberOfStudents(allLessons));

/*

7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

*/

const getLessonValueByLessonKey = (randomLesson, lessonKeyIndex) => {
  return Object.entries(randomLesson)[lessonKeyIndex][1];
}

console.log(getLessonValueByLessonKey(lesson1, 0));

/*

8. Crie uma função que verifique se o par (chave / valor) existe na função.
Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

*/

const doKeyAndValueMatchWithLesson = (lesson, key, value) => {

  const lessonEntries = Object.entries(lesson);
  let isEqual = false;
  for (let index in lessonEntries) {
    if (lessonEntries[index][0] === key && lessonEntries[index][1] === value) { isEqual = true };
  }

  return isEqual;

  return Object.keys(lesson).includes(key)
  && Object.values(lesson).includes(value)
  ? true
  : false; // fail
}

console.log(doKeyAndValueMatchWithLesson(lesson3, 'turno', 'noite'));
console.log(doKeyAndValueMatchWithLesson(lesson3, 'materia', 'Maria Clara'));
