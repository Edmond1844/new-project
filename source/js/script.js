function createHTMLElement(tag, text, id) {
    const element = document.createElement(tag);
    if (text, id) {
        element.innerText = text;
        element.id = id;
    };

    return element;
};

let header = createHTMLElement('header', 'Просто текст', 'header');
let headerContainerCard = createHTMLElement('div');


// Подключение 

document.body.append(header);

header.appendChild(headerContainerCard);

// Атибуты, стили 

header.setAttribute('style', 'background: red');
