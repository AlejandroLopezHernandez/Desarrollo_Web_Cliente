/*Si las entradas para la categoría elegida están agotadas, 
mostrar un mensaje indicando que no hay disponibilidad.
Si hay disponibilidad, calcular el precio según la categoría elegida:
VIP: $100
Preferencial: $70
General: $40
Aplicar un descuento del 20% para estudiantes o 
miembros del club de fans. Este descuento no es acumulable.
Aplicar un descuento adicional del 10% para menores de 18 años.
Este descuento es acumulable con el anterior.*/

let vip = 100;
let preferente = 70;
let general = 40;
let btn_comprar = document.querySelector('#comprar');
btn_comprar.addEventListener('click',comprar);

function comprar(){
    let seleccionado = document.querySelector('#opciones').value;

    let descuento = document.querySelector('#opciones2').value;
    
    let edad = parseInt(document.querySelector('#edad').value);
    let resultado = document.querySelector('#precio');

    if(edad.lenth = 0 || isNaN(edad)){
        alert("El campo edad no puede ir vacío");
    } else {
    if(seleccionado === 'vip'){
        if( edad >= 18 && (descuento === 'clubFans'|| descuento === 'estudiante')){
            return resultado.textContent = vip * 0.80;
        } else if(edad < 18 && (descuento === 'clubFans'|| descuento === 'estudiante')){
            return resultado.textContent = vip * 0.70;
        } else if (edad < 18 && (descuento !== 'clubFans'|| descuento !== 'estudiante')){
            return resultado.textContent = vip * 0.90;
        }
        return resultado.textContent = vip;
    }else if(seleccionado === 'preferencial'){
        if( edad >= 18 && (descuento === 'clubFans'|| descuento === 'estudiante')){
            return resultado.textContent = preferente * 0.80;
        } else if(edad < 18 && (descuento === 'clubFans'|| descuento === 'estudiante')){
            return resultado.textContent = preferente * 0.70;
        } else if(edad < 18 && (descuento !== 'clubFans'|| descuento !== 'estudiante')){
            return resultado.textContent = preferente * 0.90;
        }
        return resultado.textContent = preferente;

    } else if(seleccionado === 'general'){
        if( edad >= 18 && (descuento === 'clubFans'|| descuento === 'estudiante')){
            return resultado.textContent = general * 0.80;
        } else if(edad < 18 && (descuento === 'clubFans'|| descuento === 'estudiante')){
            return resultado.textContent = general * 0.70;
        } else if(edad < 18 && (descuento !== 'clubFans'|| descuento !== 'estudiante')){
            return resultado.textContent = general * 0.90;
        }
        return resultado.textContent = general;
    }
}
}
