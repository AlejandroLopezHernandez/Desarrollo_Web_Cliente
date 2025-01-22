let usuarios = [];
let contraseñas = [];

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

boton.addEventListener('click',comprobar_inputs);

function comprobar_inputs(){
    usuario = input1.value;
    contraseña1 = input2.value;
    contraseña2 = input3.value;

    if(usuario.length == 0 || contraseña1.length < 8 || contraseña2.length < 8){
        alert("Algún campo está vacío. Las contraseñas deben tener al menos 8 carácteres");
        return 0;
    }
    if(contraseña1 !== contraseña2){
        alert("Las contraseñas no coinciden");
        return 0;
    }
    usuarios.push(usuario);
    contraseñas.push(contraseña1);

    let cadena_para_cifrar = contraseña1.substring(3,6);
    let contraseña_cifrada = contraseña1.replace(cadena_para_cifrar,'*****');

    let lista = document.createElement('li');
    lista.innerHTML = `Usuario: ${usuario}<br>Contraseña: ${contraseña_cifrada}`;
    document.body.appendChild(lista);

    const cambiar_contraseña = (usuario,new_password) =>{
        const indice = usuarios.indexOf(usuario);

        if(indice !== -1){
            contraseñas.splice(indice,1);
            contraseñas[indice] = new_password;
            alert("Contraseña cambiada");
        } else {
            alert("Usuario no encontrado");
        }
    }
    const cambiar_usuario = (usuario, nuevo_usuario) =>{
        const indice = usuarios.indexOf(usuario);
        if(indice !== -1){
            usuarios.splice(indice,1);
            usuarios[indice] = nuevo_usuario;
            alert("Usuario cambiado");
        } else {
            alert("Usuario no encontrado");
        }
    }
    cambiar_contraseña(usuario,contraseña1);
    cambiar_usuario(usuario,usuario);
    console.log(usuarios);
    console.log(contraseñas);
    

    let boton_borrar = document.createElement('button');
    boton_borrar.innerText = "Borrar usuario";
    document.body.appendChild(boton_borrar);
    boton_borrar.addEventListener('click', () =>{
        for (let i = 0; i < usuarios.length; i ++){
            if(usuarios[i] == usuario){
                usuarios.splice(i,1);
                break;
            }
        }
        for(let j = 0; j < contraseñas.length; j ++){
            if(contraseñas[j] == contraseña1){
                contraseñas.splice(j,1);
                break;
            }
        }
      alert("Usuario borrado");
    });
}