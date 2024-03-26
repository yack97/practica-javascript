// array

const numeros = [1, 2, 3, 4, 5];
console.log(numeros); // Output: [1, 2, 3, 4, 5]

const personas = [
  { nombre: "Juan", edad: 30 },
  { nombre: "María", edad: 25 },
  { nombre: "Pedro", edad: 40 },
];
console.log(personas);
/* Output: 
  [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 25 },
    { nombre: 'Pedro', edad: 40 }
  ]
  */

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matriz);
/* Output: 
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  */

function sumaArray(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
}

const numeros1 = [1, 2, 3, 4, 5];
console.log("La suma de los elementos del array es:", sumaArray(numeros)); // Output: La suma de los elementos del array es: 15

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const medio = Math.floor(arr.length / 2);
  const izquierda = mergeSort(arr.slice(0, medio));
  const derecha = mergeSort(arr.slice(medio));

  return merge(izquierda, derecha);
}

function merge(izquierda, derecha) {
  let resultado = [];
  let i = 0;
  let j = 0;

  while (i < izquierda.length && j < derecha.length) {
    if (izquierda[i] < derecha[j]) {
      resultado.push(izquierda[i]);
      i++;
    } else {
      resultado.push(derecha[j]);
      j++;
    }
  }

  return resultado.concat(izquierda.slice(i)).concat(derecha.slice(j));
}

const numeros2 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("Array antes del ordenamiento:", numeros);
console.log("Array después del ordenamiento:", mergeSort(numeros));
// Output:
// Array antes del ordenamiento: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
// Array después del ordenamiento: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

Array.prototype.duplicar = function () {
  const resultado = [];
  for (let i = 0; i < this.length; i++) {
    resultado.push(this[i], this[i]); // Duplica cada elemento
  }
  return resultado;
};

const numeros3 = [1, 2, 3, 4, 5];
const numerosDuplicados = numeros.duplicar();
console.log("Array original:", numeros);
console.log("Array duplicado:", numerosDuplicados);
// Output:
// Array original: [1, 2, 3, 4, 5]
// Array duplicado: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
