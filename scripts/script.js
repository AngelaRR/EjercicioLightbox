// Funciones handler para la optimización de JS

function handlerEvent() {
    let img = document.getElementById('img');
    img.addEventListener('click', handlerAbrir);

    let close = document.getElementById('button');
    close.addEventListener('click', handlerCerrar);
}

function handlerAbrir (){
    let img = document.getElementById('img');
    let close = document.getElementById('button');

    img.classList.add('grande');
    img.classList.add('efectoEntrada');
    img.classList.remove('efectoSalida');
    img.classList.remove('lightbox__img');
    close.classList.remove('lightbox__close--oculto');
}

function handlerCerrar () {
    let img = document.getElementById('img');
    let close = document.getElementById('button');

    img.classList.remove('grande');
    img.classList.remove('efectoEntrada');
    img.classList.add('efectoSalida');
    img.classList.add('lightbox__img');
    close.classList.add('lightbox__close--oculto');

}

window.onload = handlerEvent;