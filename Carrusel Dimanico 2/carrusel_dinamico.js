/*Al ejercicio de carrusel añadir un botón que sea añadir foto. 
Cuando pulses el añadir foto hará lo siguiente
Aparecerá un prompt donde pondrás una url de una foto. 
Esto añadirá un foto al carrusel ademas debe añadir un radio button*/
    
window.onload = function () {
    // Variables
    const IMAGENES = [];
    let condicion = false;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $botonAnadir = document.querySelector('#anadir');

 
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }


    function AnadirFoto() {

        let imagen_subida = document.createElement("img");
        let imagen_usuario = prompt("Selecciona una URL");
        imagen_subida.src = imagen_usuario;
        imagen_subida.id="imagenes";
        IMAGENES.push(imagen_usuario);
        if(IMAGENES.length > 3){
            condicion = true;
        }else{
            condicion = false;
        }
        verificarCondicion()
        
     
    }

    function verificarCondicion() {
        if (condicion) {  // Reemplaza esto con tu condición
            document.getElementById("carrusel-contenedor").style.display = "block";
            pasarFoto();
        }
    }

    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }
    

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonAnadir.addEventListener('click', AnadirFoto);
    // Iniciar
    renderizarImagen();
}

