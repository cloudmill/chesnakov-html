const DURATION = 1000;
const ACTIVE_YEAR_CLASS = "slider__year--active";

window.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector("[data-slider]");

  if (slider) {
    const years = document.querySelectorAll("[data-slider-year]");
    const prev = document.querySelector("[data-slider-prev]");
    const next = document.querySelector("[data-slider-next]");
    const allTexts = document.querySelectorAll(".slider__texts");

    let activeYear = document.querySelector(`.${ACTIVE_YEAR_CLASS}`);
    let enabled = true;
    let curIndex = 0;

    function updateSlider(newIndex) {
      if (enabled && newIndex !== curIndex) {
        // update enabled
        enabled = false;

        setTimeout(() => {
          enabled = true;
        }, DURATION);

        // update year
        activeYear.classList.remove(ACTIVE_YEAR_CLASS);

        const newYear = years[newIndex];
        newYear.classList.add("slider__year--active");

        activeYear = newYear;

        // update image
        const curImage = document.querySelector(".slider__image-item--active");
        const curImg = curImage.querySelector(".slider__img");

        const allImage = document.querySelectorAll(".slider__image-item");

        const newImage = allImage[newIndex];
        const newImg = newImage.querySelector(".slider__img");

        curImage.style.left = 0;
        curImage.style.right = "auto";

        curImg.style.left = 0;
        curImg.style.right = "auto";

        newImage.style.right = 0;
        newImage.style.left = "auto";

        newImg.style.right = 0;
        newImg.style.left = "auto";

        setTimeout(() => {
          curImage.classList.remove("slider__image-item--active");
          newImage.classList.add("slider__image-item--active");
        });

        // update text
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
      year.addEventListener("click", () => enabled && updateSlider(index));
    });

    prev.addEventListener("click", () => {
      let newIndex = curIndex - 1;

      if (newIndex < 0) {
        newIndex = 0;
      }

      updateSlider(newIndex);
    });

    next.addEventListener("click", () => {
      let newIndex = curIndex + 1;

      if (newIndex >= years.length) {
        newIndex = years.length - 1;
      }

      updateSlider(newIndex);
    });
  }
});
