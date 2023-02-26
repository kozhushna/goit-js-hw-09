import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startButton: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.startButton.disabled = true;

let choosedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = Date.now();
    if (selectedDate < currentDate) {
      alert('Please choose a date in the future');
    } else {
      refs.startButton.disabled = false;
      choosedDate = selectedDate;
    }
  },
};

flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

refs.startButton.addEventListener('click', e => {
  refs.startButton.disabled = true;
  let intervalId = setInterval(() => {
    const delta = choosedDate - Date.now();
    if (delta < 0) {
      clearInterval(intervalId);
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(delta);

    refs.days.textContent = addLeadingZero(days);
    refs.hours.textContent = addLeadingZero(hours);
    refs.minutes.textContent = addLeadingZero(minutes);
    refs.seconds.textContent = addLeadingZero(seconds);
  }, 1000);
});
