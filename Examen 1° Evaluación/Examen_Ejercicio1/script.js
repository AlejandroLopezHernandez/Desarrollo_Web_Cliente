let usuarios = {};
let div1 = document.createElement('div');
let label1 = document.createElement('label');
label1.innerText = "Usuario";
let label2 = document.createElement('label');
label2.innerText = "Contraseña 1";

let label3 = document.createElement('label');
label3.innerText ="Contraseña 2";

let input1 = document.createElement('input');
let input2 = document.createElement('input');
input2.type = "password";
let input3 = document.createElement('input');
input3.type = "password";

let boton = document.createElement("button");
boton.innerText ="Añadir usuario";

div1.appendChild(label1);
div1.appendChild(input1);
div1.appendChild(document.createElement('br'));
div1.appendChild(document.createElement('br'));
div1.appendChild(label2);
div1.appendChild(input2);
div1.appendChild(document.createElement('br'));
div1.appendChild(document.createElement('br'));
div1.appendChild(label3);
div1.appendChild(input3);
div1.appendChild(document.createElement('br'));
div1.appendChild(document.createElement('br'));
div1.appendChild(boton);

document.body.appendChild(div1);

boton.addEventListener('click',funcion_click);
function funcion_click(){
    input_usuario = input1.value;
    input_contraseña1 = input2.value;
    input_contraseña2 = input3.value;

    if(input_usuario.length == 0|| input_contraseña1.length == 0 || input_contraseña2.length == 0){
        alert("Hay algún campo vacío")
    }else if (input_contraseña1 !== input_contraseña2){
        alert("Las contraseñas no coinciden");
    } else if(input_contraseña1.length < 8 || input_contraseña2.length < 8){
        alert("Las contraseñas deben contener al menos 8 carácteres");
    } else{
        usuarios[input_usuario] = input_contraseña1;
        alert("Usuario añadido");
        contraseña_cifrada = cifrar_contraseña(input_contraseña1);

        let lista = document.createElement('li');
        lista.innerText = `${input_usuario}:${contraseña_cifrada}`;
        
        let boton_borrar = document.querySelector('#boton_borrar');
        if (!boton_borrar){
            boton_borrar = document.createElement('button');
            boton_borrar.innerText = "Borrar usuario";
            boton_borrar.id = boton_borrar;
            boton_borrar.addEventListener('click',funcion_borrar);
            div1.appendChild(document.createElement('br'));
            div1.appendChild(boton_borrar);
        }
        div1.appendChild(lista);

        if(input_usuario === usuarios[input_usuario]){
            usuarios[input_usuario] = input_contraseña1;
            alert("Contraseña cambiada");
        }
    }
}
function funcion_borrar(){
    input_usuario = input1.value;
    input_contraseña1 = input2.value;

    delete usuarios[input_usuario];
    delete usuarios[input_contraseña1];
    alert("Usuario borrado");
}
function cifrar_contraseña(contraseña){
    contraseña = input2.value;

    let cadena_para_cifrar = contraseña.substring(3,contraseña.length);
    let cadena_cifrada = contraseña.replace(cadena_para_cifrar,'****');
    return cadena_cifrada;
}






