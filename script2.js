// barra de pesquisa interativa
document.getElementById("botaoLupa").addEventListener("click", function() {
    var barra = document.querySelector(".pesquisa");

    if (barra.style.opacity === "0" || barra.style.opacity === "") {
        barra.style.opacity = "1";
        barra.style.visibility = "visible";

        // Usar setTimeout para garantir que o foco seja aplicado após a visibilidade ser ajustada
        setTimeout(function() {
            barra.querySelector('input').focus(); // Foco no campo de pesquisa
        }, 500); // Ajuste o tempo conforme necessário, dependendo da animação
    } else {
        barra.style.opacity = "0";
        barra.style.visibility = "hidden";
    }

    // função que faz a tela rolar suavemente quando clica no botão LUPA
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
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
    "Panqueca": "<b>Ingredientes:</b> 1 xícara de farinha de trigo, 1/2 de leite, 1 ovo, 1 colher de sopa de açúcar, 1 colher de chá de fermento em pó... <br><br> <b>Modo de Preparo:</b> Misture todos os ingredientes até formar uma massa homogênea. Aqueça uma frigideira e despeje a massa formando círculos pequenos. Cozinhe por 2 minutos de cada lado ou até dourar.",
    "Geleia de Frutas": "<b>Ingredientes:</b> 2 xícaras de frutas (morango, amora, etc.), 1 xícara de açúcar, suco de 1 limão. <br><br> <b>Modo de Preparo:</b> Cozinhe as frutas com o açúcar e o limão até obter uma consistência de geleia. Deixe esfriar antes de servir.",
    "Pão de Queijo": "<b>Ingredientes:</b> 2 xícaras de polvilho doce, 1 xícara de queijo ralado, 1/2 xícara de leite, 1/4 xícara de óleo, 1 ovo. <br><br> <b>Modo de Preparo:</b> Misture todos os ingredientes até formar uma massa. Modele bolinhas e asse a 180°C por 20 minutos ou até dourar.",
    "Macarrão à Bolonhesa": "<b>Ingredientes:</b> 250g de macarrão, 300g de carne moída, 1 lata de molho de tomate, 1 cebola picada, 2 dentes de alho picados. <br><br> <b>Modo de Preparo:</b> Cozinhe o macarrão. Refogue a carne moída com a cebola e o alho, adicione o molho de tomate e cozinhe por 10 minutos. Sirva o molho sobre o macarrão.",
    "Risoto de Camarão": "<b>Ingredientes:</b> 1 xícara de arroz para risoto, 300g de camarão, 1 cebola, 1/2 xícara de vinho branco, 4 xícaras de caldo de legumes.<br><br> <b>Modo de Preparo:</b> Refogue a cebola, adicione o arroz e o vinho. Vá acrescentando o caldo aos poucos até o arroz ficar al dente. Finalize com os camarões cozidos.",
    "Carne de Panela": "<b>Ingredientes:</b> 500g de carne de panela, 2 batatas, 2 cenouras, 1 cebola, 2 dentes de alho, 1 folha de louro. <br><br> <b>Modo de Preparo:</b> Cozinhe a carne com a cebola, alho e folha de louro. Adicione as batatas e cenouras e cozinhe até ficarem macias.",
	"Lasanha": "<b>Ingredientes:</b> 500g de massa para lasanha, 300g de carne moída, 1 molho de tomate, 300g de queijo mussarela, 1 cebola, 1 dente de alho.<br><br> <b>Modo de Preparo:</b> Cozinhe a massa. Refogue a carne com cebola e alho, adicione o molho de tomate. Monte a lasanha alternando camadas de massa, molho e queijo. Asse a 180°C por 30 minutos.",
	"Feijoada": "<b>Ingredientes:</b> 500g de feijão preto, 300g de carne seca, 200g de linguiça, 1 cebola, 2 dentes de alho. <br><br> <b>Modo de Preparo:</b> Cozinhe o feijão com as carnes e a cebola. Refogue o alho e misture ao feijão. Cozinhe até todos os ingredientes ficarem macios.",
	"Filé ao Molho Madeira": "<b>Ingredientes:</b> 500g de filé mignon, 1 xícara de molho madeira, 1 colher de sopa de manteiga, 1 cebola. <br><br> <b>Modo de Preparo:</b> Grelhe o filé mignon e reserve. Refogue a cebola na manteiga, adicione o molho madeira e cozinhe por alguns minutos. Sirva o molho sobre o filé.",
    "Tartare": "<b>Ingredientes:</b> 200g de filé mignon, 1 cebola roxa, 1 colher de chá de mostarda Dijon, 1 colher de sopa de azeite, sal e pimenta a gosto. <br><br> <b>Modo de Preparo:</b> Pique o filé mignon bem pequeno e misture com a cebola roxa picada. Adicione a mostarda, o azeite, o sal e a pimenta. Misture bem e sirva frio.",
	"Hambúrguer": "<b>Ingredientes:</b> 500g de carne moída da sua preferência, pão de hambúrguer, queijo, alface, tomate, maionese. <br><br> <b>Modo de Preparo:</b> Faça bolinhas com a carne moída em formato de hambúrguer, depois leve para uma frigideira e frite até o ponto da carne de preferência. Depois, adicione o queijo e assim que estiver pronto, deixe ele descansar por 3 minutos. Enquanto isso vá montando seu pão com a salada, tomate e maionese. Finalize com a carne. ",
	"Salada Ceaser": "<b>Ingredientes:</b> Alface americana, croutons, 100g de peito de frango grelhado, 50g de queijo parmesão, molho Caesar a gosto. <br><br> <b>Modo de Preparo:</b> Corte a alface e adicione os croutons, o frango desfiado e o queijo parmesão. Misture tudo e regue com o molho Caesar.",
	"Pizza": "<b>Ingredientes:</b> 500g de farinha de trigo, 1 colher de sopa de fermento biológico seco, 1 xícara de água morna, 2 colheres de sopa de azeite, 200g de molho de tomate, 200g de queijo mussarela, coberturas a gosto. <br><br> <b>Modo de Preparo:</b> Misture a farinha, o fermento, a água e o azeite até formar a massa. Deixe crescer por 1 hora. Modele a pizza, coloque o molho de tomate, queijo e as coberturas desejadas. Asse por 20 minutos a 180°C.",
	"Guacamole": "<b>Ingredientes:</b> abacates maduros, 1 tomate, 1 cebola roxa, suco de 1 limão, coentro a gosto, sal e pimenta. <br><br> <b>Modo de Preparo:</b> Amasse o abacate e misture com os outros ingredientes picados. Tempere com sal, pimenta e limão. Sirva com tortilhas.",
	"Brownie": "<b>Ingredientes:</b> 200g de chocolate meio amargo, 100g de manteiga, 1 xícara de açúcar, 2 ovos, 1/2 xícara de farinha de trigo, 1 colher de chá de essência de baunilha. <br><br> <b>Modo de Preparo:</b> Derreta o chocolate e a manteiga. Misture com o açúcar, ovos e baunilha. Acrescente a farinha e mexa até incorporar. Asse em forma untada a 180°C por 20-25 minutos.",

    //bebidas
    "Lagoa Azul": "<b>Ingredientes:</b> Vodka (50ml), Curaçau Blue (25ml), Suco de limão (30ml), Refrigerante de limão (completar), Gelo. <br><br> <b>Modo de Preparo:</b> m um copo alto com gelo, adicione a vodka, o curaçau blue e o suco de limão. Complete com o refrigerante de limão e misture levemente.",
	"Aperol Spritz": "<b>Ingredientes:</b> Aperol (50ml), Espumante (100ml), Água com gás (50ml), Gelo, Fatia de laranja. <br><br> <b>Modo de Preparo:</b> Em uma taça com gelo, adicione o Aperol, o espumante e a água com gás. Misture suavemente e decore com uma fatia de laranja.",
	"Cosmopolitan": "<b>Ingredientes:</b> Vodka (45ml), Triple sec (15ml), Suco de cranberry (30ml), Suco de limão (15ml), Gelo. <br><br> <b>Modo de Preparo:</b> Em uma coqueteleira com gelo, adicione todos os ingredientes e bata bem. Coe para uma taça de martini e decore com uma casca de limão.",
	"Sangria": "<b>Ingredientes:</b> Vinho tinto (500ml), Suco de laranja (100ml), Licor de laranja (50ml), Frutas picadas (laranja, limão, maçã), Refrigerante de limão (completar), Gelo. <br><br> <b>Modo de Preparo:</b> Em uma jarra, misture o vinho, o suco de laranja, o licor e as frutas. Deixe gelar por pelo menos 30 minutos. Antes de servir, complete com refrigerante de limão e adicione gelo.",
	"Negroni": "<b>Ingredientes:</b> Gin (30ml), Vermute tinto (30ml), Campari (30ml), Gelo, Casca de laranja para decorar. <br><br> <b>Modo de Preparo:</b> Em um copo baixo com gelo, adicione o gin, o vermute e o Campari. Misture suavemente e finalize com uma casca de laranja.",
	"Sex On The Beach": "<b>Ingredientes:</b> Vodka (50ml), Licor de pêssego (25ml), Suco de laranja (75ml), Suco de cranberry (75ml), Gelo. <br><br> <b>Modo de Preparo:</b> Em um copo alto com gelo, adicione a vodka, o licor de pêssego e o suco de laranja. Misture e adicione suavemente o suco de cranberry para um efeito degradê.",
	"Pina Colada": "<b>Ingredientes:</b> Rum branco (50ml), Leite de coco (50ml), Suco de abacaxi (100ml), Gelo, Fatia de abacaxi para decorar. <br><br> <b>Modo de Preparo:</b> Bata todos os ingredientes no liquidificador até ficar cremoso. Sirva em um copo alto e decore com uma fatia de abacaxi.",
	"Frozen Margarita": "<b>Ingredientes:</b> Tequila (50ml), Triple sec (25ml), Suco de limão (50ml), Açúcar (1 colher de sopa), Gelo, Sal para a borda do copo. <br><br> <b>Modo de Preparo:</b> Bata todos os ingredientes no liquidificador até obter uma textura frozen. Passe limão na borda do copo e mergulhe no sal. Sirva imediatamente.",	
	"Caipirinha": "<b>Ingredientes:</b> Cachaça (50ml), Fruta da sua preferência (100g), Açúcar (2 colheres de chá), Gelo <br><br> <b>Modo de Preparo:</b> Corte a fruta em pedaços e amasse com o açúcar no copo. Adicione gelo e a cachaça, misture bem e sirva."

    

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

// function para a barra de pesquisa filtrar as letras,palavras chaves contidas no html
document.addEventListener('DOMContentLoaded', function () {
    const receitas = document.querySelectorAll('.individual'); // Agora sempre pega os elementos corretamente
    const inputPesquisa = document.querySelector('.pesquisa input');

    inputPesquisa.addEventListener('input', function () {
        const termoPesquisa = inputPesquisa.value.toLowerCase();
        
        receitas.forEach(receita => {
            const titulo = receita.querySelector('h3').textContent.toLowerCase();
            receita.style.display = titulo.includes(termoPesquisa) ? 'block' : 'none';
        });
    });
});

//MENSAGEM RECEITA NÃO ECONTRADA
document.addEventListener('DOMContentLoaded', function () {
    const receitas = document.querySelectorAll('.individual');
    const inputPesquisa = document.querySelector('.pesquisa input');
    const mensagemNaoEncontrada = document.getElementById('mensagemNaoEncontrada'); // Pegando a div com a mensagem

    inputPesquisa.addEventListener('input', function () {
        const termoPesquisa = inputPesquisa.value.toLowerCase().trim();
        let encontrou = false;

        receitas.forEach(receita => {
            const titulo = receita.querySelector('h3').textContent.toLowerCase();
            if (titulo.includes(termoPesquisa)) {
                receita.style.display = 'block'; // Exibe a receita que corresponde
                encontrou = true;
            } else {
                receita.style.display = 'none'; // Esconde a receita que não corresponde
            }
        });

        // Exibe ou esconde a mensagem de "Receita não encontrada"
        if (!encontrou && termoPesquisa !== "") {
            mensagemNaoEncontrada.innerHTML = '<br> Receita não encontrada!';
            mensagemNaoEncontrada.style.display = 'block'; // Exibe a mensagem
        } else {
            mensagemNaoEncontrada.style.display = 'none'; // Esconde a mensagem
        }
    });
});

// botoes que mudam de uma página pra outra
document.addEventListener("DOMContentLoaded", function () {
    // Botão para ir para a página de drinks
    var botaoVai = document.getElementById("botaoVai");
    if (botaoVai) {
        botaoVai.addEventListener("click", function () {
            window.location.href = "pageDrinks.html";
            
        });
    }

    // Botão para voltar para a página 1
    var botaoVolta = document.getElementById("botaoVolta");
    if (botaoVolta) {
        botaoVolta.addEventListener("click", function () {
            window.location.href = "page1.html";
        });
    }

    var botaoPerfil = document.getElementById('botaoPerfil')
    if (botaoPerfil) {
        botaoPerfil.addEventListener('click', function () {
            window.location.href = 'perfil.html'
//quero mudar a cor do menu quando clicar aqui, depoisss 
        });
    }


});

 



