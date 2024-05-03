


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
		alert("El nombre introducido es incorrecto")
		return false;

	}
	
	
	else if(!codSeguridad()){
		alert("El codigo introducido es incorrecto")
		return false;
	}
	
	
	else if(!fechaCaducidad()){
		alert("La fecha introducida ha caducado")
		return false;
	}



}









function validarNumTarjeta() {

	if (document.getElementById("numTarjeta").value.length <= 13 || document.getElementById("numTarjeta").value.length >= 18) {


		return false;
	}
	else {
		return true;
	}


}



function nomTitular() {

	if (NaN(document.getElementById("nomTitular").Value)) {
		return true;

	}
	else {
		return false;
	}
}




function codSeguridad() {
let sdsa = document.getElementById("codigoSeg").Value;

	if (Number(sdsa)) {
		return true;
	}
	else {
		return false;
	}

}



function fechaCaducidad() {
	let fechaHoy = Date.now();

	if(document.getElementById("fechaCad").Value < fechaHoy){
		return true;
	}
	else{
		return false;
	}
}



//CARRITO DIRECCION

function maestra2(){
	
	if(nomTitular() & codigoPostal())
	return true;
	
	else if(!nomTitular){
		alert("Has introducido los datos incorrectamente");
		return false;
	}
	
	
	else if(!codigoPostal()){
		alert("Has introducido el codigo postal incorrectamente");
		return false;
	}
}






function codigoPostal(){
	
	if(Number(document.getElementById("codPostal").Value) & document.getElementById("codPostal").Value.lenght == 5 ){
		return true;
	}
	else{
		return false;
	}
}



