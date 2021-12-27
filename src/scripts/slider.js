import Swiper from "swiper";

window.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector("[data-slider]");

  if (slider) {
    // years
    const years = document.querySelector("[data-slider-years]");
    const year = document.querySelectorAll("[data-slider-year]");

    const yearsSwiper = new Swiper(years, {
      spaceBetween: 24,
      allowTouchMove: false,
    });

    // slides
    const slides = document.querySelector("[data-slider-slides]");

    const slidesSwiper = new Swiper(slides, {
      spaceBetween: 15,
      allowTouchMove: false,
      breakpoints: {
        768: {
          spaceBetween: 20,
        },
        1280: {
          spaceBetween: 40,
        },
      },
    });

    // events
    year.forEach((year, index) => {
      year.addEventListener("click", () => {
        yearsSwiper.slideTo(index);
        slidesSwiper.slideTo(index);
      });
    });

    window.addEventListener("click", (e) => {
      const prev = e.target.closest("[data-slider-prev]");
      const next = e.target.closest("[data-slider-next]");

      if (prev) {
        yearsSwiper.slidePrev();
        slidesSwiper.slidePrev();
      }

      if (next) {
        yearsSwiper.slideNext();
        slidesSwiper.slideNext();
      }
    });
  }
});
