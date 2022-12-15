let email = document.getElementById("email");
let senha = document.getElementById("senha");

email.addEventListener("keyup", () => {
  if (email.value.length < 5) {
    email.style.borderColor = "red";
  } else {
    email.style.borderColor = "green";
  }
  email.appendChild(valid);
});

senha.addEventListener("keyup", () => {
  if (senha.value.length < 4) {
    senha.style.borderColor = "red";
  } else {
    senha.style.borderColor = "green";
  }
});
