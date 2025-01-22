// Carrito inicial
let carrito = [];
let productosContainer = document.getElementById('productos');

function añadir_id(){
  for(let producto in inventario){
    inventario[producto]['id']=producto;
  }
  console.log(inventario);
}

function addElementoDiv(){
    // Seleccionar el primer producto del inventario

    //const producto = inventario[i]; // `carrito` proviene del archivo inventario.js
    
    let contenido = "";
    let indice = 0;

    for (let producto of inventario){
      // Usamos boostrap
      contenido += '<div class="row">';
      contenido += '  <div class="col-md-4">';
      contenido += '    <img src="' + producto['url_imagen'] + '" alt="' + producto['descripcion'] + '" class="img-fluid">';
      contenido += '  </div>';
      contenido += '  <div class="col-md-8">';
      contenido += '    <h5>' + producto['descripcion'] + '</h5>';
      contenido += '    <p>Precio: $' + producto['precio'] + '</p>';
      contenido += '    <p>Descuento: ' + producto['descuento'] + '</p>';
      contenido += '   <button class="btn btn-primary" id="'+indice+'">Comprar</button>';
      contenido += '  </div>';
      contenido += '</div>';
      indice ++;
    }
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

function comprar(){
  for (let producto in inventario){
    let boton_comprar = document.getElementById(producto);

    boton_comprar.addEventListener('click', ()=>{
      agregarAlCarrito(inventario[producto]);
      console.log("Probando el boton comprar con id: " + producto);
    });

  }
}
let boton_carrito = document.querySelector('#cart-button');
boton_carrito.addEventListener('click',funcion_comprar_carrito);

function funcion_comprar_carrito(){
  if(carrito.length > 0){
    let contenido = "";
    contenido += `<table border = 2 >`;
    contenido += `<thead>`;
    contenido += `<tr>`;
    contenido += `<th>Descripción</th>`;
    contenido += `<th>Precio con IVA</th>`;
    contenido += `<th>Precio sin IVA</th>`;
    contenido += `<th>Precio con descuento</th>`;
    contenido += `<th>Tipo de descuento</th>`;
    contenido += `</tr>`;
    contenido += `</thead>`;
    contenido += `<tbody>`;
      for (let producto_carrito of carrito){
        let precio_sin_iva = parseFloat(producto_carrito['precio']) * 0.79;
        let precio_con_descuento = parseFloat(producto_carrito['precio']);

        if(producto_carrito['descuento'] == "black friday"){
          precio_con_descuento = precio_con_descuento * 0.85;
        } else if(producto_carrito['descuento'] == "normal"){
          precio_con_descuento = precio_con_descuento * 0.93;
        }
        contenido += `<tr>`;
        contenido += `<td>${producto_carrito['descripcion']}</td>`;
        contenido += `<td>${producto_carrito['precio']} </td>`;
        contenido += `<td>${precio_sin_iva.toFixed(2)}</td>`;
        contenido += `<td>${precio_con_descuento.toFixed(2)}</td>`;
        contenido += `<td>${producto_carrito['descuento']}</td>`;
        contenido += `</tr>`;
      }
      contenido += `<tbody>`;
      contenido += `</table>`;
    productosContainer.innerHTML = contenido;

    //Creamos el botón comprar sólo una vez
    if(!document.getElementById("finalizar_compra")){
      let boton_finalizar_compra = document.createElement('button');
      boton_finalizar_compra.innerText = "Finalizar compra";
      boton_finalizar_compra.className = "btn btn-primary";
      boton_finalizar_compra.id="finalizar_compra";
      boton_finalizar_compra.addEventListener('click',finalizar_compra);
      document.body.appendChild(boton_finalizar_compra);
    }
      }
   else {
    alert("Debes seleccionar un producto del carrito");
  }

}

function finalizar_compra(){
  alert("Serás redirigido a la página principal");
  
  let contenido = "";
  let indice = 0;
  for (let producto_carrito of carrito){
    inventario = inventario.filter(
      (producto_inventario) => producto_inventario['descripcion'] !== producto_carrito['descripcion']
    );
  }
    for (let producto_inventario of inventario){
      contenido += '<div class="row">';
      contenido += '  <div class="col-md-4">';
      contenido += '    <img src="' + producto_inventario['url_imagen'] + '" alt="' + producto_inventario['descripcion'] + '" class="img-fluid">';
      contenido += '  </div>';
      contenido += '  <div class="col-md-8">';
      contenido += '    <h5>' + producto_inventario['descripcion'] + '</h5>';
      contenido += '    <p>Precio: $' + producto_inventario['precio'] + '</p>';
      contenido += '    <p>Descuento: ' + producto_inventario['descuento'] + '</p>';
      contenido += '   <button class="btn btn-primary" id="'+indice+'">Comprar</button>';
      contenido += '  </div>';
      contenido += '</div>';
      indice ++;
      }
      let boton_comprar = document.getElementById("finalizar_compra");
      //Con esto quitamos el botón de finalizar compra
      document.body.removeChild(boton_comprar);
      // Insertar el contenido generado al contenedor
      productosContainer.innerHTML = contenido;
      carrito = [];
      actualizarCarrito();
      comprar();
    }
  


addElementoDiv()
añadir_id()
comprar()
// carrito.push(producto);
// actualizarCarrito()
// carrito.push(producto);
// actualizarCarrito()
// carrito.push(producto);
// actualizarCarrito()

// Función para añadir productos al carrito

