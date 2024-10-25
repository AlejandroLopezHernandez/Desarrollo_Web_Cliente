let imagenes = [];
let radios = [];

function añadir_foto(){
    let url = prompt("Introduce la url de una imagen que quieras subir: ");
    if(url){
        let foto = document.createElement("img");
        foto.src=url;
        foto.id="imagen";
        foto.alt = "Imagen proporcionada por el usuario";
        foto.style.width = "650px";
        foto.style.height = "800px";
        //Ocultamos la imagen al inicio
        foto.style.display="none";
        imagenes.push(foto);

        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name="opcion";
        //Se usará el índice como valor
        radio.value = imagenes.length - 1;
        //Sólo se marcará el primero seleccionado
        radio.checked = imagenes.length == 1;     
        radio.style="text-align: center";
        radios.push(radio);

        let contenedor = document.createElement("div");
        contenedor.id = "contenedor";
        contenedor.appendChild(foto);
        
        document.body.appendChild(contenedor);
        document.body.appendChild(radio);

        //Así conseguimos mostrar sólo una imagen
        if(imagenes.length === 1){
            foto.style.display = "block";
        }
      
        if (!document.getElementById("btnretroceder") && !document.getElementById("btnavanzar")){
            let retroceder = document.createElement("input");
            retroceder.id = "btnretroceder";
            retroceder.type="button";
            retroceder.name = "Retroceder";
            retroceder.value = "Retroceder";
            retroceder.onclick = ()=>{

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
    document.getElementById("imagen").src = imagen_seleccionada.src;
    seleccionado.checked = true;
            }
            retroceder.style.textAlign="left";
            document.body.appendChild(retroceder);
    
    
            let avanzar = document.createElement("input");
            avanzar.id = "btnavanzar";
            avanzar.type="button";
            avanzar.name = "avanzar";
            avanzar.value = "Avanzar";
            avanzar.onclick = ()=>{

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
            document.getElementById("imagen").src = imagen_seleccionada.src;
            seleccionado.checked = true;
            }
            retroceder.style.textAlign="right";
            document.body.appendChild(avanzar);
            }

    } else{
        alert("Tienes que introducir la url de una imagen");
    }
}

/*function retroceder(){
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
    document.getElementById("imagen").src = imagen_seleccionada.src;
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
   document.getElementById("imagen").src = imagen_seleccionada.src;
   seleccionado.checked = true;
}*/
