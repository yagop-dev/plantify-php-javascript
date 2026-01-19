const cartContainerDesktop = document.querySelector(".item-table");
const resumeValues = document.querySelector(".value-info");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
    cartContainerDesktop.innerHTML = "<tr><td colspan='6'>Carrinho vazio</td></tr>";
    resumeValues.innerHTML = `<p>R$0,00</p><p>R$0,00</p><p>R$0,00</p>`;
} else {
    let subtotal = 0;

    cartContainerDesktop.innerHTML = `
        <tr>
            <td>ITEM</td>
            <td></td>
            <td>PREÇO</td>
            <td>QTD</td>
            <td>SUBTOTAL</td>
        </tr>
        ${cart.map(item => {
            const itemTotal = item.qtd * parseFloat(item.preco);
            subtotal += itemTotal;
            return `
            <tr>
                <td><img src="${item.img}" alt="${item.nome}" id="item-img"></td>
                <td>${item.nome}</td>
                <td>R$${parseFloat(item.preco).toFixed(2)}</td>
                <td>${item.qtd}</td>
                <td>R$${itemTotal.toFixed(2)}</td>
                <td><a><img src="../assets/img/x.png" id="exclude" data-id="${item.id}"></a></td>
            </tr>
            `;
        }).join("")}
    `;

    const frete = 0; 
    const total = subtotal + frete;

    resumeValues.innerHTML = `
        <p>R$${subtotal.toFixed(2)}</p>
        <p>R$${frete.toFixed(2)}</p>
        <p>R$${total.toFixed(2)}</p>
    `;
}

document.querySelectorAll("#exclude").forEach(btn => {
    btn.addEventListener("click", e => {
        const id = parseInt(e.target.dataset.id);
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart = cart.filter(item => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload(); 
    });
});