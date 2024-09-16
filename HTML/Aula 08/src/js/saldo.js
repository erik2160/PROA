window.onload = (event) => {
    atualizarSaldoDisponivel();
};

function atualizarSaldoDisponivel() {
    let saldo = localStorage.getItem("saldo");
    document.getElementById('disponivel_saque').innerText = `${formatarValor(saldo)}`;
}

function atualizarNomeInicial() {
    const nome = localStorage.getItem("nome");
    document.getElementById('bemvindo_texto').innerText = `Olá ${nome}! É um prazer ter você por aqui!`;
}

function formatarValor(valor) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}

function mensagemSair() {
    alert(`${localStorage.getItem('nome')}, foi um prazer ter você por aqui!`);
}