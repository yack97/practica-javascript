// array para almacenar tareas

let tareas = [];    

// función para añadir tareas

function añadirTarea(nombreTarea, fehaLimieteTarea = null) {
  tareas.push({ nombre : nombreTarea, completada : false,fechaLimite : fechaLimiteTarea });
}

// función para eliminar tareas

function eliminarTarea(indice) {
    if (indice >= 0 && indice < tareas.length) {
        tareas.splice(indice, 1);
    }else {
        console.log("Indice no válido");
    }
}

// función para marcar tareas como completadas

function completarTarea(indice) {
    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].completada = true;
        console.log("Tarea completada");
    }else {
        console.log("Indice no válido");
    }
}

// funcion modificar tare
function modificarTarea (indice, nuevoNombre){
    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].nombre = nuevoNombre;
        console.log("Tarea modificada");
    }else {
        console.log("Indice no válido");
    }
}

// funcion para mostrar opciones

function mostrarOpciones(){
    console.log("Opciones:");
    console.log("1. Añadir tarea");
    console.log("2. Eliminar tarea");
    console.log("3. Marcar tarea como completada");
    console.log("4. Modificar tarea");
    console.log("5. Salir");
}

// funcion para mostrar tareas

function mostrarTareas(){
    console.log("Tareas:"); 
    for (let i = 0; i < tareas.length; i++) {
        console.log(`${i}. ${tareas[i].nombre} - ${tareas[i].completada ? "Completada" : "Pendiente"}`);
    }
}

// function interactuar usuario

function interactuarUsuario(){
    let opcion = -1;
    do {
        mostrarOpciones();
        opcion = parseInt(prompt("Introduzca una opción: "));
        switch (opcion != 0) {
            case 1:
                let nombreTarea = prompt("Introduzca el nombre de la tarea:");
                let fechaLimiteTarea = prompt("Introduzca la fecha límite de la tarea (opcional):");
                añadirTarea(nombreTarea, fechaLimiteTarea);
                break;
            case 2:
                let indiceAcompeltar = parseInt(prompt("Introduzca el índice de la tarea a eliminar:"));
                eliminarTarea(indice);
                break;
            case 3:
                let marcarCompletada = parseInt(prompt("Introduzca el índice de la tarea a marcar como completada:"));
                completarTarea(marcarCompletada);
                break;
            case 4:
                let indice = parseInt(prompt("Introduzca el índice de la tarea a modificar:"));
                let nuevoNombre = prompt("Introduzca el nuevo nombre de la tarea:");
                modificarTarea(indice, nuevoNombre);
                break;
            case 5:
                console.log("Saliendo...");
                break;
            default:
                console.log("Opción no válida");
                break;
        }
    } while (opcion != 5);
}

// funcion principal

function main(){
    interactuarUsuario();
    
}
