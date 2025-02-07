"use strict";

const swiperContainer = () => {
  // BANNER
  let BAN_SWIPER = new Swiper(".BAN_SWIPER", {
    autoplay: {
      delay: 3000, // 3s autoplay
      disableOnScroll: false,
    },
    loop: true,
  });

  let MC_SWIPER = new Swiper(".MCSWIPER", {
    slidesPerView: 3,
    spaceBetween: 16,
    freeMode: true,
    breakpoints: {
      375: { slidesPerView: 2, spaceBetween: 5 }, // Removed duplicate 375
      768: { slidesPerView: 2, spaceBetween: 10 },
      1024: { slidesPerView: 3, spaceBetween: 10 },
    },
  });

  let MC_TILE = new Swiper(".MCTILES", {
    slidesPerView: "auto",
    spaceBetween: 16,
    freeMode: true,
    breakpoints: {
      375: { slidesPerView: "auto", spaceBetween: 6 },
      768: { slidesPerView: "auto", spaceBetween: 8 },
      1024: { slidesPerView: "auto", spaceBetween: 12 },
    },
  });
};

swiperContainer();
