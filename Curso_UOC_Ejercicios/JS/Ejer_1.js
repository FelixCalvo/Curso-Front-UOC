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
// console.log(trozo('wonderful day', 3, 7));

//  Escribe una función llamada toCase que reciba como parámetro de entrada una cadena de texto y devuelva esa misma cadena de texto en minúsculas, un guión medio y de nuevo esa misma cadena de texto en mayúsculas.

// Por ejemplo, la siguiente llamada a la función:

// toCase("Pablo");

// Debería devolver: «pablo-PABLO»

// const minMay = strings => strings.toLowerCase() + '-' + strings.toUpperCase();

// console.log(minMay('Felix'));

// Escribe una función llamada shortcut que tome dos cadenas de texto y devuelva la inicial de cada una de las dos cadenas.

// Por ejemplo, la llamada a la función:

// shortcut('Amnesty', 'International');
// Copy
// Debería devolver «AI».

// const shortcut = (str1, str2) => str1[0] +str2[0];
// console.log(shortcut('hola', 'adios'));

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


// console.log(devuelveMasLarga('prisssssssmerTexto', 'segundoTexto'));

 
// Hacer una función devuelveMasLarga2 que reciba como parámetro de entrada tres cadenas de texto y devuelva la más larga. Si no hay una única cadena más larga, devolveremos el texto No hay una única cadena más larga.
//  const devuelveMasLarga2 = (str1, str2, str3) => {
    
//     if(str1.length === str2.length && str2.length === str3.length) return 'No hay una única cadena más larga';
//     const provisional = str1;
//     if(str2.length > str1.length) provisional = str2;
//     if(str3.length > provisional.length) provisional = str3;
//     return provisional;
//  }

//  console.log(devuelveMasLarga2('pla1','la2', 'las'));

// Hacer una función generarNombre que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres primeras letras de cada palabra

// const generarNombre = (str1, str2, str3) => {
//     if (str1.length < 5 || str2.length < 5 || str3.length < 5) return 'error';
//     return str1[0] + str2[0] + str3[0];
// }
// console.log(generarNombre('paffco', 'felix', 'franco'));

// Hacer una función generarNombre2 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando la última letra de cada palabra.

// const generarNombre = (str1, str2, str3) => {
//     if (str1.length < 5 || str2.length < 5 || str3.length < 5) return 'error';
//     return str1.slice(-1) + str2.slice(-1) + str3.slice(-1);
// }
// console.log(generarNombre('paffco', 'felix', 'franco'));

// Hacer una función generarNombre3 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres últimas letras de cada palabra.


// const generarNombre3 = (str1, str2, str3) => {
//     if (str1.length < 5 || str2.length < 5 || str3.length < 5) return 'error';
//     return str1.slice(-3) + str2.slice(-3) + str3.slice(-3);
// }
// console.log(generarNombre3('paffco', 'felix', 'franco'));

// Hacer una función tieneLetra que reciba como parámetro de entrada una cadena de texto y una letra y devuelva true si la letra esta presente en la palabra y false si no lo esta.


// const tieneLetra = (string1, letra) => {
//   string1 = string1.toLowerCase();
//   letra = letra.toLowerCase();
//   if(string1.includes(letra)) return true; return false;
  
// }
// console.log(tieneLetra('felix', 'f'));

// Realizar la evaluación del ejercicio anterior sin tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas

// Hacer una función crearPalabra que reciba como parámetro de entrada una letra y un número y genere una nueva palabra que tenga la letra introducida repetida tantas veces como indique el número. Para ello podrías usar un bucle for, pero existe en Javascript una función más apropiada para este objetivo. La función repeat(). Si no la conocías, investiga su uso y trata de implementarla para resolver el ejercicio.


// const crearPalabra = (letra, num) => letra.repeat(num);
// console.log(crearPalabra('f', 3));

// const crearPalabra = (letra, num) => letra.repeat(num).toUpperCase();
// console.log(crearPalabra('f', 3));

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
// console.log(contadorDeLetras('holaMon', 'o'));

// const contadorDeLetras = (str1, letra) =>{ 
//   let numeroVeces = 0;
//     str1 = str1.toLowerCase();
//     letra = letra.toLowerCase();
//     for(let i = 0; i<str1.length; i++){
//       if( str1[i] === letra) numeroVeces ++;
//   }
//   return numeroVeces;
//   }
// console.log(contadorDeLetras('holaMon', 'O'));

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
// }
// console.log(contadorDeLetras2('holaMon', 'adeoooouMon', 'o'));
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

// console.log(indexOfIgnoreCase('holaMon', 'pp'));

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