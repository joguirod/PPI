document.addEventListener('DOMContentLoaded', main);

function main() {
    var btnAdicionar = document.getElementById("btnAdicionar");
    btnAdicionar.addEventListener("click", adicionarHashtag);
}

function adicionarHashtag() {
    let hashtags = document.getElementById("hashtags");
    let inputHashtag = document.getElementById("inputHashtag");
    let novoItem = document.createElement("option");
    novoItem.textContent = inputHashtag.value;
    hashtags.appendChild(novoItem);

    inputHashtag.value = "";
}

/*
Implemente uma página web onde o usuário pode digitar uma hashtag em uma
caixa de texto e clicar em um botão para adicioná-la a uma lista de hashtags
populares. A lista deve ser exibida em um componente select com o atributo
size=5, permitindo que o usuário visualize até cinco hashtags de uma vez.
Para implementar essa funcionalidade, utilize a função
document.createElement() para criar tags option e a função appendChild para
adicionar a opção criada ao select.
*/