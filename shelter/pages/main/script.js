const BURGER_BTN = document.querySelector('.header__burger');
const MENU = document.querySelector('.header__burger__menu');
const SHADOW = document.querySelector('.shadow_page');
const BODY = document.body;

const burger = () => {
  BURGER_BTN.classList.toggle('active');
  MENU.classList.toggle('active');
  SHADOW.classList.toggle('active');
  BODY.classList.toggle('disabled-scroll');
};

BURGER_BTN.addEventListener('click', burger);
MENU.addEventListener('click', burger);
SHADOW.addEventListener('click', burger);



const LEFT_BTN = document.querySelector('.left-button');
const RIGHT_BTN = document.querySelector('.right-button');
const CAROUSEL = document.querySelector('#carousel');


const moveLeft = () => {
  CAROUSEL.classList.add('transition-left');
  LEFT_BTN.removeEventListener('click', moveLeft);
  RIGHT_BTN.removeEventListener('click', moveRight);
}

const moveRight = () => {
  CAROUSEL.classList.add('transition-right');
  RIGHT_BTN.removeEventListener('click', moveRight);
  LEFT_BTN.removeEventListener('click', moveLeft);
}

const stopAnimation = () => {
  CAROUSEL.classList.remove('transition-left');
  CAROUSEL.classList.remove('transition-right');
  LEFT_BTN.addEventListener('click', moveLeft);
  RIGHT_BTN.addEventListener('click', moveRight);
}

LEFT_BTN.addEventListener('click', moveLeft);
RIGHT_BTN.addEventListener('click', moveRight);
CAROUSEL.addEventListener('animationend', stopAnimation);
