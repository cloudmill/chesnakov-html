// import "parsleyjs";
import "parsleyjs";

$(() => {
  $("form").parsley();

  Parsley.addMessages("en", {
    required: "Поле заполнено неверно",
  });
});
