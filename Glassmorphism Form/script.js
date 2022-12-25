const email = document.getElementById("email");
const password = document.getElementById("password");
const valid = document.getElementById("valid");
const invalid = document.getElementById("invalid");
const openEye = document.getElementById("open-eye");
const closeEye = document.getElementById("close-eye");
const emailResult = document.getElementById("email-result");
const passwordResult = document.getElementById("password-result");

// ==========VALIDAÇÃO==========
email.addEventListener("keyup", () => {
  if (email.value.length >= 0 && email.value.length <= 5) {
    email.classList.add("invalid");
    emailResult.classList.add("invalid");
    emailResult.innerHTML = "Enter a valid email address!";
  } else {
    email.classList.remove("invalid");
    email.classList.add("valid");
    emailResult.classList.remove("invalid");
    emailResult.classList.add("valid");
    emailResult.innerHTML = "valid email!";
  }
});

password.addEventListener("keyup", () => {
  if (password.value.length >= 0 && password.value.length <= 4) {
    password.classList.add("invalid");
    invalid.style.display = "block";
    passwordResult.classList.add("invalid");
    passwordResult.innerHTML = "Enter a valid password!";
  } else {
    password.classList.remove("invalid");
    password.classList.add("valid");
    invalid.style.display = "none";
    valid.style.display = "block";
    passwordResult.classList.remove("invalid");
    passwordResult.classList.add("valid");
    passwordResult.innerHTML = "password valid!";
  }
});

// ==========MOSTRAR E ESCONDER SENHA==========

closeEye.addEventListener("click", () => {
  closeEye.style.display = "none";
  openEye.style.display = "block";
  password.setAttribute("type", "text");
});

openEye.addEventListener("click", () => {
  openEye.style.display = "none";
  closeEye.style.display = "block";
  password.setAttribute("type", "password");
});
