/* 1.Implementa una función para listar todos los libros
que no están prestados actualmente.*/
function libros_prestados_ahora(){
let libros_no_prestados = [];

for (let libro of libros) {
    let libro_prestado = false;
    for (const historial of historialPrestamos) {
        if(libro.id === historial.id_libro){
            libro_prestado = true;
            break;
    }
} if(!libro_prestado){
    libros_no_prestados.push(libro.titulo);
}
}
 console.log("Los libros que no están siendo prestados actualmente son: " + libros_no_prestados.join(", "));
}
/*2.Implementa una función que, dado un id_usuario, 
muestre todos los libros que tiene prestados.*/
function libros_usuario_tener_prestado(id_usuario){
let array_usuario_libros = [];
for (const usuario of usuarios) {
    let libro_prestado = false;
    id_usuario = usuario.id_usuario;
    for (const libro of libros) {
        if(usuario.libros_prestados.includes(libro.id)){
            libro_prestado = true
            array_usuario_libros.push(libro.titulo);
            break;
        }
    }
}
console.log("Los libros que el usuario cuya id es: " + id_usuario + " tiene prestado son: " +
    array_usuario_libros.join(", "));
}
/*3.Implementa una función que, dado un id_libro, 
encuentre todos los usuarios que lo han prestado.*/
function libro_usarios_haber_prestado(id_libro){
let usuarios_pedir_prestado_libro = [];

for (const libro of libros) {
    if(libro.id === id_libro){
        for (const historial of historialPrestamos) {
            if(historial.id_libro === id_libro){
                usuarios_pedir_prestado_libro.push(historial.id_usuario);
            }
    }
    break
        }

    }
    console.log("El libro cuya ID es:" + id_libro + 
        " ha sido prestado por los usuarios: " + usuarios_pedir_prestado_libro.join(", "));
}


/*4.Implementa una función que calcule para cada libro el
número total de veces que ha sido prestado.*/
function n_veces_libro_prestado(){

    for (const libro of libros) {
    let acumulador = 0;
    
        for (const historial of historialPrestamos) {
            if(libro.id === historial.id_libro){
                acumulador++;
            }
        }
        console.log("El libro: " + libro.titulo +
            " ha sido prestado en total " + acumulador + " número de veces");
    }
}


libros_prestados_ahora();
libros_usuario_tener_prestado(3);
libro_usarios_haber_prestado(3);
n_veces_libro_prestado();
