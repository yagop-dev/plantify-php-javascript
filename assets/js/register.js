const form = document.getElementById('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch('../assets/php/register.php', {
        method: 'POST',
        body: formData
    });

    const inputs = document.querySelectorAll('INPUT')

    inputs.forEach((input) => {
        input.value = ''
    })

    const data = await response.json();

    document.querySelectorAll('.error').forEach(span => {
        span.textContent = '';
        span.style.display = 'none';
    });

    const successSpan = document.querySelector('.success');
    successSpan.textContent = '';
    successSpan.style.display = 'none';

    if (data.name) {
        const span = document.querySelector('.error-nome');
        span.textContent = data.name;
        span.style.display = 'block';
    }

    if (data.email) {
        const span = document.querySelector('.error-email');
        span.textContent = data.email;
        span.style.display = 'block';
    }

    if (data.senha) {
        const span = document.querySelector('.error-senha');
        span.textContent = data.senha;
        span.style.display = 'block';
    }

    if (data.dataNasc) {
        const span = document.querySelector('.error-dataNasc');
        span.textContent = data.dataNasc;
        span.style.display = 'block';
    }

    if (data.rg) {
        const span = document.querySelector('.error-rg');
        span.textContent = data.rg;
        span.style.display = 'block';
    }

    if (data.cpf) {
        const span = document.querySelector('.error-cpf');
        span.textContent = data.cpf;
        span.style.display = 'block';
    }

    if (data.success) {
        successSpan.textContent = data.success;
        successSpan.style.display = 'flex';
    }

    if (data.error) {
        console.log(data.error)
    }
});

