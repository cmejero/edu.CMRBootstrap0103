


let arrayJuegos = [];
arrayJuegos.push(["Pacific Drive", 0, 17.50]);
arrayJuegos.push(["Horizon", 0, 41.50]);
arrayJuegos.push(["Forspoken", 0, 28.02]);
arrayJuegos.push(["Stellar Blade", 0, 69.99]);
arrayJuegos.push(["F.F. XVI", 0, 29.50]);
arrayJuegos.push(["Switchback", 0, 39.99]);
arrayJuegos.push(["Ark Ascended", 0, 39.49]);
arrayJuegos.push(["Dayz", 0, 27.50]);
arrayJuegos.push(["Rust Console", 0, 39.42]);
arrayJuegos.push(["Conan Exiles", 0, 9.50]);
arrayJuegos.push(["Ark Survival", 0, 12.82]);
arrayJuegos.push(["Battlefield 4", 0, 11.50]);
arrayJuegos.push(["Spider-man 2", 0, 62.89]);
arrayJuegos.push(["cod mw3", 0, 49.99]);
arrayJuegos.push(["Diablo IV", 0, 79.99]);
arrayJuegos.push(["The Division 2", 0, 29.50]);
arrayJuegos.push(["RDD 2", 0, 17.50]);
arrayJuegos.push(["GTA V", 0, 10.49]);
arrayJuegos.push(["PSN - 10€", 0, 8.99]);
arrayJuegos.push(["PSN - 20€", 0, 17.00]);
arrayJuegos.push(["PSN - 25€", 0, 49.50]);
arrayJuegos.push(["PSN - 50€", 0, 45.00]);
arrayJuegos.push(["PSN - 60€", 0, 53.50]);
arrayJuegos.push(["PSN - 100€", 0, 92.50]);
arrayJuegos.push(["Ark 2", 0, 69.50]);
arrayJuegos.push(["Starfield", 0, 59.00]);
arrayJuegos.push(["Avowed", 0, 69.99]);
arrayJuegos.push(["State Of Decay", 0, 3.25]);
arrayJuegos.push(["Everwild", 0, 49.99]);
arrayJuegos.push(["Stalker 2", 0, 69.99]);
arrayJuegos.push(["FC 2024", 0, 47.50]);
arrayJuegos.push(["GP.3 Meses - XBOX", 0, 14.49]);
arrayJuegos.push(["GP.6 Meses - XBOX", 0, 21.49]);
arrayJuegos.push(["GP.12 Meses - XBOX", 0, 42.99]);
arrayJuegos.push(["Elden Ring", 0, 33.33]);
arrayJuegos.push(["Blade", 0, 69.50]);
console.log(arrayJuegos);


console.log("en numero " + Number(arrayJuegos[7][1]))

let veces = 0;

const dataStored2 = localStorage.getItem("array");
if (dataStored2) {
	arrayJuegos = JSON.parse(dataStored2)
	console.log("memoria")
	console.log(arrayJuegos)
}
if (document.getElementById("contador2")) {
	document.getElementById("contador2").innerHTML = typeof (arrayJuegos)
}






// 
let sumar = "";

productosSeleccionados()



let cantidadTo = "";

cantidadTotal()
let sumGeneral
let sumarTotal = "";
precioTotal()

cantidadPorJuego()
//borrarTodo()






//   CARRITO PAGO
// funcion que engloba todas las funciones del carrito de pago
function maestra() {

	if (validarNumTarjeta() && nombTitular() && fechaCaducidad() && codSeguridad()) {
		alert("El pago ha sido realizado correctamente.")
		borrarTodo()
		return true;
	}


	else if (!validarNumTarjeta()) {
		alert("El numero de tarjeta introducido es incorrecto");
		return false;

	}


	else if (!nombTitular()) {
		alert("El nombre introducido es incorrecto, has introducido un numero o simbolo");
		return false;

	}


	else if (!fechaCaducidad()) {
		alert("La fecha introducida ha caducado");
		return false;
	}


	else if (!codSeguridad()) {
		alert("El codigo introducido es incorrecto");
		return false;
	}






}





// funcion que engloba todas las funciones del carrito de datos personales
function maestra2() {

	if (nombTitular() && codigoPostal())
		return true;

	else if (!nombTitular()) {
		alert("Has introducido los datos incorrectamente");
		return false;
	}


	else if (!codigoPostal()) {
		alert("Has introducido el codigo postal incorrectamente");
		return false;
	}
}







// funcion que valida la tarjeta del usuario en carrito de pago
function validarNumTarjeta() {

	let valorNumTarjeta = document.getElementById("numTarjeta").value;

	if (valorNumTarjeta.length >= 13 && valorNumTarjeta.length <= 18 && !isNaN(valorNumTarjeta)) {


		return 1;
	}
	else {
		return 0;
	}


}


// funcion que valida el nombre de tarjeta de carrito de pago
function nombTitular() {


	let valor = document.getElementById("nomTitular").value

	for (let i = 0; i < valor.length; i++)
		if (isNaN(valor)) {

			return 1;

		}
		else {

			return 0;
		}
}







// funcion que valida  el codigo de seguridad de la tarjeta en carrito de pago

function codSeguridad() {
	let sdsa = document.getElementById("codigoSeg").value;

	if (!isNaN(sdsa) && Number(sdsa) >= 1000 && Number(sdsa) <= 10000) {
		return 1;
	}
	else {
		return 0;
	}

}


// funcion que valida la fecha de caducidad de la tarjeta en carrito de pago
function fechaCaducidad() {

	let fechaHoy = new Date();
	let fechaIngresada = new Date(document.getElementById("fechaCad").value)

	if (fechaIngresada > fechaHoy) {
		return 1;
	}
	else {

		return 0;

	}
}











// funcion que valida el codigo postal en carrito de direccion
function codigoPostal() {

	let codPos = document.getElementById("codPostal").value

	if (!isNaN(codPos) && Number(codPos) >= 10000 && Number(codPos) <= 100000) {
		return 1;
	}
	else {
		return 0;
	}
}






// funcion que añade la cantidad de producto
function pulsar(v) {

	arrayJuegos[v][1]++
	veces++

	localStorage.setItem("array", JSON.stringify(arrayJuegos));

	productosSeleccionados()
	cantidadPorJuego()
	precioTotal()


}

// funcion que resta la cantidad de producto
function decrementar(y) {

	arrayJuegos[y][1]--;
	veces--
	localStorage.setItem("array", JSON.stringify(arrayJuegos));

	productosSeleccionados()
	cantidadPorJuego()
	precioTotal()


}

// funcion que elimina la cantidad de producto y pone a valor 0
function eliminar(y) {
	veces = 0
	arrayJuegos[y][1] = 0;
	localStorage.setItem("array", JSON.stringify(arrayJuegos));
	productosSeleccionados()
	cantidadPorJuego()
	precioTotal()
}

// funcion que muestra la cantidad de producto que se ha seleccionado de manera individual
function mostrarCantidad(v) {
	v = array[v][1]
	document.getElementById("mostrarCantidad").innerHTML = (v)


}


// funcion que muestra el contenido del array que tenga cantidad de producto mayor a 0
function productosSeleccionados() {



	document.getElementById("juegoSeleccionados").innerHTML = "";

	for (let i in arrayJuegos) {

		if (arrayJuegos[i][1] > 0) {
			sumar = Number(arrayJuegos[i][1] * arrayJuegos[i][2])
			console.log(arrayJuegos[i][1])

			document.getElementById("juegoSeleccionados").innerHTML += ("<tr> <td>" + arrayJuegos[i][0] + "</td> <td align=center >" + arrayJuegos[i][1] + "</td> <td>" + sumar.toFixed(2) + "€" + "</td> </tr> ")

		}


	}





}

// funcion que realiza suma de todos los productos añadidos
function precioTotal() {





	let sumaProdPrecio = "";

	for (let i in arrayJuegos) {

		if (arrayJuegos[i][1] > 0) {

			sumarTotal = Number(arrayJuegos[i][1] * arrayJuegos[i][2])
			sumaProdPrecio = Number(sumaProdPrecio + sumarTotal);
			sumGeneral = sumaProdPrecio
			localStorage.setItem("array", JSON.stringify(arrayJuegos));
		}
	}



	if (Number(cantidadTo) <= 0) {
		document.getElementById("precioTotal").innerHTML = (0)
		localStorage.setItem("array", JSON.stringify(arrayJuegos));
	}

	document.getElementById("precioTotal").innerHTML = (sumaProdPrecio.toFixed(2) + "€")

}

// funcion que muestra la cantidad total de todos los productos en conjunto
function cantidadTotal() {


	let cantidadT = cantidadTo



	for (let i in arrayJuegos) {

		if (arrayJuegos[i][1] > 0) {

			cantidadT = Number(arrayJuegos[i][1] + cantidadT)
		}
	}
	document.getElementById("cantidadTotal").innerHTML = (cantidadT)



}


// funcion que elimina todo lo que hay en el carrito
function borrarTodo() {


	for (let i in arrayJuegos) {

		arrayJuegos[i][1] = 0
		localStorage.setItem("array", JSON.stringify(arrayJuegos));
		console.log(arrayJuegos[i][1])

	}
	productosSeleccionados()
	cantidadPorJuego()
	document.getElementById("precioTotal").innerHTML = (0)
	precioTotal()

}

// funcion para realizar descuentos base al precio total
function descuento() {

	let codigo = prompt("INTRODUZCA EL CODIGO DE DESCUENTO")
	let descuentoAplicado = false;
	precioTotal()
	if (!descuentoAplicado) {
		if (codigo === "DESC10%") {
			let sumarTotal10 = sumGeneral
			let cal10 = Number(sumarTotal10) * 0.10
			let desc10 = Number(sumarTotal10 - cal10)
			alert("EL DESCUENTO TOTAL: " + cal10.toFixed(2) + "€")
			document.getElementById("precioTotal").innerHTML = (desc10.toFixed(2) + "€")
			descuento = true;
		}
		else if (codigo === "DESC20%") {
			let sumarTotal20 = sumGeneral
			let cal20 = Number(sumarTotal20) * 0.20
			let desc20 = Number(sumarTotal20 - cal20)
			alert("EL DESCUENTO TOTAL: " + cal20.toFixed(2) + "€")
			document.getElementById("precioTotal").innerHTML = (desc20.toFixed(2) + "€")
			descuento = true;
		}
		else if (codigo === "DESC25%") {
			let sumarTotal25 = sumGeneral
			let cal25 = Number(sumarTotal25) * 0.25
			let desc25 = Number(sumarTotal25 - cal25)
			alert("EL DESCUENTO TOTAL: " + cal25.toFixed(2) + "€")
			document.getElementById("precioTotal").innerHTML = (desc25.toFixed(2) + "€")
			descuento = true;
		}
		else {
			alert("EL CODIGO INTRODUCIDO NO ES VALIDO.")
		}
	}
	else {
		alert("El descuento ya ha sido aplicado.")

	}
}



// funcion que muestra la cantidad de producto seleccionados individualmente
function cantidadPorJuego() {



	document.getElementById("juego0").innerHTML = (Number(arrayJuegos[0][1]))
	document.getElementById("juego1").innerHTML = (Number(arrayJuegos[1][1]))
	document.getElementById("juego2").innerHTML = (Number(arrayJuegos[2][1]))
	document.getElementById("juego3").innerHTML = (Number(arrayJuegos[3][1]))
	document.getElementById("juego4").innerHTML = (Number(arrayJuegos[4][1]))
	document.getElementById("juego5").innerHTML = (Number(arrayJuegos[5][1]))
	document.getElementById("juego6").innerHTML = (Number(arrayJuegos[6][1]))
	document.getElementById("juego7").innerHTML = (Number(arrayJuegos[7][1]))
	document.getElementById("juego8").innerHTML = (Number(arrayJuegos[8][1]))
	document.getElementById("juego9").innerHTML = (Number(arrayJuegos[9][1]))
	document.getElementById("juego10").innerHTML = (Number(arrayJuegos[10][1]))
	document.getElementById("juego11").innerHTML = (Number(arrayJuegos[11][1]))
	document.getElementById("juego12").innerHTML = (Number(arrayJuegos[12][1]))
	document.getElementById("juego13").innerHTML = (Number(arrayJuegos[13][1]))
	document.getElementById("juego14").innerHTML = (Number(arrayJuegos[14][1]))
	document.getElementById("juego15").innerHTML = (Number(arrayJuegos[15][1]))
	document.getElementById("juego16").innerHTML = (Number(arrayJuegos[16][1]))
	document.getElementById("juego17").innerHTML = (Number(arrayJuegos[17][1]))
	document.getElementById("juego18").innerHTML = (Number(arrayJuegos[18][1]))
	document.getElementById("juego19").innerHTML = (Number(arrayJuegos[19][1]))
	document.getElementById("juego20").innerHTML = (Number(arrayJuegos[20][1]))
	document.getElementById("juego21").innerHTML = (Number(arrayJuegos[21][1]))
	document.getElementById("juego22").innerHTML = (Number(arrayJuegos[22][1]))
	document.getElementById("juego23").innerHTML = (Number(arrayJuegos[23][1]))
	document.getElementById("juego24").innerHTML = (Number(arrayJuegos[24][1]))
	document.getElementById("juego25").innerHTML = (Number(arrayJuegos[25][1]))
	document.getElementById("juego26").innerHTML = (Number(arrayJuegos[26][1]))
	document.getElementById("juego27").innerHTML = (Number(arrayJuegos[27][1]))
	document.getElementById("juego28").innerHTML = (Number(arrayJuegos[28][1]))
	document.getElementById("juego29").innerHTML = (Number(arrayJuegos[29][1]))
	document.getElementById("juego30").innerHTML = (Number(arrayJuegos[30][1]))
	document.getElementById("juego31").innerHTML = (Number(arrayJuegos[31][1]))
	document.getElementById("juego32").innerHTML = (Number(arrayJuegos[32][1]))
	document.getElementById("juego33").innerHTML = (Number(arrayJuegos[33][1]))

	cantidadTotal()


}





// funcion que muestra por pantalla la tajeta de los productos agregados al carrito
function mostrarProductos() {

	var x = document.getElementById('myDIV0');
	if (Number(arrayJuegos[0][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV1');
	if (Number(arrayJuegos[1][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV2');
	if (Number(arrayJuegos[2][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV3');
	if (Number(arrayJuegos[3][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV4');
	if (Number(arrayJuegos[4][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV5');
	if (Number(arrayJuegos[5][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV6');
	if (Number(arrayJuegos[6][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV7');
	if (Number(arrayJuegos[7][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV8');
	if (Number(arrayJuegos[8][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV9');
	if (Number(arrayJuegos[9][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV10');
	if (Number(arrayJuegos[10][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV11');
	if (Number(arrayJuegos[11][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV12');
	if (Number(arrayJuegos[12][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV13');
	if (Number(arrayJuegos[13][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV14');
	if (Number(arrayJuegos[14][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV15');
	if (Number(arrayJuegos[15][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV16');
	if (Number(arrayJuegos[16][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV17');
	if (Number(arrayJuegos[17][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV18');
	if (Number(arrayJuegos[18][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV19');
	if (Number(arrayJuegos[19][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV20');
	if (Number(arrayJuegos[20][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV21');
	if (Number(arrayJuegos[21][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV22');
	if (Number(arrayJuegos[22][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV23');
	if (Number(arrayJuegos[23][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV24');
	if (Number(arrayJuegos[24][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV25');
	if (Number(arrayJuegos[25][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV26');
	if (Number(arrayJuegos[26][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV27');
	if (Number(arrayJuegos[27][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}

	var x = document.getElementById('myDIV28');
	if (Number(arrayJuegos[28][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}



	var x = document.getElementById('myDIV29');
	if (Number(arrayJuegos[29][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV30');
	if (Number(arrayJuegos[30][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV31');
	if (Number(arrayJuegos[31][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV32');
	if (Number(arrayJuegos[32][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}


	var x = document.getElementById('myDIV33');
	if (Number(arrayJuegos[33][1]) <= 0) {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}
}


//############################# INICIO SESION #######################################

function maestra3() {
	if (usuario() && pass()) {
		alert("Has iniciado correctamente, pulse siguiente.")
		return true;

	}

	else if (!usuario()) {
		alert("El usuario introducido no existe");
		return false;
	}


	else if (!pass()) {
		alert("Contraseña incorrecta");
		return false;
	}

}

function usuario() {
	let usu = document.getElementById("usu").value

	if (usu == "admin") {
		return 1;
	}
	else {

		return 0;
	}

}

function pass() {
	let usu = document.getElementById("contraseña").value

	if (usu == "admin123") {
		return 1;
	}
	else {

		return 0;
	}

}





//############################# GESTION DE DATOS ###############################
let arrayClientes = []

const dataStored3 = localStorage.getItem("clientes");
if (dataStored3) {
	arrayClientes = JSON.parse(dataStored3)
	console.log("memoria clientes")
	console.log(arrayClientes)
}
if (document.getElementById("contador3")) {
	document.getElementById("contador3").innerHTML = typeof (arrayClientes)
}

arrayClientes.push({usuario: document.getElementById("dni").value,

		productos: productosCliente(),

		direccion: document.getElementById("direccion").value,

		direccionCalle: document.getElementById("direccionCc").value,

		direccionPiso: document.getElementById("direccionCp").value,

		fecha: fechaC

})




function productosCliente() {

	document.getElementById("juegosCliente").innerHTML = "";

	for (let i in arrayJuegos) {

		if (arrayJuegos[i][1] > 0) {
			sumar = Number(arrayJuegos[i][1] * arrayJuegos[i][2])


			document.getElementById("juegosCliente").innerHTML += (arrayJuegos[i][0] + " x" + sumar + "<br>")

		}


	}
}

function mostrarDatos() {
	document.getElementById("datos").innerHTML = "";

	for (let i in arrayClientes) {
		document.getElementById("datos").innerHTML = ("<tr><td>" + arrayClientes[i][usuario] + "</td><td>" + clientes.productos + "</td><td>" + clientes.direccionCalle + "-" + clientes.direccionPiso + " (" + clientes.direccion + ")" + "</td><td>" + clientes.fecha + "</td></tr>");
	}

}

function eliminarDato() {



	let usuarioEliminar = prompt("introduzca el dni del usuario que quieres eliminar")

	for (let i = 0; i < arrayClientes.length; i++) {
		if (clientes.usuario == usuarioEliminar) {

			arrayClientes.splice(i, 1)
			break;

		}
	}
	mostrarDatos();
}








