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
