let cookies_guardadas = {};
let cookies = document.cookie.split("; ");

for (let cookie of cookies) {
    const [clave, valor] = cookie.split("=");
    cookies_guardadas[clave] = valor;
}

if (cookies_guardadas['aceptar'] == undefined) {
    let banner = confirm("¿Aceptarías cookies?");
    if(banner){
        let fecha_actual = new Date();
        //console.log(fecha_actual);
        fecha_actual.setMinutes(fecha_actual.getMinutes() + 10);
        let fecha_modificada = fecha_actual.toUTCString();
        document.cookie = `aceptar = 1; expires = ${fecha_modificada}`;
        crear_formulario();
    } else {
        alert("Debes aceptar las cookies para continuar");
    }

} else if (cookies_guardadas['aceptar'] == 1) {
    crear_formulario();
}

function crear_formulario(){
        let login = document.createElement('input');
        let password = document.createElement('input');
        let button = document.createElement('button');
        let label_user = document.createElement('label');
        let label_pass = document.createElement('label');

        login.type = "text";
        login.id="user";
        password.type = "password";
        password.id = "contraseña";
        button.innerText = "Iniciar sesión";
        label_user.innerText = "Usuario: ";
        label_pass.innerText = "Contraseña: ";

        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(label_user);
        document.body.appendChild(login);
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(label_pass);
        document.body.appendChild(password);
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(button);
        button.addEventListener('click', hacer_login);
    }

function hacer_login(){
    let input_user = document.querySelector('#user').value;
    let input_contraseña = document.querySelector('#contraseña').value;

    let user = "alh243";
    let password = "alex1234";

    if(input_user == user && input_contraseña == password){
    let fecha_actual = new Date();
    fecha_actual.setMinutes(fecha_actual.getMinutes() + 10);
    let fecha_modificada = fecha_actual.toUTCString();
        console.log("Sesión iniciada correctamente");
        document.cookie = `usuario =  ${user}; expires = ${fecha_modificada}`;
        document.cookie = `contraseña = ${password}; expires = ${fecha_modificada}`;
        if(cookies_guardadas['usuario'] == user && cookies_guardadas['contraseña'] == password){
            mostrar_user_pass();
            console.log(cookies);
        }
    } else {
        console.log("Error en el usuario o contraseña");
    }
}
function mostrar_user_pass(){
    let user = "alh243";
    let password = "alex1234";
    
        document.body.innerHTML = "";

        contenido = 'Tu usuario es ' + user + ' y tu contraseña es: ' + password;

        document.body.innerHTML = contenido;
        document.body.appendChild(document.createElement('br'));
        btn_borrar = document.createElement('button');
        btn_borrar.innerText = "Borrar cookies";
        document.body.appendChild(btn_borrar);
        btn_borrar.addEventListener('click', borrar_cookies);

        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(document.createElement('br'));
        let input_color = document.createElement('input');
        input_color.id ="color_nuevo";
        let label_color = document.createElement('label');
        label_color.innerText = "Color";
        document.body.appendChild(label_color);
        document.body.appendChild(input_color);

        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(document.createElement('br'));
        btn_cambiar_color = document.createElement('button');
        btn_cambiar_color.innerText = "Cambiar color";
        document.body.appendChild(btn_cambiar_color);
        btn_cambiar_color.addEventListener('click', cambiar_color);
    }

function borrar_cookies(){
    for (let cookie of cookies){
        const clave = cookie.split('=')[0];
        document.cookie = `${clave}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;

    }
    alert("Cookies borradas");
    console.log("Cookies", document.cookie);
}

function cambiar_color(){
    console.log("prueba botón color");
    let input_color = document.querySelector('#color_nuevo').value;
    document.body.style.backgroundColor=input_color;
    document.cookie=`usuario = ${input_color};`;
    console.log("Cookies: ", document.cookie);
}
