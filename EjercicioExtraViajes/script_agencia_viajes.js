let btn_contratar = document.querySelector('#contratar');
btn_contratar.addEventListener('click',ejercicio1);
/* 
EJERCICIO 1: Modifica el código de la página de forma que si se pulsa el botón “CONTRATAR” se 
muestre un mensaje si en la caja de texto “DIA INICIO” no hay un día de la semana válido 
(da igual minúscula o mayúscula e inglés que español).Ten en cuenta que puede estar vacío.
*/
function ejercicio1(){
let dia_inicio = document.querySelector('#diaInicio').value.trim();
let dia_minusculas = dia_inicio.toLowerCase();
let dias_semana = ['lunes','martes','miércoles','jueves','viernes','sábado','domingo'];
let dia_valido = false;

for(let i = 0; i < dias_semana.length;i++){
    if(dias_semana[i] === dia_minusculas){
        dia_valido = true;
        break;
    }
}
if(dia_valido){
    alert('¡Dia de la semana correcto!');
} else{
    alert('Debes introducir un día de la semana correcto');
    return document.querySelector('#diaInicio').addEventListener('change',(event)=>{
        document.querySelector('#diaInicio').value = "";
        document.querySelector('#diaInicio').focus();
    })
}
/*
EJERCICIO 2: Añade al código anterior  que se muestre un mensaje si en la caja de texto “MES” no hay un mes válido
(da igual minúscula o mayúscula e inglés que español).
*/
let mes = document.querySelector('#mes').value.trim();
let mes_minuscula = mes.toLowerCase();
let meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
let mes_valido = false;
for(let i = 0; i < meses.length; i ++){
    if(meses[i] === mes_minuscula){
        mes_valido = true;
        break;
    }
}
if(mes_valido){
    alert('¡Mes válido!')
}else{
    alert('Debes introducir un mes válido');
}
/*
EJERCICIO 3: Añade al código anterior  que se muestre un mensaje si en la caja de texto “NUMERO DE DIAS”
 no hay un día del mes válido (entre 1 y 31) .
*/
let dias = document.querySelector('#numeroDias').value;
let dias_numero = parseInt(dias);
if(isNaN(dias_numero) || dias_numero < 0 || dias_numero > 31 || dias_numero == null){
    alert('Debes introducir un día del mes correcto');
} else{
    alert('Día del mes correcto');
}
/*
EJERCICIO 4: Añade al código anterior  que se muestre un mensaje si en la caja de texto “RUTA” 
no hay nada escrito y otro mensaje si hay alguna ciudad repetida
*/
let rutas = [];
let entrada_ruta = document.querySelector('#ruta').value;
if(entrada_ruta.length == 0){
    alert('Debes introducir la ruta que quieras en tu viaje');
    return;
}
let entradas_filtradas = entrada_ruta.split(',');
if(rutas.includes(entradas_filtradas)){
    alert("La ruta no puede estar repetida");
} else {
    rutas.push(entradas_filtradas);
    alert("Ruta añadida correctamente");
}
/*
EJERCICIO 5: Añade al código anterior  que si todo es correcto se muestre una tabla
en la capa “AGENDA” con tantas filas como número de días haya y tantas celdas por fila 
como ciudades haya en la ruta
*/
let tabla = document.createElement("table");
let agenda = document.querySelector('#AGENDA');



document.agenda.appendChild(tabla);
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
} 

let btn_sorpresa = document.querySelector('#sorpresa');
let dias = document.querySelector('#numeroDias');
btn_sorpresa.addEventListener('click',sorpresa);
function sorpresa(){
    /*
    EJERCICIO 9: Modifica el código de la página de forma que si se pulsa el botón “SORPRESA”
     se grabe en la caja “NUMERO DE DIAS” un valor entero aleatorio entre 1 y 31 y 
     además dicha caja no se podrá modificar.
     (PISTA: busca la propiedad html para impedir modificar una caja de texto).
    */
     const min = 1;
     const max = 31;
     let dia_aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
     dias.value = dia_aleatorio;
     dias.readOnly = true;

}

/*
EJERCICIO 10: Modifica el código del ejercicio 1 de forma que en caso de valor invalido 
en la caja “DIA INICIO” se le pida al usuario un nuevo valor mientras este no sea válido. 
*/

