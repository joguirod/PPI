document.addEventListener('DOMContentLoaded', main);

function main() {
    var botaoExibir = document.getElementById('botaoExibir');
    botaoExibir.addEventListener('click', exibirComValidacao);
};

function exibirErro(id, msg){
    var campoErro = document.getElementById(id);
    campoErro.innerHTML = msg;

    campoErro.classList.remove('oculto');
    setTimeout(function() {
        campoErro.classList.add('oculto');
    }, 3000);
}

function exibirComValidacao() {
    var conteudo = document.getElementById('caixaDeTexto').value;

    if (conteudo.trim() === "") {
        exibirErro("mensagemErro", "Campo vazio");
    } else {
        definirConteudo("conteudo", conteudo);
    }
}

function definirConteudo(id, conteudo) {
    document.getElementById(id).innerHTML = conteudo;
}