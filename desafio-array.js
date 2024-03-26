// gastos semana

function obtenerGastosSemana(matriz, numeroSemana) {
    // Validar que el número de semana esté dentro del rango de la matriz
    if (numeroSemana < 0 || numeroSemana >= matriz.length) {
      return "Número de semana inválido";
    }
  
    let totalSemana = 0;
    for (let dia = 0; dia < matriz[numeroSemana].length; dia++) {
      totalSemana += matriz[numeroSemana][dia];
    }
    return totalSemana;
  }
  
// gastos un dia de la semana

function obtenerGastosDia(matriz, numeroDia) {
    // Validar que el número de día esté dentro del rango de la matriz
    if (numeroDia < 0 || numeroDia >= matriz[0].length) {
      return "Número de día inválido";
    }
  
    let totalDia = 0;
    for (let semana = 0; semana < matriz.length; semana++) {
      totalDia += matriz[semana][numeroDia];
    }
    return totalDia;
  }

  
// gastos total

function obtenerGastoTotal(matriz) {
    let total = 0;
    for (let semana = 0; semana < matriz.length; semana++) {
      for (let dia = 0; dia < matriz[semana].length; dia++) {
        total += matriz[semana][dia];
      }
    }
    return total;
  }

//callback gastos pro seman

function calcularGastosPorSemana(matriz, callback) {
    const gastosPorSemana = [];
    for (let semana = 0; semana < matriz.length; semana++) {
      let totalSemana = 0;
      for (let dia = 0; dia < matriz[semana].length; dia++) {
        totalSemana += matriz[semana][dia];
      }
      gastosPorSemana.push(totalSemana);
    }
    return callback(gastosPorSemana);
  }
  
  // Ejemplo de uso:
  const matrizGastos = [
    [10, 20, 30, 40, 50, 60, 70],
    [15, 25, 35, 45, 55, 65, 75],
    [20, 30, 40, 50, 60, 70, 80],
    [25, 35, 45, 55, 65, 75, 85]
  ];
  
  const mostrarGastosPorSemana = (gastos) => {
    gastos.forEach((total, semana) => {
      console.log(`Total de gastos de la semana ${semana + 1}: ${total}`);
    });
  };
  
  calcularGastosPorSemana(matrizGastos, mostrarGastosPorSemana);
  