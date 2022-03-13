var nombre="";
var correo="";
var observacion="";
var entorno="https://gym-auth-backend1.herokuapp.com/";

function enviar(event){
	event.preventDefault();
	nombre=document.getElementById("nombre").value;
	correo=document.getElementById("correo").value;
	observacion=document.getElementById("observacion").value;
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", entorno+"/gym/mensaje/crearMensaje?nombre="+nombre+"&correo="+correo+"&observacion="+observacion, false);
	xhttp.send();
	let respuesta=xhttp.responseText;
	if(respuesta==="true"){
		console.log("entro aqui1");
		document.getElementById("respuesta").innerHTML="Enviada exitosamente";
	} else{
		console.log("entro aqui2");
		document.getElementById("respuesta").innerHTML="Error al enviar";
	}
}