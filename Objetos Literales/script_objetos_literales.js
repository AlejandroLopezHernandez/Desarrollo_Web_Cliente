/*Crea un hmtl y el javascript correspondiente que tenga los siguiente.
3 botones.
- El primero permite añadir clave valor a un diccionario pedira el elemento por dos  prompt
- El segundo permite borrar la clave del diccionario
- El tercero mostrar por consola el diccionario.
Cada boton llamara a una funcion distinta, todos estaran en mismo fichero js*/
let my_array = {};

function añadir_clave_valor(){
let clave = parseInt(prompt("Introduce un clave por favor, que sea un número entero"));
let valor= prompt("Introduce un valor para esta clave, que sea una cadena de texto");
    my_array[clave]=valor;
}

function borrar_clave(){
    let clave_borrar = parseInt(prompt("Introduce la clave que quieras borrar"));
    delete my_array[clave_borrar];
alert("Has borrado la clave del diccionario");
}
function mostrar_consola(){
console.log(my_array);
}
