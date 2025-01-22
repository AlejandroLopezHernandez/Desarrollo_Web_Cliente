/*
Hacer un página web que tenga dos campos clave, valor y dos botones, guardar y mostrar-borrar.

El botón guardar, hay guardar en localstorage la clave y el valor.

El botón mostrar, mostrar en un div todas las claves y valor del localstorage, 
además de mostrar en una lista borrar una a una de localstorage.
*/
function guardar(){
    let clave = document.querySelector('#clave').value;
    let valor = document.querySelector('#valor').value;

    localStorage.setItem("clave:", clave);
    localStorage.setItem("valor:", valor);

    alert("Clave valor añadidas");
}
function mostrar(){
    let div_resultado = document.querySelector('#claves_valor');
    div_resultado.innerHTML = "";
    div_resultado.innerHTML += '<br>';
    div_resultado.innerHTML += `<li> ${localStorage.getItem("clave:", clave)} </li>`;
    div_resultado.innerHTML += `<li> ${localStorage.getItem("valor:", valor)} </li>`;
    div_resultado.innerHTML += '<input type="button" value="Borrar" onclick="borrar()">';
    
    if(localStorage.getItem("clave:", clave) == null || localStorage.getItem("valor:", valor) == null){
        div_resultado.innerHTML = "";
    }
    
   document.body.appendChild(div_resultado);
}
function borrar(){
    localStorage.removeItem("clave:",clave);
    localStorage.removeItem("valor:",valor);
    alert("Clave valor borrada");
    mostrar()
}