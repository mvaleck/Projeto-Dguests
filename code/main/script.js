document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('button'); 
    const emailField = document.querySelector('#email');
    const senhaField = document.querySelector('#senha');
    const emailError = document.querySelector('#emailError');
    const senhaError = document.querySelector('#senhaError');

    // Desativa o botão no início
    button.disabled = true;

    // Função para validar e-mail
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    // Função para validar o formulário
    function validarFormulario() {
        const email = emailField.value;
        const senha = senhaField.value;
        let valido = true;

        // Se o e-mail não for válido e o usuário já saiu do campo, exibe erro
        if (!isValidEmail(email) && emailField.dataset.blurred) {
            emailError.textContent = "E-mail inválido. Use um formato correto (ex: email@dominio.com)";
            emailError.style.display = "block";
            valido = false;
        } else {
            emailError.style.display = "none";
        }

        // Se a senha for menor ou igual a 6 e o usuário já saiu do campo, exibe erro
        if (senha.length <= 6 && senhaField.dataset.blurred) {
            senhaError.textContent = "A senha deve ter mais de 6 caracteres.";
            senhaError.style.display = "block";
            valido = false;
        } else {
            senhaError.style.display = "none";
        }

        // Habilita ou desabilita o botão
        button.disabled = !valido;
    }

    // Quando o usuário sai do campo, marcamos que ele foi tocado
    emailField.addEventListener('blur', function () {
        emailField.dataset.blurred = true;
        validarFormulario();
    });

    senhaField.addEventListener('blur', function () {
        senhaField.dataset.blurred = true;
        validarFormulario();
    });

    // Para garantir que o formulário atualize corretamente ao digitar
    emailField.addEventListener('input', validarFormulario);
    senhaField.addEventListener('input', validarFormulario);

    // Evento de clique no botão
    button.addEventListener('click', function (event) {
        event.preventDefault();

        const email = emailField.value; 
        const senha = senhaField.value;

        if (!isValidEmail(email) || senha.length <= 6) {
            alert("Corrija os erros antes de continuar!");
            return;
        }

        alert("Login realizado com sucesso!");
        window.location.href = 'page1.html'
    });
});
