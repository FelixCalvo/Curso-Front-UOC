// Hacer un formulario que convierte de euros a dólares. Supondremos que un euro son dos dólares.
function convertir() {
    const euros = document.getElementById("euros").value;
    const dolares = euros * 2;
    document.getElementById("resultado").textContent = dolares;
};

//  Hacer un formulario que convierta de grados centígrados a grados Fahrenheit. Para ello deberé multiplicar por 9/5 y sumar 32. Tener en cuenta que 30 grados centígrados son 86 grados fahrenheit.

 function convertirGrados() {
  const grados = document.getElementById("grados").value;
  const fahrenheit = (grados * 9/5) + 32;
  document.getElementById("resultadoGrados").textContent = fahrenheit;
 }

  function convertirFarenheit() {
  const gradosFarenheit = document.getElementById("gradoF").value;
  const grados = (gradosFarenheit-32) * (0.555);
  document.getElementById("resultadoGradosConvert").textContent = grados;
 }

 //  Hacer un formulario para solicitar el envío de una caja de cartón. En el formulario podremos especificar las características de la caja.

function enviarPedido(){
  const nombre = document.getElementById("nombrecliente").value;
   const material = document.getElementById("material").value;
  const tamanio = verRadioSeleccionado();
  const comentarios = document.getElementById("comentarios").value;  
  const salida = `${nombre} ha pedido una caja de ${material} con unas dimensiones ${tamanio}. ${comentarios}`;
   const textarea = document.getElementById("salida");
   textarea.value = salida;
}

function verRadioSeleccionado() {
  const radios = document.getElementsByName('tamanio');
  for (const radio of radios) {
    if (radio.checked) {
      return radio.value;
    }
  }
  return null;
}


 A través de un formulario, el usuario debe introducir un número secreto que estará entre 0 y 5.
El usuario tendrá tres intentos para acertar el número, si no lo logra, habrá perdido el juego.
Debemos indicar en un cuadro de texto si el usuario gana, falla el número o pierde.
    

const numeroAleatorios = Math.floor(Math.random() * 6);


function adivinaNumero(){
  
}

