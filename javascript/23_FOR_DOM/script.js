var lista = ['Laranja', 'Maçã', 'Pera', 'Jaca'];

var listUl = document.createElement('ul');

var body = document.getElementsByTagName('body');

body[0].appendChild(listUl);    // adiciona a lista ao body

var listaNoBody = document.getElementsByTagName('ul');

console.log(listaNoBody[0]);

for(var i = 0; i < lista.length; i++) {

    var liFOR = document.createElement('li');

    var textLI = document.createTextNode(lista[i]);

    liFOR.appendChild(textLI);  //

    listaNoBody[0].appendChild(liFOR);    // adiciona a lista ao ul

    console.log(liFOR);
}