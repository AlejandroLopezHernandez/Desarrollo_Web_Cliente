    /* 1.Crea una función llamada calcularPromedio que reciba un número variable de argumentos (debes usar arguments ).
     La función debe devolver el promedio de todos los números pasados como parámetros. Si no se pasa ningún argumento, 
     la función debe devolver 0*/
    function calcularPromedio1(){
        let suma = 0;
        if(arguments.length == 0){
            return 0;
        } else {
            for(let i = 0; i < arguments.length; i++){
                suma += arguments[i];
            }
            let media= suma/arguments.length;
            return media;
        }
    }

    console.log(calcularPromedio1());
    /*2.Crea una función llamada calcularPromedio que reciba un número variable de argumentos (debes usar rest). 
    La función debe devolver el promedio de todos los números pasados como parámetros. Si no se pasa ningún argumento,
    la función debe devolver 0*/
    function calcularPromedio2(... numeros){
        let suma = 0;
        if(numeros.length == 0){
            return 0;
        } else {
            for (let numero of numeros) {
                suma += numero;
            }
            let media = suma/numeros.length;
            return media;
        }
    }
    console.log(calcularPromedio2(1,6,7));
    /*3.Crea una función llamada crearMensaje que reciba tres parámetros: nombre, saludo (con valor por defecto 'Hola'),
     y un número indefinido de palabras adicionales. Usa rest. La función debe devolver un string que combine todos estos valores
      en una frase coherente.*/
    function crearMensaje( saludo= 'Hola',nombre,... palabras){
        if(nombre == undefined || palabras == undefined){
            return "Debes escribir un nombre y unas palabras";
        } else {
            return `${saludo} ${nombre} ${palabras.join(' ')}`;
        }
    }
    console.log(crearMensaje('saludo', 'Alejandro' , 'conjunto de palabras'));

    /*4.Escribe una función llamada crearPersona que acepte dos parámetros, nombre y edad, y que devuelva un objeto 
    con esas propiedades. La función debe devolver un objeto con las propiedades nombre y edad asignadas según los valores de entrada.
     Debes crear otra funcion que imprima un objeto reciviendo un objeto. Debes llamar a la segunda funcion pasando como 
     parametro la primera*/
     function crearPersona(nombre,edad){
        if (nombre == null || edad == null){
            return "Debes escribir un nombre y una edad";
        } else {
            let persona = {nombre: nombre, edad: edad};
            return persona;
        }
     }
     function imprimirPersona(persona){
        console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
     }
     let alex = crearPersona('Alejandro',29);
     imprimirPersona(alex);

    /*5.Crea una función llamada calculadora que acepte dos parámetros: operacion (una función) y 
    un número indefinido de números (rest). La función debe aplicar la operación pasada (como sumar o multiplicar o restar)
     a todos los números que reciba. */
     function sumar(a,b){
        return a + b;
     }
     function restar(a,b){
        return a-b;
     }
     function multiplicar(a,b){
        return a*b;
     }
     function dividir(a,b){
        return a/b;
     }
     function calculadora(operacion,... numeros){
        if(numeros.length < 2){
            return "Se necesitan al menos dos operandos";
        } else {
            let resultado = numeros[0];
            for (let i = 1; i < numeros.length; i ++){
                resultado = operacion(resultado, numeros[i]);
                break;
            }
            return resultado;
        }
     }
     console.log(calculadora(sumar,5,7));
     console.log(calculadora(restar,9,3));
     console.log(calculadora(multiplicar,5,7));
     console.log(calculadora(dividir,10,5));

     