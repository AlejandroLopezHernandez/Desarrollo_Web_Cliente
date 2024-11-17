/*
    -"nombre de usuario" es obligatorio, debe comprobar que no esta vacío debe tener al menos 6 caracteres,
    ademas no debe ser root, admin, sysadmin, Administrador, Administrator, esos debe mostrar usuarios no permitidos.
    -Cuando tenga el foco debe cambiar el fondo a un color y el texto a otro,cuando lo pierda debe dejar por defecto.
    -password debe dar un error mientras no tenga 8 caracteres cualquier cosa y un numero error debe mostrar si faltan
    caracteres o no ha escrito un número.
    -Repetir la password, si la password no es la misma, debe mostrar un mensaje, debe borrar los dos campos
     y poner el foco en el campo password.
*/
//Validar el nombre de usuario
document.getElementById('formulario').addEventListener('change',(event) =>{
let input_user = document.getElementById('input_user').value;

let usuarios_no_validos = ["root","admin","Administrador","systemadmin","Administrator"];

for(let i = 0;i<usuarios_no_validos.length;i ++){
    if(input_user == usuarios_no_validos[i]){
        alert("Nombre de usuario no válido");
        event.preventDefault();   
    } 
    }
    if(input_user.length < 6){
    alert("Nombre de usuario demasiado corto.Debe tener al menos 6 carácteres");
    event.preventDefault();
}
});
//Para que el input de usuario cambie de color
document.getElementById('input_user').addEventListener('focus',(event)=>{
let input_user = document.getElementById('input_user');
input_user.style.backgroundColor = "#92deac";
});

document.getElementById('input_user').addEventListener('blur',(event)=>{
let input_user = document.getElementById('input_user');
input_user.style.backgroundColor = "white";
});
//Para que el input de las contraseñas cambie de color
document.getElementById('password1').addEventListener('focus',(event)=>{
let password1 = document.getElementById('password1');
password1.style.backgroundColor = "#92b6de";
});
document.getElementById('password1').addEventListener('blur',(event)=>{
let password1 = document.getElementById('password1');
password1.style.backgroundColor = "white";
});
//Ahora con repetir contraseña
document.getElementById('password2').addEventListener('focus',(event)=>{
let password2 = document.getElementById('password2');
password2.style.backgroundColor = "#d393fa";
});
document.getElementById('password2').addEventListener('blur',(event)=>{
let password2 = document.getElementById('password2');
password2.style.backgroundColor = "white";
});
//Validar la contraseña, en primer lugar, para que tengan al menos 8 caracteres
document.getElementById("password1").addEventListener('change',(event)=>{
let contraseña1 = document.querySelector('#password1').value;
let contraseña2 = document.querySelector('#password2').value;
if(contraseña1.length < 8){
    alert("La contraseña debe tener al menos 8 carácteres");
    event.preventDefault(); 
}
//Y después para que tengan al menos un número
let hay_numero = false;
for(let i = 0;i < contraseña1.length; i ++){
    if (contraseña1[i] >= 0 && contraseña1[i] <= 9){
        hay_numero = true;
        break;
    }
}
if(!hay_numero){
    alert("La contraseña debe al menos contener un número");
    event.preventDefault();
}
}); 
//Validar que la segunda contraseña sea igual que la primera
document.querySelector('#password2').addEventListener('change',(event)=>{
    let contraseña1 = document.querySelector('#password1').value;
    let contraseña2 = document.querySelector('#password2').value;
if(contraseña1 !== contraseña2){
    alert("Las dos contraseñas han de ser iguales");
    event.preventDefault();

    document.querySelector('#password1').value = "";
    document.querySelector('#password2').value = "";
    document.querySelector('#password1').focus();

}   
});