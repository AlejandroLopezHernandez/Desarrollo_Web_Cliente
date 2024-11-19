/*
"nombre de usuario" obligatorio debe comprobar que no esta vacío debe tener al menos 6 caracteres,
 ademas no debe ser root, admin, sysadmin, Administrador, Administrator, esos debe mostrar usuarios no permitidos.
Cuando tenga el foco debe cambiar el fondo a un color y el texto a otro cuando lo pierda debe dejar por defecto.

password debe dar un error mientras no tenga 8 caracteres cualquier cosa y un numero, error debe mostrar 
si faltan caracteres o no a escrito un número
Repetir la password Si la password no es la misma, debe mostrar un mensaje, 
debe borrar los dos campos y poner el foco en el campo password.
*/
let formularioUsuario = document.querySelector('#formulario');
formularioUsuario.addEventListener('change',(event)=>{

let usuario = document.querySelector('#entradaUsuaio').value;
    let mensajeError1 = document.querySelector('#mensaje1');
    if(usuario.length <= 6 || usuario == null){
        event.preventDefault();
        mensajeError1.textContent ="Error, el usuario debe tener al menos 6 carácteres";
    }
    let usuarios_no_permitidos = ['root','admin','sysadmin','Administrador','Administrator'];

    for(let i = 0; i < usuarios_no_permitidos.length; i ++){
        if(usuario == usuarios_no_permitidos[i]){
            event.preventDefault();
        mensajeError1.textContent ="Error, el usuario no puede ser ni root ni admin";
        }
    }

let contraseña = document.querySelector('#contraUsuario').value;
let mensajeError2 = document.querySelector('#mensaje2');

if(contraseña.length < 8){
    mensajeError2.textContent ="Error, la contraseña debe tener al menos 8 carácteres";
}
let numero = false;
for(let i = 0; i < contraseña.length; i ++){
    if(contraseña[i] >= 0 && contraseña[i] <= 9){
        numero = true;
        break;
    }
    if(!numero){
    mensajeError2.textContent ="Error, la contraseña debe tener al menos un número";
    }

}

let repetirContraseña = document.querySelector('#repetirContra').value;

});