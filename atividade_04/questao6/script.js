document.addEventListener('DOMContentLoaded', main);

function main() {
    var btnEnviar = document.getElementById("enviarBtn");
    btnEnviar.addEventListener("click", enviarFormulario);
}

function enviarFormulario() {
    let listaCheckboxes = document.getElementsByName("redesSociais");
    let qtdSelecionados = [...listaCheckboxes].reduce((acc, item) => { return item.checked ? acc + 1 : acc }, 0);

    if (qtdSelecionados === 0) {
        exibirErro('mensagemErro', "Selecione ao menos uma rede social");
        return;	
    }

    let listaSelecionadas = document.createElement("ul");
    let divSelecionadas = document.getElementById("redesSelecionadas");

    listaCheckboxes.forEach(item => {
        if (item.checked) {
            let li = document.createElement("li");
            li.textContent = item.value;
            listaSelecionadas.appendChild(li);
        }
    });

    divSelecionadas.appendChild(listaSelecionadas);
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
