document.addEventListener('DOMContentLoaded', main);

function main() {
    var moverParaDireitaBtn = document.getElementById("moverParaDireitaBtn");
    moverParaDireitaBtn.addEventListener("click", moverParaDireita);

    var moverParaEsquerdaBtn = document.getElementById("moverParaEsquerdaBtn");
    moverParaEsquerdaBtn.addEventListener("click", moverParaEsquerda);
    moverParaEsquerdaBtn.disabled = true;
}

function moverParaDireita() {
    let listaCarteira = document.getElementById('carteiraInvestimentos');
    let listaAtivos = document.getElementById('ativosDisponiveis');
    let ativosSelecionados = Array.from(listaAtivos.selectedOptions);
    var btnMoverParaDireita = document.getElementById("moverParaDireitaBtn");

    if (ativosSelecionados === null || ativosSelecionados.length === 0) {
        exibirErro("mensagemErro", "Selecione um ativo para mover");
        return;
    }

    for (let ativo of ativosSelecionados) {
        listaCarteira.appendChild(ativo);
    }

    if (listaAtivos.options.length === 0) {
        btnMoverParaDireita.disabled = true;
    }

    atualizarEstadoBotoes();
}

function moverParaEsquerda() {
    let listaCarteira = document.getElementById('carteiraInvestimentos');
    let listaAtivos = document.getElementById('ativosDisponiveis');
    let itensCarteiraSelecionados = Array.from(listaCarteira.selectedOptions);

    if (itensCarteiraSelecionados === null || itensCarteiraSelecionados.length === 0) {
        exibirErro("mensagemErro", "Selecione um ativo para mover");
        return;
    }

    for (let ativo of itensCarteiraSelecionados) {
        listaAtivos.appendChild(ativo);
    }

    atualizarEstadoBotoes();
}

function atualizarEstadoBotoes() {
    let listaCarteira = document.getElementById('carteiraInvestimentos');
    let listaAtivos = document.getElementById('ativosDisponiveis');
    let btnMoverParaEsquerda = document.getElementById('moverParaEsquerdaBtn');
    let btnMoverParaDireita = document.getElementById('moverParaDireitaBtn');

    btnMoverParaEsquerda.disabled = listaCarteira.options.length === 0;

    btnMoverParaDireita.disabled = listaAtivos.options.length === 0;
}

function exibirErro(id, msg){
    var campoErro = document.getElementById(id);
    campoErro.innerHTML = msg;

    toggleClassTemporario(campoErro, 'oculto', 3000)
}

function toggleClassTemporario(elemento, classe, tempo) {
    elemento.classList.remove(classe);
    setTimeout(function() {
        elemento.classList.add(classe);
    }, tempo);
}
