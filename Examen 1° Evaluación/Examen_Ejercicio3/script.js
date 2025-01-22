
let boton_crear = document.querySelector('#btn_crear');

boton_crear.addEventListener('click',funcion_crear);

function funcion_crear(){
let numeros = document.querySelector('#campo_numerico_externo').value;
let numero_divs_a_crear = parseInt(numeros);

        if(isNaN(numero_divs_a_crear) || numeros.length == 0){
            alert("El valor en el campo número no es correcto o está vacío");
            return 0;
        } else {
        contenido = "";
        document.body.innerHTML = contenido;
    
        let btn_crear_divs = document.createElement('button');
        let btn_poner_color = document.createElement('button');
        let btn_color_aleatorio = document.createElement('button');
        let btn_todo_gris = document.createElement('button');
        let btn_carrusel = document.createElement('button');
    
        btn_crear_divs.innerText = "Crear Divs";
        btn_color_aleatorio.innerText = "Color aleatorio";
        btn_poner_color.innerText = "Poner a color";
        btn_todo_gris.innerText = "Todo a gris";
        btn_carrusel.innerText = "Hacer carrusel";
    
        let campo_numerico = document.createElement('input');
        campo_numerico.type="number";
        campo_numerico.id="campo_numerico_interno";
        let label_color = document.createElement('label');
        label_color.innerText="Color";
        let campo_color = document.createElement('input');
        campo_color.type="text";
        campo_color.id="campo_color";
        let label_n_divs = document.createElement('label');
        label_n_divs.innerText="N° divs a cambiar";
    
        document.body.appendChild(btn_crear_divs);
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(btn_poner_color);
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(btn_color_aleatorio);
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(btn_todo_gris);
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(btn_carrusel);
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(label_color);
        document.body.appendChild(campo_color);
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(label_n_divs);
        document.body.appendChild(campo_numerico);
    
        btn_crear_divs.addEventListener('click',crear_divs);

        function crear_divs(){
            for(let i = 0; i < numero_divs_a_crear; i ++){
                let divs = document.createElement('div');
                divs.id="divs";
                divs.class="divs";
                divs.style.width="50px";
                divs.style.height="50px";
                divs.style.backgroundColor="gray";
                divs.style.padding="0.5cm";
                divs.style.marginTop="0.5cm";
                document.body.appendChild(divs);

                divs.addEventListener('mouseover',() =>{
                    divs.style.backgroundColor="black";
                });
                divs.addEventListener('mouseout',() =>{
                    divs.style.backgroundColor="gray";
                });
            }
        }

        btn_todo_gris.addEventListener('click',todo_gris);
        function todo_gris(){
            let divs_grises = document.querySelectorAll('div');
            for(let i = 0; i < divs_grises.length; i ++){
                divs_grises[i].style.backgroundColor = "gray";
            }
        }

        btn_poner_color.addEventListener('click',poner_a_color);

        function poner_a_color(){
            let divs_nuevos = document.querySelectorAll('div');
            let input_color = document.querySelector('#campo_color').value;
            let input_divs = document.querySelector('#campo_numerico_interno').value;
            //let n_divs_a_cambiar = parseInt(input_divs).value;
            console.log(input_divs);
            console.log(input_color);
            
            for(let i = 0; i < input_divs; i ++){
                divs_nuevos[i].style.backgroundColor = input_color;
            }
        }

        btn_color_aleatorio.addEventListener('click',poner_color_aleatorio);

        function poner_color_aleatorio(){
            let colores = ["red","black","blue","white","brown","orange","pink","purple","green","yellow","gray"];

            let divs_nuevos = document.querySelectorAll('div');
            let input_divs = document.querySelector('#campo_numerico_interno').value;

            
            for (let i=0;i<input_divs;i++){
                let color_aleatorio = colores[Math.floor(Math.random()*colores.length)];
                divs_nuevos[i].style.backgroundColor=color_aleatorio;
            }
        }
        btn_carrusel.addEventListener('click', ()=>{
            const colores = ["red","green","blue","brown","yellow","black","white","purple","pink","orange"];
            let input_numeros_divs = parseInt(input_numerico.value);
            let divs_color = document.querySelectorAll('div');
    
            if(input_numeros_divs <= valor_input_numero){
                for (let i = 0; i < input_numeros_divs; i++){
                    if(i % 2 == 0){
                       setInterval(()=>{
                        divs_color[i].style.backgroundColor = colores[i];
                       },2000);
                    } else {
                        setInterval(()=>{
                            divs_color[i].style.backgroundColor = colores[i];
                        },5000);
                    }
                }
            } else {
                alert("Has puesto a cambiar de color más divs de los que hay.");
            }
        });

        }
    }

