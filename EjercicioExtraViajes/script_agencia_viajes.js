/* 
EJERCICIO 1: Modifica el código de la página de forma que si se pulsa el botón “CONTRATAR” se 
muestre un mensaje si en la caja de texto “DIA INICIO” no hay un día de la semana válido 
(da igual minúscula o mayúscula e inglés que español).Ten en cuenta que puede estar vacío.
*/
let rutas = [];
let btn_contratar = document.querySelector('#contratar');
btn_contratar.onclick = validar_campos;

function validar_dia(){
let dias_semana = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

let input_dia = document.querySelector('#diaInicio');
let dia = input_dia.value.toLowerCase();

if(input_dia.length < 1){
    alert("El campo de día de la semana está vacío");
    input_dia.focus();
    return;
} 
    let dia_valido = false;
    for(let i = 0; i < dias_semana.length; i ++){
        if (dia === dias_semana[i]){
            dia_valido = true;
            break;
        } 
    }
    if(dia_valido){
        alert("Día correcto");
       
    } else{
        alert("Número de la semana incorrecto");
                input_dia.value = "";
                input_dia.focus();
    }
}
/*
EJERCICIO 2: Añade al código anterior  que se muestre un mensaje si en la caja de texto “MES” no hay un mes válido
(da igual minúscula o mayúscula e inglés que español).
*/
function validar_mes(){
    let meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
    
    let input_mes = document.querySelector('#mes');
    let mes = input_mes.value.toLowerCase();
    
    if(input_mes.length < 1){
        alert("El campo de mes está vacío");
        input_mes.focus();
        return;
    } 
        let mes_valido = false;
        for(let i = 0; i < meses.length; i ++){
            if (mes === meses[i]){
                mes_valido = true;
                break;
            } 
        }
        if(mes_valido){
            alert("Mes correcto");
        } else{
            alert("Número de mes incorrecto");
            input_mes.value = "";
            input_mes.focus();
        }
    }
/*
EJERCICIO 3: Añade al código anterior  que se muestre un mensaje si en la caja de texto “NUMERO DE DIAS”
 no hay un día del mes válido (entre 1 y 31) .
*/
function validar_n_dias(){
let input_numero = document.querySelector('#numeroDias').value;
let numero = parseInt(input_numero);

if (input_numero.length < 1){
    alert("El campo introducido en número no está vacío");
}
if(isNaN(numero)){
    alert("El campo introducido en número no es correcto");
}
if(numero < 1 || numero > 31){
    alert("El número introducido es menor que uno o mayor que 31");
} 

}
function validar_campos(){
    validar_dia()
    validar_mes()
    validar_n_dias()
    validar_rutas()
    crear_tabla()
}
/*
EJERCICIO 4: Añade al código anterior  que se muestre un mensaje si en la caja de texto “RUTA” 
no hay nada escrito y otro mensaje si hay alguna ciudad repetida
*/

function validar_rutas(){
    let input_rutas = document.querySelector('#ruta').value.trim();
    input_rutas = input_rutas.toLowerCase();
    let ruta = input_rutas.split(",");

    if(input_rutas.length < 1){
        alert("No hay ninguna ruta en el campo");
        return 0;
    }
    for (let i = 0; i < ruta.length; i ++){
        if(rutas.includes(ruta[i])){
            alert("Se ha detectado una ruta repetida");
            return 0;
        }
    }
    //Los tres puntos se usan para expandir los elementos de un array
    rutas.push(...ruta);
    alert("Ruta añadida");
    console.log(rutas);
}
/*
EJERCICIO 5: Añade al código anterior  que si todo es correcto se muestre una tabla
en la capa “AGENDA” con tantas filas como número de días haya y tantas celdas por fila 
como ciudades haya en la ruta
*/
function crear_tabla(){
    let input_numero = document.querySelector('#numeroDias').value;
    let numero_filas = parseInt(input_numero);
    let numero_columnas = rutas.length;

    let agenda = document.querySelector('#AGENDA');

    let contenido = "";
    contenido += '<table border="2">';

    for (let i = 1; i < numero_filas; i++){
        contenido += '<tr>';
        contenido += `<td>${i}</td>`;
        contenido += '</tr>';
        for (let j = 0; j < numero_columnas; j ++){
            contenido += `<td> ${rutas[j]}</td>`;
        }
    }
    contenido += '</table>';
    agenda.innerHTML = contenido;
    document.body.appendChild(agenda);
}

/*
EJERCICIO 6: Modifica el código anterior para que la capa “AGENDA” tenga color de fondo 
amarillo y la tabla borde de 2 pixeles de color  oliva.
*/

/*
EJERCICIO 7: Modifica el código anterior para que las filas pares de la tabla anterior 
tengan fondo verde oscuro y las impares tenga fondo verde claro.
*/
/*
EJERCICIO 8: Modifica el código anterior para que se añada una celda más en cada fila 
(al principio) con un checkbox y otra celda al final con un botón con el texto “INCLUIR”.
 Cada elemento anterior debe tener un identificador diferente.
*/

    /*
    EJERCICIO 9: Modifica el código de la página de forma que si se pulsa el botón “SORPRESA”
     se grabe en la caja “NUMERO DE DIAS” un valor entero aleatorio entre 1 y 31 y 
     además dicha caja no se podrá modificar.
     (PISTA: busca la propiedad html para impedir modificar una caja de texto).
    */
let btn_sorpresa = document.querySelector('#sorpresa');
btn_sorpresa.onclick = crear_n_aleatorio;
function crear_n_aleatorio(){
    let n_dias = document.querySelector('#numeroDias');
    
    let numero_aleatorio = Math.floor(Math.random() * 31);
    console.log(numero_aleatorio);
    n_dias.value = numero_aleatorio;
}
/*
EJERCICIO 10: Modifica el código del ejercicio 1 de forma que en caso de valor invalido 
en la caja “DIA INICIO” se le pida al usuario un nuevo valor mientras este no sea válido. 
*/

