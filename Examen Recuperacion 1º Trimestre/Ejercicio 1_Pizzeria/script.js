let pizzas = [];

function seleccionar_ingredientes(){
    let input_ingredientes = document.querySelector('#n_ingredientes').value;
    //let div_ingredientes = document.querySelector('#div_ingredientes');
    let numero_ingredientes = parseInt(input_ingredientes);

    console.log(numero_ingredientes);

    for (let i = 0; i < numero_ingredientes; i ++){
        let ingredientes = document.createElement('input');
        ingredientes.type="text";
        ingredientes.id=i;
        ingredientes.class="inputs";
        //div_ingredientes.innerHTML += ingredientes;
        document.body.appendChild(ingredientes);
        document.body.appendChild(document.createElement('br'));
    }
}

function crear_pizza(){
    let tamanyo = document.querySelector('#tamanyo').value.trim();
    let precio = 0;
    let input_ingredientes = document.querySelector('#n_ingredientes').value;
    let numero_ingredientes = parseInt(input_ingredientes);
    let inputs_valor_ingredientes = document.querySelectorAll('.inputs').value;
    let incremento = 1.5;

    let pizza = {tamanyo:tamanyo, 
        ingredientes: numero_ingredientes,
        precio:precio    
    };
    

    if(tamanyo=="pequeño"){
        pizza.precio = 6;

        if(numero_ingredientes > 2){
            incremento ++;
            pizza.precio += incremento;
        }
        pizzas.push(pizza);

        alert("Se ha creado una pizza de tamaño " + tamanyo + " con " + numero_ingredientes + " número de ingredientes, por un precio de " + pizza.precio + "€");
    } else if (tamanyo == "mediano"){
        pizza.precio = 12;

        if(numero_ingredientes > 3){
            incremento ++;
            precio += incremento;
        }

        pizzas.push(pizza);
        alert("Se ha creado una pizza de tamaño " + tamanyo + " con " + numero_ingredientes + " número de ingredientes, por un precio de " + pizza.precio + "€");

    } else if (tamanyo == "grande"){
       pizza.precio = 18;

        if(numero_ingredientes > 4){
            incremento ++;
            precio += incremento;
        }
        pizzas.push(pizza);
        alert("Se ha creado una pizza de tamaño " + tamanyo + " con " + numero_ingredientes + " número de ingredientes, por un precio de " + pizza.precio + "€");

    } else {
        alert("El valor introducido en tamaño no es correcto");
        return 0;
    }
    console.log(pizzas);
}
function mostrar_pizzas(){
    let contenido = "";

    for (let pizza of pizzas){
        contenido += `<li> ${pizza['tamanyo']}</li>`;
        contenido += `<li> ${pizza['numero_ingredientes']}</li>`;
        contenido += `<li> ${pizza['precio']}</li>`;
        contenido += '<br>'
        contenido += `<input type="button" value="Borrar" id="borrar_pizza"> <br><br>`;
    }
    document.body.innerHTML += contenido;
    
    let btn_borrar = document.querySelector('#borrar_pizza');

    btn_borrar.addEventListener('click', () => {

        for (let i = 0; i < pizzas.length; i ++){
            pizzas.splice(i,1);
            alert("Pizza borrada");
            console.log(pizzas);
        }
    });
}

function mostrar_estadisticas(){
    let contenido = "";
    for (let pizza of pizzas){
        let total_pizzas = pizzas.length;

        let total_ingredientes = pizza['ingredientes'];

       

        let dinero = pizza['precio'];

        let media = dinero / total_pizzas;

        let pequenyas = 0;
        let medianas = 0;
        let grandes = 0;

        for (let size of pizza['tamanyo']){
            if(size === "pequeño"){
                pequenyas ++;
            } else if (size === "mediano"){
                medianas ++;
            } else if (size === "grande"){
                grandes ++;
            }
        }

        contenido += `<strong>Total de pizzas: ${total_pizzas}</strong>`;
        contenido += `<strong> Total de pequeñas: ${pequenyas}</strong>`;
        contenido += `<strong> Total de medianas ${medianas}</strong>`;
        contenido += `<strong> Total de grandes ${grandes}</strong>`;
        contenido += `<strong> Número total de ingredientes${total_ingredientes}</strong>`;
        contenido += `<strong> Dinero total ${dinero}</strong>`;
        contenido += `<strong> Media de dinero ${media}</strong>`;
        contenido += '<br>'
        
    }
    document.body.innerHTML += contenido;
}

