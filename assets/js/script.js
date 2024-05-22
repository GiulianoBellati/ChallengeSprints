document.addEventListener('DOMContentLoaded', function () {
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const resultMessage = document.createElement('div');
    resultMessage.classList.add('resultado-email');
    nomeInput.parentElement.appendChild(resultMessage);

    nomeInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const nome = nomeInput.value.trim();
            const email = emailInput.value.trim();
            const nomePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (nomePattern.test(nome) && emailPattern.test(email)) {
                resultMessage.textContent = 'Você está inscrito!';
                resultMessage.style.color = 'green';
            } else if (!nomePattern.test(nome) && !emailPattern.test(email)) {
                resultMessage.textContent = 'Nome e email inválidos!';
                resultMessage.style.color = 'red';
                alert('Nome e email inválidos! Por favor, corrija os campos e tente novamente.');
            } else if (!nomePattern.test(nome)) {
                resultMessage.textContent = 'Nome inválido!';
                resultMessage.style.color = 'red';
                alert('Nome inválido! Por favor, corrija o campo de nome e tente novamente.');
            } else {
                resultMessage.textContent = 'Email inválido!';
                resultMessage.style.color = 'red';
                alert('Email inválido! Por favor, corrija o campo de email e tente novamente.');
            }

            event.preventDefault();
        }
    });

    emailInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const nome = nomeInput.value.trim();
            const email = emailInput.value.trim();
            const nomePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (nomePattern.test(nome) && emailPattern.test(email)) {
                resultMessage.textContent = 'Você está inscrito!';
                resultMessage.style.color = 'green';
            } else if (!nomePattern.test(nome) && !emailPattern.test(email)) {
                resultMessage.textContent = 'Nome e email inválidos!';
                resultMessage.style.color = 'red';
                alert('Nome e email inválidos! Por favor, corrija os campos e tente novamente.');
            } else if (!nomePattern.test(nome)) {
                resultMessage.textContent = 'Nome inválido!';
                resultMessage.style.color = 'red';
                alert('Nome inválido! Por favor, corrija o campo de nome e tente novamente.');
            } else {
                resultMessage.textContent = 'Email inválido!';
                resultMessage.style.color = 'red';
                alert('Email inválido! Por favor, corrija o campo de email e tente novamente.');
            }

            event.preventDefault();
        }
    });
});