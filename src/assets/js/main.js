const swiperHallsRelax = new Swiper('.swiper-relax', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-relax-btn-next',
    prevEl: '.swiper-relax-btn-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiperHallsSeas = new Swiper('.swiper-seas', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-seas-btn-next',
    prevEl: '.swiper-seas-btn-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiperHall = new Swiper('.swiper__hall-photos', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  initialSlide: 0,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});