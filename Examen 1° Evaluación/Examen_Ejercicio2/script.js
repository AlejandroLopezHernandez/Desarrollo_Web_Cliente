let boton_mostrar_usuarios = document.querySelector('#btn_mostrar');
let boton_aprobados_suspensos = document.querySelector('#btn_aprobados');
let boton_estadisticas_globales = document.querySelector('#btn_estadisticas');
let boton_estadisticas_curso = document.querySelector('#btn_estadisticas_curso');
let div_resultado = document.querySelector('#resultado');

boton_mostrar_usuarios.addEventListener('click',mostrar_usuarios);
boton_aprobados_suspensos.addEventListener('click',aprobadosYsuspensos);
boton_estadisticas_globales.addEventListener('click',estadisticas_globales);
boton_estadisticas_curso.addEventListener('click',estadisticas_curso);
document.body.appendChild(div_resultado);

let numero_aprobados = 0;
let numero_suspensos = 0;

function mostrar_usuarios(){
    let contenido_div = "";
    for(let usuario of listaUsuarios){
        contenido_div += `<strong>Nombre: </strong>${usuario['nombre']} || `;
        contenido_div += `<strong>Notas de exámenes: </strong>${usuario['notasExamenes']} || `;
        contenido_div += `<strong>Notas de prácticas: </strong>${usuario['notasPracticas']} || `;
        contenido_div += `<strong>Curso:</strong>${usuario['curso']}`;
        contenido_div += `<br><br>`;

    }
    div_resultado.innerHTML = contenido_div;
}
function aprobadosYsuspensos(){
    
    for(let usuario of listaUsuarios){

        let contenido_div = "";
        let nota_media_examen = 0;
        let nota_media_practicas = 0;
        let suma_examenes = 0;
        let suma_practicas = 0;
        let nota_media_final = 0;

        for(let nota of usuario['notasExamenes']){
            suma_examenes += nota;
        }
        nota_media_examen = suma_examenes / 3;
        for (let nota of usuario['notasPracticas']){
            suma_practicas += nota;
        }
        nota_media_practicas = suma_practicas / 10;

        nota_media_final = (nota_media_examen * 0.6) + (nota_media_practicas * 0.4);

        if (nota_media_final >= 5){
            contenido_div += `<strong>Nombre: </strong>${usuario['nombre']} || `;
            contenido_div += `<strong>Notas media exámenes: </strong>${nota_media_examen.toFixed(2)} || `;
            contenido_div += `<strong>Notas media prácticas: </strong>${nota_media_practicas.toFixed(2)} || `;
            contenido_div += `<strong>Nota media final:</strong>${nota_media_final.toFixed(2)} || `;
            contenido_div += `<strong style='color:green;'>¡Alumno aprobado! :D </strong>`;
            contenido_div += `<br><br>`;
            div_resultado.innerHTML += contenido_div;
        } else {
            contenido_div += `<strong>Nombre: </strong>${usuario['nombre']} || `;
            contenido_div += `<strong>Notas media exámenes: </strong>${nota_media_examen.toFixed(2)} || `;
            contenido_div += `<strong>Notas media prácticas: </strong>${nota_media_practicas.toFixed(2)} || `;
            contenido_div += `<strong>Nota media final:</strong>${nota_media_final.toFixed(2)} || `;
            contenido_div += `<strong style='color:red;' >¡Alumno suspenso! :( </strong>`;
            contenido_div += `<br><br>`;
            div_resultado.innerHTML += contenido_div;
        }

    }
}
function estadisticas_globales(){
    
    let contenido_div = "";
    let total_alumnos = listaUsuarios.length;
    let nota_media_examen = 0;
    let nota_media_practicas = 0;
    let nota_media_final = 0;
    let suma_examenes = 0;
    let suma_practicas = 0;
    let n_aprobados = 0;
    let n_suspensos = 0;
    
    for (let alumno of listaUsuarios){

        for (let nota of alumno['notasExamenes']){
            suma_examenes += nota;
        }
        nota_media_examen = (suma_examenes / 3) / total_alumnos;
        
    for (let nota of alumno['notasPracticas']){
        suma_practicas += nota;
    }
    nota_media_practicas = (suma_practicas / 10)/ total_alumnos;

    nota_media_final = (nota_media_examen * 0.6) + (nota_media_practicas * 0.4);
    console.log(nota_media_final);

    if(nota_media_final >= 5){
        n_aprobados ++;
    } else {
        n_suspensos ++;
    }

}
        contenido_div += `<strong>Número total de alumnos: </strong>${total_alumnos} <br><br>`;
        contenido_div += `<strong>Total de aprobados: </strong>${n_aprobados}<br><br>`;
        contenido_div += `<strong>Total de suspensos: </strong>${n_suspensos}<br><br>`;
        contenido_div += `<strong>Nota media de exámenes:</strong>${nota_media_examen.toFixed(2)}<br><br>`;
        contenido_div += `<strong>Nota prácticas :</strong>${nota_media_practicas.toFixed(2)}<br><br>`;
        contenido_div += `<strong>Nota media final:</strong>${nota_media_final.toFixed(2)}<br><br>`;
        div_resultado.innerHTML += contenido_div;

}

function estadisticas_curso(){

}