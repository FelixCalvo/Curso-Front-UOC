const nombres = ['Terremoto', 'Motocicleta', 'Edificio'];


// Asocia el evento onclick a cada div
document.querySelectorAll('.teclas').forEach(tecla => {
  tecla.onclick = cambiarColor();
});


