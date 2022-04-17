const burgerBtn = document.querySelector('.header__burger');
const menuBurger = document.querySelector('.header__burger__menu');

const burger = (burgerBtn, menuBurger) => {
  burgerBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    menuBurger.classList.toggle('active');
  });
}

burger(burgerBtn, menuBurger);