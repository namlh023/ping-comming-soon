const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

$(document).ready(function () {
  $(".form").submit(function (event) {
    event.preventDefault();
    if (!validateEmail($(".email").val())) {
      $(".text-error").css("display", "block");
      $(".text-success").css("display", "none");
    } else {
      $(".text-error").css("display", "none");
      $(".text-success").css("display", "block");
    }
  });
});
