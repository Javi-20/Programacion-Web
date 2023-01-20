/*ACTIVIDAD 5 Semana 5*/
/*
$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.product-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.product-item[category="'+catProduct+'"]').show();
			$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});


/*ACTIVIDAD 6 Semana 6

//1. Una función que ejecute una suma de 3 números, imprimir su resultado en la terminal con console.log(). 
console.log("\t----- Función SUMA ----- ");
function suma(a, b, c) {
    let resulado = a + b + c;
    console.log(`El resultado de ${a} + ${b} + ${c} es igual a ${resulado}`);
}
suma(30, 60, 90);

//2. Una función que ejecute una comparación de 2 números (mayor, menor, igual o diferentes), imprimir su resultado en la terminal con console.log().
console.log("\t----- Función COMPARACIÓN ----- ");
function comparacion(nume1, nume2) {
    if(nume1 > nume2) {
        console.log(`${nume1} es mayor que ${nume2}`);
    } else if (nume2 > nume1) {
        console.log(`${nume2} es mayor que ${nume1}`);
    } else {
        console.log("Los números son iguales");
    }
}
comparacion(289, 289);

//3. Realizar las 2 funciones anteriores, pero como función flecha, imprimir su resultado en la terminal con console.log().
console.log("\t----- Función FLECHA SUMA ----- ");
let sumFlech = (a, b, c) => console.log(`El resultado de ${a} + ${b} + ${c} es igual a ${a + b +c}`);
sumFlech(56, 36, 1000);

console.log("\t----- Función COMPARACIÓN ----- ");
let comparacionFlech=(nume1, nume2)=>{
    if(nume1 > nume2) {
        console.log(`${nume1} es mayor que ${nume2}`);
    } else if (nume2 > nume1) {
        console.log(`${nume2} es mayor que ${nume1}`);
    } else {
        console.log("Los números son iguales");
    }
}
comparacionFlech(888, 289);

//4.Crear un objeto con mínimo 5 key(clave) y realizar la desestructuración de 3 de ellas. Imprimir su resultado en la terminal con console.log().
console.log("\t----- Comprar un celular ----- ");
comprarCelular ={
    id:"Tel200501",
    cliente: "Javi",
    edad:22,
    estado: "Puebla",
    producto:["Samsung J6","Samsung A52","Motorola G3"]
};
let {id,cliente,edad,estado,producto} = comprarCelular;
console.log(" El cliente " + cliente + " con id de la tienda " + id + " tiene " + edad + " años del estado de " + estado + 
" hizo la compra de 3 celulares, "  + producto)

//5. Crear un arreglo que contenga: 1-string, 2-números, 1-array con 2 valores y realizar la desestructuración de 3 de ellas. Imprimir su resultado en la terminal con console.log().
console.log("\t----- ARREGLO ----- ");
let arreglo = ["Hola!!! Soy Javi ¿como estas?", 20, 22, [true, false]];
const [bienvenida, dia, año] = arreglo;
console.log(bienvenida);
console.log("Mi cumpleaños es el día " + dia + " de mayo");
console.log("Y cumpliré " + año + " años ");*/


//ACTIVIDAD 7 Semana 7

//1. Declara una variable “let edad = Number”, luego crea un condicional “if” donde hagas una comparación, si la edad es mayor o igual a 18, imprime en consola “VÁLIDO”. De lo contrario “NO VÁLIDO”.
console.log("\t-----  Ejercicio 1  ----- ");
let edad = 21;
if(edad >=18){
    console.log('VÁLIDO');
}else{
	console.log('NO VÁLIDO');
}

//2. Crea un array que contenga mínimo 4 objetos, que a su vez contengan como mínimo 3 claves e imprime todo el array en consola con un bucle “for”.
console.log("\t-----  Ejercicio 2  ----- ");

let productos = [
	{producto: 'Galletas', codigo: '256', precio:'$17',cantidad:'4'},
	{producto: 'Jugo', codigo: '145', precio:'$20',cantidad:'2'},
	{producto: 'Papas', codigo: '014', precio:'$15',cantidad:'1'}
];

for(i=0; i<productos.length; i++){
    console.log('El producto comprado es: ' + productos[i].producto);
}

//3. Crear un bucle switch donde simula la venta de entradas al cine. Donde dependiendo de la edad el cliente recibe alguna promoción.
console.log("\t-----  Ejercicio 3  ----- ");
let edad2 = parseInt(prompt('Ingrese su edad'));

switch(edad2){
	  case 15:
	  case 16:
	  case 17:
      case 18:
		console.log('Tu promocion es: FANTA gratis en la compra de cualquier combo');
	  break;
	  case 19:
	  case 20:
	  case 21:
	  case 22:
	  case 23:
	  case 24:
	  case 25:
	  case 26:
	  case 27:
	  case 28:
	  case 29:
	  case 30:
	  case 31:
	  case 32:
	  case 33:
	  case 34:
	  case 35:
	  case 36:
	  case 37:
	  case 38:
	  case 39:
	  case 40:
	  case 41:
	  case 42:
	  case 43:
	  case 44:
	  case 45:
	  case 46:
	  case 47:
	  case 48:
	  case 49:
	  case 50:
	  case 51:
	  case 52:
	  case 53:
	  case 54:
	  case 55:
	  case 56:
	  case 57:
	  case 58:
	  case 59:
	  case 60:
	   console.log('Viernes entradas a $35 o $25 para socios Club Cinépolis');
	  break;
	  default:
		console.log('Podeís esperar tu promoción, pronto te llegará');
      break;
}

