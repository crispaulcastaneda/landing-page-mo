"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scroll and Active Menu Highlight
  const menuLinks = document.querySelectorAll(".HEADER__MENU-DESKTOP ul li a");
  const sections = document.querySelectorAll("section[id].content");
  const aside = document.querySelector(".MO__TOASTER");
  const banner = document.querySelector(".BAN_CONTENT");

  window.addEventListener("scroll", function () {
    if (banner) {
      const bannerBottom = banner.getBoundingClientRect().bottom;
      if (bannerBottom <= 0) {
        aside.classList.add("show");
      } else {
        aside.classList.remove("show");
      }
    }
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 10, behavior: "smooth" });

      // Remove hash from URL after scrolling
      setTimeout(() => history.replaceState(null, null, " "), 500);
    });
  });

  function scrollTracker() {
    const currentYScroll = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      const id = section.getAttribute("id");
      const currentNav = document.querySelector(
        `.HEADER__MENU-DESKTOP ul li a[href="#${id}"]`
      );

      if (!currentNav) return;

      currentNav.classList.toggle(
        "active",
        currentYScroll > sectionTop &&
          currentYScroll <= sectionTop + sectionHeight
      );
    });
  }

  window.addEventListener("scroll", scrollTracker);

  // YouTube Video Thumbnail Click Handler
  const featuredVideo = document.querySelector(".MO__FEATURED__VIDEO iframe");
  const videoThumbnails = document.querySelectorAll(".MO__VID-SLIDE img");

  videoThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      const vidID = this.getAttribute("data-id");
      if (!vidID || featuredVideo.src.includes(vidID)) return;

      featuredVideo.src = `https://www.youtube.com/embed/${vidID}?rel=0&autoplay=1`;

      // Update active states
      document
        .querySelector(".MO__VID-SLIDE img.active")
        ?.classList.remove("active");
      this.classList.add("active");

      const parentSlide = this.closest(".MO__VID-SLIDE");
      document
        .querySelector(".MO__VID-SLIDE p.active")
        ?.classList.remove("active");
      parentSlide?.querySelector("p")?.classList.add("active");
    });
  });
});
