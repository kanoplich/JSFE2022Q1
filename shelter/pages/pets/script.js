const burgerBtn = document.querySelector('.header__burger');

const burger = (burgerBtn) => {
  burgerBtn.addEventListener('click', function() {
    this.classList.toggle('active');
  });
}

burger(burgerBtn);