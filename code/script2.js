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
    "Panqueca": "Ingredientes: 1 xícara de farinha de trigo, 1/2 de leite, 1 ovo, 1 colher de sopa de açúcar, 1 colher de chá de fermento em pó... <br><br> Modo de preparo: Misture todos os ingredientes até formar uma massa homogênea. Aqueça uma frigideira e despeje a massa formando círculos pequenos. Cozinhe por 2 minutos de cada lado ou até dourar.",
    "Geleia de Frutas": "Ingredientes: 2 xícaras de frutas (morango, amora, etc.), 1 xícara de açúcar, suco de 1 limão. <br><br> Modo de preparo: Cozinhe as frutas com o açúcar e o limão até obter uma consistência de geleia. Deixe esfriar antes de servir.",
    "Pão de Queijo": "Ingredientes: 2 xícaras de polvilho doce, 1 xícara de queijo ralado, 1/2 xícara de leite, 1/4 xícara de óleo, 1 ovo. <br><br> Modo de preparo: Misture todos os ingredientes até formar uma massa. Modele bolinhas e asse a 180°C por 20 minutos ou até dourar.",
    "Macarrão à Bolonhesa": "Ingredientes: 250g de macarrão, 300g de carne moída, 1 lata de molho de tomate, 1 cebola picada, 2 dentes de alho picados. <br><br> Modo de preparo: Cozinhe o macarrão. Refogue a carne moída com a cebola e o alho, adicione o molho de tomate e cozinhe por 10 minutos. Sirva o molho sobre o macarrão.",
    "Risoto de Camarão": "Ingredientes: 1 xícara de arroz para risoto, 300g de camarão, 1 cebola, 1/2 xícara de vinho branco, 4 xícaras de caldo de legumes.<br><br> Modo de preparo: Refogue a cebola, adicione o arroz e o vinho. Vá acrescentando o caldo aos poucos até o arroz ficar al dente. Finalize com os camarões cozidos.",
    "Carne de Panela": "Ingredientes: 500g de carne de panela, 2 batatas, 2 cenouras, 1 cebola, 2 dentes de alho, 1 folha de louro. <br><br>Modo de prepraro: Cozinhe a carne com a cebola, alho e folha de louro. Adicione as batatas e cenouras e cozinhe até ficarem macias.",
	"Lasanha": "Ingredientes: 500g de massa para lasanha, 300g de carne moída, 1 molho de tomate, 300g de queijo mussarela, 1 cebola, 1 dente de alho.<br><br> Modo de prepraro: Cozinhe a massa. Refogue a carne com cebola e alho, adicione o molho de tomate. Monte a lasanha alternando camadas de massa, molho e queijo. Asse a 180°C por 30 minutos.",
	"Feijoada": "Ingredientes:500g de feijão preto, 300g de carne seca, 200g de linguiça, 1 cebola, 2 dentes de alho. <br><br> Modo de prepraro: Cozinhe o feijão com as carnes e a cebola. Refogue o alho e misture ao feijão. Cozinhe até todos os ingredientes ficarem macios.",
	"Filé ao Molho Madeira": "Ingredientes: 500g de filé mignon, 1 xícara de molho madeira, 1 colher de sopa de manteiga, 1 cebola. <br><br> Modo de prepraro: Grelhe o filé mignon e reserve. Refogue a cebola na manteiga, adicione o molho madeira e cozinhe por alguns minutos. Sirva o molho sobre o filé.",


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










