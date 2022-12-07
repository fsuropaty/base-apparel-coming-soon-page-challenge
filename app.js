const form = document.getElementById("form");
const email = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
const errorIcon = document.getElementById("error-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  formValidation();
});

function formValidation() {
  const emailValue = email.value.trim();
  if (emailValue === "" || !isEmail(emailValue)) {
    errorMsg.classList.remove("hidden");
    errorIcon.classList.remove("hidden");
    email.classList.add("error-border");
    errorMsg.innerHTML = "Please provide a valid email";
  } else {
    errorMsg.classList.add("hidden");
    errorIcon.classList.add("hidden");
    email.classList.remove("error-border");
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
