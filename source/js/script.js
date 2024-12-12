function createHTMLElement(tag, text) {
    const element = document.createElement(tag);
    // if (text, id) {
    //     element.innerText = text;
    //     element.id = id;
    // };
    element.innerText = text;

    return element;
};

let header = createHTMLElement('header', 'Просто текст', 'header');
let headerContainerCard = createHTMLElement('div');


// // Подключение 

// document.body.append(header);

// header.appendChild(headerContainerCard);

// // Атибуты, стили 

// header.setAttribute('style', 'background: red');

function number(number) {
    return Math.floor(number).toLocaleString('ru-RU') + ' руб.';
}

document.addEventListener('DOMContentLoaded', () => {
    // Массив 
    const products = [
        {
            photo: '../img/1.png', 
            price: 2000,
            width: 200,
            height: 150,
            name: 'Пустыня',
            addButton: 'Добавить товар',
            removeButton: 'Убрать товар'
        },
        {
            photo: '../img/2.jpg',
            price: 2000,
            width: 200,
            height: 150,
            name: 'Море',
            addButton: 'Добавить товар',
            removeButton: 'Убрать товар'
        }
    ];

    // Переменные
    const containerCard = document.querySelector('.container-card');
    const templateCard = document.querySelector('.card-template');

    templateCard.style.display = 'none';

    // Цикл 
    products.forEach(function(product) {
        const clone = templateCard.content.cloneNode(true); 

        // Значения
        const imgProduct = clone.querySelector('.card__img'); 
        imgProduct.src = product.photo; 
        imgProduct.alt = product.name;
        imgProduct.width = product.width;
        imgProduct.height = product.height;

        const nameProduct = clone.querySelector('.card__name');
        nameProduct.textContent = product.name;

        const priceProduct = clone.querySelector('.card__price');
        priceProduct.textContent = number(`${product.price}`);

        const addButton = clone.querySelector('.card__add-button'); 
        addButton.textContent = product.addButton;

        // Добавление клонированной карточки в контейнер
        containerCard.appendChild(clone);
    });


    containerCard.addEventListener('click', function(event){
        if (event.target.matches('.card__add-button')) {
            const card = event.target.closest('.product-card'); 
    
            console.log('товар добавлен');
        }
    });
});

// Корзина 

let cart = document.createElement('div');
cart.setAttribute('class', 'cart');

let cartTitle = createHTMLElement('h2', 'Корзина');
cartTitle.setAttribute('class', 'cart__title');

// Подключение 

document.body.appendChild(cart);

cart.appendChild(cartTitle);



