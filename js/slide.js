var swiper = new Swiper(".home-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  grabCursor: true,
});

var swiper = new Swiper(".home-courses-slider", {
  loop: true,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
