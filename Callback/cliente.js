/*
Con esta url obtenemos el numero de peliculas.
http://localhost:3000/numeroPelis
Con esta url http://localhost:3000/peli1 obtenemos la pelicula1
npm start para arrancar el servidor
Obtener el número de películas
Imprimir los datos por pantalla
*/

function obtenerDatos(url, callback) { //Esta función no se toca
    fetch(url)
        .then((respuesta) => {
            if (!respuesta.ok) {
                return callback(`Error HTTP ${respuesta.status}`, null);
            }
            return respuesta.json().then((datos) => callback(null, datos));
        })
        .catch((error) => callback(`Error de red: ${error.message}`, null)); // Captura errores de conexión
}

//obtenerDatos("http://localhost:3000/peli1", recogerDatos);

//Obtener el número de películas que hay en el servidor
function procesarDatos(error = null, datos = null) {
    if (error !== null) {
        console.log(error); // Muestra el error en consola
    } else {
        console.table(datos); // Muestra los datos si no hubo error
        //Cantidad sólo está en URL de número de pelis
        let numeroPelis = datos.cantidad;
        CuatroPelis(numeroPelis);
    }
}
// let numero_peliculas = 'http://localhost:3000/numeroPelis';

// for (let i = 1; i < 4;i++){
//     obtenerDatos(`http://localhost:3000/peli${i}`,CuatroPelis);
// }

// for (let i = 1; i < numero_peliculas.length; i++){
//     obtenerDatos(`http://localhost:3000/peli${i}`,CuatroPelis);
// }

function CuatroPelis(error = null, datos = null) {
    if (error !== null){
        console.log(error);
    } else {
        let div = document.querySelector('#resultado');
        let titulo = document.createElement('p');
        let sinopsis = document.createElement('p');
        let id = document.createElement('h4');
        let imagen = document.createElement('img');

        sinopsis.innerText = datos.sinopsis;
        titulo.innerText = datos.titulo;
        id.innerText = datos.id;
        //imagen.src = datos.imagen;


        div.appendChild(titulo);
        div.appendChild(sinopsis);
        //div.appendChild(imagen);
        div.appendChild(id);
    }
}

function pedirNPeliculas(error = null, datos = null){
    if (error !== null){
        console.log(error);
    } else {
       console.log(datos);
       for (let i = 1; i < datos.cantidad; i++){
        obtenerDatos(`http://localhost:3000/peli${i}`,CuatroPelis);
    }
}
}

obtenerDatos('http://localhost:3000/numeroPelis',pedirNPeliculas);



/*
Flujo del programa:

- Primera petición:

Se hace una petición a http://localhost:3000/numeroPelis para obtener el número de películas.
Si la petición es exitosa, se llama a recogerDatos con los datos devueltos por el servidor.
-Procesamiento del número de películas:

En recogerDatos, se extrae el campo cantidad de los datos (que contiene el número de películas).
Se inicia un bucle for para hacer una petición por cada película individual.
-Peticiones individuales:

Para cada película, se llama a obtenerDatos con la URL correspondiente 
(por ejemplo, http://localhost:3000/peli1, http://localhost:3000/peli2, etc.).
Cada vez que se obtiene una película, se llama a recogerDatos para mostrar los datos en la consola.
*/

