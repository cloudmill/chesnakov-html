window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

  if (header) {
    setTimeout(() => {
      if (scrollY >= 1) {
        header.classList.add("header--scroll");
      }
    }, 500);

    let prevY = scrollY;

    let scrollCount = 0;
    const SCROLL_COUNT_BREAKPOINT = 2;

    window.addEventListener("scroll", () => {
      if (scrollCount >= SCROLL_COUNT_BREAKPOINT) {
        const y = scrollY;

        if (y < prevY) {
          // up
          if (header.classList.contains("header--hide")) {
            header.classList.remove("header--hide");
          }

          if (y >= 1) {
            if (!header.classList.contains("header--scroll")) {
              header.classList.add("header--scroll");
            }
          }

          if (y < 1) {
            if (header.classList.contains("header--scroll")) {
              header.classList.remove("header--scroll");
            }
          }
        } else {
          if (y >= 1) {
            if (!header.classList.contains("header--hide")) {
              header.classList.add("header--hide");
            }
          }
        }

        prevY = y;
      }

      scrollCount++;
    });
  }
});
