window.addEventListener("DOMContentLoaded", () => {
  const allChoice = document.querySelectorAll(".choice");

  allChoice.forEach((choice) => {
    let isOpen = choice.classList.contains("choice--open");

    const panel = choice.querySelector(".choice__panel");

    const drop = choice.querySelector(".choice__drop");
    const dropContent = choice.querySelector(".choice__drop-content");

    panel.addEventListener("click", () => {
      choice.classList.toggle("choice--open");

      const dropContentHeight = isOpen
        ? 0
        : dropContent.getBoundingClientRect().height;
      drop.style.height = `${dropContentHeight}px`;

      isOpen = !isOpen;
    });

    window.addEventListener("resize", () => {
      if (isOpen) {
        const dropContentHeight = dropContent.getBoundingClientRect().height;

        drop.style.height = `${dropContentHeight}px`;
      }
    });
  });
});
