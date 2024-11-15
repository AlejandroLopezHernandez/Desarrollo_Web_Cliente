/*
Crear un formulario HTML que permita recoger correos electrónicos de los usuarios, validar su formato y enmascararlos.
La lista de correos válidos debe mostrarse en pantalla en su formato enmascarado (es decir, ocultando parte del nombre de usuario).
Además, se debe proporcionar un botón para ver la lista de correos que fueron ingresados en formato incorrecto.

 Requerimientos:
1. Formulario de entrada: Debe incluir un campo de entrada para el correo electrónico y un botón de "Agregar".
2. Validación de correo: Al agregar un correo electrónico, se debe validar que:
   - Contiene el símbolo `"@"`.
   - Contiene al menos un `"."` en el dominio.
3. Enmascarado de correos válidos: Los correos válidos deben mostrarse en una lista enmascarados, 
donde solo se vea el primer carácter del nombre de usuario y el dominio completo. Ejemplo: `"usuario@example.com"` 
se mostrará como `"u***@example.com"`.
4. Lista de correos inválidos: Al hacer clic en un botón llamado "Mostrar correos incorrectos", 
se debe mostrar en pantalla una lista de todos los correos que no cumplen con los requisitos de validación.
5. Manejo de errores: Si el usuario intenta ingresar un correo inválido, debe recibir un mensaje de error, y
 el correo no se debe agregar a la lista de correos válidos.

Ejemplo de estructura:
- Un formulario HTML con un campo de entrada para el correo electrónico y un botón para agregar el correo.
- Dos listas: una para correos válidos (en formato enmascarado) y otra para correos inválidos 
(que solo se muestra al presionar el botón "Mostrar correos incorrectos").
*/
let boton_enviar = document.querySelector('#btn_enviar');
let boton_lista = document.querySelector('#btn_lista');
let mostrar_elemento_no_admitido = false;

boton_enviar.addEventListener('click',event=>{
    let entrada_email = document.querySelector('#input_email').value;
    let arroba = "@";

    if(entrada_email.includes(arroba) == false){
        alert("Tu email debe incluir un @");
        let elemento_no_admitido = document.createElement("li");
        elemento_no_admitido.textContent = entrada_email;
        elemento_no_admitido.classList.add("elementos-no-admitidos");
        document.body.appendChild(elemento_no_admitido);
        elemento_no_admitido.style.display = 'none';
        mostrar_elemento_no_admitido = true;
        alert("Este email ha sido añadido a la lista de no admitidos");
    }
    let cadena_separada = entrada_email.split('@');
    let nombre_usuario = cadena_separada[0];
    if(cadena_separada[1].includes('.') == false ){
        alert("Tu email debe incluir un punto después del arroba");
        let elemento_no_admitido = document.createElement("li");
        elemento_no_admitido.textContent = entrada_email;
        elemento_no_admitido.classList.add("elementos-no-admitidos");
        document.body.appendChild(elemento_no_admitido);
        elemento_no_admitido.style.display = 'none';
        mostrar_elemento_no_admitido = true;
        alert("Este email ha sido añadido a la lista de no admitidos");
    } else {
        let cadena_para_cifrar = nombre_usuario.substring(1,4);
        let cadena_cifrada = entrada_email.replace(cadena_para_cifrar,'****'); 
        let elemento_lista = document.createElement("li");
        elemento_lista.textContent = cadena_cifrada;
        document.body.appendChild(elemento_lista);
    }
});

boton_lista.addEventListener('click',event=>{
let elemento_oculto = document.querySelectorAll('.elementos-no-admitidos');
    for(let i = 0; i < elemento_oculto.length; i ++){
        if(mostrar_elemento_no_admitido == true){
            elemento_oculto[i].style.display = 'block';
        }
}
});