const a = 3;
const b = 4;
let solucion = 0;
const operacion = '9'; // +  -  *  /

if(operacion === '+'){
  solucion = a + b;
}else if(operacion === '-'){
  solucion = a - b;
}else if(operacion === '*'){
  solucion = a * b;
}else if(operacion === '/'){
  solucion = a / b;
}else{
  solucion = "error";
}

console.log(solucion);
  