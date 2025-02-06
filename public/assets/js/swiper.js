"use strict";

let SWIPER = new Swiper(".BAN_SWIPER", {
  autoplay: {
    delay: 30000, // 3000ms = 3s
    disableOnScroll: false, // keeps on autoplaying even if you scroll
  },
  loop: true, // infinite loop
});
