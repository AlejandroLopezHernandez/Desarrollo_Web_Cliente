/*
Descripción:
Vas a crear una aplicación en JavaScript que gestione información sobre jugadores de fútbol a través de un formulario interactivo. 
La aplicación debe permitir añadir jugadores, mostrar estadísticas generales, y eliminar jugadores de la lista, 
actualizando los datos dinámicamente.

Requisitos del ejercicio:
    Formulario de Entrada de Datos
        Crea un formulario HTML con los siguientes campos:
            Equipo: Input de texto.
            Nombre del jugador: Input de texto.
            Número de goles: Input numérico.
            Tarjetas amarillas: Input numérico.
            Tarjetas rojas: Input numérico.
        Añade un botón Añadir jugador que ejecutará las acciones descritas.

    Lista de Jugadores
        Los datos ingresados en el formulario se almacenarán en una lista de diccionarios en JavaScript.
        Cada jugador será un diccionario con las siguientes claves: equipo, nombre, goles, amarillas, rojas.

    Mostrar Estadísticas
        Debajo del formulario, muestra un resumen que se actualizará dinámicamente. Este resumen debe incluir:
            Número total de jugadores.
            Número de equipos (sin contar repetidos).
            Total de goles.
            Total de tarjetas amarillas.
            Total de tarjetas rojas.
        Muestra una lista con todos los jugadores agregados, donde cada jugador debe incluir:
            Equipo, nombre, número de goles, tarjetas amarillas y rojas.
            Un botón Borrar al lado de cada jugador.

    Eliminar Jugadores
        Al pulsar el botón Borrar en un jugador:
            Se eliminará el jugador de la lista.
            Se recalcularán y actualizarán las estadísticas generales.
            Se actualizará la lista de jugadores mostrada.
*/
//Vamos a añadir los jugadores en un array
let jugadores = [];
function agregar_jugador(){
    //Pillamos los campos del HTML
    let equipo = document.querySelector('#equipo').value;
    let nombre_jugador = document.querySelector('#NombreJugador').value;
    let goles = document.querySelector('#Ngoles').value;
    let amarillas = document.querySelector('#TAmarillas').value;
    let rojas = document.querySelector('#TRojas').value;

    //Creamos el objeto jugador
    let jugador = {
        equipo,
        nombre_jugador,
        goles,
        amarillas,
        rojas
    };
    //Lo añadimos al array
    jugadores.push(jugador);

    console.log(jugadores);
}
function calcular_estadisticas(){
    let total_jugadores = jugadores.length;
    let total_equipos = {};
    let total_goles = 0;
    let total_amarillas = 0;
    let total_rojas = 0;

    
}
function borrar_jugador(){
    
}