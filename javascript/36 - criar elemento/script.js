// insere elemento ao body -------------------------------------------------

var novoParagrafo = document.createElement("p");

// cria conteudo do paragrafo
var texto = document.createTextNode("Este é um texto do javascript");

novoParagrafo.appendChild(texto);   // add conteudo ao p

var body = document.querySelector("body");

body.appendChild(novoParagrafo);    // add o paragrafo ao body

// insere elemento em container -------------------------------------------------

var container = document.querySelector("#container");

var el = document.createElement("span");    // cria a tag html

el.appendChild(document.createTextNode("texto do span"));   // cria o conteudo do span

container.appendChild(el);