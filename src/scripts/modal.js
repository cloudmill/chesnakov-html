$(() => {
  $(window).on("click", (e) => {
    if (
      $(".modal").hasClass("modal--active") &&
      !$(e.target).closest(".modal__popup").length
    ) {
      $(document.body).css("overflow", "");
      $(".modal").removeClass("modal--active");
    }
  });

  $("[data-modal-open]").on("click", () => {
    if (!$(".modal").hasClass("modal--active")) {
      setTimeout(() => {
        $(document.body).css("overflow", "hidden");
        $(".modal").addClass("modal--active");
      });
    }
  });

  $("[data-modal-close]").on("click", () => {
    if ($(".modal").hasClass("modal--active")) {
      setTimeout(() => {
        $(document.body).css("overflow", "");
        $(".modal").removeClass("modal--active");
      });
    }
  });

  $("[data-modal-response]").on("click", (e) => {
    setTimeout(() => {
      if (!$(".modal form .parsley-error").length) {
        $(".modal").addClass("modal--response");
      }
    })
  });
});
