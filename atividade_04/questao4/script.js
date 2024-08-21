document.addEventListener('DOMContentLoaded', main);

function main() {
    var upload = document.getElementById('uploadImagem');
    upload.addEventListener('change', uploadHandler);

    var btnExpandir = document.getElementById('btnExpandir');
    btnExpandir.addEventListener('click', expandirHandler);
}

function uploadHandler() {
    let input = document.getElementById('uploadImagem');
    let imagem = input.files[0];
    let listImg = document.getElementById('listaImagens');
    ocultarItem('listaImagens');

    if (imagem) {
        let mensagemAviso = document.getElementById("mensagemAviso");
        if (mensagemAviso && !mensagemAviso.classList.contains("oculto")) {
            ocultarItem('mensagemAviso');
        }

        var reader = new FileReader();

        reader.onload = function(e) {
            var img = document.createElement('img');
            var novoItem = document.createElement('li');
            img.src = e.target.result;
            img.style.width = "200px";  // Ajuste opcional para o tamanho da imagem
            img.style.height = "auto";  // Mantém a proporção da imagem

            novoItem.appendChild(img);
            listImg.appendChild(novoItem);
        }

        reader.readAsDataURL(imagem);

        mostrarNomeImagem(imagem);
        mostrarItem('btnExpandir');
    }
}

function mostrarNomeImagem(imagem) {
    let listaImagens = document.getElementById('listaImagens');

    if (listaImagens.children.length === 0) {
        ocultarItem('mensagemAviso');
    }

    var li = document.createElement('li');
    li.textContent = imagem.name;
    listaImagens.appendChild(li);
}

function ocultarItem(idItem) {
    document.getElementById(idItem).classList.add("oculto");
}

function mostrarItem(idItem){
    document.getElementById(idItem).classList.remove("oculto");
}

function expandirHandler() {
    let btnExpandir = document.getElementById('btnExpandir');
    if (btnExpandir.innerHTML === "Expandir") {
        mostrarItem("listaImagens");
        btnExpandir.innerHTML = "Ocultar";
    } else {
        ocultarItem("listaImagens");
        btnExpandir.innerHTML = "Expandir";
    }
}