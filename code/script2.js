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

