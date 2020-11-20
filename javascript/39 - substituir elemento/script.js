// criar elemento -------------------------------------------------

var el = document.createElement('h3');

el.classList = "testando-classe";

var texto = document.createTextNode("Este é um texto para o H3");

el.appendChild(texto);

// seleciona elemento para trocar  -------------------------------------------------

var title = document.querySelector("#title");

// seleciona o pai do el

var pai = title.parentNode;
console.log(pai);

// troca os elementos
pai.replaceChild(el, title);    // substitui h1 pelo h3