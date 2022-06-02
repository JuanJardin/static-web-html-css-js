const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const hamburger1 = document.querySelector(".hamburger");


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
         aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if (e.target !== imagenesLight) {
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
        //si no se abrio la imagen, el menu se va a ver
        hamburger1.style.opacity = '1';
    }
})

 const aparecerImagen = (imagen) =>{
     imagenesLight.src = imagen;
     contenedorLight.classList.toggle('show');
     imagenesLight.classList.toggle('showImage');
     //cuando se abra la imagen, el menu no se va a ver
     hamburger1.style.opacity = '0';
 }