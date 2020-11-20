var count = 0;
var x = 0;

var subtitle = document.querySelector(".subtitle");

// setTimeout --------------------------------------------------

var myTimer = setTimeout(function(){

    console.log("O x é 0");

}, 1500);

x = 5;

if(x > 0){
    clearTimeout(myTimer);
    console.log("O x passou de 0");
}

// setInterval --------------------------------------------------

subtitle.textContent = ` Cronometro: ${count}`;

var pomodoro = setInterval(function(){

    console.log("Testando o setInterval: " + count++);

    subtitle.textContent = `
        Cronometro: ${count}
    `;

    if(count >= 10){
        clearInterval(pomodoro);
        subtitle.textContent = ` Cronometro parou no: ${count}`;
    }

}, 1000);

