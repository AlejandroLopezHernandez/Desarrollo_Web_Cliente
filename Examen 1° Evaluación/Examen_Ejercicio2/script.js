let btn_mostrar = document.querySelector('#btn_mostrar');
let btn_aprobados = document.querySelector('#btn_aprobados');
let btn_estadisticas = document.querySelector('#btn_estadisticas');

btn_mostrar.addEventListener('click',mostrar_usuarios);
btn_aprobados.addEventListener('click',mostrar_aprobados);
btn_estadisticas.addEventListener('click',mostrar_estadisticas);

resultado = document.querySelector('#resultado');

function mostrar_usuarios(){
    for (usuario of listaUsuarios){
        let contenido = "";
        contenido += "<p>";
        contenido +=`Nombre: ${usuario['nombre']} ||`;
        contenido += ` Notas de exámenes: ${usuario['notasExamenes']} ||`;
        contenido += ` Notas de prácticas: ${usuario['notasPracticas']} ||`;
        contenido += ` Curso: ${usuario['curso']}`;
        contenido += "</p>";

        resultado.innerHTML += contenido;
        document.body.appendChild(resultado);
    }
}
function mostrar_aprobados(){
    for (alumno of listaUsuarios){
        let media_examenes = 0;
        let suma_notas_examenes = 0
            for (nota of alumno['notasExamenes']){
                suma_notas_examenes += nota;
            }
        media_examenes = suma_notas_examenes / 10;
        media_examenes.toFixed(2);
        //console.log(media_examenes);

        suma_nota_practicas = 0;
        media_nota_practicas = 0;
            for (nota of alumno['notasPracticas']){
                suma_nota_practicas += nota;
            }
        media_nota_practicas = suma_nota_practicas / 10;
        media_nota_practicas.toFixed(2);
        nota_final = (media_examenes * 0.60) + (media_nota_practicas * 0.4);
        nota_final.toFixed(2);
        
        if(nota_final > 5){
            let contenido = "";
            contenido += "<p>";
            contenido +=`Nombre: ${alumno['nombre']} ||`;
            contenido += ` Nota total: ${nota_final} ||`;
            contenido += ` Curso: ${alumno['curso']}`;
            contenido += `<span style="color:green;"> Aprobado :)</span>`;
            contenido += "</p>";
    
            resultado.innerHTML += contenido;
            document.body.appendChild(resultado);

        } else if(nota_final < 5){
            
            let contenido = "";
            contenido += "<p>";
            contenido +=`Nombre: ${alumno['nombre']} ||`;
            contenido += ` Nota total: ${nota_final} ||`;
            contenido += ` Curso: ${alumno['curso']}`;
            contenido += ` <span style="color:red;">Suspenso :(</span>`;
            contenido += "</p>";
    
            resultado.innerHTML += contenido;
            document.body.appendChild(resultado);
        }
    }
}
function mostrar_estadisticas(){

}