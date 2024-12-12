// 1. (2pt). Define dos constantes, a y b. Asígnales un valor a cada una. Muestra una traza por consola mostrando los valores de a y b.
// Por ejemplo, si a vale 2 y b vale 5, debería mostrarse el texto: El valor de a es 2 y el valor de b es 5.

const a = 3;
const b = 3;

console.log(`El valor de a es ${a} y el valor de b es ${b}`);




// 2. (2pt). Compara sus valores.
//  Si a es mayor que b, muestra por consola el texto: a es mayor que b.
//  Si b es mayor que a, muestra por consola el texto: b es mayor que a.
//  Si son iguales, muestra por consola el texto: son iguales.

if (a > b) {
  console.log('a es mayor que b');
} else if (b > a) {
  console.log('b es mayor que a');
} else {
  console.log('son iguales');
}

// 3. (2pt). En el caso de que a sea mayor que b llama a una función que recibirá como parámetro de entrada ambos números y mostrará una traza que mostrará el producto.

const producto = (a,b) => {
    console.log('Producto: ',a * b);
  }

if(a>b) {
  producto(a,b);
}

// 4. (2pt). En el caso de que b sea mayor que a llama una función que recibirá como parámetro de entrada ambos números y mostrará una traza indicando si b es divisible entre a.

// divisible(a, b);
const divisible = (a, b) => {
  if (b % a === 0) {
    console.log('b es divisible entre a');
  } else {
    console.log('b no es divisible entre a');
  }
};

if (b > a) {
  divisible(a, b);
}

// 5. (2pt). En el caso de que a y b sean iguales llama a una función que utilizando un bucle for mostrará el resultado de elevar a a b.

const elevarData = (a,b) => {
  let c = a;
    for(let i=1; i<b; i++){      
      c = a*c;       
    }
    console.log('El resultado de elevar a a b es: ', c);
}

if(a===b){
  elevarData(a,b);
}