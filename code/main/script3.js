document.addEventListener("DOMContentLoaded", function () {
    // Botão para ir pro login de novo
    var bSair = document.getElementById("bSair");
    if (bSair) {
        bSair.addEventListener("click", function () {
            window.location.href = 'index.html'
        });
    }
//botão que volta pra página principal
    var bHome = document.getElementById("bHome");
    if (bHome) {
        bHome.addEventListener("click", function () {
            window.location.href = 'page1.html'
        });
    }

});