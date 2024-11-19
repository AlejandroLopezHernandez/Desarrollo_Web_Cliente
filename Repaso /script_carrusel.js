let imagenes = [
    'campos.jpg',
    'catedralPalma.jpg',
    'catedralPalma2.jpg',
    'Palma2.jpg',
    'Palma1.jpg'
];
let btn_avanzar = document.querySelector('#avanzar');
let btn_retrocecer = document.querySelector('#retroceder');
let radios = document.querySelectorAll('.botones');
let fotosMallorca = document.querySelector('#campos');

btn_avanzar.addEventListener('click',avanzar);
btn_retrocecer.addEventListener('click',retroceder);

function avanzar(){
    for(let i = 0; i < radios.length; i ++){
        if(radios[i].checked){
           let siguiente = (i + 1) % radios.length;
           fotosMallorca.src = imagenes[siguiente];
           radios[siguiente].checked = true;
           break;
        }
    }
}

function retroceder(){
    for(let i = 0; i < radios.length; i ++){
        if(radios[i].checked){
            let anterior = (i - 1 + radios.length) % radios.length;
            fotosMallorca.src = imagenes[anterior];
            radios[anterior].checked = true;
            break;
    }
}
}