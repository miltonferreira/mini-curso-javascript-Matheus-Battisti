// evento de mouseOver ----------------------------------------------

var title = document.querySelector("#title");

title.addEventListener("mouseover", function(){
    this.style.color = "black";
    this.style.backgroundColor = "yellow";
});

// evento de mouseOut ----------------------------------------------

title.addEventListener("mouseout", function(){
    this.style.color = "red";
    this.style.backgroundColor = "white";
});

// afeta outro elemento com mouseover -----------------------------

var subtitle = document.querySelector(".subtitle");
var legenda = document.querySelector(".hide");

subtitle.addEventListener("mouseover", function(){

    legenda.style.display = "block";
    legenda.classList.remove("hide");   // remove a classe

});

subtitle.addEventListener("mouseout", function(){

    legenda.style.display = "none";
    legenda.classList.add("hide");      // add a classe

});
