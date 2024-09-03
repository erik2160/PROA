window.onload = (event) => {
    atualizarNomeInicial();
};

function atualizarNomeInicial() {
    const nome = localStorage.getItem("nome");
    document.getElementById('bemvindo_texto').innerText = `Olá ${nome}! É um prazer ter você por aqui!`;
}
