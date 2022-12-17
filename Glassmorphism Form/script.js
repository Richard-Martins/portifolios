let email = document.getElementById("email");
let senha = document.getElementById("senha");
let msgEmail = document.getElementById("msg-email");
let msgSenha = document.getElementById("msg-senha");

// =============VALIDAR INPUT=============
email.addEventListener("keyup", () => {
  if (email.value.length < 6) {
    email.style.borderBottomColor = "red";
    msgEmail.style.color = "red";
    msgEmail.innerHTML = "O Email deve conter no mínimo 6 letras!";
  } else {
    email.style.borderBottomColor = "green";
    msgEmail.style.color = "green";
    msgEmail.innerHTML = "Email válido!";
  }
});

senha.addEventListener("keyup", () => {
  if (senha.value.length <= 4) {
    senha.style.borderBottomColor = "red";
    msgSenha.style.color = "red";
    msgSenha.innerHTML = "A Senha deve conter no mínimo 5 letras!";
  } else {
    senha.style.borderBottomColor = "green";
    msgSenha.style.color = "green";
    msgSenha.innerHTML = "Senha válida!";
  }
});
