window.addEventListener("DOMContentLoaded", () => {
  const DROP_ACTIVE_CLASS = "choice__drop--active";

  window.addEventListener("click", (e) => {
    const panel = e.target.closest(".choice__panel");

    if (panel) {
      const choice = panel.closest(".choice");
      const drop = choice.querySelector(".choice__drop");
      const isOpen = drop.classList.contains(DROP_ACTIVE_CLASS);

      if (isOpen) {
        drop.style.height = 0;

        drop.classList.remove(DROP_ACTIVE_CLASS);
      } else {
        const dropContent = drop.querySelector(".choice__drop-content");
        const dropContentHeight = dropContent.getBoundingClientRect().height;
        drop.style.height = `${dropContentHeight}px`;

        drop.classList.add(DROP_ACTIVE_CLASS);
      }
    }
  });

  window.addEventListener("resize", () => {
    const drops = document.querySelectorAll(".choice__drop");

    Array.from(drops).forEach((drop) => {
      const isOpen = drop.classList.contains(DROP_ACTIVE_CLASS);

      if (isOpen) {
        const dropContent = drop.querySelector(".choice__drop-content");
        const dropContentHeight = dropContent.getBoundingClientRect().height;
        drop.style.height = `${dropContentHeight}px`;
      }
    });
  });
});
