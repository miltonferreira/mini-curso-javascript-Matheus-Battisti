var result_show = document.querySelector("#container p");

// propriedades do Document -------------------------------------------------

function exibir(num){
    console.log("Operação resultou em: " + num);
}

function soma (a, b, callback){
    var op = a + b;
    callback(op);
}

function multiplicacao (a, b){
    var op = a * b;
    return op;
}

var s = soma(2, 2, exibir);

var m = multiplicacao(2, 4);

result_show.textContent = `
    resultando de ${m}  
`; 

