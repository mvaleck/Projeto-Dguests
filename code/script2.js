document.getElementById("botaoLupa").addEventListener("click", function() {
    var barra = document.querySelector(".pesquisa");

    if (barra.style.opacity === "0" || barra.style.opacity === "") {
        barra.style.opacity = "1";
        barra.style.visibility = "visible";
    } else {
        barra.style.opacity = "0";
        barra.style.visibility = "hidden";
    }
});

/*
se eu quisse adicionar o evento CLICK no html assim:]
<button id="botaoLupa" class="botaoMenu" onclick="togglePesquisa()">
    <img src="iconLUPA.png" alt="">
</button>

eu teria que usar a função e chamada de function togglePesquisar ()
ela ficaria assim:

function togglePesquisa() {
    var barra = document.querySelector(".pesquisa");

    if (barra.style.opacity === "0" || barra.style.opacity === "") {
        barra.style.opacity = "1";
        barra.style.visibility = "visible";
    } else {
        barra.style.opacity = "0";
        barra.style.visibility = "hidden";
    }
}

 */ 
document.addEventListener('DOMContentLoaded', function () { //faz o JavaScript esperar o carregamento completo do HTML antes de executar o código
    const receitas = document.querySelectorAll('.individual'); //pega todas as divs que possuem a classe .individual (ou seja, cada comida).
    const modal = document.getElementById('modal');
    const fecharModal = document.querySelector('.fechar');

    // Descrições reais para cada receita, 
    const descricoes = {
        "Panqueca": "Ingredientes: Farinha, leite, ovos... <br> Modo de preparo: Misture tudo...",
        "Geleia de Frutas": "Ingredientes: Morango, açúcar... <br> Modo de preparo: Cozinhe as frutas...",
        "Pão de Queijo": "Ingredientes: Polvilho, queijo... <br> Modo de preparo: Misture e asse...",
        "Macarrão à Bolonhesa": "Ingredientes: Macarrão, carne moída... <br> Modo de preparo: Cozinhe o molho...",
        "Risoto de Camarão": "Ingredientes: Arroz arbóreo, camarão... <br> Modo de preparo: Refogue e adicione o caldo...",


    };

    function abrirModal(titulo, descricao) {
        const modalTitulo = document.getElementById('modal-titulo'); 
        const modalDescricao = document.getElementById('modal-descricao'); 
        
        modalTitulo.textContent = titulo;
        modalDescricao.innerHTML = descricao; // Usamos innerHTML para permitir a quebra de linha com <br>

        modal.classList.add('ativo');
    }

    function fecharModalFunção() {
        modal.classList.remove('ativo');
    }

    receitas.forEach(function (receita) {
        const titulo = receita.querySelector('h3').textContent;
        const descricao = descricoes[titulo] || "Descrição não encontrada.";

        receita.addEventListener('click', function () {
            abrirModal(titulo, descricao);
        });
    });

    fecharModal.addEventListener('click', function () {
        fecharModalFunção();
    });
});










