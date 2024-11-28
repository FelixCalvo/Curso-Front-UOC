const span = document.querySelector('.spanclass');

document.querySelector(".spanclass").addEventListener("click", function() {
  if (span) {
    span.style.color = 'red';
    span.style.fontWeight = 'bold';
    span.style.fontSize = '12rem';
  };
});

// Cuando seleccionemos un valor en el combo desplegable, el color del body debe cambiar.
// Para ello, añadiremos el listener change al combo desplegable.

const color = document.querySelector('#color');
const divcolor = document.querySelector('.divcolor');

color.addEventListener('change', function() {
  divcolor.style.backgroundColor = color.value;
  divcolor.style.border = '1px solid black';
});

//ejercicio 3 lightbox

let lightbox = document.querySelector("#lightboxContainer");
document.querySelector("#lightboxContainer").addEventListener("click", function() {

    lightbox.style.display = 'none';

});

document.querySelector("#ver").addEventListener("click", function() {
  lightbox.style.display = 'block';
});

document.querySelector("#overlay").addEventListener("click", function() {
  lightbox.style.display = 'none';
});

//ejercicio 4 slider

let marginLeftVariable = 0;
let direction = true;
const slider = document.querySelector('.slider'); 
const divAbueloSlides = document.querySelector('.divslider');
const widthVentana = divAbueloSlides.getBoundingClientRect().width;//sacamos el ancho del contenedor div para usarlo en el slider. 
const slides = slider.querySelectorAll('div'); 
let position = 0;
slider.addEventListener('click', function () {
  if(direction) {
    marginLeftVariable -= widthVentana;
    position ++;    
  }else{
    marginLeftVariable += widthVentana;
    position--;
  }

  slider.style.marginLeft = marginLeftVariable + 'px';
  if(position === 0) direction = true;
  if(position === slides.length -1) direction = false;
  console.log(`position: ${position} marginLeftVariable: ${marginLeftVariable} direction: ${direction}`);
});

