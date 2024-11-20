/*
## Ejercicio 3 (4 puntos)

La pagina principal solo debe tener un campo input numérico y un botón crear.
En el javascript debes tener tener una lista de colores de mínimo 7 colores (en ingles)

### Apartado 1 botón crear (0,5 puntos)

Al darle al botón crear debe recoger el numero y hacer lo siguiente:

* Eliminar el botón crear y en su lugar poner cuatro botones , un campo de numérico y un campo de texto los botones serán:
* Poner de color
* Poner color aleatorio
* Todos gris
* Carrusel
* Crear los divs

Ejemplo:
Cargamos la pagina y en el campo numérico ponemos 4 y le damos crear.

1. El botón crear y el campo numérico desaparecerán .
2. Habrá dos campos uno de texto y otro numérico y los botones "Poner de color", "Poner color aleatorio", "Todos gris", "Carrusel"
3. Abra 4 divs en gris

### Apartado 2 crear divs (0,5 puntos)

Ademas debe crear un numero de div igual al campo numérico recogido al principio.
Estos divs tendran las siguientes características:

* Tener todos el mismo tamaño.
* Tener todo el fondo gris.
* Tener todos un borde visible.
* Si pasamos el ratón por encima del divs cambia el color a negro y cuando salga vuelve a ponerlo a gris.

### Apartado 3 Todos gris (0,25 puntos)

* Pondrá todos los divs en gris.

### Apartado 4 Poner de color (0,5 puntos)

Recogerá los datos de los dos campos el numérico y el de texto.

* El numérico indicara el numero de divs que debe cambiar de color
* El campo de texto el color de fondo Recordar que los nombres son en ingles. Ejemplo hay 5 divs. 3 red, significa a los 3 primeros cambiara el fondo a red.

### Apartado 5 Poner color aleatorio (1 punto)

Recogerá los datos del campo numérico.

* El numero de divs indicado le cambiara el color de la lista de colores de forma aleatoria. Ejemplo tenemos 9 divs y ponemos 3 color aleatorio, al primero le pone un color aleatorio de la lista por ejemplo rojo, al segundo verde y al tercero azul.

### Apartado 6 carrusel (1,25 puntos)

Cambiar los colores de forma periódica.

* Cada 2 segundos cambiara los divs pares, empezaran por el principio de la lista de colores e irán incrementando cada dos segundos, cuando lleguen al final empezaran por el principio Ejemplo tenemos 5 divs y los colores son [rojo, verde, azul, marron] a los primeros 2 segundos se pondrán rojos, luego verde, luego azul, marron y otra vez rojo. Solo los div pares es decir el 2 y el 4
* Cada 5 segundos cambiara los divs impares, empezaran por el final de la lista de colores e irán decrementando cada 5 segundos, cuando lleguen al principio empezaran por el final Ejemplo tenemos 5 divs y los colores son [marron, azul, verde, rojo] a los primeros 5 segundos se pondrán rojos, luego verde, luego azul, marron y otra vez rojo. Solo los div pares es decir el 1 , 3 el 5
*/
let btn_crear = document.querySelector('#btn_crear');
let numeros = document.querySelector('#numeros').value;

btn_crear.addEventListener('click',creacion_elementos);

function creacion_elementos(){
    if(numeros == 1 ){
        btn_crear.style.display='none';
        //numeros.style.display='none';
        let boton1 = document.createElement('button');
        boton1.innerText = "Poner a color";
        let boton2 = document.createElement('button');
        boton2.innerText = "Poner color aleatorio";
        let boton3 = document.createElement('button');
        boton3.innerText = "Todos a gris";
        let boton4 = document.createElement('button');
        boton4.innerText = "Carrusel";
        let numerico = document.createElement('input');
        numerico.type ='number';
        let campo_texto = document.createElement('input');
        campo_texto.type = 'text';

        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');

        div1.style.width = '4cm';
        div1.style.height = '4cm';
        div1.style.backgroundColor = 'gray';
        div1.style.marginBlock='0.5cm'

        div2.style.width = '4cm';
        div2.style.height = '4cm';
        div2.style.backgroundColor = 'gray';
        div2.style.marginBlock='0.5cm'

        div3.style.width = '4cm';
        div3.style.height = '4cm';
        div3.style.backgroundColor = 'gray';
        div3.style.marginBlock='0.5cm'


        div4.style.width = '4cm';
        div4.style.height = '4cm';
        div4.style.backgroundColor = 'gray';
        div4.style.marginBlock='0.5cm'

        document.body.appendChild(boton1);
        document.body.appendChild(boton2);
        document.body.appendChild(boton3);
        document.body.appendChild(boton4);
        document.body.appendChild(numerico);
        document.body.appendChild(campo_texto);
        document.body.appendChild(div1);
        document.body.appendChild(div2);
        document.body.appendChild(div3);
        document.body.appendChild(div4);
    }
     if(numeros == 2){
        btn_crear.style.display='none';

        let div1 = document.createElement('div');
        let div2 = document.createElement('div');

        div1.style.width = '4cm';
        div1.style.height = '4cm';
        div1.style.backgroundColor = 'gray';
        div1.style.marginBlock='0.5cm'

        div2.style.width = '4cm';
        div2.style.height = '4cm';
        div2.style.backgroundColor = 'gray';
        div2.style.marginBlock='0.5cm'

        div1.addEventListener('mouseover',()=>{
            div1.style.backgroundColor="black";
        });

        div2.addEventListener('mouseover',() =>{
            div2.style.backgroundColor= "black";
        });

        div1.addEventListener('mouseout',()=>{
            div1.style.backgroundColor = "gray";
        });
        div2.addEventListener('mouseout',()=>{
            div2.style.backgroundColor = "gray";
        });

        document.body.appendChild(div1);
        document.body.appendChild(div2);
    }
    if(numeros == 3){
        btn_crear.style.display='none';

        let div1 = document.createElement('div');
        let div2 = document.createElement('div');

        div1.style.width = '4cm';
        div1.style.height = '4cm';
        div1.style.backgroundColor = 'gray';
        div1.style.marginBlock='0.5cm'

        div2.style.width = '4cm';
        div2.style.height = '4cm';
        div2.style.backgroundColor = 'gray';
        div2.style.marginBlock='0.5cm'

        document.body.appendChild(div1);
        document.body.appendChild(div2);
    }

    if(numeros == 4){
        
    }
}