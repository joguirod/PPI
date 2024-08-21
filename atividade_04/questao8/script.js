document.addEventListener('DOMContentLoaded', main);

function main() {
    var btnAdicionar = document.getElementById("btnAdicionar");
    btnAdicionar.addEventListener("click", adicionarHashtag);
}

function adicionarHashtag() {
    let hashtags = document.getElementById("hashtags");
    let inputHashtag = document.getElementById("inputHashtag").value;
    let novoItem = document.createElement("option");
    
    if (inputHashtag === "") {
        exibirErro("erroHashtag", "Digite uma hashtag para adicionar");
        return;
    } else if (hashtagJaExiste(hashtags.options, inputHashtag)) {
        exibirErro("erroHashtag", "Hashtag já adicionada");
        return;
    } else if (inputHashtag.length < 2) {
        exibirErro("erroHashtag", "Hashtag deve ter no mínimo 2 caracteres");
        return;
    } else if (hashtags.options.length === 5) {
        exibirErro("erroHashtag", "Número máximo de hashtags atingido");
        return;
    }

    novoItem.text = inputHashtag;
    hashtags.appendChild(novoItem);
}

function hashtagJaExiste(hashtags, hashtag) {
    for (let i = 0; i < hashtags.length; i++) {
        if (hashtags[i].value === hashtag) {
            return true;
        }
    }

    return false;
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
