window.onload = (event) => {
    atualizarNomeConta();
};

function atualizarNomeConta() {
    const nome = localStorage.getItem('nome');
    document.getElementById('conta_nome').innerText = `Nome: ${nome}`;
}

function depositarContato() {
    const depositoInput = parseInt(document.getElementById('deposito_input').value);
    const saldo = parseInt(localStorage.getItem('saldo'));

    if ((depositoInput > saldo) || (depositoInput < 0) || (isNumber(depositoInput))) {
        alert('Valor de depósito inválido')
    } else {
        const novoSaldo = saldo - depositoInput;
        console.log(novoSaldo); 
        localStorage.setItem('saldo', novoSaldo);
        alert('Depósito realizado com sucesso');
    }    
}

function depositarConta() {
    const depositoInput = parseInt(document.getElementById('valor_input').value);
    const saldo = parseInt(localStorage.getItem('saldo'));

    console.log(depositoInput);
    console.log(saldo);

    if ((depositoInput <= 0) || (isNumber(depositoInput))) {
        alert('Valor de depósito inválido') 
    } else {
        const novoSaldo = saldo + depositoInput;
        console.log(novoSaldo); 
        localStorage.setItem('saldo', novoSaldo);
        alert('Depósito realizado com sucesso');
    }    
}

function isNumber(value) {
    return !!String(value).match(/\D/);
}


function sair () {
    window.location.href = 'servicos.html';
}

function mensagemSair() {
    alert(`${localStorage.getItem('nome')}, foi um prazer ter você por aqui!`);
}
