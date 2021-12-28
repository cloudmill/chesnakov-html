import Swiper from "swiper";

const DURATION = 1000;

window.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector("[data-slider]");

  if (slider) {
    // years
    const ACTIVE_YEAR_CLASS = "slider__year--active";

    const years = document.querySelectorAll("[data-slider-year]");
    let activeYear = document.querySelector(`.${ACTIVE_YEAR_CLASS}`);

    // slider
    let enabled = true;

    let curIndex = 0;

    function updateSlider(newIndex) {
      if (newIndex !== curIndex) {
        // update enabled
        enabled = false;

        setTimeout(() => {
          enabled = true;
        }, DURATION);

        // update year
        activeYear.classList.remove(ACTIVE_YEAR_CLASS);

        const allYear = document.querySelectorAll(".slider__year");
        const newYear = allYear[newIndex];

        newYear.classList.add("slider__year--active");
        activeYear = newYear;

        // update image
        const curImage = document.querySelector(".slider__image-item--active");
        const curImg = curImage.querySelector(".slider__img");

        const allImage = document.querySelectorAll(".slider__image-item");

        const newImage = allImage[newIndex];
        const newImg = newImage.querySelector(".slider__img");

        curImage.classList.remove("slider__image-item--active");
        curImage.style.justifySelf = 'start'
        curImg.style.objectPosition = 'left center'

        newImage.classList.add("slider__image-item--active");
        newImage.style.justifySelf = 'end'
        newImg.style.objectPosition = 'right center'

        // update text
        const allTexts = document.querySelectorAll(".slider__texts");

        allTexts.forEach((texts) => {
          const curText = texts.querySelector(".slider__text--active");

          const allText = texts.querySelectorAll(".slider__text");
          const newText = allText[newIndex];

          curText.classList.add("slider__text--out");
          curText.classList.remove("slider__text--in");
          curText.classList.remove("slider__text--pre-in");
          curText.classList.remove("slider__text--active");

          newText.classList.remove("slider__text--out");
          newText.classList.add("slider__text--pre-in");
          newText.classList.add("slider__text--in");
          newText.classList.add("slider__text--active");
        });

        // update cur index
        curIndex = newIndex;
      }
    }

    // events
    years.forEach((year, index) => {
      year.addEventListener("click", () => {
        if (enabled) {
          activeYear.classList.remove(ACTIVE_YEAR_CLASS);

          year.classList.add("slider__year--active");
          activeYear = year;

          updateSlider(index);
        }
      });
    });

    const prev = document.querySelector("[data-slider-prev]");
    const next = document.querySelector("[data-slider-next]");

    prev.addEventListener("click", () => {
      let newIndex = curIndex - 1;

      if (newIndex < 0) {
        newIndex = 0;
      }

      updateSlider(newIndex);
    });

    next.addEventListener("click", () => {
      let newIndex = curIndex + 1;

      const allYear = document.querySelectorAll(".slider__year");

      if (newIndex >= allYear.length) {
        newIndex = allYear.length - 1;
      }

      updateSlider(newIndex);
    });
  }
});
