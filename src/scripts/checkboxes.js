$(() => {
  $(".checkboxes").each(function () {
    const component = $(this);
    const inputs = component.find("[type=checkbox]");

    inputs.each(function () {
      const input = $(this);

      input.parsley().on("field:validated", () => {
        if (component.find(".parsley-error").length) {
          component.addClass("checkboxes--error");
        } else {
          component.removeClass("checkboxes--error");
        }
      });
    });
  });
});
