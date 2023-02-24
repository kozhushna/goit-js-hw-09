const refs = {
  startButton: document.querySelector('[data-start]'),
  stopButton: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

const CHANGE_COLOR_INTERVAL = 1000;

let intervalId = null;

refs.stopButton.disabled = true;

refs.startButton.addEventListener('click', onStartButtonClick);
refs.stopButton.addEventListener('click', onStopButtonClick);

function onStartButtonClick(e) {
  refs.startButton.disabled = true;
  refs.stopButton.disabled = false;
  intervalId = setInterval(changeBodyColor, CHANGE_COLOR_INTERVAL);
}

function onStopButtonClick(e) {
  refs.stopButton.disabled = true;
  refs.startButton.disabled = false;
  clearInterval(intervalId);
}

function changeBodyColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
