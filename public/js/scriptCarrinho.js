const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function addItemCart(product) {
    console.log('aquiAddCart');
    carrinho.push(product);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function removeItemCart(product) {
    carrinho.push(product);
    const productIndex = carrinho.findIndex(p => p.id_jogo === product.id_jogo);
    carrinho.splice(productIndex, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function renderProducts(products) {
    const mainEl = document.querySelector("main");
    products.forEach((product) => {
      const productEl = document.createElement("div");
      productEl.classList.add("card");
      const productString = `{
        "id": ${product.id},
        "title": ${product.title},
        "price": ${product.price},
        "image": ${product.image}
      }`;
      productEl.innerHTML = `
          <a class="fav" onclick='toggleFavorite(${productString})'>
            <img src="icons/heart_red_empty.svg">
          </a>
          <img class="product" src="${product.image}">
          <h1>${product.title}</h1>
          <div class="price">R$ ${product.price}</div>
          <div class="buttons">
            <button>Comprar</button>
            <button>Ver Mais</button>
          </div>
        `;
      mainEl.appendChild(productEl);
    });
  }