
const showAll = document.querySelector(".mostrarTudo");
const mapAll = document.querySelector(".map-all");
const sumAll = document.querySelector(".sum-all");
const filterAll = document.querySelector(".filter-all");

const list = document.querySelector("ul");
let result = document.querySelector("h2");
let myLi = '';
let produtosCarregados = false;

function mostrar(productsArray) {
    myLi = ''; // Limpa a variável myLi antes de adicionar os elementos novamente
    productsArray.forEach(product => {
        // Formata o preço com duas casas decimais usando toFixed(2)
        const formattedPrice = product.price.toFixed(2);
        myLi = myLi + `
            <li class="item-price">
                <img class="image" src="${product.src}" alt="">
                <p class="name">${product.name}</p>
                <p class="price">R$ ${formattedPrice}</p>
            </li>
        `;
    });
    console.log(result)
    result.innerHTML = 'Nossos Hambúrgueres! Mas você pode ter 10% de desconto, basta clicar em Mapear!'
    list.innerHTML = myLi;
}

function mapAllItems() {
    const newPrices = menuOptions.map( product => ({
        // Spread Operator
       ...product,
        price: product.price * 0.9, // dar 10% de desconto
    }));

    mostrar(newPrices);
    result.innerHTML = 'Parabéns! Você ganhou 10% de desconto no pedido de qualquer de hambúrguer!'
}

function sumAllItems() {
    const totalValue = menuOptions.reduce(
        (acc, curr) => acc + curr.price
    , 0)

    result.innerHTML = '';
    list.innerHTML = `
        <li class="item-price">
            <p>O valor total dos itens é: <span class="price"> R$ ${totalValue},00</span></p>
        </li>
    `;
}

function filterAllItems() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    mostrar(filterJustVegan);
    result.innerHTML = 'Nossos Hambúrgueres veganos!';
}

showAll.addEventListener("click", () => mostrar(menuOptions));
mapAll.addEventListener("click", mapAllItems);
sumAll.addEventListener("click", sumAllItems)
filterAll.addEventListener("click", filterAllItems);