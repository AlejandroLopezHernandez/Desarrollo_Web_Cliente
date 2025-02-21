/*
Desarrolla una aplicación web en JavaScript que permita a los usuarios descargar 
archivos multimedia (imágenes, videos y archivos MP3) desde URLs proporcionadas. 
La aplicación debe cumplir con los siguientes requisitos:

Interfaz de usuario:

Un campo de texto donde el usuario pueda ingresar la URL del archivo que desea descargar.
Tres botones: uno para descargar imágenes, otro para vídeos y otro para archivos MP3.
Un área donde se muestre un mensaje de confirmación o error después de intentar la descarga.
Funcionalidad:

Cuando el usuario ingrese una URL y haga clic en uno de los botones, la aplicación debe utilizar
la API fetch para obtener el archivo desde la URL proporcionada.
Una vez que el archivo se haya obtenido correctamente, la aplicación debe permitir al usuario 
descargarlo en su dispositivo.
Si la URL no es válida o el archivo no se puede descargar, la aplicación debe mostrar un mensaje de error.
Consideraciones adicionales:

Asegúrate de manejar adecuadamente los errores, como URLs inválidas o problemas de red.
Utiliza Blob y URL.createObjectURL para crear un enlace de descarga del archivo obtenido.
Limpia el campo de texto después de cada descarga exitosa.
Pixabay
*/

let mensaje = document.querySelector("#mensaje");
let multimedia = document.querySelector("#multimedia");
let btn_imagen = document.querySelector("#btn_imagen");
let btn_video = document.querySelector("#btn_video");
let btn_musica = document.querySelector("#btn_musica");

btn_imagen.addEventListener("click", () => {
  let url = document.querySelector("#url").value.trim();
  let mensaje = document.querySelector("#mensaje");
  fetch(url)
    .then((response) => {
      //Verificamos que la respuesta sea correcta
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      //Si la respuesta es correcta, la transformamos en un blob (binario)
      console.log(url);
      return response.blob();
    })
    .then((imagenBlob) => {
      //Creamos una URL temporal del recurso
      const imageObjectURL = URL.createObjectURL(imagenBlob);
      //Creamos un <img> en el HTML y lo procesamos
      let resultado = document.querySelector("#resultado_imagen");
      resultado.style.display = "block";
      resultado.src = imageObjectURL;
    })
    .catch((error) => {
      alert(`Error al obtener la imagen :( " ${error.mensaje}`);
    });
});

btn_video.addEventListener("click", () => {
  let url = document.querySelector("#url").value;
  let mensaje = document.querySelector("#mensaje");
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      return response.blob();
    })
    .then((VideoBlob) => {
      const videoObjectURL = URL.createObjectURL(VideoBlob);
      let resultado = document.querySelector("#video_resultado");
      resultado.style.display = "block";
      resultado.src = videoObjectURL;
    })
    .catch((error) => {
      alert(`Error al obtener la imagen :( " ${error.mensaje}`);
    });
});

btn_musica.addEventListener("click", () => {
  let url = document.querySelector("#url").value;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      return response.blob();
    })
    .then((AudioBlob) => {
      const audioObjectURL = URL.createObjectURL(AudioBlob);
      let resultado = document.querySelector("#audio_resultado");
      resultado.style.display = "block";
      resultado.src = audioObjectURL;
    })
    .catch((error) => {
      alert(`Error al obtener el audio :( " ${error.mensaje}`);
    });
});
