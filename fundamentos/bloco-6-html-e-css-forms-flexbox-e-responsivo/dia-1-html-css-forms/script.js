const buttonClearInfo = document.getElementById('button-clear-info');
const buttonSubmitInfo = document.getElementById('button-submit-info');
const form = document.getElementById('form');

const clearForms = () => {
  buttonClearInfo.addEventListener('click', () => {
    form.reset();
  })
}

clearForms();

const preventSubmitAction = () => {
  buttonSubmitInfo.addEventListener('click', (event) => {
    event.preventDefault();
  });
}

preventSubmitAction();