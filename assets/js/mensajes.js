$(function(){
	var entorno="https://gym-auth-backend1.herokuapp.com/";

	$(document).ready(function () {
		leerMensajes();
	});

	function leerMensajes(){
		$.get(entorno+"/gym/mensaje", function (data) {
            var resultado = data;
			for(let i=0; i<resultado.length; i++){
				let tr=$("<tr></tr>");
				let td0=$("<td></td>").text(i+1);
				let td1=$("<td></td>").text(resultado[i].nombre);
				let td2=$("<td></td>").text(resultado[i].correo);
				let td3=$("<td></td>").text(resultado[i].celular);
				let td4=$("<td></td>").text(resultado[i].observacion);
				let td5=$("<td></td>").text(resultado[i].fechaCreacion);
				tr.append(td0);
				tr.append(td1);
				tr.append(td2);
				tr.append(td3);
				tr.append(td4);
				tr.append(td5);
				$("#mensajes").append(tr);
			}
        }).fail(function() {

		});	
		
	}
})