document.addEventListener("DOMContentLoaded", function () {
    mostrarNomeNaTela();
});

function mostrarNomeNaTela() {
    let nome = localStorage.getItem("nome");
    document.getElementById("ola_nome").innerText = `Olá, ${nome}!`;
}

function sair() {
    window.location.href = "index.html";
}

function saldo() {
    window.location.href = "saldo.html";
    // validarSenha
    // if (senha === "3589") {
    //     alert(`Seu saldo é: ${saldo}`);
    // } else {
    //     alert("Senha inválida!");
    // }
}

function extrato() {
    if (senha === "3589") {
    let saldo = 1000;
    alert(`Extrato:\n\nSaldo: R$${saldo}\nTransações:\n- Depósito de R$100\n- Saque de R$50\n- Transferência para José: R$200`);
    document.getElementById('saldo').innerText = "Saldo: R$" + saldo;
    }
    else {
        alert("Senha inválida!");
    }
}

function saque() {
    if (senha === "3589") {
        if (saldo >= 50) {
            saldo -= 50;
            alert("Saque realizado com sucesso!");
        } else {
            alert("Saldo insuficiente!");
        }
    } else {
        alert("Senha inválida!");
    }
}