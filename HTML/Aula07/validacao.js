const form = document.getElementById("form");
const nome = document.getElementById("name_paragraph");
const email = document.getElementById("email_paragraph");

let nameFontSize = 30;
let emailFontSize = 30;


const colors = ["red", "pink", "green", "purple", "yellow", "orange", "black", "brown", "blue", "magenta", "cyan"];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validacoes()) {
    alert("Enviou!");
    resetarInputs();
  }
});

nome.addEventListener('dblclick', function () {
  nameFontSize += 2;
  nome.style.fontSize = `${nameFontSize}px`
});

email.addEventListener('dblclick', function () {
  emailFontSize += 2;
  email.style.fontSize = `${emailFontSize}px`
});

function validacoes() {
  let nomeValido = validarNome();
  let emailValido = validarEmail();

  return nomeValido && emailValido;
}

function resetarInputs() {
  document.getElementById("name_input").value = "";
  document.getElementById("email_input").value = "";
  document.getElementById("name_input").style.border = "";
  document.getElementById("email_input").style.border = "";
}

function validarNome() {
  let nome = document.getElementById("name_input").value;
  let nomeInput = document.getElementById("name_input");

  if (nome.length === 0) {
    nomeInput.style.border = "red solid 2px";
    return false;
  } else {
    return true;
  }
}

function validarEmail() {
  let email = document.getElementById("email_input").value;
  let emailInput = document.getElementById("email_input");

  if (email.length === 0) {
    emailInput.style.border = "red solid 2px";
    return false;
  } else {
    return true;
  }
}

function mudarCorNome() {
  let nomeParagraph = document.getElementById("name_paragraph");
  let indiceCor = Math.floor(Math.random() * 11);
  let cor = colors[indiceCor];
  nomeParagraph.style.color = cor;
}

function mudarCorEmail() {
  let emailParagraph = document.getElementById("email_paragraph");
  let indiceCor = Math.floor(Math.random() * 11);
  let cor = colors[indiceCor];
  emailParagraph.style.color = cor;
}