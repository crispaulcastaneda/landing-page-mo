"use strict";

const swiperContainer = () => {
  // BANNER
  let BAN_SWIPER = new Swiper(".BAN_SWIPER", {
    autoplay: {
      delay: 3000, // 3000ms = 3s
      disableOnScroll: false, // keeps on autoplaying even if you scroll
    },
    loop: true, // infinite loop
  });

  let MC_SWIPER = new Swiper(".MCSWIPER", {
    slidesPerView: 2,
    spaceBetween: 16,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: { slidesPerView: "auto", spaceBetween: 16 },
      768: { slidesPerView: "auto", spaceBetween: 8 },
      375: { slidesPerView: "auto", spaceBetween: 8 },
    },
  });
  let MC_TILE = new Swiper(".MCTILES", {
    slidesPerView: "auto",
    spaceBetween: 16,
    freeMode: true,
    breakpoints: {
      1024: { slidesPerView: "auto", spaceBetween: 12 },
      768: { slidesPerView: "auto", spaceBetween: 8 },
      375: { slidesPerView: "auto", spaceBetween: 6 },
    },
  });
};

swiperContainer();
