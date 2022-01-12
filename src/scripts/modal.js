import { onSignal } from "./signal";

$(() => {
  $(window).on("click", (e) => {
    if (
      $(".modal").hasClass("modal--active") &&
      !$(e.target).closest(".modal__popup").length
    ) {
      $(".modal").removeClass("modal--active");
    }
  });

  $("[data-modal-open]").on("click", () => {
    if (!$(".modal").hasClass("modal--active")) {
      setTimeout(() => {
        $(".modal").addClass("modal--active");
      });
    }
  });

  $("[data-modal-close]").on("click", () => {
    if ($(".modal").hasClass("modal--active")) {
      setTimeout(() => {
        $(".modal").removeClass("modal--active");
      });
    }
  });

  onSignal("modal-response-open", () => {
    $(".modal").addClass("modal--response");
  });
});
