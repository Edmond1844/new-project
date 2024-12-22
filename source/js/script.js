function currency(price) {
    return Math.floor(price).toLocaleString('ru-RU') + ' ₽';
};

function change(price) {
    return Math.floor(price).toLocaleString('en-US') + ' $';
}

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
            priceProduct.textContent = currency(card.priceRu);


            let btnProduct = document.createElement('button');
            btnProduct.setAttribute('class', 'product-button-add');
            btnProduct.textContent = "Добавить в корзину";

            let changeСurrency = document.createElement('button');
            changeСurrency.setAttribute('class', 'btn-change');
            changeСurrency.textContent = 'En';

            changeСurrency.addEventListener('click', function () {
                if (changeСurrency.textContent === 'Ru') {
                    changeСurrency.textContent = 'En'; 
                    priceProduct.textContent = currency(card.priceRu); 
                } else {
                    changeСurrency.textContent = 'Ru'; 
                    priceProduct.textContent = change(card.priceEn); 
                }
            });


            container.appendChild(wrapperCard);

            wrapperCard.appendChild(imgProduct);
            wrapperCard.appendChild(nameProduct);
            wrapperCard.appendChild(priceProduct);
            wrapperCard.appendChild(btnProduct);
            wrapperCard.appendChild(changeСurrency);
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
    .catch((error) => console.log(error))
});

