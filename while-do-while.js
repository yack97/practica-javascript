// while do while

let control = "SI";
while (control == "SI") {
  console.log("Estoy dentro del bucle");
  control = prompt("¿Quieres continuar? (SI/NO)");
}
console.log("He salido del bucle");

// do while

// Generar un número aleatorio entre 1 y 100
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Definir una variable para almacenar el número ingresado por el usuario
var numeroIngresado;

// Ejecutar al menos una vez y continuar mientras el número ingresado no sea igual al número aleatorio
do {
    // Pedir al usuario que ingrese un número
    numeroIngresado = parseInt(prompt("Adivina el número (entre 1 y 100):"));

    // Verificar si el número ingresado es válido
    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
        alert("Por favor, ingresa un número válido (entre 1 y 100).");
    } else {
        // Comparar el número ingresado con el número aleatorio y proporcionar pistas al usuario
        if (numeroIngresado < numeroAleatorio) {
            alert("El número ingresado es demasiado bajo. Intenta nuevamente.");
        } else if (numeroIngresado > numeroAleatorio) {
            alert("El número ingresado es demasiado alto. Intenta nuevamente.");
        }
    }
} while (numeroIngresado !== numeroAleatorio);

// Cuando el número ingresado sea igual al número aleatorio, significa que el usuario ha adivinado correctamente
alert("¡Felicidades! Has adivinado el número " + numeroAleatorio + ".");


// for loop
const prompt = require('prompt-sync')(asignt = true );

for (let i = 0; i < 10; i++) {
  const name = prompt('What is your name? ');
  console.log(`Hello, ${name}!`);
}
