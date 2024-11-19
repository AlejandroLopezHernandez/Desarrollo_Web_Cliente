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
let boton_semaforo = document.querySelector('#btn_semaforo');
boton_semaforo.addEventListener('click',crear_semaforo);

function crear_semaforo(){
    let div1 = document.querySelector('#div1');
    let div2 = document.querySelector('#div2');
    let div3 = document.querySelector('#div3');

    boton_semaforo.style.display= "none";
    div1.style.display="block";
    div2.style.display="block";
    div3.style.display="block";

    div1.addEventListener('mouseover',() =>{
        div1.style.backgroundColor= "green";
    });
    div2.addEventListener('mouseover',() =>{
        div2.style.backgroundColor= "yellow";
    });
    div3.addEventListener('mouseover',() =>{
        div3.style.backgroundColor= "red";
    });
    div1.addEventListener('mouseout',()=>{
        div1.style.backgroundColor = "gray";
    });
    div2.addEventListener('mouseout',()=>{
        div2.style.backgroundColor = "gray";
    });
    div3.addEventListener('mouseout',()=>{
        div3.style.backgroundColor = "gray";
    });
}