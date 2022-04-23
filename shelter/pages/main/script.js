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

const removeClass = () => {
  BURGER_BTN.classList.remove('active');
  MENU.classList.remove('active');
  SHADOW.classList.remove('active');
  BODY.classList.remove('disabled-scroll');
};

BURGER_BTN.addEventListener('click', burger);
MENU.addEventListener('click', burger);
SHADOW.addEventListener('click', burger);

burger();
removeClass();