//Metodo 1

document.querySelector('#btncalcular').addEventListener('click', calculateCost);

function calculateCost() {
  const num1 = parseInt(document.querySelector('#num1').value);
  const num2 = parseInt(document.querySelector('#num2').value);
  const operacion = document.getElementById("calculo").value;
  let resultado = 0;
  if(operacion === '+') resultado = num1 + num2;
  else if(operacion === '-') resultado = num1 - num2;
  else if(operacion === '*') resultado = num1 * num2;
  else if(operacion === '/') resultado = num1 / num2;
  document.querySelector('#resultado').textContent = resultado;
}

//Método 2

let operacion = "";
document.querySelector(".suma").addEventListener("click", () => {
  operacion = "+";
});

document.querySelector(".resta").addEventListener("click", () => {
  operacion = "-";
});

document.querySelector(".multiplicar").addEventListener("click", () => {
  operacion = "*";
});

document.querySelector(".dividir").addEventListener("click", () => { operacion = "/";
 });

document.querySelector("#btn_calcular_2").addEventListener("click", () => {
  const num1 = parseInt(document.querySelector("#num_1").value);
  const num2 = parseInt(document.querySelector("#num_2").value);
  let resultado = 0;
  if (operacion === "+") resultado = num1 + num2;
  else if (operacion === "-") resultado = num1 - num2;
  else if (operacion === "*") resultado = num1 * num2;
  else if (operacion === "/") resultado = num1 / num2;
  document.querySelector("#resultado2").textContent = resultado;
});
