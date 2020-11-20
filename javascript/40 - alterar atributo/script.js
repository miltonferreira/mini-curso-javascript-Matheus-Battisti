// criar elemento -------------------------------------------------

var title = document.querySelector("#title");

title.setAttribute("class", "testando-atributo");

// desativa o botao ----------------------------------------------

var btn = document.querySelector("#btn");

btn.setAttribute("disabled", "disabled");

// desativa o botao ----------------------------------------------

var subtitle = document.querySelector(".subtitle");

subtitle.setAttribute("id", "titulo-2");

// remover atributo <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

var list = document.querySelector("#lista");

list.removeAttribute("id");

