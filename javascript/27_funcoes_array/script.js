// length --------------------------------------------------------------------------------

var nome = "Matheus";

console.log("Tamanho da palavra: " + nome.length + " : " + nome);

// indexOf --------------------------------------------------------------------------------

var frase = "O rato roeu a roupa do rei de Roma";

console.log("Começo da palavra está em: " + frase.indexOf("roeu"));

// slice - pega a palavra de uma string --------------------------------------------------------------------------------

var roeu = frase.slice(7, 11);

console.log("Palavra: " + roeu);

// replace - substitui --------------------------------------------------------------------------------

var novaPalavra = frase.replace("roeu", "mordeu");

console.log(novaPalavra);   // frase com a nova palavra

// trim - remove espaços na string --------------------------------------------------------------------------------

var nomeUser = "       Ronaldo ";
console.log("Nome com espaços: " + nomeUser);

var nomeTrim = nomeUser.trim(); // remove os espaços

console.log("Nome sem espaços: " + nomeTrim);

// split - separa em um array a string --------------------------------------------------------------------------------

var fraseSplit = frase.split(" ");

console.log(fraseSplit);

var tags = "PHP, JavaScript, HTML, CSS";

var tagsSplit = tags.split(", ");

console.log(tagsSplit);

// lastIndexOf - pega a ultima posição da string procurada --------------------------------------------------------------------------------

var fraseTeste = "teste do teste";

console.log("Primeira Posição da string indicada: " + fraseTeste.indexOf("teste"));
console.log("Ultima Posição da string indicada: " + fraseTeste.lastIndexOf("teste"));