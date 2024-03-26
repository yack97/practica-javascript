function convertirMoneda(cantidad, monedaOrigen, monedaDestino) {
    // Variables para almacenar las tasas de cambio
    var tasaDolarEuro = 0.82;
    var tasaDolarLibra = 0.72;
    var tasaEuroLibra = 0.88;

    // Convertir la cantidad de la moneda de origen a dólares estadounidenses
    var cantidadEnDolares;
    if (monedaOrigen === "USD") {
        cantidadEnDolares = cantidad;
    } else if (monedaOrigen === "EUR") {
        cantidadEnDolares = cantidad / tasaDolarEuro;
    } else if (monedaOrigen === "GBP") {
        cantidadEnDolares = cantidad / tasaDolarLibra;
    }

    // Convertir la cantidad de dólares estadounidenses a la moneda de destino
    var cantidadConvertida;
    if (monedaDestino === "USD") {
        cantidadConvertida = cantidadEnDolares;
    } else if (monedaDestino === "EUR") {
        cantidadConvertida = cantidadEnDolares * tasaDolarEuro;
    } else if (monedaDestino === "GBP") {
        cantidadConvertida = cantidadEnDolares * tasaDolarLibra;
    }

    // Devolver la cantidad convertida
    return cantidadConvertida;
}

// Ejemplo de uso de la función para convertir 100 dólares estadounidenses a euros
var cantidadConvertida = convertirMoneda(100, "USD", "EUR");
console.log("Cantidad convertida:", cantidadConvertida.toFixed(2), "EUR");
