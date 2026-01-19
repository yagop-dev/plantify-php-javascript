let userInfo = JSON.parse(localStorage.getItem("loggedUser"))

const nome = document.querySelector('.Nome').textContent = userInfo.Nome
const email = document.querySelector('.Email').textContent = userInfo.Email
const dataNasc = document.querySelector('.DataNasc')
const cpf = document.querySelector('.CPF')
const rg = document.querySelector('.RG')

const editBtn = document.querySelectorAll('.info-content > IMG')
const logoutBtn = document.querySelector('BUTTON')

nome.textContent = userInfo.Nome
email.textContent = userInfo.Email
cpf.textContent = formatCPF(userInfo.CPF)
rg.textContent = formatRG(userInfo.RG)
dataNasc.textContent = formatDate(userInfo.DataNasc)

function formatRG(rg) {
    rg = rg.replace(/\D/g, ""); 
    return rg.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4");
}

function formatCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function formatDate(date) {
    if (!date) return "";
    
    const [ano, mes, dia] = date.split("-");
    return `${dia} / ${mes} /  ${ano}`;
}

editBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        const span = btn.previousElementSibling;   
        const campo = span.className;              
        const valorAtual = span.textContent;

        const input = document.createElement('input');
        input.type = 'text';
        input.value = valorAtual;

        span.replaceWith(input);
        input.focus();

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                input.blur();
            }
        });

        input.addEventListener('blur', async () => {
            const novoValor = input.value;

            await fetch('../assets/php/edit.php', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    campo: campo,
                    valor: novoValor,
                    nome: userInfo.Nome,
                    senha: userInfo.Senha,
                    rg: userInfo.RG
                })
            });

            const novoSpan = document.createElement('span');
            novoSpan.className = campo;
            novoSpan.textContent = novoValor;

            input.replaceWith(novoSpan);

            userInfo[campo] = novoValor;
            localStorage.setItem("loggedUser", JSON.stringify(userInfo));
        });
    });
})

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem("loggedUser")
    window.location.href = "login.html"
})