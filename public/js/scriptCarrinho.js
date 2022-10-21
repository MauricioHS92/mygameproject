const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function addItemCart(product) {
    carrinho.push(product);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function removeItemCart(product) {
    carrinho.push(product);
    const productIndex = carrinho.findIndex(p => p.id_jogo === product.id_jogo);
    carrinho.splice(productIndex, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

