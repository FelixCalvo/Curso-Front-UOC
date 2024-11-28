// Crear una función que reciba un parámetro, un dni, y devuelva la letra del mismo. Si el DNI pasado tiene algún error devolverá “”.
// El algoritmo para calcular la letra del dni es el siguiente :
// • El texto introducido debe tener 8 dígitos y debe ser un número.
// • Debemos calcular el resto de la división entera entre el número y el número 23.
// • Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)

document.querySelector("#btn_calcular_dni").addEventListener("click", () => {
  const dni = document.querySelector("#dni").value;
  const calcularLetraDNI = dni => {
    const arrayLetras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    if (dni.length !== 8) return "Números erroneos";
    if (isNaN(dni)) return "Pon un dni";
    const letra = arrayLetras[dni % 23];
    return letra;
  }; 
  let letra = calcularLetraDNI(dni);
  document.querySelector("#salidaletradni").value = letra;
});
 