// Carrito inicial
let carrito = [];
let cantidad_carrito = 0;

const productosContainer = document.getElementById('productos');

function AñadirStock() {
    for (let i = 0; i < inventario.length; i++) {
        inventario[i]['stock'] = 10;
    }
}

function limpiarStockCarrito() {
    for (let i = 0; i < carrito.length; i++) {
        carrito[i]['stock'] = 0;
    }
}

// function eliminarStockCarrito() {
//     console.log("LANZAR ELIMINAR CARRITO");

//     for (let i = 0; i < carrito.length; i++) {
//         carrito[i]['stock'] = 0;
//         console.log(carrito[i]['stock']);

//     }
// }

function addElementoDiv() {
    // Seleccionar el primer producto del inventario
    let contenido = "";
    contenido += '<div class="flex-container">';
    for (let i = 0; i < inventario.length; i++) {
        const producto = inventario[i]; // `carrito` proviene del archivo inventario.js
        // Usamos boostrap
        contenido += '  <div class="contenido">';
        contenido +=
            '    <img id="fotos" src="' +
            producto["url_imagen"] +
            '" alt="' +
            producto["descripcion"] +
            '" class="img-fluid">';
        contenido += '    <h5>' + producto['descripcion'] + '</h5>';
        contenido += '    <p>Precio: $' + producto['precio'] + '</p>';
        contenido += '    <p>Descuento: ' + producto['descuento'] + '</p>';
        contenido += '    <p>Stock:' + producto['stock'] + '</p>';
        contenido += '    <button class="btn btn-primary" id="' + i + '" >Comprar</button>';
        contenido += '  </div>';
    }
    contenido += "</div>";
    // Insertar el contenido generado al contenedor
    productosContainer.innerHTML = contenido;
}

function comprar() {
    for (let i = 0; i < inventario.length; i++) {
        let boton_comprar = document.getElementById(i);
        boton_comprar.addEventListener("click", () => {

            agregarAlCarrito(inventario[i]);
            inventario[i]['stock'] -= 1;

            if (inventario[i]['stock'] == 0) {
                boton_comprar.disabled = true;
                alert("Producto agotado");
            }
        });
    }
}

// Función para añadir un producto al carrito
function agregarAlCarrito(producto) {


    if (producto['stock'] > 0) {

        let productoCarrito = {
            "url_imagen": producto['url_imagen'],
            "descripcion": producto['descripcion'],
            "precio": producto['precio'],
            "descuento": producto['descuento'],
            "stock": + 1
        };

        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i]['descripcion'] == productoCarrito["descripcion"]) {
                productoCarrito["stock"] + 1;
            }
        }

        carrito.push(productoCarrito);

    }
    actualizarCarrito();
}

// Función para actualizar la interfaz del carrito
function actualizarCarrito() {
    // Actualizar el contador del carrito
    const contador = document.getElementById('cart-count');
    contador.innerText = carrito.length;
}

function click_carrito() {

    let contenido = "";
    const productosContainer = document.getElementById('productos');
    productosContainer.innerHTML = contenido;
    boton_carrito.style = "display:none";

    if (carrito.length == 0) {
        alert('Tienes que seleccionar algún producto');
        boton_carrito.style = "display:true";
        addElementoDiv();
        comprar();
    }
    if (carrito.length >= 1) {

        let precio_total = 0;

        contenido += "<table border=5>";
        contenido += "<tr>";
        contenido += "<td> Nombre del producto </td>";
        contenido += "<td> Precio con IVA </td>";
        contenido += "<td> Precio sin IVA </td>";
        contenido += "<td> Tipo de descuento</td>"
        contenido += "<td> Cantidad</td>";

        contenido += "</tr>";
        for (producto in carrito) {

            carrito[producto]['stock'] + 1;

            let precio_iva = carrito[producto]['precio'];
            let precio_sin_iva = (precio_iva / 1.21).toFixed(2);

            if (carrito[producto]['descuento'] == "black friday") {
                precio_iva = (precio_iva / 1.15).toFixed(2);
            } else if (carrito[producto]['descuento'] == "normal") {
                precio_iva = (precio_iva / 1.07).toFixed(2);
            }
            cantidad_carrito = carrito[producto]['stock'];
            
            precio_total += precio_iva * cantidad_carrito;

            contenido += "<tr>";
            contenido += '<td>' + carrito[producto]['descripcion'] + '</td>';
            contenido += '<td>' + precio_iva + '</td>';
            contenido += '<td>' + precio_sin_iva + '</td>';
            contenido += '<td>' + carrito[producto]['descuento'] + '</td>';
            contenido += '<td> x' + cantidad_carrito + '</td>';
            contenido += "</tr>";

        }
        contenido += "<tr>";
        contenido += "<td> Total a pagar: " + precio_total.toFixed(2) + " € </td>";
        contenido += "</tr>";
        contenido += "</table>";
        productosContainer.innerHTML += contenido;

        let boton_finalizar = document.createElement('button');
        boton_finalizar.addEventListener('click', finalizarCompra);
        boton_finalizar.textContent = "Finalizar pago";
        boton_finalizar.id = "boton_finalizar";
        productosContainer.appendChild(boton_finalizar);
    }
}

let boton_carrito = document.querySelector("#cart-button");
boton_carrito.addEventListener("click", click_carrito);

function finalizarCompra() {

    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i]['stock'] == 0) {
            eliminarProductos();
        }
    }

    carrito = [];
    const productosContainer = document.getElementById('productos');
    productosContainer.innerHTML = "";

    alert("El pago se ha realizado correctamente. Será redirigido a la página de productos.");

    const contador = document.getElementById("cart-count");
    contador.innerText = carrito.length;

    let boton_carrito = document.querySelector("#cart-button");
    boton_carrito.style = "display:true";

    addElementoDiv();
    comprar();
}

function eliminarProductos() {
    for (let i = inventario.length - 1; i >= 0; i--) {
        for (productoC in carrito) {
            if (inventario[i]['descripcion'] == carrito[productoC]['descripcion']) {
                inventario.splice(i, 1);
            }
        }
    }
}
AñadirStock();
addElementoDiv();
comprar();
// carrito.push(producto);
// actualizarCarrito()
// carrito.push(producto);
// actualizarCarrito()
// carrito.push(producto);
// actualizarCarrito()