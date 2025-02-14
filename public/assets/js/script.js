"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const featuredVideo = document.querySelector(".MO__FEATURED__VIDEO iframe");
  const videoThumbnails = document.querySelectorAll(".MO__VID-SLIDE img");

  videoThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      // GET the Youtube video ID from data-id attribute
      const vidID = this.getAttribute("data-id");
      if (!vidID) return; // Prevent errors if data-id is missing

      // Update the featured video iframe source without flickering
      if (featuredVideo.src.indexOf(vidID) === -1) {
        featuredVideo.src = `https://www.youtube.com/embed/${vidID}?rel=0&autoplay=1`;
      }

      // Remove active class from all thumbnails
      videoThumbnails.forEach((thumb) => thumb.classList.remove("active"));

      // Add active class to the clicked thumbnail
      this.classList.add("active");

      // Highlight the corresponding title if it exists
      const parentSlide = this.closest(".MO__VID-SLIDE");
      if (parentSlide) {
        document
          .querySelectorAll(".MO__VID-SLIDE p")
          .forEach((p) => p.classList.remove("active"));
        const title = parentSlide.querySelector("p");
        if (title) title.classList.add("active");
      }
    });
  });
});
