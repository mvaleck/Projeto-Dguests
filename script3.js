document.addEventListener("DOMContentLoaded", function () {
    // Botão para sair
    var bSair = document.getElementById("bSair");
    if (bSair) {
      bSair.addEventListener("click", function () {
        window.location.href = 'index.html';
      });
    }
  
    // Botão para voltar pra home
    var bHome = document.getElementById("bHome");
    if (bHome) {
      bHome.addEventListener("click", function () {
        window.location.href = 'page1.html';
      });
    }
  
    // Função pra salvar dados
    window.salvarDados = function () {
      const nome = document.getElementById('nome').value;
      const dataNascimento = document.getElementById('dataNasc').value;
      const comidas = document.getElementById('txtFavsComidas').value;
      const fotoInput = document.querySelector('input[type="file"]');
      const foto = fotoInput.files[0];
  
      if (foto) {
        const reader = new FileReader();
  
        reader.onload = function () {
          const fotoBase64 = reader.result;
  
          localStorage.setItem('nome', nome);
          localStorage.setItem('dataNascimento', dataNascimento);
          localStorage.setItem('comidas', comidas);
          localStorage.setItem('foto', fotoBase64);
  
          mostrarDados();
        };
  
        reader.readAsDataURL(foto);
      } else {
        localStorage.setItem('nome', nome);
        localStorage.setItem('dataNascimento', dataNascimento);
        localStorage.setItem('comidas', comidas);
  
        mostrarDados();
      }
    };
  
    // Função pra mostrar os dados
    function mostrarDados() {
      const nome = localStorage.getItem('nome');
      const dataNascimento = localStorage.getItem('dataNascimento');
      const comidas = localStorage.getItem('comidas');
      const foto = localStorage.getItem('foto');
  
      if (nome || dataNascimento || comidas || foto) {
        document.getElementById('exibirNome').textContent = `${nome || ''}`;
        document.getElementById('exibirData').textContent = `Data de Nascimento: ${dataNascimento}`;
        document.getElementById('exibirComida').textContent = `Comida Favorita: ${comidas || ''}`;

        if (foto) {
          document.getElementById('exibirFoto').src = foto;
        } else {
          document.getElementById('exibirFoto').src = '';
        }
      
        document.getElementById('formulario').classList.add('hidden');
        document.getElementById('dadosSalvos').classList.remove('hidden');
      }
      
    }
  
    // Mostrar os dados salvos assim que a página carregar
    mostrarDados();
  
  });

  // Função pra editar os dados
function editar() {
    // Mostrar o formulário
    document.getElementById('formulario').classList.remove('hidden');
  
    // Esconder os dados salvos
    document.getElementById('dadosSalvos').classList.add('hidden');
  
    // Preencher os campos com os dados salvos
    document.getElementById('nome').value = localStorage.getItem('nome') || '';
    document.getElementById('dataNasc').value = localStorage.getItem('dataNascimento') || '';
    document.getElementById('txtFavsComidas').value = localStorage.getItem('comidas') || '';
  }
  
  