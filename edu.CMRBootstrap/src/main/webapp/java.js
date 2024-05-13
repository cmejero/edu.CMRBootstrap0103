
// ######## FORMULARIOS ###########
/*
miUser = document.getElementById("numTarjeta")
miUser.addEventListener('blur', () => {
	miUser.value = miUser.value.trim();
})

miUser = document.getElementById("nomTitular")
miUser.addEventListener('blur', () => {
	miUser.value = miUser.value.trim();
})


miUser = document.getElementById("codigoSeg")
miUser.addEventListener('blur', () => {
	miUser.value = miUser.value.trim();
})
*/


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
arrayJuegos.push(["Tarjeta 10 - PSN", 0, 8.99]);
arrayJuegos.push(["Tarjeta 20 -PSN", 0, 17.00]);
arrayJuegos.push(["Tarjeta 25 -PSN", 0, 49.50]);
arrayJuegos.push(["Tarjeta 50 - PSN", 0, 45.00]);
arrayJuegos.push(["Tarjeta 60 -PSN", 0, 53.50]);
arrayJuegos.push(["Tarjeta 100 -PSN", 0, 92.50]);
arrayJuegos.push(["Ark 2", 0, 69.50]);
arrayJuegos.push(["Starfield", 0, 59.00]);
arrayJuegos.push(["Avowed", 0, 69.99]);
arrayJuegos.push(["State Of Decay", 0, 3.25]);
arrayJuegos.push(["Everwild", 0, 49.99]);
arrayJuegos.push(["Stalker 2", 0, 69.99]);
arrayJuegos.push(["FC 2024", 0, 47.50]);
arrayJuegos.push(["Tarjeta 3 Meses - GAMEPASS", 0, 14.49]);
arrayJuegos.push(["Tarjeta 6 Mese - GAMEPASS", 0, 21.49]);
arrayJuegos.push(["Tarjeta 12 Meses - GAMEPASS", 0, 42.99]);
arrayJuegos.push(["Elden Ring", 0, 33.33]);
arrayJuegos.push(["Blade", 0, 69.50]);
console.log(arrayJuegos);




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







let sumar = "";

productosSeleccionados()

let sumarTotal = "";


precioTotal()
cantidadTotal()






//   CARRITO PAGO

function maestra() {

	if (validarNumTarjeta() && nomTitular() && fechaCaducidad()  && codSeguridad()) {
		return true;
	}


	else if (!validarNumTarjeta()) {
		alert("El numero introducido es incorrecto");
		return false;

	}


	else if (!nomTitular()) {
		alert("El nombre introducido es incorrecto, has introducido un numero");
		return false;

	}


	else if (!codSeguridad()) {
		alert("El codigo introducido es incorrecto");
		return false;
	}


	else if (!fechaCaducidad()) {
		alert("La fecha introducida ha caducado");
		return false;
	}



}









function validarNumTarjeta() {

	let valorNumTarjeta = document.getElementById("numTarjeta").value;

	if (valorNumTarjeta.length >= 13 && valorNumTarjeta.length <= 18 && Number(valorNumTarjeta)) {


		return 1;
	}
	else {
		return 0;
	}


}



function nomTitular() {

	if (NaN(document.getElementById("nomTitular").value)) {
		return 1;

	}
	else {
		return 0;
	}
}




function codSeguridad() {
	let sdsa = document.getElementById("codigoSeg").value;

	if (Number(sdsa) && sdsa > 1000) {
		return 1;
	}
	else {
		return 0;
	}

}



function fechaCaducidad() {
	alert("hola")
	let fechaHoy = new Date();
	let fechaIngresada = new Date(document.getElementById("fechaCad").value)

	if (fechaIngresada > fechaHoy) {
		return 1;
	}
	else {
		alert("La fecha introducida ha caducado")
		return 0;

	}
}



//CARRITO DIRECCION

function maestra2() {

	if (nomTitular() && codigoPostal())
		return 1;

	else if (!nomTitular) {
		alert("Has introducido los datos incorrectamente");
		return false;
	}


	else if (!codigoPostal()) {
		alert("Has introducido el codigo postal incorrectamente");
		return false;
	}
}






function codigoPostal() {

	if (Number(document.getElementById("codPostal").value) & document.getElementById("codPostal").value.length == 5) {
		return 1;
	}
	else {
		return 0;
	}
}







function pulsar(v) {
	arrayJuegos[v][1]++
	veces++
	localStorage.setItem("array", JSON.stringify(arrayJuegos));
}

function decrementar(y) {
	veces = 0
	arrayJuegos[y][1]--;
	localStorage.setItem("array", JSON.stringify(arrayJuegos));
}


function eliminar(y) {
	veces = 0
	arrayJuegos[y][1] = 0;
	localStorage.setItem("array", JSON.stringify(arrayJuegos));
}


function mostrarCantidad(v){
	v= array[v][1]		
	document.getElementById("mostrarCantidad").innerHTML=(v)
	
	
}



function productosSeleccionados() {



	document.getElementById("juegoSeleccionados").innerHTML = "";

	for (let i in arrayJuegos) {

		if (arrayJuegos[i][1] > 0) {
			sumar = Number(arrayJuegos[i][1] * arrayJuegos[i][2])
			console.log(arrayJuegos[i][1])

			document.getElementById("juegoSeleccionados").innerHTML += ("<tr> <td>" + arrayJuegos[i][0] + "</td> <td align=center >" + arrayJuegos[i][1] + "</td> <td>" + sumar + "</td> </tr> ")

		}

	}
}


function precioTotal() {
	let aux = "";

	for (let i in arrayJuegos) {

		if (arrayJuegos[i][1] > 0) {

			sumarTotal = Number(arrayJuegos[i][1] * arrayJuegos[i][2])
			aux = Number(aux + sumarTotal);
		}
	}
	document.getElementById("precioTotal").innerHTML = (aux)

}

function cantidadTotal() {
	let aux = "";

	for (let i in arrayJuegos) {

		if (arrayJuegos[i][1] > 0) {

			aux = Number(arrayJuegos[i][1] + aux)
		}
	}
	document.getElementById("cantidadTotal").innerHTML = (aux)

}
