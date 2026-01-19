const form = document.getElementById('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const response = await fetch('../assets/php/login.php', {
        method: 'POST',
        body: formData
    });

    const inputs = document.querySelectorAll('INPUT')

    inputs.forEach((input) => {
        input.value = ''
    })

    const data = await response.json();

    const message = document.querySelector('.message');
    message.textContent = '';
    message.style.display = 'none';

    if (data.success) {
        localStorage.setItem("loggedUser", JSON.stringify(data.user));

        message.textContent = data.success;
        message.style.display = 'flex';
    }

    if (data.error) {
        message.textContent = data.error;
        message.style.display = 'flex';
    }

    setTimeout(() => {
        location.reload();
    }, 3000)
});
