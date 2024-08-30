function mostrarSaldo() {
    let senhaValue = document.getElementById('saldo_senha_input').value;
    let senhaInput = document.getElementById('saldo_senha_input');

    if (senhaValida(senhaValue)) {
        let saldo = localStorage.getItem('saldo');
        senhaInput.style.border = "";
        document.getElementById('saldo_output').textContent = `Saldo: R$ ${saldo}`
    } else {
        senhaInput.style.border = 'red 2px solid'
    }
}

function senhaValida(senha) {
    if ((senha === "3589") && (senha.length != 0)) {
        return true;
    }
    return false;
}

function voltarMenu() {
    window.location.href = "banco.html"; 
}