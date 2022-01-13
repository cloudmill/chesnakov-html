import { onSignal } from "./signal";

$(() => {
  const modal = $(".modal");

  function handleWheel(e) {
    e.preventDefault();
  }

  if (modal.length) {
    const modalForm = $(".modal__form");

    $(window).on("click", (e) => {
      const popupClick = !!$(e.target).closest(".modal__popup").length;

      const openClick = !!$(e.target).closest("[data-modal-open]").length;
      const closeClick = !!$(e.target).closest("[data-modal-close]").length;

      const isActive = modal.hasClass("modal--active");
      const isResponse = modal.hasClass("modal--response");

      console.log("modal", {
        popupClick,
        openClick,
        closeClick,
        isActive,
        isResponse,
      });

      if (isActive) {
        if (closeClick || !popupClick) {
          modal.removeClass("modal--active");

          window.removeEventListener("wheel", handleWheel, { passive: false });

          if (isResponse) {
            modal.removeClass("modal--response");

            modalForm.parsley().reset();
            modalForm[0].reset();
          }
        }
      } else {
        if (openClick) {
          modal.addClass("modal--active");

          window.addEventListener("wheel", handleWheel, { passive: false });
        }
      }
    });

    onSignal("modal-response-open", () => {
      modal.addClass("modal--response");
    });
  }
});
