function saque() {
    const saldo = parseInt(localStorage.getItem('saldo'));
    const valorInput = parseInt(document.getElementById('valor_input').value);

    if ((valorInput > saldo) || (valorInput <= 0)) {
        alert('Valor de saque inválido.')
    } else {
        const novoSaldo = saldo - valorInput;
        localStorage.setItem('saldo', novoSaldo);
        alert('Saque feito com sucesso.');
    }
}


function sair() {
    window.location.href = "servicos.html";
}