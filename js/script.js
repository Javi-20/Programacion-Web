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
console.log("------------------ACTIVIDAD 8------------------")
//1. Declara una variable “let edad = Number”, luego crea un condicional “if” donde hagas una comparación, si la edad es mayor o igual a 18, imprime en consola “VÁLIDO”. De lo contrario “NO VÁLIDO”.
console.log("\t-----  Ejercicio 1  ----- ");
let edad = 21;
if(edad >=18){
    console.log('VÁLIDO');
}else{
	console.log('NO VÁLIDO');
}
console.log("La edad es: " + edad)

//2. Crea un array que contenga mínimo 4 objetos, que a su vez contengan como mínimo 3 claves e imprime todo el array en consola con un bucle “for”.
console.log("\t-----  Ejercicio 2  ----- ");
const carritoCom = [];

const agregarCarrito = (producto, carritoCom) => {
    carritoCom.push(producto);
    console.log("¡Producto agregado correctamente!")
}

const productos = [
    {
        codigo: "ACE001",
        nombre: "Laptop ACER",
        precio: 12300
    },
    {
        codigo: "ACE002",
        nombre: "Computadora de escritorio LG",
        precio: 17866
    },
    {
        codigo: "ACE003",
        nombre: "Computadora de escritorio HP",
        precio: 16369
    },
    {
        codigo: "ACE004",
        nombre: "Laptopt Gygabyte ",
        precio: 11299
    }
];

console.log("\tProductos")
for (let i = 0; i < productos.length; i++) {
    console.log(productos[i]);
}


//3. Crear un bucle switch donde simula la venta de entradas al cine. Donde dependiendo de la edad el cliente recibe alguna promoción.
console.log("\t-----  Ejercicio 3  ----- ");
console.log("\t-----  Promosiones  ----- ");
alert("Bienvenido al cine de la escuela de EMTECH");
let entradaEd = parseInt(prompt("Ingresa la opción correspondiente a tu edad: \n1. Tengo menos de 18 años \n2. Tengo de 18 años \n3. Soy de la tercera edad"));

switch(entradaEd){
	  case 1:
		console.log('Tu promocion es: FANTA gratis en la compra de cualquier combo');
	  break;
	  
	  case 2:
	   console.log('Viernes entradas a $35 o $25 para socios Club Cinépolis');
	  break;
	  case 2:
	   console.log('Descuento del 25%');
	  break;
}

//ACTIVIDAD 7 Semana 7
console.log("------------------ACTIVIDAD 8------------------")
//1. Imprimir en consola solo las marcas con sus stock.
console.log("**1. Imprimir en consola solo las marcas con sus stock.**");
console.log("Productos:")
productos.forEach((e) => {
    console.log("\t" + e.nombre);
})

//2. Imprimir en consola solo si alguno de los productos cuesta más de 200. 
console.log("***2. Imprimir en consola solo si alguno de los productos cuesta más de 200.***");
let productosCostosos = productos.filter((e) => e.precio > 200);
console.log("Los productos mayores de $200 son: " , productosCostosos);

//3. Imprime en consola el precio promedio de los productos.
console.log("***3.Imprime en consola el precio promedio de los productos. Si no sabes sacar un promedio***");
const productosPrec = productos.map(item => item.precio);
let promedioProductos = productosPrec.reduce((acumulador, item) => acumulador + item)
console.log("El promedio del precio de los productos es: $" + promedioProductos / productosPrec.length);

//4. Imprime en consola alfabéticamente el nombre de los productos.
console.log("***4. Imprime en consola alfabéticamente el nombre de los productos.***")
let nombProductos = productos.map(e => e.nombre);
nombProductos.sort((a, b) => {
    if(a == b) {
        return 0;
    }
    if(a < b) {
        return -1;
    }
    return 1;
});
console.log("Los nombres ordenados son: ", nombProductos)

//5.Imprime en consola el producto más costoso, y redondea en un número entero.
console.log("***5. Imprime en consola el producto más costoso, y redondea en un número entero.***")
let mayor = 0;
productosPrec.forEach(e => {
    if(e > mayor) {
        mayor = e
    } return mayor
});
console.log("El producto más costoso es: " + mayor + "\nRedondeado: " + Math.round(mayor));