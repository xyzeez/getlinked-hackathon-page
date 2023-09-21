'use strict';

// elements
const navMenu = document.querySelector('#navMenu');
const btnOpenHamburger = document.querySelector('#openHamburger');
const btnCloseHamburger = document.querySelector('#closeHamburger');
const backdrop = document.querySelector('#backdrop');

btnOpenHamburger.addEventListener('click', () => showNav());

btnCloseHamburger.addEventListener('click', () => controlNavClosing());

backdrop.addEventListener('click', () => controlNavClosing());

// Functions
// // Makes nav visible
const showNav = () => {
  navMenu.classList.toggle('nav_open');
  backdrop.classList.add('backdrop_show');
};

// // Hides nav
const hideNav = () => {
  navMenu.classList.remove('nav_open');
  backdrop.classList.remove('backdrop_show');
};

// // Enables closing animation before hiding nav
const controlNavClosing = () => {
  navMenu.classList.add('nav_closing');
  navMenu.addEventListener(
    'animationend',
    () => {
      navMenu.classList.remove('nav_closing');
    },
    { once: true }
  );
  hideNav();
};
// Timer js
const hourElement = document.querySelector('#timerHour');
const minuteElement = document.querySelector('#timerMinute');
const secondElement = document.querySelector('#timerSecond');

const lunchDate = new Date('Nov 18, 2023 00:00:00').getTime();
let currentTime;
let launchWaitTime;
let hours, minutes, seconds;

const countDown = setInterval(() => startTimer(), 1000);

const startTimer = () => {
  currentTime = new Date().getTime();
  launchWaitTime = lunchDate - currentTime;

  calculateTime();

  displayTime();

  if (launchWaitTime <= 0) {
    stopTimer();
  }
};

const calculateTime = () => {
  hours = Math.trunc(
    (launchWaitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes = Math.trunc((launchWaitTime % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.trunc((launchWaitTime % (1000 * 60)) / 1000);
};

const displayTime = () => {
  hourElement.textContent = hours < 10 ? `0${hours}` : hours;
  minuteElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
  secondElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
};

const stopTimer = () => {
  clearInterval(countDown);
  hourElement.textContent = '00';
  minuteElement.textContent = '00';
  secondElement.textContent = '00';
};
