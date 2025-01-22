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
  contenido += '<select name="numeros" id="opciones_numeros" onchange="seleccionarCantidad()">';
  contenido += '<option value="todos">Todos</option>';
  contenido += '<option value="3">3</option>';
  contenido += '<option value="5">5</option>';
  contenido += '<option value="10">10</option>';
  contenido += '</select>';
  contenido += '<br> <br>'

  contenido += '<label for="orden"> Orden de los productos: </label>';
  contenido += '<select name="numeros" id="opciones_precio" onchange="filtrarProductos()">';
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

function addElementoDiv(cantidad, filtro) {
  // Seleccionar el primer producto del inventario
  //const producto = inventario[1]; // `carrito` proviene del archivo inventario.js

  // Usamos boostrap
  let contenido = "";
  
  cantidad = document.getElementById('opciones_numeros').value;
  if(cantidad !== "todos"){
    cantidad = parseInt(cantidad);
  }

  filtro = document.querySelector('#opciones_precio').value;

  let limite;
  if (cantidad === "todos"){
    limite = inventario.length;
  } else {
    limite = Math.min(cantidad, inventario.length);
  }

    for (let i = 0; i < limite; i ++) {
      contenido += '<div class="row">';
      contenido += '  <div class="col-md-4">';
      contenido += '    <img src="' + inventario[i]['url_imagen'] + '" alt="' + inventario[i]['url_imagen'] + '" class="img-fluid">';
      contenido += '  </div>';
      contenido += '  <div class="col-md-8">';
      contenido += '    <h5>' + inventario[i]['descripcion'] + '</h5>';
      contenido += '    <p>Precio: $' + inventario[i]['precio'] + '</p>';
      contenido += '    <p>Descuento: ' + inventario[i]['descuento'] + '</p>';
      contenido += '    <button class="btn btn-primary" >Comprar</button>';
      contenido += '  </div>';
      contenido += '</div>';
    }

  // Insertar el contenido generado al contenedor
  productosContainer.innerHTML = contenido;
}

function seleccionarCantidad(){
  let opcion_cantidad = document.querySelector('#opciones_numeros').value;

  switch(opcion_cantidad){
    case'todos':
    addElementoDiv(opcion_cantidad);
    console.log('prueba todos');
    break;
    case '3':
    addElementoDiv(3);
    console.log('prueba 3');
    break;
    case '5':
    addElementoDiv(5);
    console.log('prueba 5');
    break;
    case '10':
    addElementoDiv(10);
    console.log('prueba 10');
    break;
  }
}

function filtrarProductos(){
  filtro = document.querySelector('#opciones_precio').value;
  switch(filtro){
    case 'sin_orden':
    addElementoDiv('todos');
    console.log('prueba sin orden');
    break;  
    case 'mayor':
    
    inventario.sort((a,b)=> b.precio - a.precio);
    addElementoDiv('todos','mayor');
    console.log('prueba de mayor a menor');
    break;
    case 'menor':
    inventario.sort((a,b)=> a.precio - b.precio);
    addElementoDiv('todos','menor');
    console.log('prueba de menor a mayor');
    break;

    case 'descuento':
    inventario.sort((a,b)=> a.descuento > b.descuento);
    addElementoDiv('todos','descuento');
    console.log('prueba orden por descuento');
    break;
  }
}

seleccionarCantidad();
filtrarProductos();
// carrito.push(producto);
// actualizarCarrito()
// carrito.push(producto);
// actualizarCarrito()
// carrito.push(producto);
// actualizarCarrito()

