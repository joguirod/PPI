document.addEventListener('DOMContentLoaded', main);

function main() {
    var botaoCalcular = document.getElementById("botaoCalcular");
    botaoCalcular.addEventListener("click", calcularEngajamento);
};

function calcularEngajamento() {
    let quantidadeInteracoes = Number(document.getElementById("quantidadeInteracoes").value);
    let quantidadeVisualizacoes = Number(document.getElementById("quantidadeVisualizacoes").value);
    
    if (quantidadeInteracoes.toString() === "" || quantidadeVisualizacoes.toString() === "") {
        exibirErro("mensagemErro" , "Ambos os campos devem ser preenchidos.")
    } else if (quantidadeVisualizacoes < quantidadeInteracoes) {
        exibirErro("mensagemErro", "Número de visualizações não pode ser menor"
            + " que o número de interações");
        limparElemento("quantidadeInteracoes");
        limparElemento("quantidadeVisualizacoes");
        return;
    }

    let engajamento = (quantidadeInteracoes/quantidadeVisualizacoes)*100;
    definirConteudo("valorEngajamento", `engajamento de ${engajamento.toFixed(2)}%`);
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

function definirConteudo(id, conteudo) {
    document.getElementById(id).innerHTML = conteudo;
}

function limparElemento(id) {
    document.getElementById(id).value = "";
}