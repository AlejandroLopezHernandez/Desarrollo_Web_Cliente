/*
Crear una pagina web con un boton llamado semaforo.
Cuando haces click en el debe ocultar el boton crear semaforo.
Crear tres divs con un tamaño y color de fondo gris.
Debe añadir eventos de raton, si lo pasas por el primer div debe ponerse en rojo
En el segundo div ponerse en amarillo
Y el tercero en rojo

Cuando salga del cuadro debe volver a ponerse en gris

Pon un borde ancho a los cuadros para que se vea la separación
*/
let boton = document.querySelector('#boton_semaforo');

function desplegar_semaforo(){
    let divs = document.getElementsByClassName('divs');

    let div1 = document.getElementById('div1');
    let div2 = document.getElementById('div2');
    let div3 = document.getElementById('div3');

    boton.style = "display:none";
    for(let i = 0;i < divs.length;i++){
        divs[i].style = "display: block";
    }
    div1.addEventListener('mouseover',()=>{
        div1.style.backgroundColor = "green";
    });
    div2.addEventListener('mouseover',()=>{
        div2.style.backgroundColor = "yellow";
    });
    div3.addEventListener('mouseover',()=>{
        div3.style.backgroundColor = "red";
    });
    for(let i = 0; i < divs.length; i ++){
        divs[i].addEventListener('mouseout',()=>{
        divs[i].style.backgroundColor = "grey";
        });
    }
}

//Aquí a las funciones no se le añaden los (), porque sino, se inician
boton.addEventListener('click',desplegar_semaforo);