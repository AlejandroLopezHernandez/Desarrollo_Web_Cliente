/*Hacer un programa que haga lo siguiente:
Tiene un formulario con campos para datos de futbolistas:
Nombre, posicion, goles, equipo.

El formulario debe tener tres botones: guardar formulario debe guardar 
los datos rellenados, restaurar formulario debe poner los datos como 
estaban guardados y por último un botón borrar datos.*/

function guardar_formulario() {
    console.log("prueba");
    let nombre = document.querySelector('#nombre').value;
    let posicion = document.querySelector('#posicion').value;
    let goles = document.querySelector('#goles').value;
    let equipo = document.querySelector('#equipo').value;

    localStorage.setItem("nombre: ", nombre);
    localStorage.setItem("posición: ", posicion);
    localStorage.setItem("goles: ", goles);
    localStorage.setItem("equipo: ", equipo);

}
function restaurar_formulario() {
    let nombre = localStorage.getItem("nombre: ");
    let posicion = localStorage.getItem("posición: ");
    let goles = localStorage.getItem("goles: ");
    let equipo = localStorage.getItem("equipo: ");

    console.log("nombre: ", nombre);
    console.log("posición: ", posicion);
    console.log("goles: ", goles);
    console.log("equipo: ", equipo);

}
function borrar() {
    localStorage.clear();
    alert("Datos locales borrados");
}