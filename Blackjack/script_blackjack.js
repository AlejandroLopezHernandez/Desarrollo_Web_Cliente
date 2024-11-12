//CREAR UNA BARAJA
function crear_baraja(){
let numeros = ['2','3','4','5','6','7','8','9','10','J','K','Q','A'];
//Clubs, Hearts, Diamonds, Spades
let valores = ['C','D','H','S'];
//Objeto vacío
let baraja = [];

for(let i = 0; i < numeros.length; i ++){
    for(let j = 0; j < valores.length; j ++){
        baraja.push(numeros[i] + valores[j]);
    }
}
let baraja_mezclada = _.shuffle(baraja);
return baraja_mezclada;
}

//Variables de estado de la partida
let baraja = [];
let puntos_jugador = 0;
let puntos = document.querySelector('#puntos');
//CONTAR PUNTUACION 
function contar_puntuacion(carta){
    let valor = carta.slice(0,- 1);
    if(['J','Q','K'].includes(valor)){
        return 10;
    }
    if(valor === 'A'){
        return 11;
    }
    return parseInt(valor);
}
function ajustar_valor_AS(puntos,cantidadAS){
    while(puntos > 21 && cantidadAS > 0){
        puntos = puntos - 10;
        cantidadAS = cantidadAS - 1;
    }
    return puntos;
}

// PARTIDA NUEVA, reiniciada
let nuevo_juego = document.querySelector('#nuevo_juego');
nuevo_juego.addEventListener('click',(event)=>{
let baraja_nueva = crear_baraja();
let puntos_jugador = 0;
document.querySelector('.jugador-cartas').innerHTML=
    `<img class='carta' src='./cartas/grey_back.png'></img>`;
console.log("Nueva partida iniciada");
puntos.textContent = 0;
});

// PEDIR CARTA
let pedir_carta = document.querySelector('#pedir_carta');
pedir_carta.addEventListener('click',(event)=>{
//Creamos el objeto baraja
let baraja = crear_baraja();
//Extraemos la primera carta de la baraja
let carta = baraja.shift();
console.log(carta)
let contenedor_cartas = document.querySelector('.jugador-cartas');

contenedor_cartas.insertAdjacentHTML('beforeend',`<img class='carta' src='./cartas/${carta}.png'></img>`);
let valor_carta = contar_puntuacion(carta);
puntos_jugador += valor_carta;

let ases = (carta.startsWith('A')) ?1 : 0
puntos_jugador = ajustar_valor_AS(puntos_jugador,ases);

puntos.textContent = puntos_jugador;

if(puntos_jugador > 21){
    puntos.textContent= "¡Has perdido.Te has pasado de 21 puntos!";
    puntos_jugador = 0;
    
} else if(puntos_jugador === 21){
    puntos.textContent= "¡Enhorabuena!Tienes Blackjack";
    puntos_jugador = 0;
}
});
//PLANTARSE
let plantarse = document.querySelector('#plantarse');
plantarse.addEventListener('click',(event)=>{
let puntos_ordenador = document.querySelector('#puntos-crupier');
puntos_ordenador.textContent = "Probando";
});
