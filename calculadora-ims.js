function calcularIMC(peso, altura) {
    // Calcula el IMC dividiendo el peso (en kg) por la altura al cuadrado (en metros)
    var imc = peso / (altura * altura);

    // Evalúa diferentes rangos de IMC y muestra el resultado correspondiente
    if (imc < 18.5) {
        console.log("Bajo peso");
    } else if (imc >= 18.5 && imc < 25) {
        console.log("Peso normal");
    } else if (imc >= 25 && imc < 30) {
        console.log("Sobrepeso");
    } else {
        console.log("Obesidad");
    }
}

// Ejemplo de uso de la función con un peso de 70 kg y una altura de 1.75 metros
calcularIMC(70, 1.75); // Debería imprimir: Peso normal
