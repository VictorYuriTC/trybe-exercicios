/* 3. Interrompa o comportamento padrão do botão submit utilizando o método preventDefault(). Nossa amiga
Carol Silva nos contou um pouco sobre como fazer isso, lembra? */

const buttonSubmitInfo = document.getElementById('button-submit-info');

const preventSubmitAction = () => {
  buttonSubmitInfo.addEventListener('click', (event) => {
    event.preventDefault();
  });
}

preventSubmitAction();

/* 4. Crie um botão que limpe as informações contidas nos campos; */

const buttonClearInfo = document.getElementById('button-clear-info');
const form = document.getElementById('form');

const clearForms = () => {
  buttonClearInfo.addEventListener('click', () => {
    form.reset();
  });
}

clearForms();

/* Bônus. 1. A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que
somente quem autorizar o uso de imagens possa enviar suas informações. */

const userAgreement = document.getElementById('user-agreement');
buttonSubmitInfo.disabled = true

const authorizeSubmitting = () => {
  userAgreement.addEventListener('click', () => {
    buttonSubmitInfo.disabled = !userAgreement.checked;
  });
}

authorizeSubmitting();

/* 2. Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar
no botão de submit, um alerta deve ser mostrado com a mensagem: 'Dados Inválidos'. Caso contrário, a
mensagem 'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.' deverá aparecer na tela. */

const userFullName = document.getElementById('user-full-name');
const userEmail = document.getElementById('user-email');
const userReason = document.getElementById('user-reason');

const maxCharacters = () => {
  buttonSubmitInfo.addEventListener('click', () => {
    const nameLength = userFullName.value.length;
  const emailLength = userEmail.value.length;
  const reasonLength = userReason.value.length;
  const invalid = 'Dados inválidos';
    if (emailLength < 10 || emailLength > 50) { return alert(invalid) };
    if (nameLength < 10 || nameLength > 40) { return alert(invalid) };
    if (reasonLength > 500) { return alert(invalid) };
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip');
  });
}

maxCharacters();