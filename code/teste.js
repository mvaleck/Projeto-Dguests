// CÓDIGO ORGANIZADO COM AJUDA DO CHAT (17.03.25), OLHAR DEPOIS


// Função para mostrar/ocultar a barra de pesquisa
function togglePesquisa() {
    const barra = document.querySelector(".pesquisa");
    const isVisible = barra.style.opacity === "1";
    barra.style.opacity = isVisible ? "0" : "1";
    barra.style.visibility = isVisible ? "hidden" : "visible";
}

// Função para rolar a página para o topo ao clicar na lupa
function rolarParaTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Função para abrir o modal
function abrirModal(titulo, descricao) {
    const modal = document.getElementById('modal');
    const modalTitulo = document.getElementById('modal-titulo'); 
    const modalDescricao = document.getElementById('modal-descricao'); 
    modalTitulo.textContent = titulo;
    modalDescricao.innerHTML = descricao; // Usamos innerHTML para permitir a quebra de linha
    modal.classList.add('ativo');
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('ativo');
}

// Função para exibir a mensagem "Receita não encontrada"
function exibirMensagemErro(termoPesquisa, receitas) {
    const mensagemNaoEncontrada = document.getElementById('mensagemNaoEncontrada');
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
}

// Função principal que agrega todas as interações
document.addEventListener('DOMContentLoaded', function () {
    // Evento de clique na lupa
    document.getElementById("botaoLupa").addEventListener("click", function() {
        togglePesquisa();
        rolarParaTopo();
    });

    // Evento de clique nas receitas para abrir o modal
    const receitas = document.querySelectorAll('.individual');
    const modal = document.getElementById('modal');
    const fecharModalBtn = document.querySelector('.fechar');
    const descricoes = { /* Descrições das receitas */ };

    receitas.forEach(function (receita) {
        const titulo = receita.querySelector('h3').textContent;
        const descricao = descricoes[titulo] || "Descrição não encontrada.";
        receita.addEventListener('click', function () {
            abrirModal(titulo, descricao);
        });
    });

    fecharModalBtn.addEventListener('click', fecharModal);

    // Evento da barra de pesquisa
    const inputPesquisa = document.querySelector('.pesquisa input');
    inputPesquisa.addEventListener('input', function () {
        const termoPesquisa = inputPesquisa.value.toLowerCase().trim();
        exibirMensagemErro(termoPesquisa, receitas);
    });
});
