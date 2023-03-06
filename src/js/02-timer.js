import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const timerDiv = document.querySelector('.timer');
const text = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const seconds = document.querySelector('span[data-seconds]');
const minutes = document.querySelector('span[data-minutes]');
const hours = document.querySelector('span[data-hours]');
const days = document.querySelector('span[data-days]');

btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const defaultMs = options.defaultDate.getTime();
    const newDateMs = selectedDates[0].getTime();
    if (newDateMs < defaultMs) {
      alert('Please choose a date in the future');
      btnStart.disabled = true;
    } else {
      btnStart.disabled = false;
    }
  },
};

flatpickr(text, options);

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

function addZero(value) {
  return value.toString().padStart(2, '0');
}

btnStart.addEventListener('click', () => {
  let timer = setInterval(() => {
    let countdown = new Date(text.value) - new Date();
    btnStart.disabled = true;
    if (countdown >= 0) {
      let timeObject = convertMs(countdown);
      days.textContent = addZero(timeObject.days);
      hours.textContent = addZero(timeObject.hours);
      minutes.textContent = addZero(timeObject.minutes);
      seconds.textContent = addZero(timeObject.seconds);
      if (countdown <= 10000) {
        timerDiv.style.color = 'tomato';
      }
    } else {
      timerDiv.style.color = 'black';
      clearInterval(timer);
    }
  }, 1000);
});
