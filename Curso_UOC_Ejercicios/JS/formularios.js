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

//  A través de un formulario, el usuario debe introducir un número secreto que estará entre 0 y 5.
// El usuario tendrá tres intentos para acertar el número, si no lo logra, habrá perdido el juego.
// Debemos indicar en un cuadro de texto si el usuario gana, falla el número o pierde.
    

const numeroAleatorios = Math.floor(Math.random() * 6);
console.log(numeroAleatorios)
let intentos = 0;
function adivinaNumero(){
  const numero = document.getElementById("numero").value;
  if(numeroAleatorios == numero){
    document.getElementById("salidaadivinarnumero").textContent = "Has acertado";
  } else {
    document.getElementById("salidaadivinarnumero").textContent = "Has fallado";
  }
 intentos ++;  
 if(intentos===3){
   document.getElementById("salidaadivinarnumero").textContent = "Has perdido";
 }
}

// Vamos a hacer una aplicación que se encargará de calcular el coste de un viaje. Para ello tendremos una función llamada calculateCost que llamará a otras tres funciones.

// Cada una de estas tres funciones hará un cálculo de un coste parcial del viaje. La suma de los tres costes será el coste total del viaje.

function calculateCost() {
   const numNoches = document.querySelector("#numeronoches").value;
  const selectciudades = document.getElementById("ciudades").value;
 document.querySelector("#costeviaje").value = selectciudades;
  const costHot = calculateHotelCost(numNoches);
  document.getElementById("costehotel").value = costHot;

  const costAlquiler = calculateRentingCarCost(numNoches);
  console.log(costAlquiler + 'coste alquiler');
  document.getElementById("costealquilercoche").value = costAlquiler;
  const vuelo = calculateAirplaneCost(selectciudades, numNoches);
  const costeTotal = costHot + costAlquiler + vuelo;
  document.getElementById("costetotal").value = costeTotal;
}

const calculateHotelCost = numNoches =>  numNoches * 140;
// Si alquilas un coche por 3 días o más, obtienes un descuento de 20€ sobre el total.
// Si alquilas un coche por 7 días o más, obtienes un descuento de 50€ sobre el total (no acumulable con los 20€ de haber alquilado por más de 3 días).
const calculateRentingCarCost = dias => {    
  let alquiler = dias * 40;
  if(dias >= 3){
    alquiler += -20;
  } else if(dias >= 7){
    alquiler += - 50;
  }
  return alquiler;
};

const calculateAirplaneCost = (ciudad, dias) => dias>3 ? ciudad*0.9 : ciudad;

document.querySelector("#btn1").addEventListener("click", calculateCost);
