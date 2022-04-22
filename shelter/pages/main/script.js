const BURGER_BTN = document.querySelector('.header__burger');
const MENU = document.querySelector('.header__burger__menu');

const burger = () => {
  BURGER_BTN.classList.toggle('active');
  MENU.classList.toggle('active');
};

const menu_burger = () => {
  MENU.classList.toggle('active');
  BURGER_BTN.classList.toggle('active');
};

BURGER_BTN.addEventListener('click', burger);
MENU.addEventListener('click', menu_burger);

burger();
menu_burger();