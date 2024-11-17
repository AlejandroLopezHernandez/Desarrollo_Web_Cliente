//Variables de estado de la partida
let baraja = [];
let puntos_jugador = 0;
let puntos_crupier = 0;
let saldo_inicial = 1000;
let apuesta_actual = 0;
let puntos = document.querySelector('#puntos');
let apuestas = document.querySelector('#apuesta');
let mostrar_puntos_crupier = document.querySelector('#puntos-crupier');
let mensaje_resultado = document.querySelector('#mensaje-resultado');
let saldo = document.querySelector('#saldo');
saldo.textContent = saldo_inicial;
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
    function apostar(){
    let apuesta_inicial = parseInt(prompt(`Selecciona el dinero que quieras apostar.Tu saldo actual es de ${saldo_inicial}`));
    if(isNaN(apuesta_inicial)||apuesta_inicial <= 0){
        alert("Tienes que apostar dinero e introducir un número entero válido");
        return apostar();
    }
    if(apuesta_inicial > saldo_inicial){
        alert("No puedes apostar más de tu saldo disponible.");
        return apostar();
    }
    apuesta_actual = apuesta_inicial;
    apuestas.textContent = apuesta_actual;
    }
    apostar();
    // PARTIDA NUEVA, reiniciada
    let nuevo_juego = document.querySelector('#nuevo_juego');
    nuevo_juego.addEventListener('click',(event)=>{
    //Se reinicia la baraja y los puntos
    baraja = crear_baraja();
    puntos_jugador = 0;
    puntos_crupier = 0;
    document.querySelector('.jugador-cartas').innerHTML=
        `<img class='carta' src='./cartas/grey_back.png'></img>`;
    document.querySelector('.crupier-cartas').innerHTML=
        `<img class='carta' src='./cartas/grey_back.png'></img>`;
    puntos.textContent = 0;
    mostrar_puntos_crupier.textContent = 0;
    mensaje_resultado.textContent = "";
    pedir_carta.disabled = false;
    plantarse.disabled = false;
});
    // PEDIR CARTA
    let pedir_carta = document.querySelector('#pedir_carta');
    pedir_carta.addEventListener('click',(event)=>{
    if(baraja.length === 0){
        return;
    }
    //Extraemos la primera carta de la baraja
    let carta = baraja.shift();
    let contenedor_cartas = document.querySelector('.jugador-cartas');
    
    contenedor_cartas.insertAdjacentHTML('beforeend',`<img class='carta' src='./cartas/${carta}.png'></img>`);
    let valor_carta = contar_puntuacion(carta);
    puntos_jugador += valor_carta;
    
    let ases;
    if(carta.startsWith('A')){
        ases = 1;
    } else {
        ases = 0;
    }
    puntos_jugador = ajustar_valor_AS(puntos_jugador,ases);
    
    puntos.textContent = puntos_jugador;
    
    if(puntos_jugador > 21){
        puntos.textContent= "¡Has perdido.Te has pasado de 21 puntos!";
        puntos_jugador = 0;
        saldo_inicial -= apuesta_actual;
        saldo.textContent = saldo_inicial;
        fin_partida();        
    } else if(puntos_jugador === 21){
        puntos.textContent= "¡Enhorabuena!Tienes Blackjack";
        puntos_jugador = 0;
        saldo_inicial += apuesta_actual * 1.5;
        saldo.textContent = saldo_inicial;
        fin_partida();        
    }
    });
    //PLANTARSE
    let plantarse = document.querySelector('#plantarse');
    plantarse.addEventListener('click',(event)=>{
    let contenedor_cartas_crupier = document.querySelector('.crupier-cartas');
    while(puntos_crupier < 17){
        let carta = baraja.shift();
         contenedor_cartas_crupier.insertAdjacentHTML('beforeend',`<img class='carta' src='./cartas/${carta}.png'></img>`);
         let valor_carta = contar_puntuacion(carta);
         puntos_crupier += valor_carta;
         let ases;
         if(carta.startsWith('A')){
            ases = 1;
         } else{
            ases = 0;
         }
         puntos_crupier = ajustar_valor_AS(puntos_crupier, ases);
    } 
    mostrar_puntos_crupier.textContent = puntos_crupier;
    if(puntos_crupier > 21){
        mensaje_resultado.textContent = "El crupier se ha pasado de 21, ¡has ganado!";
        saldo_inicial += apuesta_actual;
        saldo.textContent = saldo_inicial;
        fin_partida();
    } else if(puntos_crupier >= 17){
        if(puntos_crupier > puntos_jugador){
            mensaje_resultado.textContent = "¡El crupier gana!";
            saldo_inicial -= apuesta_actual;
            saldo.textContent = saldo_inicial;
        } else if(puntos_crupier < puntos_jugador){
            mensaje_resultado.textContent = "Enhorabuena, ¡has ganado como jugador!";
            saldo_inicial += apuesta_actual;
            saldo.textContent = saldo_inicial;
        } else{
            mensaje_resultado.textContent = "¡Es un empate!";     
        }
        //saldo.textContent = saldo_inicial;
        fin_partida();
    }
    });
    function fin_partida(){
        plantarse.disabled = true;
        pedir_carta.disabled = true;
        if(saldo_inicial <= 0){
            alert("Lo siento. Estás en bancarrota.Recarda la página");
            nuevo_juego.disabled = true;
        }
    }
    plantarse.disabled = true;
    pedir_carta.disabled = true;
