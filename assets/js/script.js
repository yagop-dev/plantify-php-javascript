const plants = [
  {
    id: 1,
    nome: "Aloe Vera",
    preco: '29.90',
    categoria: "normal",
    img: "../assets/img/plants/AloeVera.png",
    descricao: "A Aloe Vera é conhecida por suas folhas carnudas e propriedades medicinais. É fácil de cuidar e perfeita para ambientes internos bem iluminados.",
    detalhes: "Altura: 20–30 cm | Luz: indireta forte | Rega: a cada 10–14 dias | Vaso: 12–15 cm"
  },

  {
    id: 2,
    nome: "Samambaia",
    preco: '24.90',
    categoria: "normal",
    img: "../assets/img/plants/Samambaia.png",
    descricao: "A Samambaia é uma planta clássica de interiores, com folhas longas, arqueadas e elegantes, trazendo frescor e volume aos ambientes.",
    detalhes: "Altura: 25–40 cm | Luz: indireta | Rega: 3x por semana | Umidade: alta"
  },

  {
    id: 3,
    nome: "Peperomia",
    preco: '32.90',
    categoria: "normal",
    img: "../assets/img/plants/Peperomia.png",
    descricao: "A Peperomia é uma planta compacta, com folhas decorativas e grande variedade visual. Ideal para mesas ou estantes.",
    detalhes: "Altura: 10–20 cm | Luz: indireta | Rega: 1–2x por semana | Vaso: 10–12 cm"
  },

  {
    id: 4,
    nome: "Pilea",
    preco: '34.90',
    categoria: "normal",
    img: "../assets/img/plants/Pilea.png",
    descricao: "A famosa Pilea, conhecida como “planta do dinheiro”, tem folhas arredondadas e cresce rápido, trazendo um visual moderno.",
    detalhes: "Altura: 15–25 cm | Luz: indireta forte | Rega: 1–2x por semana | Fácil propagação"
  },

  {
    id: 5,
    nome: "Zamioculca",
    preco: '49.90',
    categoria: "normal",
    img: "../assets/img/plants/Zamioculca.png",
    descricao: "A Zamioculca é extremamente resistente e elegante, com folhas brilhantes e arquitetura moderna. Ótima para iniciantes.",
    detalhes: "Altura: 30–60 cm | Luz: baixa a média | Rega: a cada 10–15 dias | Muito resistente"
  },

  {
    id: 6,
    nome: "Pothos Neon",
    preco: '27.90',
    categoria: "novos",
    img: "../assets/img/plants/PothosNeon.png",
    descricao: "O Pothos Neon se destaca pelo verde-amarelado vibrante de suas folhas. Crescimento rápido e fácil manutenção.",
    detalhes: "Altura: 15–25 cm (muda) | Luz: indireta | Rega: 1–2x por semana | Pode ser pendente"
  },

  {
    id: 7,
    nome: "Alocasia Polly",
    preco: '59.90',
    categoria: "novos",
    img: "../assets/img/plants/AlocasiaPolly.png",
    descricao: "A Alocasia Polly chama atenção pelas folhas escuras e veias claras, dando um visual exótico e sofisticado.",
    detalhes: "Altura: 25–40 cm | Luz: indireta forte | Rega: manter solo úmido | Umidade alta necessária"
  },

  {
    id: 8,
    nome: "Syngonium Pink",
    preco: '39.90',
    categoria: "novos",
    img: "../assets/img/plants/SyngoniumPink.png",
    descricao: "O Syngonium Pink possui folhas rosadas delicadas e cresce como trepadeira ou pendente. É perfeito para decoração moderna.",
    detalhes: "Altura: 20–35 cm | Luz: indireta | Rega: 2x por semana | Umidade média"
  },

  {
    id: 9,
    nome: "Calathea Orbifolia",
    preco: '64.90',
    categoria: "novos",
    img: "../assets/img/plants/CalatheaOrbifolia.png",
    descricao: "A Calathea Orbifolia possui folhas grandes, arredondadas e listradas, trazendo elegância em qualquer ambiente interno.",
    detalhes: "Altura: 30–50 cm | Luz: indireta | Rega: manter solo úmido | Planta sensível"
  },

  {
    id: 10,
    nome: "Pothos Marble Queen",
    preco: '29.90',
    categoria: "novos",
    img: "../assets/img/plants/PothosMarbleQueen.png",
    descricao: "O Pothos Marble Queen possui variegata branca e verde bem marcada, sendo um dos pothos mais bonitos e fáceis de cuidar.",
    detalhes: "Altura: 15–25 cm | Luz: indireta forte | Rega: 1–2x por semana | Crescimento médio"
  }
];

//---------------footer e header automático-----------------

const script = document.currentScript

let loggedUser;

try {
    loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
} catch (err) {
    loggedUser = null;
}

const isLogged = !!loggedUser;

const loginIcon = isLogged ? script.dataset.profile : script.dataset.login;
const loginLink = isLogged ? "profile.html" : "login.html";

const logoImg = script.dataset.logo
const searchImg = script.dataset.search
const cartImg = script.dataset.cart

const header = document.querySelector('HEADER')
const footer = document.querySelector('FOOTER')

header.innerHTML = `
  <a href="index.html">
      <div class="logo">
          <img src="../assets/img/${logoImg}">
          <span class="brand">Plantify</span>
      </div>
  </a>

  <nav>
      <ul>
          <a href="index.html"><li>Home</li></a>
          <a href="index.html#shop" id="buy-btn"><li>Loja</li></a>
      </ul>
  </nav>

  <div class="icons">
      <img src="../assets/img/${searchImg}" class="search">

      <a href="cart.html">
          <img src="../assets/img/${cartImg}">
      </a>

      <a href="${loginLink}">
        <img src="../assets/img/${loginIcon}">
      </a>
  </div>

  <input class="search-input"></input>
`

footer.innerHTML = `
  <div class="logo-footer">
      <a href="index.html">
          <img src="../assets/img/plantify_icon_black.png" alt="logo" id="logo-img-footer">
          <h3>Plantify</h3>
      </a>
  </div>

  <div class="footer-infos">
      <div class="address-footer">
          <p class="title">Endereço</p>
          <p>Rua Antônio Pereira de Matos 001</p>
      </div>

      <div class="address-footer" id="support-num">
          <p class="title">Precisa de Ajuda?</p>
          <p>Ligue: 4343-4122</p>
      </div>

      <div class="address-footer" id="follow-icon">
          <p class="title">Nos siga!</p>

          <div class="icon-footer-container">
              <a href="https://www.instagram.com/sayuritaira/" target="_blank"><img src="../assets/img/instagram_icon.png" class="icon-footer"><a/>
              <a href="https://www.linkedin.com/in/sayuri-taira-73576529a/" target="_blank"><img src="../assets/img/linkedin_icon.png" class="icon-footer"><a/>
          </div>
      </div>
  </div>

  <hr>

  <p id="copy-mobile">Copyright © Plantify.</p>
  <p id="copy-desktop">Copyright © Plantify. Todos os direitos reservados</p>
`

// --------Caminho pra item.html-----------

const handleClick = (id) => {
    const item = plants.find(i => i.id === id);
    localStorage.setItem("plantSelected", JSON.stringify(item));
    window.location.href = `item.html?id=${id}`;
}

const plant = JSON.parse(localStorage.getItem("plantSelected"))
const main = document.getElementById("main")

if (plant && main){
    main.innerHTML = `
      <div class="product-container">
            <div class="product-content">
                <img src="${plant.img}">
            </div>

            <div class="product-info" data-id="${plant.id}">
                <span class="name">${plant.nome}</span>
                <div class="info">
                    <span class="description">${plant.descricao}</span>
                    <span class="price">R$${plant.preco}</span>
                </div>

                <div class="buy-content">
                    <div class="amount">
                        <div class="decrease btn"><</div>
                        <div class="value">1</div>
                        <div class="increase btn"><</div>
                    </div>

                    <a href="cart.html"><button class="add-cart">Comprar</button></a>
                </div>
            </div>
        </div>

        <div class="details">
            <b>Detalhes</b>
            <span>${plant.detalhes}</span>
        </div>
    `

    const addCartBtn = document.querySelector(".add-cart");

    addCartBtn.addEventListener("click", () => {
       const cart = [{
            id: plant.id,
            nome: plant.nome,
            preco: plant.preco,
            img: plant.img,
            qtd: 1
        }];

        // Salva no localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        alert(`${plant.nome} adicionado ao carrinho!`);
        window.location.href = "cart.html";
    });
}

// ------------Carrossel--------------

const carousels = document.querySelectorAll('.our-products, .new-products');

if(carousels) {
  carousels.forEach(section => {
      const cards = section.querySelectorAll('.item-content');
  
      const prevBtn = section.querySelector('.back');
      const nextBtn = section.querySelector('.next');
  
      let i = 1;
  
      const cardWidth = cards[0].offsetWidth + 40;
  
      const total = cards.length;
  
      const visible = 4;
  
      function updateCarousel() {
          cards.forEach(card => {
              card.style.transform = `translateX(-${i * cardWidth}px)`;
          });
      }
  
      nextBtn.addEventListener('click', () => {
          i += 1;
  
          if (i > total - visible) {
              i = 0; 
          }
  
          updateCarousel();
      });
  
      prevBtn.addEventListener('click', () => {
          i -= 1;
  
          if (i < 0) {
              i = total - visible;
          }
  
          updateCarousel();
      });
  });
}

// -------------Pesquisa-------------

const search = document.querySelector('.search')
const searchInput = document.querySelector('.search-input')

search.addEventListener('click', () => {
  searchInput.value = "";
  searchInput.classList.toggle('active')
  searchInput.focus();
})

document.addEventListener('click', e => {
    if (!searchInput.contains(e.target) && !search.contains(e.target)) {
        searchInput.classList.remove('active')
        searchInput.value = ""
    }
});

searchInput.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        const q = searchInput.value.trim()

        if (q === "") return

        window.location.href = `search.html?query=${encodeURIComponent(q)}`
    }
});

const params = new URLSearchParams(window.location.search);
const searchTerm = params.get("query")?.toLowerCase() || ""

const results = plants.filter(p => 
  p.nome.toLowerCase().includes(searchTerm)
)

const resultsContainer = document.querySelector(".resultsContainer")
const searchTitle = document.querySelector(".search-title")

if (results.length === 0) {
  searchTitle.textContent = `Nenhum resultado para "${searchTerm}"`
  resultsContainer.textContent = `<p>Nenhum produto encontrado.</p>`
} else {
  searchTitle.textContent = `Pesquisando "${searchTerm}"`
  
  const chunkSize = 5
  const chunked = []

  for (let i = 0; i < results.length; i += chunkSize) {
      chunked.push(results.slice(i, i + chunkSize))
  }

  resultsContainer.innerHTML = chunked.map(group => `
      <div class="line">
          ${group.map(p => `
              <div class="item-content" onclick="handleClick(${p.id})">
                  <div class="item">
                      <img src="${p.img}" class="plant-img">
                      <img src="../assets/img/cart.png" class="cart">
                  </div>

                  <div class="info">
                      <div class="item-name">${p.nome}</div>
                      <div class="item-price">R$${p.preco}</div>
                  </div>
              </div>
          `).join("")}
      </div>
  `).join("")
}