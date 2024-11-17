/*
Por defecto todos los campos de inputs y botones aparecerán desactivados excepto el
de autorizar. Cuando se pulsa el botón confirmar clave:
- Si el usuario y pass coinciden con uno por defecto (Borja / Martin), los inputs se
activarán
Formulario agregar:
Al introducir datos en los inputs del nombre, apellido y experiencia se agregarán a la
tabla al pulsar el botón agregar. En el caso de tener nombre o apellido vacio saltará un
aviso de que no se puede realizar la operación.
En el caso de agregar el usuario, tras realizar la operación se limpiarán los inputs
Formulario borrar:
Al introducir datos en el input nombre:
- Si no existe ningún usuario en la tabla con el nombre indicado, aparecerá un
mensaje de error
- Si existen varios usuarios con el nombre indicado, aparecerá un mensaje de
confirmación para activar la operación
- Si solo existe un usuario directamente lo borrará
En el caso de tener nombre vacío saltará un aviso de que no se puede realizar la
operación.
En el caso de borrar el usuario, tras realizar la operación se limpiarán los inputs
Formulario actualizar:
Al introducir datos en el input nombre y nombre nuevo:
- Si no existe ningún usuario en la tabla con el nombre indicado, aparecerá un
mensaje de error.
- Si existen varios usuarios con el nombre indicado, aparecerá un mensaje de
confirmación para activar la operación
- Si solo existe un usuario directamente lo actualizará
-
En el caso de tener nombre o nombre nuevo vacío saltará un aviso de que no se puede
realizar la operación.
En el caso de actualizar el usuario, tras realizar la operación se limpiarán los inputs
*/
let usuarios = [];
let contraseñas = [];

let boton_agregar = document.querySelector('#btn_agregar');
boton_agregar.addEventListener('click',agregar);

function agregar(){
    let input_usuario = document.querySelector('#form_name').value.trim();
    let input_contraseña = document.querySelector('#form_password').value;

    if(input_usuario.length == 0 || input_contraseña.length == 0){
        alert("Error al agregar un usuario. El campo nombre o contraseña no pueden ir vacíos");
        event.preventDefault;
    } else {
        usuarios.push(input_usuario);
        contraseñas.push(input_contraseña);
        console.log("Usuario agregado correctamente");
        console.log(usuarios);
        console.log(contraseñas);
        //Así limpiamos los campos de texto
        document.querySelector('#form_name').value = "";
        document.querySelector('#form_password').value = "";
    }
}

let btn_confirmar = document.querySelector('#btn_confirmar');
btn_confirmar.addEventListener('click',confirmar);

function confirmar(){
let user = document.querySelector('#user').value;
let password = document.querySelector('#password').value;

if(usuarios.includes(user)){

if(contraseñas.includes(password)){

}
    alert("Usuario y contraseña correctos");
} else {
    alert("Error al escribir usuario y contraseña");
}
}
let btn_borrar = document.querySelector('#btn_borrar');
btn_borrar.addEventListener('click',borrar);

function borrar(){
let campo_borrado = document.querySelector('#borrar_nombre').value;
for(let i = 0; i < usuarios.length; i ++){
    if(usuarios[i] == campo_borrado){
        usuarios.splice(i,1);
        contraseñas.splice(i,1);
        alert("Usuario borrado correctamente");
        document.querySelector('#borrar_nombre').value = "";
        } else {
        alert("Usuario no encontrado");
        document.querySelector('#borrar_nombre').value = "";
    }
}
}

let btn_actualizar = document.querySelector('#btn_actualizar');
btn_actualizar.addEventListener('click',actualizar);

function actualizar(){
    let nombreViejo = document.querySelector('#nombre_viejo').value;
    let nombreNuevo = document.querySelector('#nombre_nuevo').value;

    for(let i = 0; i < usuarios.length; i ++){
        if(usuarios[i] == nombreViejo){
          usuarios[i] = nombreNuevo;
          alert("Nombre de usuario cambiado");  
        } 
        else{
            alert("Usuario no encontrado");
            break;
        }
    }
}
