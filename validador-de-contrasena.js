// Variable que contiene la contraseña específica
var contraseña = "miContraseña123";

// Función para validar la contraseña
function validarContraseña(contraseñaIngresada) {
    // Verificar si la contraseña ingresada coincide con la contraseña guardada
    if (contraseñaIngresada === contraseña) {
        console.log("¡La contraseña es válida!");
    } else {
        console.log("La contraseña no es válida.");
    }
}

// Ejemplo de uso de la función con una contraseña ingresada como parámetro
validarContraseña("miContraseña123"); // Debería imprimir: ¡La contraseña es válida!
validarContraseña("contraseñaIncorrecta"); // Debería imprimir: La contraseña no es válida.
