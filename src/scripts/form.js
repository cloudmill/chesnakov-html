import { sendSignal } from "./signal";

$(() => {
  $("form").on("submit", function (e) {
    e.preventDefault();

    const url = $(this).data("url");
    const successStatus = $(this).data("success-status");
    const successAction = $(this).data("success-action");
    const params = $(this).serialize();
    const isTest = $(this)[0].hasAttribute("data-form-test");

    console.log("form", this, {
      url,
      successStatus,
      successAction,
      params,
      isTest,
    });

    try {
      if (isTest) {
        setTimeout(() => {
          successAction && sendSignal(successAction);
        }, 1000);
      }

      $.post(url, params, (data) => {
        if (data.status === successStatus) {
          successAction && sendSignal(successAction);

          console.log("form", this, "success");
        } else {
          console.log("form", this, "fail");
        }
      });
    } catch (error) {
      console.error("form", this, error);
    }
  });
});
