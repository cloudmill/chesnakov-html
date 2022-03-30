import { onSignal } from "./signal";

$(() => {
  const modal = $(".modal");

  function handleWheel(e) {
    e.preventDefault();
  }

  if (modal.length) {
    $(window).on("click", (e) => {
      const popupClick = !!$(e.target).closest(".modal__popup").length;
      const openClick = !!$(e.target).closest("[data-modal-open]").length;
      const closeClick = !!$(e.target).closest("[data-modal-close]").length;

      const isActive = modal.hasClass("modal--active");
      const isQuestion = modal.hasClass("modal--question");
      const isSubscribe = modal.hasClass("modal--subscribe");

      if (isActive) {
        if (closeClick || !popupClick) {
          modal.removeClass("modal--active");

          window.removeEventListener("wheel", handleWheel, { passive: false });

          if (matchMedia("(max-width: 1279px)").matches) {
            document.body.style.overflow = "";
          }

          if (isQuestion) {
            modal.removeClass("modal--question");
          }
          if (isSubscribe) {
            modal.removeClass("modal--subscribe");
          }
        }
      } else {
        if (openClick) {
          modal.addClass("modal--active");

          window.addEventListener("wheel", handleWheel, { passive: false });

          if (matchMedia("(max-width: 1279px)").matches) {
            document.body.style.overflow = "hidden";
          }
        }
      }
    });

    ["question", "subscribe"].forEach((action) =>
      onSignal(`${action}-success`, () => {
        const modalForm = $(`[data-success-action=${action}-success]`);

        modalForm.parsley().reset();
        modalForm[0].reset();

        modal.addClass(["modal--active", `modal--${action}`]);
      })
    );
  }
});
