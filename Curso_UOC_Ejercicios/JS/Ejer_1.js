// for(let x=1; x<101; x++){
//   if(x%2===0) console.log(x);
// }


// for(let x=1; x<101; x++){
//   console.log(x%2===0 ? x : continue);
// }


// for(x=1; x<21; x++){
//   if(x%3===0 && x%5===0){
//     console.log(x + ' FizzBuzz');
//   }else if(x%3===0){
//     console.log(x + ' Fizz');
//   }else if(x%5===0){
//     console.log(x + ' Buz');
//   }
// }

// let total = 0;
// for (x=5; x>=0; x--){
//   total = total + x;
//   console.log(x + ' total --> ' + total)
// }

// for (let x = 1; x<=10; x++){
//   console.log('7 * ' + x + ' = ' + x*7);
// }
// for(let y = 1; y <=10; y++){
// for(let x = 1; x<=10; x++){
//   console.log(y + ' * ' + x + ' = ' + x*y);  
// }
// };

// let num = 5;
// let total = 0;
// while(num>=0){
//   total+=num;
//   console.log(num + ' total ' + total);
//   num--;
// }

// let myVar = 87;
// myVar++; // Modificar esta línea
// console.log(myVar); // 88

// let myVar = 11;
// myVar--; // Modificar esta línea
// console.log(myVar); // 10

/* Crear y llamar a una función que reciba como parámetro de entrada un valor booleano y muestre «Sí, eso es cierto» si el valor es true, y «No, eso es falso» si el valor es false.
*/

// function consola(sino){
//   if(sino) console.log('Sí, eso es cierto');
//     else console.log('No, eso es falso');
// }

// consola(false);

// Crear una función llamada «hoyQuieroComer» que recibe un parámetro “comida” cuyo valor será «garbanzos».
// Cuando llamemos a la función se mostrará un log indicándonos lo que deseamos comer.

// function hoyQuieroComer(comida){
//   console.log('Quiero comer ' + comida + '.')

// }

// hoyQuieroComer('garbanzos');

//  Crear una función llamada calcularCubo que recibe un número, calcule su cubo y muestre el resultado por consola. Llamar a la función pasándole el valor 3.

// function calcularCubo(numero){
// numero = numero ** 3;
// console.log('el num ero es: ' + numero);

// }

// calcularCubo(3);

// Crear una función llamada calcularVelocidad que recibirá la velocidad en Km/hora y la mostrará en metros/hora.

// function calcularVelocidad(velocidad){
//   console.log('la velocidad en metros segundo es: ' + velocidad * 1000);
// }

// calcularVelocidad(3);

// Crear una función llamada calcularArea que recibirá el ancho y el alto de un rectángulo y calculará su area.

// function calcularArea(ancho, alto){
//   console.log('Calculamos el area: ' + ancho*alto);
  
// }

// calcularArea(4, 2);

// Crear y llamar a una función que recibe la base y la altura de un triángulo y calcula su área.

// function triangulo(ancho, alto){
//   console.log('Calculamos el area del triangulo: ' + ancho*alto/2);
// }

// triangulo(2, 4);

// Crear estas dos funciones:

// calculaPerimetro(radio); 
// Perímetro de la circunferencia = 2*Math.PI*radio
// Copy
// calculaArea(radio); 
// Area de la circunferencia = Math.PI*radio2

// function calculaPerimetro(radio){
// console.log('Radio de la circunferencia: ' + 2*Math.PI*radio);
// }

// function calculaArea(radio){
//   console.log('Calcular el area: ' + Math.PI*radio);
// }

// calculaPerimetro(10);
// calculaArea(10)

// function echo(name){
//   return name;
// }

// console.log(echo('Pablo'));

// 6. Modificar la siguiente función para que devuelva Inside si val está entre 10 y 20 inclusive y Outside en caso contrario.

// function test(val) {
// 	if (val>10 && val<20) { // Cambia esta línea
// 		return "Inside";
// 	}else {
// 		return "Outside";
// 	}
// }

// console.log(test(15));

// Añade el operador de igual para que la siguiente función devuelva Equal cuando val sea 12.

// function testEqual(val) {
// 	if (val===12) { // Cambia esta línea
// 		return "Equal";
// 	}
// 	return "Not Equal";
// }

// console.log(testEqual(12));

// Combina las sentencias if en un único bloque de tipo if/else.

// function testElse(val) {
// 	let result = "";
// 	if (val > 5) {
// 		result = "Mayor que 5";
// 	}else{
//     result = "Menor o igual a 5";
//   }

// 	return result;
// }

// console.log(testElse(4));

//  Combina las sentencias en un único bloque de tipo if/elseif/else.

// function testElse(val) {
// 	let result = "";

// 	if (val > 5) {
// 		result = "Bigger than 5";
// 	}else if (val < 5) {
// 	result = "Smaller than 5";
// 	}else{
//     result = "Equal to 5";
//   }

// 	return result;
// }

// console.log(testElse(4));

// ¿Qué valor de x se mostrará por consola?

// function hola(nombre) {
// 	return "Hi " + nombre + "!";
// }

// const h1 = hola("Selva");
// const h2 = hola("Pola");
// const x = h1 +  " " + h2;
// console.log(x); // ¿Qué valor de x se mostrará en la consola?

// Hi Selva! Hi Pola!

//  ¿Qué valor de x se mostrará por consola?

// function duplica(nombre) {
// 	return nombre + " and " + nombre;
// }

// const x = duplica("Roy");
// console.log(x); // ¿Qué valor de x se mostrará en la consola?

// Roy and Roy


// Completar la función para que se cumplan las siguientes condiciones:

// function testSize(num) {
//   if(num < 5) return "Tiny";
//     else if(num < 10) return "Small";
//     else if(num < 15) return "Medium";
//     else if(num < 20) return "Large";
//     else return "Huge";
// }

// console.log(testSize(4));

// Escribe una función nand que tome como parámetros de entrada dos valores booleanos. Si ambos valores son true, debería devolver false. En cualquier otro caso, debería devolver true.

// Por ejemplo, la llamada

// nand(true, true);

// debería devolver false.

// Las llamadas:

// nand(true, false);
// nand(false, true);
// nand(false, false);

// deberían devolver true.

// function nand(a, b) {
//   if (a && b) {
//     return 'false';
//   } else{
//     return 'true';
//   }
// }

// console.log(nor(true, true));
// console.log(nor(true, false));
// console.log(nor(false, true));

// Escribe una función nor que tome como parámetros de entrada dos valores booleanos. Si alguno de los dos es false, debería devolver true. En cualquier otro caso, el valor devuelto debería ser false.

// Por ejemplo, la llamada a la función

// nor(false, false);
// Copy
// debería devolver true.

// Las llamadas:

// nor(true, false);
// nor(false, true);
// nor(true, true);
// Copy
// deberían devolver false.

// function nor(a, b) {
//   if (a || b) {
//     return 'false';
//   } else{
//     return 'true';
//   }
// }

// console.log(nor(true, true));
// console.log(nor(true, false));
// console.log(nor(false, true));
// console.log(nor(false, false));

// Escribe una función xor que tome dos valores booleanos. Si ambos valores son diferentes, debería devolver true. Si ambos valores son iguales, debería devolver false.

// Por ejemplo, las llamadas:

// xor(true, false);
// xor(false, true);
// Copy
// deberían devolver true.

// Las llamadas

// xor(true, true);
// xor(false, false);
// Copy
// deberían devolver false.

// function nor(a, b) {
//   if (a === b) {
//     return 'false';
//   } 
//     return 'true';
//   
// }

// console.log(nor(true, true));
// console.log(nor(true, false));
// console.log(nor(false, true));
// console.log(nor(false, false));

// Función callback
// function callback(){
// 	console.log('Llamada al callback');
// }

// function empezarTodo(a, b, myCallback){
// 	console.log(a,b);
// 	myCallback();
// }

// empezarTodo(3,4, callback);

// function mensaje(){
//   console.log('Llamada al callback cada dos segundos');
// }

// setInterval(mensaje, 2000);

// Crear y llamar a una función flecha que recibe un número y muestre su cubo con un console.log.

// const cubo =  num => console.log('el cubo es: ' + num**num) ;

// cubo(3);


// Crear y llamar a una función flecha que recibe la velocidad en Km/hora y la devuelva en en metros/hora. Recoger el valor devuelto y mostrarlo con un console.log.

// const velocidadHora = vel => vel * 1000;
// console.log(velocidadHora(120));

// Crea y llamar a una función flecha que recibe el ancho y el alto de un rectángulo y devuelva su área.

// Recoger el valor devuelto y mostrarlo con un console.log.

// Cuando una función recibe varios parámetros, estos irán separados por coma.

// const area = (ancho, alto) => ancho * alto;
// console.log(area(10, 20));

// Crear y llamar a una función flecha que recibe la base y la altura de un triángulo y devuelva su área.

// Recoger el valor devuelto y mostrarlo con un console.log.
// Área triángulo = base*altura/2

// const areaTriangulo = (ancho, alto) => ancho * alto /2;

// console.log(areaTriangulo(10, 20));

// const radius = radio => 2*Math.PI*radio;
// const circunferencia = radio => Math.PI*radio*radio;

// console.log('El perimetro es : ' + circunferencia(10) + ' y el area es: ' + radius(10));

// Escribe una función llamada longitud que reciba como parámetro de entrada una cadena de texto y devuelva el número de letras que tiene.

// Por ejemplo la siguiente llamada a la función:

// const longitud = strings => strings.length;

// console.log(longitud("Ana"));

// Escribe una función llamada devuelvePrimeraLetra que reciba como parámetro de entrada una cadena de texto y devuelva la primera letra.


// const devuelvePrimeraLetra = strings => strings[0];

// console.log(devuelvePrimeraLetra("Ana"));

// Escribe una función llamada devuelveUltimaLetra que reciba como parámetro de entrada una cadena de texto y devuelva la última letra.

// const devuelveUltimaLetra = strings => strings.slice(-1);
// console.log(devuelveUltimaLetra("Ana"));

// Escribe una función llamada devuelveEnesimaLetra que reciba como parámetro de entrada una cadena de texto y un número y devuelva la letra que ocupe la posición indicada por el número.

// const devuelveEnesimaLetra = (strings, posicion) => strings[posicion];
// console.log(devuelveEnesimaLetra("Ana", 1));

//  Utilizando el método substring imprimir las letras que van desde la posición 3 a la 7 de la cadena «wonderful day», es decir “derf”.


//  const trozo = (strings, a, b) => strings.substring(a, b);
// console.log(trozo('wonderful day, 7));

//  Escribe una función llamada toCase que reciba como parámetro de entrada una cadena de texto y devuelva esa misma cadena de texto en minúsculas, un guión medio y de nuevo esa misma cadena de texto en mayúsculas.

// Por ejemplo, la siguiente llamada a la función:

// toCase("Pablo");

// Debería devolver: «pablo-PABLO»

// const minMay = strings => strings.toLowerCase() + '-' + strings.toUpperCase();

// console.log(minMay('Felix'));

// Escribe una función llamada shortcut que tome dos cadenas de texto y devuelva la inicial de cada una de las dos cadenas.

// Por ejemplo, la llamada a la función:

// shortcut('AmnestyInternational');
// Copy
// Debería devolver «AI».

// const shortcut = (str1, str2) => str1[0] +str2[0];
// console.log(shortcut('holaadios'));

//  Escribe una función llamada firstChar que recibe como parámetro de entrada una cadena de texto y devuelva la primera letra que no sea un espacio.

// Para ello, podemos eliminar los espacios en blanco que pudiera haber al principio y al final de la cadena de texto utilizando la el método trim(). Si no sabes como funciona este método, intenta consultar primero su funcionamiento en internet y si aún así no lo entiendes, pregúntame y te lo explico :).

// Por ejemplo, la llamada a la función:

// firstChar(" Rosa Parks ");
// Copy
// Debería devolver R.

// const firstChar = str => str.trim()[0];
// console.log(firstChar(' holi'));

// Hacer una función devuelveMasLarga que reciba como parámetro de entrada dos cadenas de texto y devuelva la más larga. En caso de que ambas cadenas sean igual de largas, devolveremos la correspondiente al primer parámetro de la función.

// const devuelveMasLarga = (str1, str2) => {
//     if (str2.length > str1.length) return str2;
//     return str1;
// }


// console.log(devuelveMasLarga('prisssssssmerTextosegundoTexto'));

 
// Hacer una función devuelveMasLarga2 que reciba como parámetro de entrada tres cadenas de texto y devuelva la más larga. Si no hay una única cadena más larga, devolveremos el texto No hay una única cadena más larga.
//  const devuelveMasLarga2 = (str1, str2, str3) => {
    
//     if(str1.length === str2.length && str2.length === str3.length) return 'No hay una única cadena más larga';
//     const provisional = str1;
//     if(str2.length > str1.length) provisional = str2;
//     if(str3.length > provisional.length) provisional = str3;
//     return provisional;
//  }

//  console.log(devuelveMasLarga2('pla1a2las'));

// Hacer una función generarNombre que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres primeras letras de cada palabra

// const generarNombre = (str1, str2, str3) => {
//     if (str1.length < 5 || str2.length < 5 || str3.length < 5) return 'error';
//     return str1[0] + str2[0] + str3[0];
// }
// console.log(generarNombre('paffcofelixfranco'));

// Hacer una función generarNombre2 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando la última letra de cada palabra.

// const generarNombre = (str1, str2, str3) => {
//     if (str1.length < 5 || str2.length < 5 || str3.length < 5) return 'error';
//     return str1.slice(-1) + str2.slice(-1) + str3.slice(-1);
// }
// console.log(generarNombre('paffcofelixfranco'));

// Hacer una función generarNombre3 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres últimas letras de cada palabra.


// const generarNombre3 = (str1, str2, str3) => {
//     if (str1.length < 5 || str2.length < 5 || str3.length < 5) return 'error';
//     return str1.slice(-3) + str2.slice(-3) + str3.slice(-3);
// }
// console.log(generarNombre3('paffcofelixfranco'));

// Hacer una función tieneLetra que reciba como parámetro de entrada una cadena de texto y una letra y devuelva true si la letra esta presente en la palabra y false si no lo esta.


// const tieneLetra = (string1, letra) => {
//   string1 = string1.toLowerCase();
//   letra = letra.toLowerCase();
//   if(string1.includes(letra)) return true; return false;
  
// }
// console.log(tieneLetra('felixf'));

// Realizar la evaluación del ejercicio anterior sin tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas

// Hacer una función crearPalabra que reciba como parámetro de entrada una letra y un número y genere una nueva palabra que tenga la letra introducida repetida tantas veces como indique el número. Para ello podrías usar un bucle for, pero existe en Javascript una función más apropiada para este objetivo. La función repeat(). Si no la conocías, investiga su uso y trata de implementarla para resolver el ejercicio.


// const crearPalabra = (letra, num) => letra.repeat(num);
// console.log(crearPalabra('f));

// const crearPalabra = (letra, num) => letra.repeat(num).toUpperCase();
// console.log(crearPalabra('f));

// Hacer una función addGuiones que reciba como parámetro de entrada una cadena texto y devuelva una nueva cadena que tendrá un guion medio detrás de cada letra. Utilizar para ello un bucle for.

// const addGuiones = str1 => {
//   let conGuiones = '';
  // for(let i = 0; i<str1.length; i++){
  //   conGuiones += str1[i] + '-';
  // }
//   return conGuiones;
// }
// console.log(addGuiones('holaMon'));


// Hacer una función contadorDeLetras que reciba como parámetro de entrada una cadena de texto y una letra y devuelva el número de veces que esa letra esta presente en la palabra. Utilizar para ello un bucle for.


// const contadorDeLetras = (str1, letra) =>{ 
//   let numeroVeces = 0;
//     for(let i = 0; i<str1.length; i++){
//       if( str1[i] === letra) numeroVeces ++;
//   }
//   return numeroVeces;
//   }
// console.log(contadorDeLetras('holaMono'));

// const contadorDeLetras = (str1, letra) =>{ 
//   let numeroVeces = 0;
//     str1 = str1.toLowerCase();
//     letra = letra.toLowerCase();
//     for(let i = 0; i<str1.length; i++){
//       if( str1[i] === letra) numeroVeces ++;
//   }
//   return numeroVeces;
//   }
// console.log(contadorDeLetras('holaMonO'));

// Hacer una función contadorDeLetras2 que reciba como parámetro de entrada dos cadenas de texto y una letra y devuelva la cadena de texto en la que dicha letra esta más presente. Utilizar para ello un bucle for. No tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas.

// const contadorDeLetras2 = (str1, str2, letra) =>{
//   let numeroVecesStr1 = 0;
//   let numeroVecesStr2 = 0;
//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();
//   letra = letra.toLowerCase();
//   for(let i = 0; i<str1.length; i++){
//     if( str1[i] === letra) numeroVecesStr1 ++;
//   }
//   for(let i = 0; i<str2.length; i++){
//     if( str2[i] === letra) numeroVecesStr2 ++;
//   }
//   if (numeroVecesStr1 > numeroVecesStr2) return str1;
//   return str2;
// } //return numeroVecesStr1 > numeroVecesStr2 ? str1 : str2;
// console.log(contadorDeLetras2('holaMonadeoooouMono'));


// Escribe una función llamada indexOfIgnoreCase que reciba dos cadenas de texto y devuelva la posición de la primera ocurrencia de la segunda cadena de texto en la primera. La función no debería tener en cuenta mayúsculas y minúsculas.

// Por ejemplo:

// indexOfIgnoreCase("bit","it");
// Copy
// y

// indexOfIgnoreCase("bit","IT");
// Copy
// deberían devolver 1


// const indexOfIgnoreCase = (str1, str2) => {
//   for(let i = 0; i<str2.length; i++){
//     if(str1.toLowerCase().includes(str2[i].toLowerCase())) return i;
//   }
//   return 'No hay coincidencias.';
// }

// console.log(indexOfIgnoreCase('holaMonpp'));

// Escribe una función llamada firstWord que reciba como parámetro de entrada una cadena de texto y devuelva la primera palabra de esa cadena. La primera palaba de la cadena serán todos los caracteres que hay hasta el primer espacio.

// Por ejemplo:

// firstWord("see and stop");
// Copy
// debería devolver «see».

// const firstWord = str1 => {
//   str1.indexOf(' ');
//   return str1.substring(0, str1.indexOf(' '));
// }

// console.log(firstWord('wonderful day'));

//  Obtener un número aleatorio entre 5 y 7.

// const numeroAleatorio = Math.random() * (2) + 5;
// console.log(Math.floor(numeroAleatorio));

// Partiremos de una constante que almacene tu nombre. Luego, crearemos un número al azar dentro del rango de letras que contiene tu nombre. Ese número será la posición de la letra aleatoria de tu nombre que queremos obtener.

// Tendrás que usar los siguientes códigos:

// Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
// nombre.charAt();
// nombre.length;
// Copy
// Ver código fuente
// Ver explicación
// Pasos para resolver el ejercicio:

// Declaramos una constante con nuestro nombre.
// Calculamos un número aleatorio en un rango comprendido entre 0 y el número de letras de tu nombre.
// Utilizamos ese número aleatorio para obtener la letra de tu nombre que ocupa esa posición.
// Mostramos la letra en la consola.

// const name2 = 'felix';
// const number = Math.floor(Math.random() * name2.length);
// console.log(name2.charAt(number) + ' numero: ' + number);


// console.log(parseInt(-4.7)); // --> -4 para conseguier el numero entero

// window.alert("Hola, que tal?");
// const nombre = window.prompt("Introduce un nombre por favor");
// const respuesta = window.confirm("Los datos introducidos ¿Son correctos?");
// if(respuesta) console.log('Correcto!!');
// else console.log('tururu');

// Los valores que recogemos de un prompt son siempre texto, aunque escribamos un número. Para poder operarlos en una suma, debemos convertilos a número, ya que el signo de sumar sirve para sumar números y para concatenar texto, y si el valor recogido es un texto, en lugar de sumarlo lo vamos a concatenar. Para convertir el valor recogido de un prompt en número, podemos hacer varias cosas:

// const n1 = prompt("Introduce primer número");
// const n_1 = parseInt(n1); // Esta conversión a número nos lo deja como entero, eliminando los decimales.
// const n2 = prompt("Introduce segundo número");
// const n_2 = Number(n2);
// const calculoRealizar = prompt("Introduce calculo a realizar: +,-,*,/");
// let resultado = 0;
// if(calculoRealizar === '+') resultado + n_2;
// else if(calculoRealizar === '-') resultado = n_1 - n_2;
// else if(calculoRealizar === '*') resultado = n_1 * n_2;
// else if(calculoRealizar === '/') resultado / n_2;
// alert('El resultados es: ' + resultado);

// const numeroAleatorio = Math.floor(Math.random() * (5) + 1);
// alert('Numero secreto que hay que adivinar: ' + numeroAleatorio);
// const numeroUsuario = parseInt(prompt('Introduce un numero'));

// numeroUsuario === numeroAleatorio ?  alert('Has acertado') : alert('Error');

// Almacenar en una constante un número aleatorio, que será el número secreto.
// Hacer un alert del número aleatorio.
// Los siguientes pasos los daríamos en cada una de las iteraciones de un bucle while. Estos pasos se repetirán hasta que transcurran 3 intentos o el usuario acierte el número secreto.:
// Recogida de un número mediante un prompt.
// Calculo de resultado: Utilizaremos la instrucción if-else para evaluar si el número introducido coincide con el número secreto
// Mostrar el resultado en un alert.
// Hacemos un alert de fin del juego

// const numeroAleatorio = Math.floor(Math.random() * (5) + 1);
// alert('Numero secreto que hay que adivinar: ' + numeroAleatorio);
// let num = 0;
// let numeroUsuario = 0;
// while(num < 3){
//   numeroUsuario = parseInt(prompt('Introduce un numero'));
//   if(numeroUsuario === numeroAleatorio) break;
//   num ++;
// }
// numeroUsuario === numeroAleatorio ?  alert('Has acertado') : alert('Fallastes en tus tres intentos.');

// Pasos a seguir:

// Solicitamos al usuario que intruzca su DNI sin letra y lo almacenamos en una constante.
// Hacer un alert de los datos introducidos (el dni en este caso).
// Creamos una función para obtener la letra del dni. El parámetro de entrada de esta función será el número recogido del usuario.
// La función hará las siguientes validaciones. Si la validación es incorrecta, la función devolverá el valor null.
// Que el número recogido como parámetro tenga 8 dígitos exactamente.
// Que el número recogido como parámetro sea un número (y por tanto no tenga letras).
// Si la validación ha sido correcta, la función utilizará el siguiente algoritmo para calcular la letra del DNI:
// Dividimos el valor introducido entre 23. Almacenamos el resto de la división.
// Utilizamos la función charAt para obtener la letra del DNI. Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E).
// Llamamos a la función.
// Mostrar el resultado: en un log

// const dni = prompt('Introduce tu DNI sin letra');
// alert('Datos introducidos: ' + dni);

// const revisionDNI = (dni) => {
//   if(dni.length !== 8 || isNaN(dni)) return null;
//   const letra = dni % 23;
//   const letras = ['TRWAGMYFPDXBNJZSQVHLCKE'];
//   return letras.charAt(letra);
// }
// let evaluacion = revisionDNI(dni);
// evaluacion === null ? alert('Error!!!') : alert('Tu letra es: ' + evaluacion); 

//  Crea un array con cinco nombres de persona y recórrelo con un bucle for mostrando el texto «Conozco a alguien llamado 

//  const nombres = ['pedro', 'juan', 'maria', 'jose', 'luis'];
//  for(let i = 0; i < nombres.length; i++) console.log('Conozco a alguien llamado --> ' + nombres[i]);

//  Crea una función toArray que reciba dos valores y devuelva un array con estos dos valores.

// Por ejemplo, la llamada:

// toArray(5,9);
// Copy
// debería devolver el array [5, 9]

// const toArray = (num1, num2) => [num1, num2];
// console.log(toArray(5, 9));

// Recorrer la siguiente lista con un bucle imprimiendo el doble de cada número:

// const numbers = [1,9,3,8,5,7];

// for(let i = 0; numbers.length>i; i++) console.log(numbers[i]*2);

//  Escribe una función llamada getFirstElement que reciba un array y devuelva el primer elemento.

// Por ejemplo:
// getFirstElement([1, 2]);
// debería devolver 1.


// const getFirstElement = array => array[0];
// console.log(getFirstElement([1, 2]));

// Escribe una función llamada setFirstElement que reciba como parámetro de entrada un array y un valor cualquiera. El valor recibido debería reemplazar lo que haya en la primera posición del array. El array debería ser devuelto.

// Ejemplo:

// setFirstElement([1, 2], 3);
// Copy
// debería devolver [3, 2]

// const setFirstElement = (array, num) => {
//   array[0] = num;
//   return array;
// }

// console.log(setFirstElement([1, 2, 3, 4], 3));

//  Escribe una función getLastElement que reciba un array como parámetro de entrada y devuelva el último elemento del array.

// Por ejemplo:

// getLastElement([1, 2]);
// Copy
// debería devolver 2.

// const getLastElement = array => array[array.length-1];
// console.log(getLastElement([1, 2]));

// Contar el número de elementos positivos, negativos y que valgan cero en un array de 10 enteros. Los valores habrán sido harcodeados en un array. La salida por consola debería ser similar a esta:

// const arrayNumbers = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];
// let cantidadPositivos = 0;
// let cantidadNegativos = 0;
// let cantidadCeros = 0;
// for(let i = 0; arrayNumbers.length > i; i++){
//   if(arrayNumbers[i] > 0) cantidadPositivos ++;
//   else if (arrayNumbers[i] < 0) cantidadNegativos ++;
//   else cantidadCeros ++; 
// }
// console.log('Cantidad de positivos: ' + cantidadPositivos);
// console.log('Cantidad de negativos: ' + cantidadNegativos);
// console.log('Cantidad de ceros: ' + cantidadCeros);

//  Leer 10 enteros harcodeados en un array y mostrar la media de los valores negativos y la de los positivos.

// const arrayNumbers = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];
// let sumaPositivos = 0;
// let arrayPositivos = [];
// let sumaNegativos = 0;
// let arrayNegativos = [];
// for(let i = 0; arrayNumbers.length > i; i++){
//   if(arrayNumbers[i] > 0) {
//     sumaPositivos += arrayNumbers[i];
//     arrayPositivos.push(arrayNumbers[i]); 
//   } else if(arrayNumbers[i] < 0) {
    
//     sumaNegativos += arrayNumbers[i];
//     arrayNegativos.push(arrayNumbers[i]);   
    
//   }
// }
// console.log('Cantidad de positivos: ' + sumaPositivos/arrayPositivos.length);
// console.log('Cantidad de negativos: ' + sumaNegativos/arrayNegativos.length);

// Selecciona un elemento del array arr de tal forma que una variable que debes declarar llamada myData sea igual a 8.

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [[10, 11, 12], 13, 14]
// ];

// const myData = arr[2][1];
// console.log(myData);

// Crear un array con cinco nombres de persona y recórrelo mostrando el texto «Conozco a alguien llamado «.

// const nombres = ['pedro', 'juan', 'maria', 'jose', 'luis'];

// nombres.forEach(nombre => console.log('Conozco a alguien llamado '+ nombre));

// const numbers = [1,9,3,8,5,7]

// numbers.forEach(number => console.log(number*2)); 


// const numeros = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];
// let positivos = 0;
// let negativos = 0;
// let ceros = 0;

// numeros.forEach(number => {
//   if(number > 0) positivos ++;
//   else if(number < 0) negativos ++;
//   else ceros ++;
// });

// console.log('Cantidad de positivos: ' + positivos);
// console.log('Cantidad de negativos: ' + negativos);
// console.log('Cantidad de ceros: ' + ceros);

// const numeros = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];

// let positivos = [];
// let negativos = [];
// let suma = 0;
// let nega = 0;

// numeros.forEach(number => {
//   if(number > 0) {
//     positivos.push(number);
//     suma += number;
//   }
//   else if(number < 0){
//      negativos.push(number);
//      nega += number;
//   }
// });

// console.log('Cantidad de positivos: ' + suma/positivos.length);
// console.log('Cantidad de negativos: ' + nega/negativos.length);

// Hacer el juego del tres en raya para dos jugadores.

// En un alert del navegador dibujaremos un tablero cuadrado de 9 casillas (3 casillas por lado). Cada jugador, por turnos, irá poniendo una X o una O en las casillas, sin superponerse, hasta que uno de los dos logre poner 3 fichas iguales en línea (en vertical, horizontal o diagonal).

console.log('hola mon rriidfdfdffi');