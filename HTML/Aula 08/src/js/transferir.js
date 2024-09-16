function validarSaldo () {
    const saldo = parseInt(localStorage.getItem('saldo'));
    let valor = parseInt(document.getElementById('valor_input').value);

    if ((saldo < valor) || (valor <= 0) || (isNumber(valor))) {
        alert('Valor de transferência inválido.')
    } else {
        const novoSaldo = saldo - valor;
        localStorage.setItem('saldo', novoSaldo);
        alert('Transferência concluída com sucesso.');
    }
}

function isNumber(value) {
    return !!String(value).match(/\D/);
}

function sair() {
    window.location.href = "servicos.html";
}