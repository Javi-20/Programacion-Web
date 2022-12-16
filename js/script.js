let verdaBool = true;
let indefinido = undefined;
let num = 31;
let cadenaDeTexto = "¡¡Feliz Navidad y Prospero Año nuevo!!"
let cero = null;

const rfc = "RASM0923NLP05";

//VARIABLES
console.warn("VARIABLES");
console.log("number: " + num);
console.log("String: " + cadenaDeTexto);
console.log("boolean: " + verdaBool);
console.log("undefined: " + indefinido);
console.log("null: " + cero);


//CONSTANTE
console.warn("CONSTANTE");
console.log("Su RFC: " + rfc)

//UN SALUDITO
var saludo = "Hola, como estas";
var nombre = "Javi :)";

//CONCATENAMOS EL SALUDO
console.warn("CONCATENACION");
console.log(saludo + " " + nombre)

console.warn("INTERPOLACION");
console.log(`${saludo} ${nombre}`);

//VARIABLES PARA HACER UNA SUMA
var num1 = 52;
var num2 = 120;

console.warn("SUMAR");
var suma = num1 + num2;
console.log(`${num} + ${num} = ${suma}`);

//HACEMOS UNA COMPARACION
console.warn("COMPARACION");
var comparacion = num === num;
console.log(`${num} === ${num} es ${comparacion}`)
