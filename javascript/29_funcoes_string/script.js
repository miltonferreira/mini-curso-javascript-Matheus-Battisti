// length --------------------------------------------------------------------------------

var arr = [1,2,3,4,5];

console.log("Tamanho do array: " + arr.length);

// push - add elemento no final do array --------------------------------------------------------------------------------

arr.push(6);

console.log("Elementos do Array: " + arr);

console.log("Tamanho do array: " + arr.length);

// pop - remove o ultimo elemento do array  -----------------------------------------------------------------------------

arr.push("Ronaldo");

console.log("Elementos do Array: " + arr);

arr.pop();

console.log("Elementos do array: " + arr);

// unshift - add no começo do array  -----------------------------------------------------------------------------

arr.unshift(0);

console.log("Elementos do array: " + arr);

// shift - remove no começo do array  -----------------------------------------------------------------------------

arr.unshift("Ronaldo");
console.log("Elementos do array: " + arr);

arr.shift();    // metodo que remove no começo do array

console.log("Elementos do array: " + arr);

// acessar o ultimo elemento do array ----------------------------------------------------------------------------

console.log("Acessar ultimo elemento do array: " + arr[arr.length - 1]);

// IsArray  - Metodo para verificar se é um array ----------------------------------------------------------------

console.log("É um array: " + Array.isArray("Ronaldo"));
console.log("É um array: " + Array.isArray(arr));

// splice - pode ser usando para add elementos em qualquer posição do array ---------------------------------

var arr_ = [1,2,3,4,5];

arr_.splice(4, 0, 4.5); // add elemento na posição indicada

console.log("Elementos do array: " + arr_);

arr_.splice(3, 1);  // remove o elemento na posição indicada

console.log("Elementos do array: " + arr_);

// join - transforma array numa string -------------------------------------------------------------------------

var arr_2 = ["O", "rato", "roeu", "a", "roupa", "do", "rei", "de", "Roma"];

var frase = arr_2.join(" ");   // separa as palavras por espaço

console.log(frase);

// reverse - inverte o array -----------------------------------------------------------------------------------

console.log(arr_2);

var fraseReverse = arr_2.reverse();

console.log(fraseReverse);

