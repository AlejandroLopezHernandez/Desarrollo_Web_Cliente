let vehiculos = [];
let contador = 0;
let vehiculos_fuera = [];

function aparcar_vehiculo(){
    let matricula = document.querySelector('#matricula').value;
    let tipo_de_vehiculo = document.querySelector('#tipo_vehiculo').value;
    let hora_entrada = document.querySelector('#hora_entrada').value;
    let plazas_libres = document.querySelector('#n_plazas_libres');
    let valor_plazas_libres = parseInt(plazas_libres).value;
    console.log(valor_plazas_libres);
    let espacio_ocupado = 0;

    let vehiculo = {
        matricula:matricula,
        tipo_vehiculo:tipo_de_vehiculo,
        hora_entrada:hora_entrada
    };

    if(valor_plazas_libres >= 20){
        alert("El parking está lleno");
        return 0;
    }
    if (valor_plazas_libres == 19.5 && tipo_de_vehiculo == "moto"){
        vehiculos.push(vehiculo);
        plazas_libres.innerText = 20;
        alert("Vehículo añadido correctamente");
    }

    if(tipo_de_vehiculo == "moto"){
        espacio_ocupado = 0.5;
        contador += espacio_ocupado;
        vehiculos.push(vehiculo);
        plazas_libres.innerText = contador;

    } else if (tipo_de_vehiculo == "coche"){

        espacio_ocupado = 1;
        contador += espacio_ocupado;
        vehiculos.push(vehiculo);
        plazas_libres.innerText = contador;

    } else if (tipo_de_vehiculo == "camion"){
        espacio_ocupado = 3;
        contador += espacio_ocupado;
        vehiculos.push(vehiculo);
        plazas_libres.innerText = contador;
    } else {
        alert("El tipo de vehículo no es correcto");
        return 0;
    }
    console.log(vehiculos);
}

function buscar_x_matricula(){
    let input_buscar_x_matricula = document.querySelector('#buscar_vehiculo_matricula').value;
    for (let vehiculo of vehiculos){
        if(input_buscar_x_matricula !== vehiculo['matricula']){
            alert("No se ha encontrado el vehículo seleccionado");
        } else {
            alert("Vehículo encontrado");

            let hora_salida = document.createElement('input');
            hora_salida.type="time";
            hora_salida.id="hora_salida";

            let btn_pagar = document.createElement('button');
            btn_pagar.innerText= "Pagar";

            document.body.appendChild(hora_salida);
            document.body.appendChild(btn_pagar);

            btn_pagar.addEventListener('click',() => {
                let hora_entrada = document.querySelector('#hora_entrada').value;
                let hora_salida = document.querySelector('#hora_salida').value;

                for (let vehiculo of vehiculos){

                    let minutos_a_pagar = hora_entrada - hora_salida;

                    console.log(minutos_a_pagar);

                    vehiculos_fuera.push(vehiculo);

                    let precio = 0;

                    if(vehiculo['tipo_vehiculo'] == "moto"){
                        let tarifa_moto = 3/60;
                       precio =  minutos_a_pagar * tarifa_moto;
                        alert("El precio que ha pagado es de " + precio);
                    } else if (vehiculo['tipo_vehiculo' == "coche"]){
                        let tarifa_coche = 4.5/60;
                        precio =  minutos_a_pagar * tarifa_coche;
                         alert("El precio que ha pagado es de " + precio);
                    } else if(vehiculo['tipo_vehiculo'] == "camion"){
                        let tarifa_camion = 7.5/60;
                        precio =  minutos_a_pagar * tarifa_camion;
                         alert("El precio que ha pagado es de " + precio);
                    }
                }


            });

        }
    }
}

function estadisticas(){
    let contenido = "";

    let vehiculos_dentro_parking = vehiculos.length;
    let vehiculos_fuera_parking = vehiculos_fuera.length;

    let coches_dentro = 0;
    let coches_fuera = 0;

    for (let vehiculo of vehiculos){
        if(vehiculo['tipo_vehiculo'] == "coche"){
            coches_dentro ++;
        }
    }

    let motos_pagadas = 0;
    let coches_pagados = 0;
    let camiones_pagados = 0;

    for (let vehiculo of vehiculos_fuera){
        if(vehiculo[tipo_de_vehiculo] == "coche"){
            coches_pagados ++;
            coches_fuera++;
        } else if(vehiculo[tipo_de_vehiculo] == "moto"){
            motos_pagadas ++;
        } else if(vehiculo[tipo_de_vehiculo] == "camion"){
            camiones_pagados ++;
        }

    }

    contenido += `<strong>Total de coches fuera del parking: </strong> ${coches_fuera} <br>`;
    contenido += `<strong>Total de coches dentro del parking: </strong> ${coches_dentro} <br>`;
    contenido += `<strong>Total de vehiculos dentro del parking: </strong> ${vehiculos_dentro_parking} <br>`;
    contenido += `<strong>Total de motos que han pagados: </strong> ${motos_pagadas} <br>`;
    contenido += `<strong>Total de coches que han pagados: </strong> ${coches_pagados} <br>`;
    contenido += `<strong>Total de camiones que han pagados: </strong> ${camiones_pagados} <br>`;
    contenido += '<br>'
    

    document.body.innerHTML += contenido;
}