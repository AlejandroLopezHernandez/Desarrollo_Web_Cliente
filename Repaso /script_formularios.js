let usuarios = {};

function agregar_usuario(){
let input_agregar_usuario = document.querySelector('#agregar_usuario');
let input_agregar_contraeña = document.querySelector('#agregar_contraseña');

let valor_usuario = input_agregar_usuario.value;
let valor_contraseña = input_agregar_contraeña.value;

if(valor_usuario.length <= 0 || valor_contraseña.length <= 4){
    alert("Los campos de usuario y contraseña no pueden ir vacíos");
    return 0;
} else {
    //Así se agrega un usuario con un objeto
    usuarios[valor_usuario] = valor_contraseña;
    contraseña_asteriscos = cifrar_contraseña(valor_contraseña);
    agregar_lista(valor_usuario,contraseña_asteriscos);
    console.log(usuarios);
    input_agregar_usuario.value = '';
    input_agregar_contraeña.value = '';
}
}

function borrar_usuario(){
let input_borrar = document.querySelector('#borrar_usuario');
let usuario_para_borrar = input_borrar.value;
if(usuario_para_borrar.length > 0){
    if(usuarios.hasOwnProperty(usuario_para_borrar)){
        delete usuarios[usuario_para_borrar];
        input_borrar.value = '';
        alert(`Borrado con éxito el usuario ${usuario_para_borrar}`);
        actualizar_lista();
    } else{
        alert(`No se ha encontrado al usuario ${usuario_para_borrar}`);
    }
} else {
    alert("El campo para borrar usuario está vacío");
}
}

function actualizar_usuario(){
let input_nombre_viejo = document.querySelector('#nombre_viejo');
let input_nombre_nuevo = document.querySelector('#nombre_nuevo');
let nombre_viejo = input_nombre_viejo.value;
let nombre_nuevo = input_nombre_nuevo.value;

if(nombre_viejo.length > 0 || nombre_nuevo.length > 0){
    //hasOwnProperty sólo se usa con objetos, para comprobar que un objeto existe
    if(usuarios.hasOwnProperty(nombre_viejo)){
        usuarios[nombre_nuevo] = usuarios[nombre_viejo];
        delete usuarios[nombre_viejo];
        input_nombre_viejo.value = '';
        input_nombre_nuevo.value = '';
        alert(`Cambiado con éxito el nombre del usuario. El nombre antiguo era ${nombre_viejo}, el nuevo nombre es ${nombre_nuevo}`);
        actualizar_lista();
    } else{
        alert(`El usuario ${nombre_viejo} no existe`);
    }
} else {
    alert("Alguno de los dos campos está vacío");
}
}

function agregar_lista(user,password){
    let lista = document.createElement('li');
    lista.innerHTML = `<strong>Usuario: </strong> ${user}  <strong>Contraseña: </strong>${password} <br>`;
    document.body.appendChild(lista);
}

function cifrar_contraseña(contraseña){
    let contraseña_para_cifrar = contraseña.substring(1,4);
    let contraseña_cifrada = contraseña.replace(contraseña_para_cifrar, '****');
    return contraseña_cifrada;
}
function actualizar_lista(){
    let lista_actualizada = document.querySelectorAll('li');

    for (let elemento of lista_actualizada){
        elemento.innerHTML = "";

        let usuario = elemento.textContent.trim();
        let contraseña = usuarios[usuario];

        if(usuarios.length == undefined){
            elemento.innerHTML = "";
        } else {
            elemento.innerHTML = `<strong>Usuario: </strong> ${usuario} <strong>Contraseña: </strong>${contraseña} <br>`;
        }

    }
    
}