/*Vamos crear una estructura de datos para guardar equipos y jugadores de una liga.
Los equipos deben, tener un nombre, un sede (nombre del estadio, calle, codigo postal), 
el numero de goles a favor y numero de goles en contra.
Los jugadores debes guardar nombre, apellido, dorsal, goles, posicion, tarjetas amarillas y tarjetas rojas.
Crea de forma estatica 2 equipos con 5 jugadores cada uno*/

let equipo1 = {nombre:"Real Madrid",sede:{nombre_estadio:"Santiago Bernabeu",calle:"Paseo de la Castellana",codigo_postal:28645},goles_a_favor:8,goles_contra:5,
                jugadores:{
                    jugador1: {nombre:"Juan",apellido:"Barrau",dorsal:10,goles:5,tarjeta_amarilla:2,tarjeta_roja:1},
                    jugador2: {nombre:"Johana",apellido:"Chalcao",dorsal:5,goles:3,tarjeta_amarilla:2,tarjeta_roja:0},
                    jugador3: {nombre:"Manuel",apellido:"Cabrero",dorsal:2,goles:10,tarjeta_amarilla:1,tarjeta_roja:1},
                    jugador4: {nombre:"Pascual",apellido:"Manzanilla",dorsal:7,goles:8,tarjeta_amarilla:3,tarjeta_roja:2},
                    jugador5: {nombre:"Ainhoa",apellido:"Perez",dorsal:6,goles:4,tarjeta_amarilla:0,tarjeta_roja:1}
                }};
let equipo2 = {nombre:"F.C. Barcelona",sede:{nombre_estadio:"Camp Nou",calle:"carrer d'Hospitalet",codigo_postal:30534},goles_a_favor:10,goles_contra:5,
                jugadores:{
                    jugador6 :{nombre:"Lionel",apellido:"Messi",dorsal:10,goles:10,tarjeta_amarilla:2,tarjeta_roja:0},
                    jugador7 :{nombre:"Carles",apellido:"Pujol",dorsal:2,goles:6,tarjeta_amarilla:3,tarjeta_roja:1},
                    jugador8 :{nombre:"Santiago",apellido:"Desaparecido",dorsal:7,goles:9,tarjeta_amarilla:3,tarjeta_roja:1},
                    jugador9 :{nombre:"Noelia",apellido:"Prieto",dorsal:5,goles:4,tarjeta_amarilla:1,tarjeta_roja:1},
                    jugador10:{nombre:"Valeria",apellido:"Soto",dorsal:1,goles:2,tarjeta_amarilla:2,tarjeta_roja:1}
                }};

console.log(equipo1);
console.log(equipo2);







