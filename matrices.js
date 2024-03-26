// basico

function sumarMatrices(matriz1, matriz2) {
    const resultado = [];
    for (let i = 0; i < matriz1.length; i++) {
      const fila = [];
      for (let j = 0; j < matriz1[i].length; j++) {
        fila.push(matriz1[i][j] + matriz2[i][j]);
      }
      resultado.push(fila);
    }
    return resultado;
  }
  
  // Ejemplo de uso:
  const matrizA = [[1, 2], [3, 4]];
  const matrizB = [[5, 6], [7, 8]];
  const matrizSuma = sumarMatrices(matrizA, matrizB);
  console.log("Matriz suma:", matrizSuma);
  // Output: Matriz suma: [[6, 8], [10, 12]]
  



// medio 
function multiplicarMatrices(matriz1, matriz2) {
    const resultado = [];
    for (let i = 0; i < matriz1.length; i++) {
      const fila = [];
      for (let j = 0; j < matriz2[0].length; j++) {
        let suma = 0;
        for (let k = 0; k < matriz1[i].length; k++) {
          suma += matriz1[i][k] * matriz2[k][j];
        }
        fila.push(suma);
      }
      resultado.push(fila);
    }
    return resultado;
  }
  
  // Ejemplo de uso:
  const matrizX = [[1, 2], [3, 4]];
  const matrizY = [[5, 6], [7, 8]];
  const matrizMultiplicacion = multiplicarMatrices(matrizX, matrizY);
  console.log("Matriz multiplicación:", matrizMultiplicacion);
  // Output: Matriz multiplicación: [[19, 22], [43, 50]]

// avanzado

function transponerMatriz(matriz) {
    const filas = matriz.length;
    const columnas = matriz[0].length;
    const resultado = [];
    for (let j = 0; j < columnas; j++) {
      const fila = [];
      for (let i = 0; i < filas; i++) {
        fila.push(matriz[i][j]);
      }
      resultado.push(fila);
    }
    return resultado;
  }
  
  // Ejemplo de uso:
  const matrizOriginal = [[1, 2, 3], [4, 5, 6]];
  const matrizTranspuesta = transponerMatriz(matrizOriginal);
  console.log("Matriz transpuesta:", matrizTranspuesta);
  // Output: Matriz transpuesta: [[1, 4], [2, 5], [3, 6]]
  

// filtrado y recorrido 
function filtrarNumerosPares(matriz) {
    const matrizFiltrada = [];
    for (let i = 0; i < matriz.length; i++) {
      const filaFiltrada = matriz[i].filter(numero => numero % 2 === 0);
      matrizFiltrada.push(filaFiltrada);
    }
    return matrizFiltrada;
  }
  
  // Ejemplo de uso:
  const matrizNumeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const matrizPares = filtrarNumerosPares(matrizNumeros);
  console.log("Matriz filtrada con números pares:", matrizPares);
  // Output: Matriz filtrada con números pares: [[2], [4, 6], [8]]

  function mostrarMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        console.log("Elemento en posición [" + i + "][" + j + "]:", matriz[i][j]);
      }
    }
  }
  
  // Ejemplo de uso:
  const matrizEjemplo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log("Recorrido de la matriz:");
  mostrarMatriz(matrizEjemplo);
  // Output:
  // Elemento en posición [0][0]: 1
  // Elemento en posición [0][1]: 2
  // Elemento en posición [0][2]: 3
  // Elemento en posición [1][0]: 4
  // Elemento en posición [1][1]: 5
  // Elemento en posición [1][2]: 6
  // Elemento en posición [2][0]: 7
  // Elemento en posición [2][1]: 8
  // Elemento en posición [2][2]: 9
  