/*Crea un hmtl y el javascript correspondiente que tenga los siguiente.
5 botones.
- El primero permite añadir elementos a un array pedira el elemento por un prompt
- El segundo permite borrar el ultimo elemento del array
- El tercero permitira borrar el primer elemento.
- El cuarto borrar un elemento concreto pedira con un prompt el elemento a borrar.
- Y el quinto mostrar por consola y con un alert el array.
Cada boton llamara a una funcion distinta, todos estaran en mismo fichero js*/

let my_array =[];

function añadir_elementos(){
    let primer_boton = prompt("Añade un elemento a la lista");
    my_array.push(primer_boton);
}
function borrar_ultimo_elemento(){
    let segundo_boton = prompt("Borra el último elemento de la lista");
    my_array.pop();
}
function borrar_primer_elemento(){
    let tercer_boton = prompt("Borra el primer elemento");
    my_array.shift();
}
function borrar_elemento_concreto(){
    let cuarto_boton = prompt("Introduce un elemento concreto que quieras borrar");
    let indice = my_array.indexOf(cuarto_boton);
    if(indice !== -1){
        my_array.splice(indice,1);
    }
}
function imprimir_array(){
    alert(my_array);
    console.log(my_array);
}

