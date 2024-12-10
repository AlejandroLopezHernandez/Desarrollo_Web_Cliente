// Carrito inicial
let carrito = [];

function addElementoDiv() {
  // Seleccionar el primer producto del inventario

  const productosContainer = document.getElementById('productos');

  let contenido = "";
  contenido += `<div class="flex-container">`;
  for (let i = 0; i < inventario.length; i++) {
    const producto = inventario[i]; // `carrito` proviene del archivo inventario.js
    // Usamos boostrap
    contenido += `  <div class="contenido">`;
    contenido += `    <img src="${producto["url_imagen"]}" alt="${producto["descripcion"]}" class="img-fluid imageSize">`;
    contenido += `    <h5>${producto['descripcion']}</h5>`;
    contenido += `    <p>Precio: $${producto['precio']}</p>`;
    contenido += `    <p>Descuento: ${producto['descuento']}</p>`;
    contenido += `    <button onclick='agregarAlCarrito(${JSON.stringify(producto)})' class="btn btn-primary botonComprar" id="${i}">Comprar</button>`;
    contenido += `  </div>`;
  }
  contenido += `</div>`;
  // Insertar el contenido generado al contenedor
  productosContainer.innerHTML += contenido;
}

// Función para añadir un producto al carrito
function agregarAlCarrito(producto) {
  carrito.push(producto);  
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

  let precioIVA = 0;

  if (carrito.length == 0) {
    alert('Tienes que seleccionar algún producto');
    boton_carrito.style = "display:true";
    addElementoDiv();
  }
  if (carrito.length >= 1) {
    contenido += `<div class="flex-container">`;
    for (producto in carrito) {
      precioIVA = carrito[producto]['precio'] * 1.21;
      contenido += `  <div class="contenido">`;
      contenido += `    <img src="${carrito[producto]['url_imagen']}" alt="${carrito[producto]['descripcion']}" class="img-fluid imageSize">`;
      contenido += `    <p>Nombre del producto: ${carrito[producto]['descripcion']}</p>`;
      contenido += `    <p>Precio con IVA: $${calculoPrecios(precioIVA,carrito[producto]['descuento'])}</p>`;
      contenido += `    <p>Precio sin IVA: $${calculoPrecios(carrito[producto]['precio'],carrito[producto]['descuento'])}</p>`;
      contenido += `    <p>Tipo de descuento: ${carrito[producto]['descuento']}</p>`;
      contenido += `  </div>`;
    }
    contenido += `</div>`;

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
  eliminarProductosInventario();
  vaciar_carrito();
}

function vaciar_carrito(){
  carrito = [];

  const productosContainer = document.getElementById('productos');
  productosContainer.innerHTML = "";

  alert("El pago se ha realizado correctamente. Será redirigido a la página de productos.");

  const contador = document.getElementById("cart-count");
  contador.innerText = carrito.length;

  let boton_carrito = document.querySelector("#cart-button");
  boton_carrito.style = "display:true";
  
  addElementoDiv();
}

function eliminarProductosInventario(){
  inventario = inventario.filter(({ descripcion: id1 }) => !carrito.some(({ descripcion: id2 }) => id2 === id1));
}

function calculoPrecios(precio, tipoDescuento) {

  let precioFinal;

  switch (tipoDescuento) {
    case 'sin descuento':
      precioFinal = precio * 1;
      return precioFinal.toFixed(2);
    case 'normal':
      precioFinal = precio * 0.93;
      return precioFinal.toFixed(2);
    case 'black friday':
      precioFinal = precio * 0.85;
      return precioFinal.toFixed(2);
    default:
      break;
  }
}

addElementoDiv();