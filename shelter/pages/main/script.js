import pets from "./pets.json" assert { type: "json"};

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
const ITEM_LEFT = document.querySelector('#item-left');
const ITEM_RIGHT = document.querySelector('#item-right');

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

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createCard = () => {
  let i = randomNumber(0, 7);

  const card = document.createElement('div');
  card.classList.add('friends__cards');
  card.innerHTML = `<img class="cards" src="${pets[i].img}" alt="${pets[i].name}">
  <h3 class="friends__name">${pets[i].name}</h3>
  <div class="friends__cards__button">Learn more</div>
  </div>`
  return card;
}

const stopAnimation = (animationEvent) => {
  let changeItem;
  if(animationEvent.animationName === 'move-left') {
    CAROUSEL.classList.remove('transition-left');
    changeItem = ITEM_LEFT;
    document.querySelector('#item-active').innerHTML = ITEM_LEFT.innerHTML;
  } else {
    CAROUSEL.classList.remove('transition-right');
    changeItem = ITEM_RIGHT;
    document.querySelector('#item-active').innerHTML = ITEM_RIGHT.innerHTML;
  }

  changeItem.innerHTML = "";
  
  for(let i = 0; i < 3; i++) {
    const card = createCard();
    changeItem.appendChild(card);
  }

  LEFT_BTN.addEventListener('click', moveLeft);
  RIGHT_BTN.addEventListener('click', moveRight);
}

LEFT_BTN.addEventListener('click', moveLeft);
RIGHT_BTN.addEventListener('click', moveRight);
CAROUSEL.addEventListener('animationend', stopAnimation);



