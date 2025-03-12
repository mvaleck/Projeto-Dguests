document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('button'); 
    const emailField = document.querySelector('#email');
    const senhaField = document.querySelector('#senha');

    // Adiciona um evento de clique no botão
    button.addEventListener('click', function (event) {
    event.preventDefault();;

        const email = emailField.value; 
        const senha = senhaField.value;

        // Validação simples
        if (email === "" || senha === "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            alert("E-mail: " + email + "\nSenha: " + senha);
        }
    });
});
