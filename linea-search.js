//Búsqueda Lineal en un Array de Números:
function busquedaLineal(array, elemento) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === elemento) {
        return i; // Retorna el índice del elemento si se encuentra
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en el array
  }
  
  // Ejemplo de uso:
  const numeros = [3, 5, 1, 9, 2, 7];
  const elementoBuscado = 9;
  const indice = busquedaLineal(numeros, elementoBuscado);
  console.log(`El elemento ${elementoBuscado} se encuentra en el índice ${indice}`);

//Búsqueda Lineal en un Array de Objetos:
function busquedaLinealObjetos(array, propiedad, valor) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][propiedad] === valor) {
        return i; // Retorna el índice del objeto si se encuentra
      }
    }
    return -1; // Retorna -1 si el objeto no se encuentra en el array
  }
  
  // Ejemplo de uso:
  const personas = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 25 },
    { nombre: 'Pedro', edad: 40 }
  ];
  const indicePersona = busquedaLinealObjetos(personas, 'nombre', 'María');
  console.log(`La persona se encuentra en el índice ${indicePersona}`);
  