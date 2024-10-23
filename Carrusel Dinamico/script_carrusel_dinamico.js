function añadir_foto(){
    let url = prompt("Introduce la url de una imagen que quieras subir: ");
    if(url){
        let foto = document.createElement("img");
        foto.src=url;
        foto.alt = "Imagen proporcionada por el usuario";
        foto.style.width = "300px";
        foto.style.height = "400px";

        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name="opcion";
        radio.value="opcion1";

        let retroceder = document.createElement("input");
        retroceder.type="button";
        retroceder.name = "Retroceder";
        retroceder.value = "Retroceder";
        retroceder.onclick = function(){retroceder()}

        let avanzar = document.createElement("input");
        avanzar.type="button";
        avanzar.name = "avanzar";
        avanzar.value = "avanzar";
        avanzar.onclick = function(){avanzar()}
        
        let contenedor = document.createElement("div");
        contenedor.appendChild(foto);
        contenedor.appendChild(radio);

        document.body.appendChild(retroceder);
        document.body.appendChild(contenedor);
        document.body.appendChild(avanzar);

    } else{
        alert("Tienes que introducir la url de una imagen");
    }
}

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
