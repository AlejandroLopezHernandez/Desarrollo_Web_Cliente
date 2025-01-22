let usuarios = {};

let label1 = document.createElement('label');
label1.innerText = "Usuario";
let label2 = document.createElement('label');
label2.innerText = "Contraseña 1";
let label3 = document.createElement('label');
label3.innerText = "Contraseña 2";
let input1 = document.createElement('input');
let input2 = document.createElement('input');
input2.type = 'password';
let input3 = document.createElement('input');
input3.type = 'password';

let boton = document.createElement('button');
boton.innerText = "Añadir usuario";

document.body.appendChild(label1);
document.body.appendChild(input1);
document.body.appendChild(document.createElement('br'));
document.body.appendChild(document.createElement('br'));
document.body.appendChild(label2);
document.body.appendChild(input2);
document.body.appendChild(document.createElement('br'));
document.body.appendChild(document.createElement('br'));
document.body.appendChild(label3);
document.body.appendChild(input3);
document.body.appendChild(document.createElement('br'));
document.body.appendChild(document.createElement('br'));
document.body.appendChild(boton);

let contenedor_usuarios = document.createElement('ul');
document.body.appendChild(contenedor_usuarios);

boton.addEventListener('click', comprobar_inputs);


function comprobar_inputs() {
    input_usuario = input1.value;
    input_contraseña1 = input2.value;
    input_contraseña2 = input3.value;

    if (input_usuario.length <= 0) {
        alert("Tienes que rellenar algunos de los campos");
        return 0;
    } 
    if(input_contraseña1.length < 8 || input_contraseña2.length < 8){
        alert("Las contraseñas deben tener al menos 8 carácteres");
        return 0;
    }
    if (input_contraseña1 !== input_contraseña2) {
        alert("Las contraseñas no coinciden");
        return 0;
    } 
        //Muy importante, para guardar en un diccionario
        usuarios[input_usuario] = input_contraseña1;
        let cadena_para_cifrar = input_contraseña1.substring(1,4);
        let contraseña_cifrada = input_contraseña1.replace(cadena_para_cifrar,'*****');

        actualizar_usuarios();
        } 

        function actualizar_usuarios(){
            contenedor_usuarios.innerHTML = "";

            for (let usuario in usuarios){
                let lista = document.createElement('li');
                lista.innerHTML = `Usuario: ${usuario}<br>Contraseña: ${usuarios[usuario]}`;

                let boton_borrar = document.createElement('button');
                boton_borrar.innerText = "Borrar usuario";
                boton_borrar.addEventListener('click', () => {
                    delete usuarios[usuario];
                });

                lista.appendChild(boton_borrar);
                contenedor_usuarios.appendChild(lista);
            }
        }

    





