"use strict";

let swiperInitialized = false;

const initSwipers = () => {
  if (swiperInitialized) return; // Prevent multiple initializations

  setTimeout(() => {
    // BANNER
    const BAN_SWIPER = new Swiper(".BAN_SWIPER", {
      autoplay: { delay: 3000, disableOnScroll: false },
      loop: true,
    });

    // MAIN CONTENT SWIPER
    const MC_SWIPER = new Swiper(".MCSWIPER", {
      slidesPerView: 3,
      spaceBetween: 16,
      freeMode: true,
      breakpoints: {
        375: { slidesPerView: 2, spaceBetween: 5 },
        768: { slidesPerView: 2, spaceBetween: 10 },
        1024: { slidesPerView: 3, spaceBetween: 10 },
      },
    });

    // TILE SWIPER
    const MC_TILE = new Swiper(".MCTILES", {
      slidesPerView: "auto",
      spaceBetween: 16,
      freeMode: true,
      breakpoints: {
        375: { slidesPerView: "auto", spaceBetween: 6 },
        768: { slidesPerView: "auto", spaceBetween: 8 },
        1024: { slidesPerView: "auto", spaceBetween: 12 },
      },
    });

    // GALLERY LIGHTBOX SWIPER
    const G__LIGHT = new Swiper(".g__lightbox", {
      slidesPerView: 5,
      grabCursor: true,
      freeMode: true,
      breakpoints: {
        375: { slidesPerView: 3, spaceBetween: 6 },
        768: { slidesPerView: 4, spaceBetween: 6 },
        1024: { slidesPerView: 5, spaceBetween: 6 },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // VIDEO LIST SWIPER
    const VID__LIST = new Swiper(".MO__VID-LIST", {
      slidesPerView: 2,
      spaceBetween: 6,
      freeMode: true,
      breakpoints: {
        375: { slidesPerView: 3, spaceBetween: 6 },
        768: { slidesPerView: 4, spaceBetween: 8 },
        1024: { slidesPerView: 4, spaceBetween: 12 },
      },
    });

    // Initialize GLightbox
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      closeButton: true,
    });

    swiperInitialized = true;
  }, 100); // 100ms delay for better initialization
};

initSwipers();

// Reinitialize Swiper on window resize
window.addEventListener("resize", () => {
  swiperInitialized = false; // Reset flag
  initSwipers();
});
