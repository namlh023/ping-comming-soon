const form = document.querySelector(".form");
const error_text = document.querySelector(".text-error");
const success_text = document.querySelector(".text-success");
const email = document.querySelector(".email");

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!validateEmail(email.value)) {
    error_text.style.display = "block";
    success_text.style.display = "none";
  } else {
    error_text.style.display = "none";
    success_text.style.display = "block";
  }
});
