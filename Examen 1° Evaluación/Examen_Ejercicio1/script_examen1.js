/*Ejercicio 1 (2,5 puntos)

El ejercicio lo que hace es crear usuarios nuevos si no existen y las dos password coinciden. Si las password no coinciden mostrar un error, y si el usuario ya existe le cambiara la password.
Ademas mostrara a los usuarios sus contraseñas cifrada y permitirá borrar usuarios.

### Requisitos

La pagina html debe estar vacía no debe contener nada más que la etiqueta script con el js.
Debe haber contenedor de usuarios

### Apartado1: Crear de forma dinámica la pagina (0,25)

Debe crear tres campos inputs y botón "Añadir usuario"

* Input1: usuario
* Input2: password1
* Input1: password2

### Apartado2: Campos erróneos. (0,25)

* Si al darle al botón hay algún campo vacío mostrara falta el campo.. con popup
* Si al darle al botón las password no son iguales mostrar un error con un popup
* Si al darle al botón las password son iguales pero su longitud es menor de 8 mostrar un error de longitud no valida.

Si el es password es correcto pueden pasar dos cosas.

* No exista el usuario
* Exista el usuario

### Apartado 3: no existe el usuario. (0,75)

* Si no existe el usuario lo añade a la lista.
* Mostrar todos los usuarios, su id, su password cifrada y un botón borrar.

#### Password cifrada.

* Solo mostrar los tres primero caracteres, el ultimo y el resto asteriscos. Ejemplo ELcamion3 ELc\*\*\*\*\*3

### Apartado 4: El usuario existe. (0,5)

* Si el usuario existe le cambiara la password y mostrara la lista de usuarios, password y el botón borrar

### Apartado 5: Borrar usuario. (0,75)

* Cuando se haga click en botón borrar de usuario se debe borrar ese usuario y debe mostrar el resto*/

/*let input_usuario = document.createElement('input').value;
let input_contrasenya1 = document.createElement('input').value;
let input_contrasenya2 = document.createElement('input').value;
let btn_anyadir = document.createElement('button');
btn_anyadir.textContent = "Añadir usuario";
let salto_linea = document.createElement('br');
let salto = "\n";

let formulario = document.querySelector('#formulario');

formulario.appendChild(input_usuario);
formulario.appendChild(salto_linea);
formulario.appendChild(salto);
formulario.appendChild(input_contrasenya1);
formulario.appendChild(salto_linea);
formulario.appendChild(salto);
formulario.appendChild(input_contrasenya2);
formulario.appendChild(salto_linea);
formulario.appendChild(salto);
formulario.appendChild(btn_anyadir);*/

let usuarios = [];
let contrasenyas = [];

let btn_anyadir = document.querySelector('#btn_anyadir');
btn_anyadir.addEventListener('click',añadir_usuario);
let btn_borrar = document.querySelector('#btn_borrar');
btn_borrar.addEventListener('click',borrar_usuario);
let lista_usuarios = document.querySelector('#usuarios');
let lista_contraseñas = document.querySelector('#contraseñasLista');

function añadir_usuario(){
    
let usuario = document.querySelector('#input_usuario').value;
let contrasenya1 = document.querySelector('#contrasenya1').value;
let contrasenya2 = document.querySelector('#contrasenya2').value;

    if(usuario.length <= 0 ){
        alert("El campo usuario no puede ir vacío");
    } else if(contrasenya1.length <= 0 || contrasenya1.length < 8 ){
        alert('El campo contraseña no puede ir vacío y debe tener más de 8 carácteres');
    }else if(contrasenya2.length == 0){
        alert('El campo contraseña no puede ir vacío');

    }else if(contrasenya1 !== contrasenya2){
        alert('Las contraseñas deben de coincidir');
    } else {
        alert("Usuario introducido correctamente");

        usuarios.push(usuario);
        contrasenyas.push(contrasenya1);

        document.body.append(usuarios);

        let contraseña_para_cifrar = contrasenya1.substring(2,5);
        let contraseña_cifrada = contrasenya1.replace(contraseña_para_cifrar,'***');

        document.body.append(contraseña_cifrada);
    }
}
function borrar_usuario(){
let usuario = document.querySelector('#input_usuario').value;

    for(let i = 0; usuarios.length; i ++){
        if(usuarios[i] == usuario){
            usuarios.splice(i,1);
            alert("Usuario borrado correctamente");
            document.body.append(usuarios);
            break;
        } else {
            alert("Usuario no encontrado");
            break;
        }
    }
}
