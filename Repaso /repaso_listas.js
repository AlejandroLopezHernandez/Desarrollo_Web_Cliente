/*
Crear un pagina con un botón que ponga crear lista, cuando le demos a un botón hará lo siguiente:

-Añade un ul con un identificador único, 
además añade un boton que pondra añadir elementos a la lista "identificador"
Cuando hacemos click en el añadir elementos en el identificador aparecera un prompt 
y pondra un elemento nuevo en la lista indicada.
*/
let boton_crear = document.querySelector('#crearLista');
boton_crear.addEventListener('click',crear_lista);

function crear_lista(){
    let list_nueva = document.createElement('ul');
    list_nueva.id = "listaCreada";
    document.body.append(list_nueva);

    let boton_nuevo = document.createElement('button');
    boton_nuevo.id = "btn_add";
    boton_nuevo.value ='Añadir';
    boton_nuevo.name ='Añadir';
    boton_nuevo.innerText = 'Añadir elemento';
    document.body.append(boton_nuevo);

    boton_nuevo.addEventListener('click',(event) =>{
        let valor_por_añadir = prompt("Introduce qué quieres añadir a la lista");
        let salto_linea = document.createElement('br');
        list_nueva.append(salto_linea);
        list_nueva.append(valor_por_añadir);
    });
}