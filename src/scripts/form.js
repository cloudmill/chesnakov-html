import { sendSignal } from "./signal";

$(() => {
  function validateCheckboxes(checkboxes, addError, removeError) {
    const checkboxesInputs = checkboxes.find("[type=checkbox]");

    let checkCount = 0;
    checkboxesInputs.each(function () {
      const checkboxInput = $(this);
      checkCount += +checkboxInput.is(":checked");
    });

    if (checkCount === 0) {
      setTimeout(() => {
        checkboxes.addClass("checkboxes--error");
      });
    } else {
      setTimeout(() => {
        checkboxes.removeClass("checkboxes--error");
      });
    }
  }

  $("form").each(function () {
    const form = $(this);
    const checkboxes = form.find(".checkboxes");
    const checkboxesInputs = checkboxes.find("[type=checkbox]");

    if (checkboxes.length) {
      form.parsley().on("form:validate", () => validateCheckboxes(checkboxes));
      checkboxesInputs.on("change", () => validateCheckboxes(checkboxes));
    }
  });

  $("form").on("submit", function (e) {
    e.preventDefault();

    setTimeout(() => {
      const url = $(this).data("url");
      const successStatus = $(this).data("success-status");
      const successAction = $(this).data("success-action");
      const params = $(this).serialize();
      const isTest = $(this)[0].hasAttribute("data-form-test");

      const checkboxes = $(this).find(".checkboxes");
      let checkboxesValidated;

      if (checkboxes.length) {
        if (!checkboxes.hasClass("checkboxes--error")) {
          checkboxesValidated = true;
        } else {
          checkboxesValidated = false;
        }
      } else {
        checkboxesValidated = true;
      }

      if (checkboxesValidated) {
        try {
          if (isTest) {
            setTimeout(() => {
              successAction && sendSignal(successAction);
            }, 1000);
          }

          $.post(url, params, (data) => {
            if (data.status === successStatus) {
              successAction && sendSignal(successAction);
            }
          });
        } catch (error) {
          console.error("form", this, error);
        }
      }
    });
  });
});
