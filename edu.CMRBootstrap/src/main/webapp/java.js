
// ######## FORMULARIOS ###########

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










//   CARRITO PAGO

function maestra() {

	if (validarNumTarjeta() && nomTitular() && codSeguridad() && fechaCaducidad()) {
		return true;
	}


	else if (!validarNumTarjeta()) {
		alert("El numero introducido es incorrecto");
		return false;

	}


	else if (!nomTitular()) {
		alert("El nombre introducido es incorrecto, has introducido un numero")
		return false;

	}


	else if (!codSeguridad()) {
		alert("El codigo introducido es incorrecto")
		return false;
	}


	else if (!fechaCaducidad()) {
		alert("La fecha introducida ha caducado")
		return false;
	}



}









function validarNumTarjeta() {

	let valorNumTarjeta = document.getElementById("numTarjeta").value;

	if (valorNumTarjeta.length >= 13 && valorNumTarjeta.length <= 18 && Number(valorNumTarjeta)) {


		return true;
	}
	else {
		return false;
	}


}



function nomTitular() {

	if (NaN(document.getElementById("nomTitular").value)) {
		return true;

	}
	else {
		return false;
	}
}




function codSeguridad() {
	let sdsa = document.getElementById("codigoSeg").value;

	if (Number(sdsa) && sdsa == 4) {
		return true;
	}
	else {
		return false;
	}

}



function fechaCaducidad() {
	let fechaHoy = Date.now();

	if (document.getElementById("fechaCad").value > fechaHoy) {
		return true;
	}
	else {
		return false;
	}
}



//CARRITO DIRECCION

function maestra2() {

	if (nomTitular() && codigoPostal())
		return true;

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
		return true;
	}
	else {
		return false;
	}
}


//  ############ ARRAY productos ##########

let arrayJuegos[];
arrayJuegos.push(["pacific drive" , 17.50]);
arrayJuegos.push(["horizon" , 41.50]);
arrayJuegos.push(["forspoken" , 28.02]);
arrayJuegos.push(["stellar blade" , 69.99]);
arrayJuegos.push(["f.f. xvi" , 29.50]);
arrayJuegos.push(["switchback" , 39.99]);
arrayJuegos.push(["ark ascended" , 39.49]);
arrayJuegos.push(["dayz" , 27.50]);
arrayJuegos.push(["rust console" , 39.42]);
arrayJuegos.push(["conan exiles" , 9.50]);
arrayJuegos.push(["ark survival" , 12.82]);
arrayJuegos.push(["battlefield 4" , 11.50]);
arrayJuegos.push(["spider-man 2" , 62.89]);
arrayJuegos.push(["cod mw3" , 49.99);
arrayJuegos.push(["diablo iv" , 79.99]);
arrayJuegos.push(["the division 2" , 29.50]);
arrayJuegos.push(["rdd 2" , 17,50]);
arrayJuegos.push(["gta v" , 10.49]);
arrayJuegos.push(["tarjeta 50" , 45.00]);
arrayJuegos.push(["tarjeta 60" , 53.50]);
arrayJuegos.push(["tarjeta 100" , 92.50]);
arrayJuegos.push(["ark 2" , 69.50]);
arrayJuegos.push(["starfield" , 59.00]);
arrayJuegos.push(["avowed" , 69.99]);
arrayJuegos.push(["state of decay" , 3.25]);
arrayJuegos.push(["everwild" , 49.99]);
arrayJuegos.push(["stalker 2" , 69.99]);
arrayJuegos.push(["fc 2024" , 47.50]);
arrayJuegos.push(["tarjeta 3 meses" , 14.49]);
arrayJuegos.push(["tarjeta 6 meses" , 21.49]);
arrayJuegos.push(["tarjeta 12 meses" , 42.99]);
arrayJuegos.push(["elden ring" , 33.33 ]);
arrayJuegos.push(["blade" , 69.50]);
 console.log(arrayJuegos);



