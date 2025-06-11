function validateName() {
  const name = document.getElementById("fullName").value;
  const error = document.getElementById("nameError");
  if (name.length < 5) {
    error.textContent = "Name must be at least 5 characters";
    return false;
  }
  error.textContent = "";
  return true;
}

function validateEmail() {
  const email = document.getElementById("email").value;
  const error = document.getElementById("emailError");
  if (!email.includes("@")) {
    error.textContent = "Email must contain '@'";
    return false;
  }
  error.textContent = "";
  return true;
}

function validatePhone() {
  const phone = document.getElementById("phone").value;
  const error = document.getElementById("phoneError");
  const phonePattern = /^[0-9]{10}$/;

  if (phone === "123456789" || !phonePattern.test(phone)) {
    error.textContent = "Enter a valid 10-digit phone number";
    return false;
  }
  error.textContent = "";
  return true;
}

function validatePassword() {
  const password = document.getElementById("password").value;
  const name = document.getElementById("fullName").value.toLowerCase();
  const error = document.getElementById("passwordError");

  if (
    password.length < 8 ||
    password.toLowerCase() === "password" ||
    password.toLowerCase() === name
  ) {
    error.textContent = "Password is too weak";
    return false;
  }
  error.textContent = "";
  return true;
}

function validateConfirmPassword() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const error = document.getElementById("confirmPasswordError");

  if (password !== confirmPassword) {
    error.textContent = "Passwords do not match";
    return false;
  }
  error.textContent = "";
  return true;
}

function validateForm() {
  const validName = validateName();
  const validEmail = validateEmail();
  const validPhone = validatePhone();
  const validPassword = validatePassword();
  const validConfirm = validateConfirmPassword();

  return validName && validEmail && validPhone && validPassword && validConfirm;
}
