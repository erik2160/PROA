const form = document.getElementById("form");

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validarNomeSenha()) {
        let nome = document.getElementById("name_input").value;
        localStorage.setItem("nome", nome);
        localStorage.setItem("saldo", 0);
        window.location.href = "banco.html"; 
    }
});


function validarNomeSenha() {
    let nomeValido = validarNome();
    let senhaValida = validarSenha();
    return nomeValido && senhaValida;
}    

function validarNome() {
    let nome = document.getElementById("name_input").value;
    let nomeInput = document.getElementById("name_input");

    if (nome.length === 0) {
        nomeInput.style.border = "red solid 2px"
        return false;
    }
    return true;
}

function validarSenha() {
    let senha = document.getElementById("senha_input");
    let senhaInput = senha.value;

    if (senhaInput === "3589") {
        return true;
    } else {
        senha.style.border = "red solid 2px";
        return false; 
    }
}

function resetarInputs() {
    document.getElementById("senha_input").value = "";
    document.getElementById("senha_input").style.border = "";

    document.getElementById("name_input").value = "";
    document.getElementById("name_input").style.border = "";
}