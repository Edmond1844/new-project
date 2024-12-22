function currency(price) {
    return Math.floor(price).toLocaleString('ru-RU') + ' ₽';
};

function change(price) {
    return Math.floor(price).toLocaleString('en-US') + ' $'; 
};

function calculationRu(price) {
    const check = price * 97; 
    return check;
};

document.addEventListener('DOMContentLoaded', () => {
    fetch('./json/header.json')
    .then(res => res.json())
    .then(function (data) {
        const cards = data.cards;

        let container = document.querySelector('.container-card');

        cards.forEach(function (card) {
            let wrapperCard = document.createElement('div');
            wrapperCard.setAttribute('class', 'wrapper-card');

            let imgProduct = document.createElement('img'); 
            imgProduct.setAttribute('src', card.image);
            imgProduct.setAttribute('width', card.width);
            imgProduct.setAttribute('height', card.height);

            let nameProduct = document.createElement('h2');
            nameProduct.setAttribute('class', 'product-name');
            nameProduct.textContent = card.name;

            let priceProduct = document.createElement('p');
            priceProduct.setAttribute('class', 'product-price');
            priceProduct.textContent = currency(calculationRu(card.price));

            let btnProduct = document.createElement('button');
            btnProduct.setAttribute('class', 'product-button-add');
            btnProduct.textContent = "Добавить в корзину";

            let changeCurrency = document.createElement('button');
            changeCurrency.setAttribute('class', 'btn-change');
            changeCurrency.textContent = 'En'; 
            changeCurrency.addEventListener('click', function () {
                if (changeCurrency.textContent === 'Ru') {
                    changeCurrency.textContent = 'En'; 
                    priceProduct.textContent = currency(calculationRu(card.price));
                } else {
                    changeCurrency.textContent = 'Ru'; 
                    priceProduct.textContent = change(card.price);
                }
            });

            container.appendChild(wrapperCard);
            wrapperCard.appendChild(imgProduct);
            wrapperCard.appendChild(nameProduct);
            wrapperCard.appendChild(priceProduct);
            wrapperCard.appendChild(btnProduct);
            wrapperCard.appendChild(changeCurrency);
        });

        container.addEventListener('click', function(event) {
            if (event.target.matches('.product-button-add')) {
                const wrapperCard = event.target.closest('.wrapper-card');

                const nameProduct = wrapperCard.querySelector('.product-name').textContent;
                const priceProduct = wrapperCard.querySelector('.product-price').textContent;

                console.log(`Товар добавлен в корзину: ${nameProduct} (${priceProduct})`);
            }
        });
    })
    .catch((error) => console.log(error));
});
