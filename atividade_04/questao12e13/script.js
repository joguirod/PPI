document.addEventListener('DOMContentLoaded', main);

const tarefas = [];

let idCounter = 0;

function main() {
    var adicionarBtn = document.getElementById("adicionarBtn");
    adicionarBtn.addEventListener("click", adicionarTarefa);
}

function adicionarTarefa() {
    const descricao = document.getElementById("descricaoTarefa").value;

    if (descricao.trim() === "") {
        exibirErro('mensagemErro', "Descrição da tarefa: Preenchimento obrigatório");
        return;
    }

    const tarefa = criarTarefa(descricao);
    tarefas.push(tarefa);

    adicionarLinha('tabelaTarefas', tarefa);
}

function criarTarefa(descricao) {
    const dataInicio = new Date();
    let tarefa = {
        id: idCounter++,
        descricao: descricao,
        dataInicio: dataInicio,
        dataConclusao: ""
    };

    return tarefa;
}

function criarLinha(idTabela, idTarefa) {
    const tabela = document.getElementById(idTabela).getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();
    novaLinha.setAttribute('data-id', idTarefa);

    return novaLinha;
}

function inserirCelula(linha, valor) {
    const celula = linha.insertCell();
    celula.innerHTML = valor;
}

function adicionarLinha(idTabela, tarefa) {
    const novaLinha = criarLinha(idTabela, tarefa.id);

    for(const key in tarefa) {
        inserirCelula(novaLinha, tarefa[key]);
    }

    adicionarAcoes(novaLinha, tarefa.id);
}

function adicionarAcoes(linha, idTarefa) {
    const acoes = linha.insertCell();
    let botaoConcluir = criarAcao("Concluir", 'concluirBtn', () => concluirTarefa(idTarefa));
    let botaoReabrir = criarAcao("Reabrir", 'reabrirBtn', () => reabrirTarefa(idTarefa));
    let botaoExcluir = criarAcao("Excluir", 'excluirBtn', () => excluirTarefa(idTarefa));
    acoes.appendChild(botaoConcluir);
    acoes.appendChild(botaoReabrir);
    acoes.appendChild(botaoExcluir);
}

function criarAcao(nomeAcao, classe, funcao) {
    let botaoAcao = document.createElement("button");
    botaoAcao.textContent = nomeAcao;
    botaoAcao.onclick = funcao;
    botaoAcao.classList.add(classe);

    return botaoAcao
}

function concluirTarefa(idTarefa) {
    const linha = obterLinhaQuerySelector("tabelaTarefas", idTarefa);

    if (isTarefaConcluida(linha)) {
        exibirErro('mensagemErro', "Tarefa já concluída");
        return;
    }

    const dataConclusao = new Date();
    linha.cells[3].innerHTML = dataConclusao;
    const index = tarefas.findIndex(tarefa => tarefa.id === idTarefa)
    tarefas[index].dataConclusao = dataConclusao;
}

function excluirTarefa(idTarefa) {
    const linha = obterLinhaQuerySelector("tabelaTarefas", idTarefa);

    if (isTarefaConcluida(linha)) {
        exibirErro('mensagemErro', "Tarefa concluída não pode ser excluída");  
        return;
    }

    const confirma = confirm("Deseja realmente excluir a tarefa?");
    
    if(confirma) {
        tarefas.splice(tarefas.findIndex(tarefa => tarefa.id === idTarefa), 1);
        linha.remove();
    }
}

function reabrirTarefa(idTarefa) {
    const linha = obterLinhaQuerySelector("tabelaTarefas", idTarefa);
    linha.cells[3].innerHTML = "";
    const index = tarefas.findIndex(tarefa => tarefa.id === idTarefa)
    tarefas[index].dataConclusao = "";
}

function isTarefaConcluida(linha) {
    return linha.cells[3].innerHTML !== "";
}

function obterLinhaQuerySelector(idTabela, idTarefa) {
    let tabelaTarefas = document.getElementById(idTabela);
    let linha = tabelaTarefas.querySelector(`[data-id="${idTarefa}"]`);
    return linha;
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