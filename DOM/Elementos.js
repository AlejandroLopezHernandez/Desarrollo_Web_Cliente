
function cambiar_color(){
    //Hacemos un array con los número
    let numeros = document.getElementsByTagName('li');
    //Declaramos un bucle forin, ya que necesitamos el índice
    for (let numero in numeros) {
        if(numero % 2 == 0) {
            numeros[numero].style = "color:red"; //necesitamos modificar el objeto con el indice [entre corchetes]
        } else {
            numeros[numero].style = "color:blue";
        }
    }
}

function cambiar_negro(){
    let numeros = document.getElementsByTagName("li");

    for (const numero in numeros) {
        numeros[numero].style = "color:black";
    }
}
