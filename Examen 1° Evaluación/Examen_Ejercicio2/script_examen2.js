/*
# Ejercicio 2 (3,5 puntos)

La pagina principal solo tiene tres botones "mostrar usuarios", "Mostrar aprobados suspensos", "Mostrar estadísticas" y un div con id resultado.
El programa hará lo siguiente:

### Apartado 1 mostrar usuarios (0,5 puntos)

Al darle al botón debe mostrar la lista de usuarios para ello usara la lista del fichero listaUsuarios.js. Este fichero contiene 99 usuario en una lista llamada listaUsuarios, este objeto es una lista de usuarios. Cada usuarios es un objeto que tiene:

* nombre: Nombre del usuario
* notasExamen: es una lista de 3 elementos con notas de los exámenes cada nota esta entre 0 y 10
* notasPracticas: Es una lista como máximo con 10 elementos, no todas las listas contienen 10 elementos, que tienen notas entre 0 y 10.
* curso: muestra el curso al que pertenecen solo hay tres posibilidades "1DAW", "2DAW-DIURNO", "2DAW-VESPERTINO"

Al darle al botón mostrar usuario debe mostrar todos lo datos de casa usuario cada uno en una fila distinta.

### Apartado 2 Mostrar aprobados suspensos (1,5 puntos)

A darle al botón mostrara a cada alumno en una linea con el nombre, curso, nota total, y la palabra aprobado en verde o suspenso en rojo.

* Para calcular la nota total hay que hacer la media de las notas del examen, y la media de las notas practicas las notas practicas deben ser 10, si tiene menos de 10 se deben considerar 0.
* Es decir un alumno tienen [1,2,3] se debe considerar que tiene [1,2,3,0,0,0,0,0,0,0] la media sera sobre 10 notas.
* La nota final sera 60% la nota del examen 40% la nota practica
* Estará aprobado si la nota final es >=5 sino sera suspenso.

### Apartado 3 Mostrar estadísticas (1,5 punto)

El botón "Mostrar estadísticas" mostrara estadísticas globales y por cada curso.

* Globales pondrá en una linea, numero de alumnos total, numero de aprobados, numero de suspensos, nota media examen, nota media de practicas, nota media Nota final(recordad que hay que calcular 60% examen + 40% practicas)
* Por curso: curso, numero de alumnos del curso, numero alumnos aprobados de ese curso, numero de suspensos de ese curso, nota media del examen, nota media de las practicas y nota media final
*/
let resultado = document.querySelector('#resultado');

let btn_mostrar = document.querySelector('#btn_mostrar');
let btn_aprobados_suspensos = document.querySelector('#btn_aprobados_suspensos');
let btn_estadisticas = document.querySelector('#btn_estadisticas');

btn_mostrar.addEventListener('click',mostrar_usuarios);
function mostrar_usuarios(){
    let lista_usuarios = document.createElement('li');

    for(let usuario of listaUsuarios){
        let nombre = usuario['nombre'];
        let notas_examenes = usuario['notasExamenes'];
        let notas_practicas = usuario['notasPracticas'];
        let curso = usuario['curso'];

        /*
        lista_usuarios.appendChild(nombre);
        lista_usuarios.appendChild(notas_examenes);
        lista_usuarios.appendChild(notas_practicas);
        lista_usuarios.appendChild(curso);*/

        //Esto es una guarrada, pero no se me muestra de otra manera
        resultado.append(nombre);
        resultado.append(notas_examenes);
        resultado.append(notas_practicas);
        resultado.append(curso);
    }

}
btn_aprobados_suspensos.addEventListener('click',mostrar_aprobados_suspendos);
function mostrar_aprobados_suspendos(){
    for (const alumno of lista_usuarios) {
        
    }
}
btn_estadisticas.addEventListener('click',calcular_estadisticas);
function calcular_estadisticas()
{
    for (const alumno of listaUsuarios) {
        
    }
}