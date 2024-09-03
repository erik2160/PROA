function validarSaldo () {
    const saldo = parseInt(localStorage.getItem('valor_Input'));
    let valor = document.getElementById('valor_input');
    let valorInput = parseInt(valor.value);

    if (saque(valorInput > saldosaque) || (valorInput <= 0)) {
        alert('Valor de transferência inválido.')
    } else {
        const novoSaldo = saldo - valorInput;
        localStorage.setItem('saldo', novoSaldo);
        alert('Transferência concluída com sucesso.');
    }
}

function sair() {
    window.location.href = "servicos.html";
}