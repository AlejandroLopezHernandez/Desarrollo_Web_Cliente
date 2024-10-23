let id_lista = 0;
function crear_lista(){

    let lista_nueva = document.createElement("ul");
    id_lista ++;
    lista_nueva.id = id_lista;
    document.body.appendChild(lista_nueva);

    let boton = document.createElement("button");
    boton.innerHTML = "Añadir a la lista";
    //para esto sirven las funciones flecha
    boton.onclick = function() {anyadir_elemento(lista_nueva.id)};
    document.body.appendChild(boton);
}

function anyadir_elemento(id_lista){
    let mensaje = prompt("Añade un elemento a la lista");
    let elemento = document.createElement("li");
    //Con textContent establecemos el contenido del elemento
    elemento.textContent = mensaje;
    let lista_creada = document.getElementById(id_lista);
    if(lista_creada){
        lista_creada.appendChild(elemento);
    } else{
        console.error("Lista no encontrada: " + id_lista);
    }
}