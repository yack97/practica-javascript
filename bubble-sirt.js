// basico

function bubbleSort(array) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          // Intercambiar elementos
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  }
  
  // Ejemplo de uso:
  const numeros = [5, 3, 8, 1, 2];
  console.log("Array antes de ordenar:", numeros);
  console.log("Array después de ordenar:", bubbleSort(numeros));

  
// medio

function bubbleSortObjetos(array, propiedad) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j][propiedad] > array[j + 1][propiedad]) {
          // Intercambiar elementos
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  }
  
  // Ejemplo de uso:
  const personas = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 25 },
    { nombre: 'Pedro', edad: 40 }
  ];
  console.log("Array de objetos antes de ordenar:", personas);
  console.log("Array de objetos después de ordenar por edad:", bubbleSortObjetos(personas, 'edad'));

// avanzado

const bubbleSortArrow = (array, propiedad) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j][propiedad] > array[j + 1][propiedad]) {
          // Intercambiar elementos
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    return array;
  };
  
  // Ejemplo de uso:
  const objetos = [
    { nombre: 'Manzana', cantidad: 20 },
    { nombre: 'Plátano', cantidad: 10 },
    { nombre: 'Naranja', cantidad: 15 }
  ];
  console.log("Array de objetos antes de ordenar:", objetos);
  console.log("Array de objetos después de ordenar por cantidad:", bubbleSortArrow(objetos, 'cantidad'));
  