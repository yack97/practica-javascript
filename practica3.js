//BubbleSort: Crea una función que reciba por parámetro un array de números y los ordene de menor a mayor mediante el ordenamiento burbuja.
function bubbleSort(array) {
    const n = array.length;
    // Iterar sobre todo el array
    for (let i = 0; i < n - 1; i++) {
      // Últimos i elementos ya están en su lugar, no es necesario volver a verificarlos
      for (let j = 0; j < n - i - 1; j++) {
        // Intercambiar si el elemento actual es mayor que el siguiente
        if (array[j] > array[j + 1]) {
          // Intercambiar elementos
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    // Devolver el array ordenado
    return array;
  }
  
  // Ejemplo de uso:
  const numeros = [64, 34, 25, 12, 22, 11, 90];
  console.log("Array antes de ordenar:", numeros);
  bubbleSort(numeros);
  console.log("Array después de ordenar:", numeros);

//Indicar ordenamiento: Crea una función que reciba por parámetro un array de números e indique si el array se encuentra ordenado de forma ascendente o no.
function verificarOrden(array) {
    const n = array.length;
    // Iterar sobre todo el array
    for (let i = 0; i < n - 1; i++) {
      // Verificar si el elemento actual es mayor que el siguiente
      if (array[i] > array[i + 1]) {
        return "El array no está ordenado de forma ascendente";
      }
    }
    // Si no se encontraron elementos desordenados, el array está ordenado
    return "El array está ordenado de forma ascendente";
  }
  
  // Ejemplo de uso:
  const numerosAscendentes = [1, 2, 3, 4, 5];
  const numerosDesordenados = [5, 3, 8, 1, 2];
  
  console.log(verificarOrden(numerosAscendentes)); // Output: El array está ordenado de forma ascendente
  console.log(verificarOrden(numerosDesordenados)); // Output: El array no está ordenado de forma ascendente

//Contar la cantidad de veces que aparece un número en un array: Crea una función que reciba por parámetro un número y un array de números, y devuelva la cantidad de veces que aparece ese número en el array utilizando búsqueda lineal.

function contarApariciones(numero, array) {
    let contador = 0;
    // Iterar sobre todo el array
    for (let i = 0; i < array.length; i++) {
      // Incrementar el contador si el elemento actual es igual al número dado
      if (array[i] === numero) {
        contador++;
      }
    }
    // Devolver la cantidad de apariciones del número en el array
    return contador;
  }
  
  // Ejemplo de uso:
  const numeros2 = [2, 3, 4, 2, 5, 2, 6, 2];
  const numeroBuscado = 2;
  
  console.log(`El número ${numeroBuscado} aparece ${contarApariciones(numeroBuscado, numeros)} veces en el array.`);
  // Output: El número 2 aparece 4 veces en el array.
  



//Obtener votos: Dado un array con los datos de una encuesta realizada sobre los temas musicales más populares —lo que se tiene en el array son objetos definidos con el nombre de un tema musical y cantidad de votos que obtuvo— crear el array con los datos de 5 temas y una cantidad de votos para cada uno. Los votos obtenidos deben estar desordenados. Una vez creado el array, se deberá escribir un algoritmo que, dado un tema, me informe cuántos votos obtuvo, considerando:

// Datos de la encuesta sobre temas musicales
const encuestaMusical = [
    { tema: 'Rock', votos: 120 },
    { tema: 'Pop', votos: 90 },
    { tema: 'Electrónica', votos: 80 },
    { tema: 'Hip Hop', votos: 110 },
    { tema: 'Reggaeton', votos: 70 },
    // Aquí se pueden añadir más temas y sus votos
  ];
  
  // Función para obtener la cantidad de votos de un tema dado
  function obtenerVotos(temaBuscado, encuesta) {
    // Iterar sobre la encuesta
    for (let i = 0; i < encuesta.length; i++) {
      // Si el tema actual coincide con el tema buscado, retornar la cantidad de votos
      if (encuesta[i].tema === temaBuscado) {
        return encuesta[i].votos;
      }
    }
    // Si no se encuentra el tema, retornar un mensaje indicando que no se encontraron votos para ese tema
    return `No se encontraron votos para el tema "${temaBuscado}"`;
  }
  
  // Ejemplo de uso:
  const temaBuscado = 'Rock';
  console.log(`El tema "${temaBuscado}" obtuvo ${obtenerVotos(temaBuscado, encuestaMusical)} votos.`);
  