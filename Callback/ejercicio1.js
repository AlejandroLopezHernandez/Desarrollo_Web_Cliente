/*
1º Dado el ejercicio.js contiene una simulación de un servidor de eventos. Esto es elemento asíncrono
 que simula eventos en el servidor:
- Se ha conectado un usuario, se ha producido error, temperatura...
- Debemos hacer un callback que atienda ese servidor. Debemos crear un callback que muestre por consola,
 cuando llegue el evento que evento se ha producido. Debes modificar el script para añadir el callback.

2.º Vamos a modificar el callback para en vez de mostrar por consola, lo muestre por html. 
De la siguiente forma, va añadir el evento a la listas, pero no solo va añadir el evento va hacer lo siguiente.
Va a poner la hora a la  se a producido el evento, y pondrá un icono distinto si es un evento de usuario, 
un icono si es un error o de temperatura.
Simular con un bucle que hay varias llamadas.
3º sin usar bucle con setInterval y tiempo aleatorio entre 500 milisegundos y dos segundos simular un servidor
 que esta lanzandos eventos y el callback añadiendo los elementos a la web.  
*/
function servidorEventos(callback) {
    const eventos = [
        { tipo: "temperatura", valor: Math.random() * 40 }, 
        { tipo: "usuario", valor: `Usuario${Math.floor(Math.random() * 100)}` }, 
        { tipo: "error", valor: "Conexión perdida" }
    ];

    // Tiempo aleatorio entre 1 y 3 segundos para simular asincronía
    const tiempo = Math.floor(Math.random() * 3000) + 1000;

    //Esta función es asíncrona, se ejecuta cuando pasa el tiempo aleatorio que le hemos pasado
    setTimeout(() => {
        //El evento aleatorio es uno de esos tres eventos
        const eventoAleatorio = eventos[Math.floor(Math.random() * eventos.length)];
        //Aqui debe ir el callback y recoger el Evento aleatorio
        callback(eventoAleatorio) //Esta función se ejecuta antes que se termine setTimeout
    }, tiempo);
}
function imprimir_html(evento){
    let web = document.querySelector('#resultados');
    const fecha = new Date();
    web.innerHTML += `
    <ul>
    <li>Evento:${evento.tipo} &#x1f321;&#xfe0f</li>
    <li>Valor:${evento.valor} &#x1f321;&#xfe0f</li>
    <li>Hora:${fecha} &#x231a</li>
    </ul>
    `;

}
servidorEventos(imprimir_html);

/*for (let i = 0; i < 10; i ++){
servidorEventos(imprimir_html);
}*/

//Cada dos segundos se ejecutará esta función,
//simulando una llmada al servidor
setInterval(() => {
    servidorEventos(imprimir_html)
}, 2000);

