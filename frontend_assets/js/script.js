let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .header-section .navbar');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('active');
}

var swiper = new Swiper(".course-swiper", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
  },
});

var swiper = new Swiper(".tutor-swiper", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
  },
});

var swiper = new Swiper(".review-swiper", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
  },
});