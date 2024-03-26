function generarMensajePersonalizado(nombre, hora) {
    // Determinar si es mañana o tarde
    var esManana = hora < 12;

    // Saludo según el momento del día
    var saludo = esManana ? "¡Buenos días" : "¡Buenas tardes";

    // Construir el mensaje personalizado
    var mensaje = `${saludo}, ${nombre}!`;

    // Devolver el mensaje
    return mensaje;
}

// Ejemplos de uso de la función
console.log(generarMensajePersonalizado("Juan", 10)); // Debería imprimir: ¡Buenos días, Juan!
console.log(generarMensajePersonalizado("María", 15)); // Debería imprimir: ¡Buenas tardes, María!
