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

alert("Esta es una calculadora básica");
let operador_navegador1 = parseFloat(prompt("Introduce dos números para que pueda sumarlos, empecemos por el primero"));
let operador_navegador2 = parseFloat(prompt("Ahora el segundo"));

alert("El resultado es: " + sumar(operador_navegador1,operador_navegador2));






