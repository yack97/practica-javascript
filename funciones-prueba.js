// definicion o declaracion

function saludar (){
    console.log("Hola mundo");
}

// invocacion o llamada
saludar();  

//funcion suma
function suma(){
    let a = 10;
    let b = 20;
    let c = a + b;
    console.log(c);
}

suma();

// funcion resta
function resta(){
    let a = 10;
    let b = 20;
    let c = a - b;
    console.log(c);

resta();

// funcion multiplicacion
function multiplicacion(){
    let a = 10;
    let b = 20;
    let c = a * b;
    console.log(c);
}

multiplicacion();
}

// funcion division
function division(){
    let a = 10;
    let b = 20;
    let c = a / b;
    console.log(c);
}

division();

// funcion llamado

function suma1 (numero1, numero2){
    let c = numero1 + numero2;
    console.log(c);
}

suma1(10, 20);

// funcion llamado

function resta1 (numero1, numero2){
    let c = numero1 - numero2;
    console.log(c);
}

resta1(10, 20);

// funcion llamado  
function multiplicacion1 (numero1, numero2){
    let c = numero1 * numero2;
    console.log(c);
}

multiplicacion1(10, 20);

//retornos
function promedio () {
    let promedioSuma = suma1(10, 20);
    let promedioResta = resta1(10, 20);
    let promedioMultiplicacion = multiplicacion1(10, 20);
    let promedio = (promedioSuma + promedioResta + promedioMultiplicacion) / 3;
    console.log(promedio);
}

promedio();
