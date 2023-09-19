'use strict';

// elements
const navMenu = document.querySelector('#navMenu');
const btnOpenHamburger = document.querySelector('#openHamburger');
const btnCloseHamburger = document.querySelector('#closeHamburger');
const backdrop = document.querySelector('#backdrop');

btnOpenHamburger.addEventListener('click', () => {
  showNav();
});

btnCloseHamburger.addEventListener('click', () => {
  navMenu.classList.add('nav_closing');
  navMenu.addEventListener(
    'animationend',
    () => {
      navMenu.classList.remove('nav_closing');
    },
    { once: true }
  );
  hideNav();
});

const showNav = () => {
  navMenu.classList.toggle('nav_open');
  backdrop.classList.add('backdrop_show');
};

const hideNav = () => {
  navMenu.classList.remove('nav_open');
  backdrop.classList.remove('backdrop_show');
};
