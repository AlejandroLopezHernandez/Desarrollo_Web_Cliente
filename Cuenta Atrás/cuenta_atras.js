/*La pagina principal solo debe tener un boton inciar cuenta atras.
Si haces un click debe enmpezar una cuenta atras con 3 minutos debe cada segundo mostrar 
la cuenta es decir 2:59, 2,58... Esta cuenta atras estara en un div, debes ademas de mostrar 
el reloj le debes aplicar estilo de forma dinamica, cambiar el color de fondo a gris el color 
del texto en blaco y la hora debe estar en h1.
Cuando llegue a 0, debe cambiar el color de fondo a rosa, en un div debe mostrar una imagen 
con gif de emergencia y debe sonar un sonido.Para que suene el sonido:

<audio id="audio" controls>
<source type="audio/wav" src="audio.wav">
</audio>

En CSS:
#audio{
display: none
}

En javascript:
var audio = document.getElementById("audio");
audio.play();
 
Para que pare el reloj cuando llegue a 0:
let timerId = setInterval(func|código, [retraso], [arg1], [arg2], ...) Para lanzarlo
para pararlo clearInterval(timerId); */

function iniciar_cuenta_atras(){
    let reloj = document.getElementById("reloj");
    let imagen = document.getElementById("imagen");
    let audio = document.getElementById("audio");
    let minutos = 0;
    let segundos = 3;
    let timerId = setInterval(()=>{
        if(segundos == 0){
            segundos = 59;
            if(minutos > 0){
                minutos --;
            } else {
                clearInterval(timerId);
                reloj.innerHTML= "¡Tiempo terminado!";
                reloj.style = "background-color:pink";
                imagen.style.display= "block";
                audio.play();
                return;
            }
        } else {
            segundos --;
        } reloj.innerHTML = (minutos < 10 ? "0":"") + minutos + ":" +
        (segundos < 10 ? "0":"") + segundos;  
}, 1000);
}