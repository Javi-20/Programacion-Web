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
});*/



/*ACTIVIDAD 6 Semana 6*/

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
let arreglo = ["Hola!!! ¿como estas?", 20, 22, [true, false]];
const [bienvenida, dia, año] = arreglo;
console.log(bienvenida);
console.log("Mi cumpleaños es el día " + dia + " de mayo");
console.log("Y cumpliré " + año + " años ");