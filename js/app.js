const imagenes = document.querySelectorAll('.propiedad__imagen');

window.addEventListener('scroll', () => {

    //Para que no de un position relativo al scroll al que damos, debido a que se veria la imagen fija
    const scroll = this.scrollY / -15;

    imagenes.forEach( (imagen) => {
        imagen.style.backgroundPositionY = `${scroll}px`;
    })
});
