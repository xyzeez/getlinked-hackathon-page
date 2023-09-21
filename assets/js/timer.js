// Timer Elements on DOM
const hourElement = document.querySelector('#timerHour');
const minuteElement = document.querySelector('#timerMinute');
const secondElement = document.querySelector('#timerSecond');

// Initializing variables
const lunchDate = new Date('Nov 18, 2023 00:00:00').getTime();
let currentTime;
let launchWaitTime;
let hours, minutes, seconds;

// Runs Timer
const startTimer = () => {
  currentTime = new Date().getTime();
  launchWaitTime = lunchDate - currentTime;

  calculateTime();

  displayTime();

  if (launchWaitTime <= 0) {
    stopTimer();
  }
};

// Get values for hours, minutes and seconds
const calculateTime = () => {
  hours = Math.trunc(
    (launchWaitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes = Math.trunc((launchWaitTime % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.trunc((launchWaitTime % (1000 * 60)) / 1000);
};

// Shows values on DOM
const displayTime = () => {
  hourElement.textContent = hours < 10 ? `0${hours}` : hours;
  minuteElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
  secondElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
};

// Stops Timer
const stopTimer = () => {
  clearInterval(countDown);
  hourElement.textContent = '00';
  minuteElement.textContent = '00';
  secondElement.textContent = '00';
};

// Timer launched
const countDown = setInterval(() => startTimer(), 1000);
