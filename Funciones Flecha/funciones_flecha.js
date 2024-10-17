/*En la pagina principal debe aparecer un solo boton que ponga hora. 
Cuando hacemos click en hora llamara a un funcion convencional que activara un cronometro
Para ello usaras la funcion setinterval la funcion que se le pasa a setnterval debe ser funcion flecha,
dentro de esa funcion debe mostrar por consola la hora y se va incrementando cada segundo
Esta función debe tener en cuenta que cuando los segundo llegen a 60, deben ponerse en 0, 
incrementar los minutos, cuando los minutos lleguen a 60 ponerse en 0 e incrementara las horas.
Usar tres variables globales let hora=10, let min=0, let segundo=0. 
Un ejemplo de como usar set interval con funciones flecha
let dato=0

setInterval(()=>console.log(dato++),1000);
mostrara cada segundo 1, 2, 3, 4...*/

function iniciar_cronometro(){
    let hora = 10;
    let min = 0;
    let segundo = 0;
setInterval(()=>{
    if(segundo == 59){
        segundo = 0;
    if (min == 59){
        min = 0;
    if (hora == 24){
        console.log("Finalizado el día");
    }else {
        hora ++;
    }
    } else {
        min ++;
    } 
    } else {
        segundo ++;
    }console.log(hora + ":" + min + ":" + segundo);
    },1000);
    } 