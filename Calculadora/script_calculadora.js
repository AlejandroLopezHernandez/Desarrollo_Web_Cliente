let operador1 = 0;
let operador2 = 0;
let acumulador = 0;


function sumar(operador1,operador2){
    acumulador = operador1 + operador2;
    return acumulador;
}

function restar(operador1,operador2){
    acumulador = operador1 - operador2;
    return acumulador;
}
function multiplicar(operador1,operador2){
    acumulador = operador1 * operador2;
    return acumulador;
}
function dividir(operador1,operador2){
    acumulador = operador1 / operador2;
    return acumulador;
}
console.log("Ejemplo de suma: 1 +5: " + sumar(1,5));
console.log("Ejemplo de resta, 6 - 5: "+restar(6,5));
console.log("Ejemplo de multiplicación, 5 * 4: " + multiplicar(5,4));
console.log("Ejemplo de división, 10/5: " + dividir(10,5));

alert("Esta es una calculadora básica");

let operador_suma_navegador1 = parseFloat(prompt("Introduce dos números para que pueda sumarlos, empecemos por el primero"));
let operador_suma_navegador2 = parseFloat(prompt("Ahora el segundo"));
alert("El resultado es: " + sumar(operador_suma_navegador1,operador_suma_navegador2));

let operador_resta_navegador1 = parseFloat(prompt("Introduce el minuendo para una resta: "));
let operador_resta_navegador2 = parseFloat(prompt("Introduce el sustraendo para una resta: "));
alert("El diferencia es: " + restar(operador_resta_navegador1,operador_resta_navegador2));

let operador_multi_navegador1 = parseFloat(prompt("Introduce el multiplicando para una multiplicación: "));
let operador_multi_navegador2 = parseFloat(prompt("Introduce el multiplicador: "));
alert("El producto de la multiplicación es: " + multiplicar(operador_multi_navegador1,operador_multi_navegador2));

let operador_division_navegador1 = parseFloat(prompt("Introduce el dividendo para hacer una división: "));
let operador_division_navegador2 = parseFloat(prompt("Introduce el divisor: "));
alert("El cociente es: " + dividir(operador_division_navegador1,operador_division_navegador2));



