// Carrito inicial
let carrito = [];

const productosContainer = document.getElementById('productos');
const botonesDesplegables = document.getElementById('desplegable');

function AñadirIDyStock() {
  for (let i = 0; i < inventario.length; i++) {
    inventario[i]['stock'] = 10;
    inventario[i]['id'] = i;
  }
}

AñadirIDyStock();

function AñadirBotonesDesplegables() {

  let contenido = "";

  contenido += '<label for="cantidad"> Selecciona los elementos que deseas mostrar: </label>';
  contenido += '<select name="numeros" id="opciones_numeros">';
  contenido += '<option value="todos">Todos</option>';
  contenido += '<option value="3">3</option>';
  contenido += '<option value="5">5</option>';
  contenido += '<option value="10">10</option>';
  contenido += '</select>';
  contenido += '<br> <br>'

  contenido += '<label for="orden"> Orden de los productos: </label>';
  contenido += '<select name="numeros" id="opciones_precio">';
  contenido += '<option value="sin_orden">Sin orden</option>';
  contenido += '<option value="mayor">Ordenador por precio mayor</option>';
  contenido += '<option value="menor">Ordenador por precio menor</option>';
  contenido += '<option value="descuento">Ordenador por descuento</option>';
  contenido += '</select>';

  botonesDesplegables.innerHTML += contenido;
 
}

AñadirBotonesDesplegables();

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

function addElementoDiv() {
  // Seleccionar el primer producto del inventario
  //const producto = inventario[1]; // `carrito` proviene del archivo inventario.js

  // Usamos boostrap
  let contenido = "";

  for (producto of inventario) {
    contenido += '<div class="row">';
    contenido += '  <div class="col-md-4">';
    contenido += '    <img src="' + producto['url_imagen'] + '" alt="' + producto['descripcion'] + '" class="img-fluid">';
    contenido += '  </div>';
    contenido += '  <div class="col-md-8">';
    contenido += '    <h5>' + producto['descripcion'] + '</h5>';
    contenido += '    <p>Precio: $' + producto['precio'] + '</p>';
    contenido += '    <p>Descuento: ' + producto['descuento'] + '</p>';
    contenido += '    <button class="btn btn-primary" id="' + producto['id'] + '" >Comprar</button>';
    contenido += '  </div>';
    contenido += '</div>';
  }


  // Insertar el contenido generado al contenedor
  productosContainer.innerHTML = contenido;

}


addElementoDiv(3);
// carrito.push(producto);
// actualizarCarrito()
// carrito.push(producto);
// actualizarCarrito()
// carrito.push(producto);
// actualizarCarrito()

