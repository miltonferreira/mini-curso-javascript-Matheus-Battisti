// keydown ----------------------------------------------

document.addEventListener("keydown", function(event){
    
    // console.log(event.key);

    if(event.key === "Enter"){
        // console.log("Apertou o Enter");
    }
    if(event.key == " "){
        console.log("Apertou o Espaço");
    }
});

// keyup ----------------------------------------------

document.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        console.log("Soltou o Enter");
    }
});