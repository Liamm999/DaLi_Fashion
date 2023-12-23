const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailErr = document.getElementById("emailErr");
const passwordErr = document.getElementById("passwordErr");

const rePassInput = document.getElementById("rePass");
const rePassError = document.getElementById("rePassError");

const submitBtn = document.getElementById("submitBtn");

// validate form
submitBtn.addEventListener("click", (event) => {
  // prevent default submit event
  event.preventDefault();

  // check valid email input
  if (!emailInput.value) {
    emailErr.classList.remove("d-none");
    return;
  }

  // password schema
  // at least one uppercase letter and is at least 8 characters long
  const schema = new RegExp("^(?=.*[A-Z]).{8,}$");

  // check valid password
  if (!schema.test(passwordInput.value)) {
    passwordErr.classList.remove("d-none");
    return;
  }

  // check valid re-enter password
  if (rePassInput.value !== passwordInput.value) {
    rePassError.classList.remove("d-none");
    return;
  }

  // when everything is oke -> redirect to homepage
  window.location.replace("./index.html");
});
