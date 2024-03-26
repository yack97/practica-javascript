let nota1 = 7;
let nota2 = 8;
let resultado

if (nota1 >= 7 && nota2 >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

resultado = nota1 >= 7 && nota2 >= 7 ? "Aprovado" : "Reprovado";
console.log(resultado);

resultado = (nota1 >= 7 || nota2 >= 7) ? "Aprovado" : "Reprovado";
console.log(resultado)

resultado = (nota1 >= 7 && nota2 >= 7) ? "Aprovado" : (nota1 >= 7 || nota2 >= 7) ? "Aprovado raspando" : "Reprovado";
console.log(resultado)

// not
resultado = !(nota1 > 7)
console.log(resultado)
