window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

  let prevY = scrollY;

  window.addEventListener("scroll", () => {
    const y = scrollY;

    console.log(prevY, y);

    if (y >= 1) {
      if (y > prevY) {
        header.classList.add("header--hide");
      } else {
        header.classList.remove("header--hide");
      }
    }

    if (y >= 1) {
      if (!header.classList.contains("header--scroll")) {
        header.classList.add("header--scroll");
      }
    } else {
      if (header.classList.contains("header--scroll")) {
        header.classList.remove("header--scroll");
      }

      if (header.classList.contains("header--hide")) {
        header.classList.remove("header--hide");
      }
    }

    prevY = y;
  });
});
