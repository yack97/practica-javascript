//Unir dos arrays: Crea una función llamada ‘unirArrays’ que tome dos arrays como parámetros y los una en uno solo. La función debe devolver el nuevo array.Para esto, averiguar qué hace el método .concat()
function unirArrays(array1, array2) {
    // Utilizamos el método concat() para unir los dos arrays
    return array1.concat(array2);
  }
  
  // Ejemplo de uso:
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const arrayUnido = unirArrays(array1, array2);
  console.log("Array unido:", arrayUnido); // Output: Array unido: [1, 2, 3, 4, 5, 6]

  //Eliminar primer elemento: Crea una función llamada ‘eliminarPrimerElemento’ que tome un array como parámetro y elimine el primer elemento. La función debe devolver el elemento eliminado.
  function eliminarPrimerElemento(array) {
    // Verificamos si el array tiene al menos un elemento
    if (array.length > 0) {
      // Utilizamos el método shift() para eliminar el primer elemento y devolverlo
      return array.shift();
    } else {
      // Si el array está vacío, devolvemos undefined
      return undefined;
    }
  }
  
  // Ejemplo de uso:
  const miArray = [1, 2, 3, 4, 5];
  const elementoEliminado = eliminarPrimerElemento(miArray);
  console.log("Elemento eliminado:", elementoEliminado); // Output: Elemento eliminado: 1
  console.log("Array después de eliminar el primer elemento:", miArray); // Output: Array después de eliminar el primer elemento: [2, 3, 4, 5]

  //Convertir texto: Crea una función que reciba un string por parámetro y lo convierta a mayúsculas y minúsculas respectivamente. La función deberá mostrar los resultados por consola. Para esto, averiguar qué hacen los métodos de Strings: toUpperCase() y toLowerCase()
  function convertirTexto(texto) {
    // Convertir a mayúsculas utilizando toUpperCase()
    const mayusculas = texto.toUpperCase();
  
    // Convertir a minúsculas utilizando toLowerCase()
    const minusculas = texto.toLowerCase();
  
    // Mostrar los resultados por consola
    console.log("Texto en mayúsculas:", mayusculas);
    console.log("Texto en minúsculas:", minusculas);
  }
  
  // Ejemplo de uso:
  const textoEjemplo = "Hola Mundo";
  convertirTexto(textoEjemplo);

  // Manipulación de objetos: Crea un objeto llamado ‘persona’ que contenga como propiedades: nombre, edad y ocupación. Crea una función que muestre cada propiedad de dicho objeto por consola, e invocala para ver sus valores. Luego, modifica el valor de ‘ocupación’ y agrega la propiedad ‘habilidad’. Llama nuevamente a la función creada para visualizar el cambio efectuado.
  // Crear el objeto 'persona' con propiedades nombre, edad y ocupación
let persona = {
    nombre: "Juan",
    edad: 30,
    ocupacion: "Ingeniero"
  };
  
  // Función para mostrar las propiedades del objeto por consola
  function mostrarPropiedades(objeto) {
    console.log("Nombre:", objeto.nombre);
    console.log("Edad:", objeto.edad);
    console.log("Ocupación:", objeto.ocupacion);
  }
  
  // Mostrar las propiedades del objeto 'persona' antes de modificarlo
  console.log("Propiedades de la persona antes de la modificación:");
  mostrarPropiedades(persona);
  
  // Modificar el valor de la propiedad 'ocupación'
  persona.ocupacion = "Desarrollador";
  
  // Agregar la propiedad 'habilidad'
  persona.habilidad = "Programación";
  
  // Mostrar las propiedades del objeto 'persona' después de la modificación
  console.log("\nPropiedades de la persona después de la modificación:");
  mostrarPropiedades(persona);
  