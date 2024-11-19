let libros = [
    { id: 1, titulo: "El Hobbit", autor: "J.R.R. Tolkien", año: 1937 },
    { id: 2, titulo: "1984", autor: "George Orwell", año: 1949 },
    { id: 3, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 },
    // ... más libros
];

let usuarios = [
    { id_usuario: 1, nombre: "Alice", libros_prestados: [1, 2] },
    { id_usuario: 2, nombre: "Bob", libros_prestados: [2, 3] },
    { id_usuario: 3, nombre: "Carol", libros_prestados: [1, 3] },
    // ... más usuarios
];

let historialPrestamos = [
    { id_usuario: 1, id_libro: 1, fecha: "2021-06-12" },
    { id_usuario: 2, id_libro: 2, fecha: "2021-06-15" },
    { id_usuario: 3, id_libro: 3, fecha: "2021-06-17" },
    { id_usuario: 1, id_libro: 2, fecha: "2021-07-01" },
    // ... más registros de préstamos
];
