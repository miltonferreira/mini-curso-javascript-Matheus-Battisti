// inserir o click ----------------------------------------------

var btn = document.querySelector("#btn_");

btn.addEventListener("click", function(){
    console.log("clicou");
    console.log(this);
    this.style.color = "red";
});

var title = document.querySelector("#title");

title.addEventListener("click", function(){

    this.style.color = "red";
    console.log("clicou no titulo");

    var subtitle = document.querySelector(".subtitle");
    subtitle.style.display = "none";
});

var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("dblclick", function(){
    console.log("clico duplo");
});
