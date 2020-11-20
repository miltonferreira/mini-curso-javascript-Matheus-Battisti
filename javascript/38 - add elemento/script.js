// criar elemento -------------------------------------------------

var el = document.createElement('div');         // cria o elemento

el.classList = "div-criada";                    // cria a classe com nome

var container = document.querySelector("#container");

container.appendChild(el);                      // insere o elemento filho

// insertBefore - insere antes -------------------------------------------------

var el_2 = document.createElement('div');       // cria o elemento

el_2.classList = "div-before";

var el_3 = document.querySelector("#container .div-before");

container.insertBefore(el_2, el_3);             // add antes da classe div-criada