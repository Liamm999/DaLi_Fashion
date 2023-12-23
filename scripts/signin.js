const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailErr = document.getElementById("emailErr");
const passwordErr = document.getElementById("passwordErr");

const submitBtn = document.getElementById("submitBtn");

// validate form
submitBtn.addEventListener("click", () => {
  console.log(emailInput.value);
  if (!emailInput.value) {
    emailErr.classList.remove("d-none");
  }

  // password schema
  // at least one uppercase letter and is at least 8 characters long
  const schema = new RegExp("^(?=.*[A-Z]).{8,}$");

  if (!schema.test(passwordInput.value)) {
    passwordErr.classList.remove("d-none");
  }
});
