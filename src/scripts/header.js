window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

  let prevY = scrollY;

  window.addEventListener("scroll", () => {
    const y = scrollY;

    console.log(prevY, y);

    if (y > prevY) {
      // down
      header.classList.add("header--hide");
    } else {
      // up
      header.classList.remove("header--hide");
    }

    if (y >= 1 && !header.classList.contains("header--scroll")) {
      header.classList.add("header--scroll");
    } else if (y < 1 && header.classList.contains("header--scroll")) {
      header.classList.remove("header--scroll");
    }

    prevY = y;
  });
});
