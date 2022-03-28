const ANIMATE_DURATION = 1000;
const ACTIVE_YEAR_CLASS = "slider__year--active";

window.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector("[data-slider]");

  if (slider) {
    const years = document.querySelectorAll("[data-slider-year]");
    const prev = document.querySelector("[data-slider-prev]");
    const next = document.querySelector("[data-slider-next]");
    const allTexts = document.querySelectorAll(".slider__texts");

    const state = {
      index: 0,
      isChangedAfterLastAnimate: false,
      isAnimate: false,
      lastAnimateIndex: null,
    };

    const updateYear = (newIndex) => {
      const activeYear = document.querySelector(`.${ACTIVE_YEAR_CLASS}`);
      const newYear = years[newIndex];

      activeYear.classList.remove(ACTIVE_YEAR_CLASS);
      newYear.classList.add(ACTIVE_YEAR_CLASS);
    };

    const updateImage = (newIndex) => {
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
    };

    const updateTexts = (newIndex) => {
      allTexts.forEach((texts) => {
        const allText = texts.querySelectorAll(".slider__text");

        allText.forEach((text) => {
          text.classList.remove("slider__text--in");
          text.classList.remove("slider__text--out");
        });

        const curText = texts.querySelector(".slider__text--active");
        const newText = allText[newIndex];

        curText.classList.remove("slider__text--active");
        newText.classList.add("slider__text--active");

        curText.classList.add("slider__text--out");
        newText.classList.add("slider__text--in");
      });
    };

    const updateImageAndTexts = (newIndex) => {
      updateImage(newIndex);
      updateTexts(newIndex);
    };

    const tryUpdate = () => {
      updateYear(state.index);

      if (!state.isAnimate) {
        if (state.isChangedAfterLastAnimate) {
          if (state.index !== state.lastAnimateIndex) {
            console.log(state.index);

            state.isAnimate = true;
            state.lastAnimateIndex = state.index;

            updateImageAndTexts(state.index);

            setTimeout(() => {
              state.isAnimate = false;

              tryUpdate();
            }, ANIMATE_DURATION);
          }

          state.isChangedAfterLastAnimate = false;
        }
      }
    };

    years.forEach((year, index) => {
      year.addEventListener("click", () => {
        const newIndex = index;

        if (newIndex !== state.index) {
          state.index = newIndex;
          state.isChangedAfterLastAnimate = true;

          tryUpdate();
        }
      });
    });

    prev.addEventListener("click", () => {
      const newIndex = state.index - 1 < 0 ? 0 : state.index - 1;

      if (newIndex !== state.index) {
        state.index = newIndex;
        state.isChangedAfterLastAnimate = true;

        tryUpdate();
      }
    });

    next.addEventListener("click", () => {
      const newIndex =
        state.index + 1 >= years.length ? years.length - 1 : state.index + 1;

      if (newIndex !== state.index) {
        state.index = newIndex;
        state.isChangedAfterLastAnimate = true;

        tryUpdate();
      }
    });
  }
});
