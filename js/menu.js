const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-navegacion");

// console.log(hamburger);
// console.log(menu);

hamburger.addEventListener("click", () => {
    //dentro de menu queremos que agarre todas las clases del css y de esas, agarre la clase ".spread"
    menu.classList.toggle("spread");
});

//queremos que windows escuche el siguiente evento
window.addEventListener('click', e=>{
    //para que el menu se habra hay que asignarle la clase "spread"
    //y para cerrar el menu hay que quitarle la clase "spread" y para esto es necesario hacer click en cualquier parte menos en el menu y en la hamburguesa
    if (menu.classList.contains("spread") && e.target != menu && e.target != hamburger) {
        menu.classList.toggle("spread")  
    }
})