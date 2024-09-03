function voltar() {
    window.location.href = 'servicos.html';

}

function desbloquear(){
    const senha = document.getElementById('senha');
    const senhaInput = senha.value;
     
    if (senhaInput === "3589"){
         window.location.href = 'saldo.html'; 
    } 
    else {
        senha.style.border = "red solid 2px";
    }
}

