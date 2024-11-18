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
//   } else{
//     return 'true';
//   }
// }

// console.log(nor(true, true));
// console.log(nor(true, false));
// console.log(nor(false, true));
// console.log(nor(false, false));






