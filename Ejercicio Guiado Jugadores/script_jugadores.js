let jugadores = [];

function añadir_jugador(){
    let equipo = document.querySelector('#equipo').value;
    let nombre = document.querySelector('#nombre').value;
    let goles = document.querySelector('#goles').value;
    goles = parseInt(goles);
    let amarillas = document.querySelector('#amarillas').value;
    amarillas = parseInt(amarillas);
    let rojas = document.querySelector('#rojas').value;
    rojas = parseInt(rojas);

    let jugador = { equipo:equipo,
                    nombre:nombre,
                    goles:goles,
                    tarjetasAmarillas: amarillas,
                    tarjetasRojas: rojas
    };
    if(comprobar_campos() == false){
        return;
    }

    jugadores.push(jugador);
    alert("Jugador añadido con éxito");
    añadir_a_la_lista();
    calcular_estadisticas();
    limpiar_campos();
}

let btn_añadir = document.querySelector('#añadir');
btn_añadir.onclick = añadir_jugador;

function añadir_a_la_lista(){
    let lista = document.querySelector('#lista');

    let equipo = document.querySelector('#equipo').value;
    let nombre = document.querySelector('#nombre').value;
    let goles = document.querySelector('#goles').value;
    goles = parseInt(goles);
    let amarillas = document.querySelector('#amarillas').value;
    amarillas = parseInt(amarillas);
    let rojas = document.querySelector('#rojas').value;
    rojas = parseInt(rojas);

    let contenido = "";
    contenido += `<strong>Equipo: </strong> ${equipo} || `;
    contenido += `<strong>Nombre: </strong> ${nombre} || `;
    contenido += `<strong>Goles: </strong> ${goles} || `;
    contenido += `<strong>Tarjetas Amarillas: </strong> ${amarillas} || `;
    contenido += `<strong>Tarjetas Rojas: </strong> ${rojas}`;
    contenido += `<br>`;
    lista.innerHTML += contenido;

    document.body.appendChild(lista);
}
function comprobar_campos(){

    let equipo = document.querySelector('#equipo').value;
    let nombre = document.querySelector('#nombre').value;
    let goles = document.querySelector('#goles').value;
    goles = parseInt(goles);
    let amarillas = document.querySelector('#amarillas').value;
    amarillas = parseInt(amarillas);
    let rojas = document.querySelector('#rojas').value;
    rojas = parseInt(rojas);

    if(equipo.length < 1){
        alert("El campo equipo está vacío");
        return false;
    }
    if(nombre.length < 1){
        alert("El campo nombre está vacío");
        return false;
    }
    if(goles.length == 0 || isNaN(goles)){
        alert("El campo goles está vacío o no es correcto");
        return false;
    }
    if(amarillas.length == 0 || isNaN(amarillas)){
        alert("El campo tarjetas amarillas está vacío o no es correcto");
        return false;
    }if(rojas.length == 0 || isNaN(rojas)){
        alert("El campo tarjetas rojas está vacío o no es correcto");
        return false;
    }
    return true;
}

function calcular_estadisticas(){
    let equipos = {};
    let n_jugadores = 0;
    let n_goles = 0;
    let n_amarillas = 0;
    let n_rojas = 0;

    for (let i = 0; i < jugadores.length; i ++){
        
        let jugador = jugadores[i];
        n_jugadores = jugadores.length;
        n_goles += jugador['goles'];
        n_amarillas += jugador['tarjetasAmarillas'];
        n_rojas += jugador['tarjetasRojas'];

        if(!equipos[jugador['equipo']]){
            equipos[jugador['equipo']] = true;
        }
    }
    document.querySelector('#total_equipos').textContent = Object.keys(equipos).length;
    document.querySelector('#total_jugadores').textContent = n_jugadores;
    document.querySelector('#total_goles').textContent = n_goles;
    document.querySelector('#total_amarillas').textContent = n_amarillas;
    document.querySelector('#total_rojas').textContent = n_rojas;
}

function borrar_jugador(){
    let input_nombre = document.querySelector('#nombre').value;
    if(input_nombre.length < 1){
        alert("El campo del nombre está vacío");
    }
    if(jugadores.length == 0){
        alert("La lista de jugadores está vacía");
    }
    //let jugador_encontrado = false;

    /*for (let i = 0; i < jugadores.length; i++){
        let jugador = jugadores[i];
        if(input_nombre == jugador['nombre']){
            jugador_encontrado = true;
            jugadores.splice(i,1);
            alert("Jugador borrado");
            limpiar_campos();
            calcular_estadisticas();
            actualizar_lista();
            console.log(jugadores);
        }
    }*/
    //El objeto jugador se crea nuevo, con filter se crea un nuevo array
    let jugadores_nuevos = jugadores.filter(jugador => jugador.nombre !== input_nombre);
    jugadores = jugadores_nuevos;
    alert("Jugador borrado");
    limpiar_campos();
    calcular_estadisticas();
    actualizar_lista();
    console.log(jugadores);

    /*if(jugador_encontrado == false){
        alert("No se ha encontrado el jugador en la lista");
}*/
}

function limpiar_campos(){
    let equipo = document.querySelector('#equipo');
    let nombre = document.querySelector('#nombre');
    let goles = document.querySelector('#goles');
    let amarillas = document.querySelector('#amarillas');
    let rojas = document.querySelector('#rojas');
    
    equipo.value = "";
    nombre.value = "";
    goles.value = "";
    amarillas.value = "";
    rojas.value = "";
}
function actualizar_lista(){
    let lista = document.querySelector('#lista');
    let contenido = "";
    for (let i = 0; i < jugadores.length; i ++){
        console.log("priueba");
    jugador = jugadores[i];
    contenido += `<strong>Equipo: </strong> ${jugador['equipo']} || `;
    contenido += `<strong>Nombre: </strong> ${jugador['nombre']} || `;
    contenido += `<strong>Goles: </strong> ${jugador['goles']} || `;
    contenido += `<strong>Tarjetas Amarillas: </strong> ${jugador['tarjetasAmarillas']} || `;
    contenido += `<strong>Tarjetas Rojas: </strong> ${jugador['tarjetasRojas']}`;
    contenido += `<br>`;    
}
//Como ya hemos añadido la lista al body, no hace falta añadirla otra vez
lista.innerHTML = contenido;
}


