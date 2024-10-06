/*Vamos crear una estructura de datos para guardar equipos y jugadores de una liga.
Los equipos deben, tener un nombre, un sede (nombre del estadio, calle, codigo postal), 
el numero de goles a favor y numero de goles en contra.
Los jugadores debes guardar nombre, apellido, dorsal, goles, posicion, tarjetas amarillas y tarjetas rojas.
Crea de forma estatica 2 equipos con 5 jugadores cada uno*/

let equipo1 = {nombre:"Real Madrid",sede:{nombre_estadio:"Santiago Bernabeu",calle:"Paseo de la Castellana",codigo_postal:28645},goles_a_favor:8,goles_contra:5,jugadores:[]};
    let jugador1= {nombre:"Juan",apellido:"Barrau",dorsal:10,goles:5,tarjeta_amarilla:2,tarjeta_roja:1};
    let jugador2= {nombre:"Johana",apellido:"Chalcao",dorsal:5,goles:3,tarjeta_amarilla:2,tarjeta_roja:0};
    let jugador3= {nombre:"Manuel",apellido:"Cabrero",dorsal:2,goles:10,tarjeta_amarilla:1,tarjeta_roja:1};
    let jugador4= {nombre:"Pascual",apellido:"Manzanilla",dorsal:7,goles:8,tarjeta_amarilla:3,tarjeta_roja:2};
    let jugador5= {nombre:"Ainhoa",apellido:"Perez",dorsal:6,goles:4,tarjeta_amarilla:0,tarjeta_roja:1};

    equipo1.jugadores.push(jugador1);
    equipo1.jugadores.push(jugador2);
    equipo1.jugadores.push(jugador3);
    equipo1.jugadores.push(jugador4);
    equipo1.jugadores.push(jugador5);


let equipo2 = {nombre:"F.C. Barcelona",sede:{nombre_estadio:"Camp Nou",calle:"Travessera de les Corts",codigo_postal:30534},goles_a_favor:10,goles_contra:5,jugadores:[]};
    let jugador6 ={nombre:"Lionel",apellido:"Messi",dorsal:10,goles:10,tarjeta_amarilla:2,tarjeta_roja:0};
    let jugador7 ={nombre:"Carles",apellido:"Pujol",dorsal:2,goles:6,tarjeta_amarilla:3,tarjeta_roja:1};
    let jugador8 ={nombre:"Santiago",apellido:"Desaparecido",dorsal:7,goles:9,tarjeta_amarilla:3,tarjeta_roja:1};
    let jugador9 ={nombre:"Noelia",apellido:"Prieto",dorsal:5,goles:4,tarjeta_amarilla:1,tarjeta_roja:1};
    let jugador10={nombre:"Valeria",apellido:"Soto",dorsal:1,goles:2,tarjeta_amarilla:2,tarjeta_roja:1};

    equipo2.jugadores.push(jugador6);
    equipo2.jugadores.push(jugador7);
    equipo2.jugadores.push(jugador8);
    equipo2.jugadores.push(jugador9);
    equipo2.jugadores.push(jugador10);



console.log(equipo1);
console.log(equipo2);