
function variables()
{ 
        let imagen = document.getElementById("imagen");
        let arreglo = ["imagenes/1.jpg","imagenes/2.jpg","imagenes/3.jpg","imagenes/4.jpg","imagenes/5.jpg","imagenes/6.jpg","imagenes/7.jpg","imagenes/8.jpg","imagenes/9.jpg","imagenes/10.jpg"];
        let aleatorio = Math.floor(Math.random()*(arreglo.length));
        let seleccion = arreglo[aleatorio];
        imagen.style = "width: 640px; height: 480px;";
        imagen.src = seleccion;
}



