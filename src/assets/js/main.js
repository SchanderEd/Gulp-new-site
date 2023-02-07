import './swiper-bundle.min.js';

const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.header__burger-menu');

const onClickBurger = () => {
  burgerBtn.classList.toggle('header__burger-btn--active');
  burgerMenu.classList.toggle('header__burger-menu--active');
};

burgerBtn.addEventListener('click', onClickBurger);


