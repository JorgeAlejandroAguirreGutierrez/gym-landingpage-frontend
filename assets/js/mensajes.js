var entorno="https://gym-auth-backend1.herokuapp.com/";
$(document).ready(function() {
    var xhttp = new XMLHttpRequest();
	xhttp.open("GET", entorno+"/gym/mensaje", false);
	xhttp.send();
	let respuesta=jQuery.parseJSON( xhttp.responseText );
	for(let i=0; i<respuesta.length; i++){
		let tr=$("<tr></tr>");
		let td0=$("<td></td>").text(i+1);
		let td1=$("<td></td>").text(respuesta[i].nombre);
		let td2=$("<td></td>").text(respuesta[i].correo);
		let td3=$("<td></td>").text(respuesta[i].observacion);
		tr.append(td0);
		tr.append(td1);
		tr.append(td2);
		tr.append(td3);
		$("#mensajes").append(tr);
	}
});