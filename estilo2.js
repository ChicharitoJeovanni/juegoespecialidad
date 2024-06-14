const galleryCarousel = document.querySelector('.gallery-carousel');
let currentIndex = 0;


function moveNext() {
    const imageWidth = galleryCarousel.querySelector('img').offsetWidth;
    currentIndex++;
    if (currentIndex >= galleryCarousel.children.length) {
        currentIndex = 0;
    }
    galleryCarousel.style.transform = `translateX(${imageWidth * currentIndex}px)`; // Cambiado el signo negativo aquí
}

// Esta función moverá automáticamente la galería cada cierto intervalo de tiempo
function startAutoMove() {
    setInterval(moveNext, intervalTime);
}

// Llama a la función para iniciar el movimiento automático de la galería
startAutoMove();
