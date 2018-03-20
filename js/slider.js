var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 70,
 // centeredSlides: true,
  watchSlidesVisibility: true,
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  }
});