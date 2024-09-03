window.onload = (event) => {
    atualizarSaldo();
};

function atualizarSaldo() {
    const saldo = localStorage.getItem("saldo");
    document.getElementById('valor_saque').innerText = `${formatarValor(saldo)}`;    
}

function formatarValor(valor) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}