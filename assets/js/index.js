$(function(){
	var entorno="https://gym-auth-backend1.herokuapp.com";

	$("#enviar").on("click", enviar);

	function enviar(){
		let nombre=$("#nombre").val();
		let correo=$("#correo").val();
		let observacion=$("#observacion").val();
		let spinner=$("<span class='spinner-border shadow1 style' role='status' aria-hidden='true' id='spinner'></span>");
		spinner.insertBefore("#texto");
		$.get(entorno+"/gym/mensaje/crearMensaje?nombre="+nombre+"&correo="+correo+"&observacion="+observacion, function (data) {
            var resultado = data;
			$("#spinner").remove();
			$('#modalResultado').modal('show'); 
			if(resultado==true){
				$("#resultado").text("Enviada exitosamente");
			} else{
				$("#resultado").text("Error al enviar");
			}

        }).fail(function() {
			$("#spinner").remove();
			$("#resultado").text("Error al enviar");
		});		
	}
})
