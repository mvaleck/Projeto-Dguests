document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('button'); 
    const emailField = document.querySelector('#email');
    const senhaField = document.querySelector('#senha');
    const emailError = document.querySelector('#emailError');
    const senhaError = document.querySelector('#senhaError');

    button.disabled = true;

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
        return emailRegex.test(email);
    }

    function validarFormulario() {
        const email = emailField.value;
        const senha = senhaField.value;
        let valido = true;

        if (!isValidEmail(email) && emailField.dataset.blurred) {
            emailError.textContent = "E-mail inválido. Use um formato correto (ex: email@dominio.com)";
            emailError.style.visibility = "visible";
            valido = false;
        } else {
            emailError.textContent = "";
            emailError.style.visibility = "hidden";
        }

        if (senha.length <= 6 && senhaField.dataset.blurred) {
            senhaError.textContent = "A senha deve ter mais de 6 caracteres.";
            senhaError.style.visibility = "visible";
            valido = false;
        } else {
            senhaError.textContent = "";
            senhaError.style.visibility = "hidden";
        }

        button.disabled = !valido;
    }

    emailField.addEventListener('blur', function () {
        emailField.dataset.blurred = true;
        validarFormulario();
    });

    senhaField.addEventListener('blur', function () {
        senhaField.dataset.blurred = true;
        validarFormulario();
    });

    emailField.addEventListener('input', validarFormulario);
    senhaField.addEventListener('input', validarFormulario);

    button.addEventListener('click', function (event) {
        event.preventDefault();

        const email = emailField.value; 
        const senha = senhaField.value;

        if (!isValidEmail(email) || senha.length <= 6) {
            alert("Corrija os erros antes de continuar!");
            return;
        }

        alert("Login realizado com sucesso!");
        window.location.href = 'page1.html'; // ou a página que você quiser
    });
});
