//Búsqueda Binaria en un Array Ordenado de Números:
function busquedaBinaria(array, elemento) {
    let izquierda = 0;
    let derecha = array.length - 1;
    
    while (izquierda <= derecha) {
      let mitad = Math.floor((izquierda + derecha) / 2);
      
      if (array[mitad] === elemento) {
        return mitad; // Elemento encontrado, retorna su índice
      } else if (array[mitad] < elemento) {
        izquierda = mitad + 1; // Buscar en la mitad derecha
      } else {
        derecha = mitad - 1; // Buscar en la mitad izquierda
      }
    }
    
    return -1; // Elemento no encontrado
  }
  
  // Ejemplo de uso:
  const numerosOrdenados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const elementoBuscado = 6;
  const indice = busquedaBinaria(numerosOrdenados, elementoBuscado);
  console.log(`El elemento ${elementoBuscado} se encuentra en el índice ${indice}`);

  
//Búsqueda Binaria en un Array Ordenado de Objetos:

function busquedaBinariaObjetos(array, propiedad, valor) {
    let izquierda = 0;
    let derecha = array.length - 1;
    
    while (izquierda <= derecha) {
      let mitad = Math.floor((izquierda + derecha) / 2);
      
      if (array[mitad][propiedad] === valor) {
        return mitad; // Objeto encontrado, retorna su índice
      } else if (array[mitad][propiedad] < valor) {
        izquierda = mitad + 1; // Buscar en la mitad derecha
      } else {
        derecha = mitad - 1; // Buscar en la mitad izquierda
      }
    }
    
    return -1; // Objeto no encontrado
  }
  
  // Ejemplo de uso:
  const personasOrdenadas = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 35 },
    { nombre: 'Pedro', edad: 40 }
  ];
  const indicePersona = busquedaBinariaObjetos(personasOrdenadas, 'nombre', 'María');
  console.log(`La persona se encuentra en el índice ${indicePersona}`);
  