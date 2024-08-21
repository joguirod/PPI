document.addEventListener('DOMContentLoaded', main);

function main() {
    document.getElementById('botaoErro').addEventListener('click', function() {
        exibirErro("mensagemErro", "Ai não, errou")
    });
    
    var botaoExibir = document.getElementById('botaoExibir');
    botaoExibir.addEventListener('click', exibirComValidacao);

    var botaoCalcular = document.getElementById('botaoCalcular');
    botaoCalcular.addEventListener('click', calcularEngajamento);

};

function exibirErro(id, msg){
    var campoErro = document.getElementById(id);
    campoErro.innerHTML = msg;

    campoErro.classList.remove('oculto');
    setTimeout(function() {
        campoErro.classList.add('oculto');
    }, 3000);
}
