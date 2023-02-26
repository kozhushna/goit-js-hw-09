import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const { delay, amount, step } = e.target.elements;
  let currentDelay = Number(delay.value);
  const currentStep = Number(step.value);
  for (let index = 1; index <= amount.value; index += 1) {
    createPromise(index, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    currentDelay += currentStep;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
