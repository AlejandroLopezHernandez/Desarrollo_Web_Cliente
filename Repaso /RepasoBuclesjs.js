/*
Implementa una función que calcule para cada libro 
el número total de veces que ha sido prestado.
*/
function calcularTotalPrestamos(){
    for (const libro of libros) {
        let acumulador = 0;
        for (const historial of historialPrestamos) {
            if(libro['id'] === historial['id_libro']){
                acumulador ++;
            }
        }
        console.log("El libro: " + libro['titulo'] + " ha sido prestado un total de " + acumulador);
    }
}
 calcularTotalPrestamos();
/*
Implementa una función para listar todos los libros que no están prestados actualmente.
*/
function librosNoPrestadosAhora(){
    let libros_no_prestados = [];
    for (const libro of libros) {
        let libro_prestado = false;
        for (const historial of historialPrestamos) {
            if(libro['id'] !== historial['id_libro']){
                libro_prestado = true;
            }
            if(!libro_prestado){
                libros_no_prestados.push(libro['titulo']);
            }
        }
    }
    console.log("Los libros que ahora no están siendo prestados son: " + libros_no_prestados);
}
librosNoPrestadosAhora();
/*
Implementa una función que, dado un id_usuario, muestre todos los libros que tiene prestados.
*/
function librosPrestadosPorUsuario(idUsuario){
    let usuario_libros = [];
    for (const usuario of usuarios) {
        let libro_prestado = false;
        idUsuario = usuario['id_usuario'];
        for (const libro of libros) {
            if(usuario['libros_prestados'].includes(libro['id'])){
                libro_prestado = true;
                usuario_libros.push(libro['titulo']);
                break;
            }
        }
        
    }
    console.log("Loa libros que el usuario: " + idUsuario + " tiene prestados son: " + usuario_libros.join(" , "));
}
librosPrestadosPorUsuario(1);
/*
Implementa una función que, dado un id_libro, encuentre todos los usuarios que lo han prestado.
*/
function encontrarUsuariosConLibro(idLibro){
    let usuariosLibros = [];
    for (const libro of libros) {
        idLibro = libro['id'];
        let libro_prestado = false;
        for (const usuario of usuarios) {
            if(usuario['libros_prestados'].includes(libro['id'])){
                libro_prestado = true;
                usuariosLibros.push(usuario['nombre']);
                break;
            }
        }
    }
    console.log("El libro cuya id es: " + idLibro + " ha sido prestado a los usuarios: " + usuariosLibros.join(" ,"));
}
encontrarUsuariosConLibro(2);