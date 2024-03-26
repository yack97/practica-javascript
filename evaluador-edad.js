function evaluarRangoEdad(edad) {
    if (edad < 0) {
        return "Edad no válida"; // Edad negativa no válida
    } else if (edad < 13) {
        return "Niño";
    } else if (edad < 20) {
        return "Adolescente";
    } else if (edad < 30) {
        return "Adulto Joven";
    } else if (edad < 60) {
        return "Adulto";
    } else if (edad >= 60) {
        return "Adulto Mayor";
    } else {
        return "Edad no válida"; // Manejo de otros casos no contemplados
    }
}

// Ejemplos de uso de la función
console.log(evaluarRangoEdad(5)); // Debería imprimir: Niño
console.log(evaluarRangoEdad(15)); // Debería imprimir: Adolescente
console.log(evaluarRangoEdad(25)); // Debería imprimir: Adulto Joven
console.log(evaluarRangoEdad(45)); // Debería imprimir: Adulto
console.log(evaluarRangoEdad(70)); // Debería imprimir: Adulto Mayor
console.log(evaluarRangoEdad(-5)); // Debería imprimir: Edad no válida
