// estrucrura if /else

if (condición) {
  // código a ejecutar si la condición es verdadera
} else {
  // código a ejecutar si la condición es falsa
}

// ejemplo
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}   


//condiciones multiples o anidadas

let clima = "soleado"

if (clima == "soleado") {
  console.log("El clima es soleado");
} else if (clima == "nublado") {
  console.log("El clima es nublado");
} else if (clima == "lluvioso") {
  console.log("El clima es lluvioso");
} else {
  console.log("El clima es desconocido");
}   

//estruc    

let numero = 10

if (numero % 2 == 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}

//if ternadio
let resultado = (numero % 2 == 0) ? "El número es par" : "El número es impar";
console.log(resultado);

//switch
let estacion = "primavera"

switch (estacion) {
  case "primavera":
    console.log("La estación es primavera");
    break;
  case "verano":
    console.log("La estación es verano");
    break;
    case "otoño":
    console.log("La estación es otoño");
    break;
  case "invierno":
    console.log("La estación es invierno");
    break;
  default:
    console.log("La estación es desconocida");
}

// bucles   

// bucle for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// bucle while
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

// bucle do while
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 10);

// bucle break
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}

// bucle continue   
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

// funciones   

// declaración de función
function sumar(a, b) {
  return a + b;
}

// llamada a función
let resultado3 = sumar(10, 20);
console.log(resultado3);

// funciones flecha
const sumar = (a, b) => a + b;

let resultado4 = sumar(10, 20);
console.log(resultado4);

// funciones con parámetros por defecto
const sumar = (a, b = 0) => a + b;

let resultado5 = sumar(10);

console.log(resultado5);

// funciones con retorno implícito
const sumar = (a, b) => a + b;

let resultado6 = sumar(10, 20);

console.log(resultado6);

// funciones con closures
const sumar = (a) => {
  return (b) => a + b;
};

const sumar10 = sumar(10);

let resultado7 = sumar10(20);

console.log(resultado7);

// funciones recursivas

const factorial = (n) => {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

let resultado8 = factorial(5);

console.log(resultado8);

