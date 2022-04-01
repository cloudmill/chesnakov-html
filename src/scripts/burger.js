window.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector("[data-burger]");

  if (burger) {
    const open = document.querySelector("[data-burger-open]");
    const close = document.querySelector("[data-burger-close]");

    // state

    let isOpen = burger.classList.contains("burger--open");

    // events

    open.addEventListener("click", () => {
      if (!isOpen) {
        burger.classList.add("burger--open");

        if (matchMedia("(max-width: 1279px)").matches) {
          document.body.classList.add("body--burger--open");
        }

        setTimeout(() => {
          isOpen = true;
        });
      }
    });

    close.addEventListener("click", () => {
      if (isOpen) {
        burger.classList.remove("burger--open");

        if (matchMedia("(max-width: 1279px)").matches) {
          document.body.classList.remove("body--burger--open");
        }

        setTimeout(() => {
          isOpen = false;
        });
      }
    });

    window.addEventListener("click", (e) => {
      if (isOpen) {
        const scroll = e.target.closest(".burger__scroll");

        if (!scroll && !$(".modal").hasClass("modal--active")) {
          burger.classList.remove("burger--open");

          if (matchMedia("(max-width: 1279px)").matches) {
            document.body.classList.remove("body--burger--open");
          }

          setTimeout(() => {
            isOpen = false;
          });
        }
      }
    });
  }
});
