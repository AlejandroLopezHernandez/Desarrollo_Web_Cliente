let imagenes = ['anna_karenina.jpeg',
                'crimen_castigo.png',
                'guerra_paz.jpeg',
                'hermanos_kamarazov.jpeg',
                'maestro_margarita.jpg'];


let imagen = document.querySelector('#imagenes');
let radios = document.querySelectorAll('input[type="radio"]');

function retroceder(){
    let seleccionado = null;
    let imagen_seleccionada = null;
 
    for(let i = 0; i < radios.length; i ++){
     if (radios[i].checked === true){
        if(i == 0) {
            seleccionado = radios[(radios.length) - 1];
            imagen_seleccionada = imagenes[(imagenes.length) - 1];
        } else {
            imagen_seleccionada = imagenes [i - 1];
            seleccionado = radios[i - 1];
        }
     }
    }
    imagen.src = imagen_seleccionada;
    seleccionado.checked = true;
 }

function avanzar(){
   let seleccionado = null;
   let imagen_seleccionada = null;

   for(let i = 0; i < radios.length; i ++){
    if (radios[i].checked === true){
        if(i === radios.length - 1){
            seleccionado = radios[0];
            imagen_seleccionada = imagenes[0];
        } else {
            seleccionado = radios[i + 1];
            imagen_seleccionada = imagenes [i + 1];
        }
        break;
    }
   }
   imagen.src = imagen_seleccionada;
   seleccionado.checked = true;
}




