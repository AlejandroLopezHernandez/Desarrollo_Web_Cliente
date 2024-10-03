/*Implementar un sistema de reservas para un evento. 
El evento tiene tres tipos de entradas: VIP, Preferencial y General. 
La cantidad de entradas disponibles para cada categoría es limitada(10 para cada una).
 Además, hay descuentos especiales para estudiantes y miembros del club de fans del evento.

El sistema debe cumplir con los siguientes requisitos:

    Entrada de Datos:
        Pedir al usuario que elija el tipo de entrada: VIP, Preferencial o General.
        Preguntar si el usuario es estudiante o miembro del club de fans 
        (esto le da derecho a un descuento).
        Solicitar la edad del usuario (hay precios especiales para menores de 18 años).

    Reglas de Negocio:
        Si las entradas para la categoría elegida están agotadas, mostrar un mensaje indicando 
        que no hay disponibilidad.
        Si hay disponibilidad, calcular el precio según la categoría elegida:
            VIP: $100
            Preferencial: $70
            General: $40
        Aplicar un descuento del 20% para estudiantes o miembros del club de fans.
        Este descuento no es acumulable.Aplicar un descuento adicional del 10% para menores
         de 18 años. Este descuento es acumulable con el anterior.

    Salida de Datos:
    Mostrar el precio final de la entrada según los datos ingresados y las reglas aplicables.*/

//Variables
let entrada_vip = false;
let entrada_preferencial = false;
let entrada_general = false;

let descuento_estudiante = false;
let descuento_club_fan = false;

let mayor_edad = false;
let limite_entradas = 10;

let precio_entrada = 0;

/*function calcular_descuento_entrada(){
    if(descuento_estudiante = true){
        precio_final * 0.20;
    }else if (descuento_club_fan){
        precio_final * 0.20;
    }else if(mayor_edad < 18){
        precio_final * 10;
    } else if(mayor_edad < 18 && descuento_estudiante == true){
        precio_final * 0.30;
    } else if(mayor_edad < 18 && descuento_club_fan == true){
        precio_final * 0.30;
    }
    return precio_final;*/
    function tipo_entrada() {
    let entrada_datos_entrada = prompt("Introduce el tipo de entrada que quieras: vip, general o preferente");
        if(entrada_datos_entrada == "vip"){
            entrada_vip = true;
            precio_entrada = 100;
            alert("Has elegido una entrada vip");
            //descuento();
        } else if(entrada_datos_entrada == "preferente"){
            entrada_preferencial = true;
            precio_entrada = 70;
            alert("Has elegido una entrada preferencial");
            //descuento();
        } else if(entrada_datos_entrada == "general"){
            entrada_general = true;
            precio_entrada = 40;
            alert("Has elegido una entrada general");
            //descuento();
        } else{
            alert("Introduce el tipo de entrada correcto por favor: vip, general o preferente");
            return tipo_entrada();
        }
        return precio_entrada;
    }
    function descuentos(){
        let entrada_club_fans_estudiante = prompt("Diga si usted es miembro del club de fans o estudiante");
        if(entrada_club_fans_estudiante == "club de fans"){
            descuento_club_fan = true;
            precio_entrada = precio_entrada - (precio_entrada*0.20);
            alert("Se le ha aplicado un descuento del 20% por pertenecer al club de fans");
        }else if(entrada_club_fans_estudiante == "estudiante"){
            descuento_estudiante = true;
            precio_entrada = precio_entrada - (precio_entrada*0.20);
            alert("Se le ha aplicado un decuento del 20% por ser estudiantee");
        }

    let edad_usuario = parseInt(prompt("Indique su edad por favor"));
    if(edad_usuario < 18){
     mayor_edad = true;
     precio_entrada = precio_entrada -(precio_entrada*0.10);
     alert("Se le ha aplicado un descuento del 10% por ser menor de edad");
    }
    if(mayor_edad &&(descuento_club_fan || descuento_estudiante)){
        precio_entrada = precio_entrada -(precio_entrada*0.10);
        alert("Ha acumulado el descuento por ser menor de edad y ser estudiante");
    }
    return precio_entrada;
    }
       
     function mostrar_precio_final(){
        tipo_entrada();
        descuentos();
        alert("El precio final es de: " + precio_entrada.toFixed(2) + "€");    
     }
     mostrar_precio_final();
    







