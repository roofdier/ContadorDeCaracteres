/*
	* jQuery rules! :)
*/

var tempo = null;
var tiempo = 5;
var sec = tiempo;
var on = false;
var totalChars = 0;

$(function() {
	initialize();

	$('#vere').on('click',function () {

		clearInterval(tempo);
		if(on){
			var userTotal = parseInt($('#txtuser').val());
			if(userTotal === totalChars){
				$('#status').text('¡Qué rápido! ¡Haz ganado!');
			}else{
				$('#status').text('¡Qué mal! No es lo correcto');
			}

			$(this).text('Volver a Jugar');
			on = false;
		}else{
			initialize();
			$(this).text('Verificar');
		}
	})
})


function initialize() {

	$("#txtuser").attr('value','')

	var txto = $("#testext").text();
	var txt = txto.split('');
	var txtL = txt.length;



	var randCharNum = parseInt((Math.random()*(txtL-1))+1);
	var randChar = txt[randCharNum];
	var contadorChars = 0;

	for (var i = 0; i < txt.length; i++)
		if(txt[i]==randChar)
			contadorChars++;

	totalChars = contadorChars;
	if(randChar === " ")
		randChar = 'espacio';
	sec = tiempo;	
	$("#txtuser").attr('placeholder','¿Cuantos caracteres "'+randChar+'" hay?');
	$('#status').text('Tienes '+sec+'s para contestar...');


	iniciaTemporizador();
}

function iniciaTemporizador(){
	
	tempo = setInterval("contando()",1000);
	on = true;
}



function contando(){
	console.log(sec)
	if(sec<=0){
		clearInterval(tempo);
		tiempoAgotado();
		return false;
	}

	sec--;
	$('#status').text('Tienes '+(sec)+'s para contestar...');
}

function tiempoAgotado() {
	on = false;
	sec = tiempo;
	$('#status').text('Se ha agotado tu tiempo');
	$("#vere").text('Volver a Jugar');
}