/*
	* jQuery rules! :)
*/

$(function() {

	var txto = $("#testext").text();
	var txt = txto.split('');
	var txtL = txt.length;

	var randCharNum = ((Math.random()*(txt-1))+1);
	var randChar = txtL[randCharNum];

	var contadorChars = 0;

	for (var i = 0; i < txt.length; i++) {
		if(txt[i]==randChar){
			contadorChars++;
		}
	}

	if(randChar === " ")
		randChar = '"espacio"';

	$("#txtuser").html('¿Cu&aacute;ntos caracteres '+randChar+" hay?");



})