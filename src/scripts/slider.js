import Swiper from "swiper";

const DURATION = 500;

window.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector("[data-slider]");

  if (slider) {
    // years
    const years = document.querySelector("[data-slider-years]");
    const year = document.querySelectorAll("[data-slider-year]");

    const yearsSwiper = new Swiper(years, {
      spaceBetween: 24,
      allowTouchMove: false,
      breakpoints: {
        1280: {
          spaceBetween: 52,
        },
      },
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
        yearsSwiper.slideTo(index, DURATION);
        slidesSwiper.slideTo(index, DURATION);
      });
    });

    window.addEventListener("click", (e) => {
      const prev = e.target.closest("[data-slider-prev]");
      const next = e.target.closest("[data-slider-next]");

      if (prev) {
        yearsSwiper.slidePrev(DURATION);
        slidesSwiper.slidePrev(DURATION);
      }

      if (next) {
        yearsSwiper.slideNext(DURATION);
        slidesSwiper.slideNext(DURATION);
      }
    });
  }
});
