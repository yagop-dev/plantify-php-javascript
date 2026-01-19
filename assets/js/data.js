const mainData = document.getElementById("main-data");

const user = JSON.parse(localStorage.getItem("loggedUser"))

let cart = JSON.parse(localStorage.getItem("cart")) || [];
if (!Array.isArray(cart)) cart = [cart];

document.querySelectorAll(".client-data p")[1].textContent = user.Nome;
document.querySelectorAll(".client-data p")[3].textContent = user.DataNasc;
document.querySelectorAll(".client-data p")[7].textContent = user.RG;
document.querySelectorAll(".client-data p")[5].textContent = user.CPF;

const cartContainerDesktop = document.querySelector(".item-table");
let subtotal = 0;

if (cart.length === 0) {
    cartContainerDesktop.innerHTML = "<tr><td colspan='6'>Nenhum produto comprado</td></tr>";
} else {
    const rowsHTML = cart.map(item => {
        const itemTotal = item.qtd * parseFloat(item.preco);
        subtotal += itemTotal;
        return `
            <tr>
                <td><img src="${item.img}" alt="${item.nome}" id="item-img"></td>
                <td>${item.nome}</td>
                <td>R$${parseFloat(item.preco).toFixed(2)}</td>
                <td>${item.qtd}</td>
                <td>R$${itemTotal.toFixed(2)}</td>
            </tr>
        `;
    }).join("");

    cartContainerDesktop.innerHTML = `
        <tr>
            <td>ITEM</td>
            <td></td>
            <td>PREÇO</td>
            <td>QTD</td>
            <td>SUBTOTAL</td>
        </tr>
        ${rowsHTML}
    `;
}

const mobileContainer = document.querySelector(".item-container-mobile .item-list-container");
if (mobileContainer) {
    mobileContainer.innerHTML = cart.map(item => {
        const itemTotal = item.qtd * parseFloat(item.preco);
        return `
            <div class="item-title-img">
                <p class="title-list">LISTA DE PRODUTOS</p>
                <div class="item-img-name">
                    <img src="${item.img}" alt="${item.nome}" id="item-img">
                    <p id="item-name" class="long-text">${item.nome}</p>
                </div>
            </div>
            <div class="item-info-container">
                <div class="item-info">
                    <p>PREÇO</p>
                    <p class="item-value">R$${parseFloat(item.preco).toFixed(2)}</p>
                </div>
                <div class="item-info">
                    <p>QTD</p>
                    <p class="item-value">${item.qtd}</p>
                </div>
                <div class="item-info">
                    <p>SUBTOTAL</p>
                    <p class="item-value">R$${itemTotal.toFixed(2)}</p>
                </div>
            </div>
        `;
    }).join("");
}

const resumeValues = document.querySelector(".value-info");
const frete = 0; 
const total = subtotal + frete;

resumeValues.innerHTML = `
    <p>R$${subtotal.toFixed(2)}</p>
    <p>R$${frete.toFixed(2)}</p>
    <p>R$${total.toFixed(2)}</p>
`;