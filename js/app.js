const usernameHolder = "iptdevs";
const passwordHolder = "123456";
const redirectUrl = "main.html";

const enviar = (event) => {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (usernameHolder !== username) {
    alert("usuario incorrecto");
  }
  if (password !== passwordHolder) {
    alert("contraseña erronea");
  }
  if (usernameHolder === username && password === passwordHolder) {
    alert("bienvenido");
    window.location.href = redirectUrl;
  }
};
let formu = document.getElementById("form").addEventListener("submit", enviar);
