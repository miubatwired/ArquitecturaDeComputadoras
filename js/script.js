/*Cambia la barra de navegación cuando el ancho de la pantalla es pequeño */
function changeTopnav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

function changeTopnav2() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav2") {
		x.className += " responsive";
	} else {
		x.className = "topnav2";
	}
}

/*Animaciones */
window.addEventListener("DOMContentLoaded", (event) => {
	let info = document.getElementsByClassName("info");
	for (j = 0; j < 1; j++) {
		$(info[j]).hide().fadeIn("slow");
	}
	$(document.getElementById("contentIndex")).fadeIn("slow");
});

window.addEventListener("DOMContentLoaded", (event) => {
	$(document.getElementById("flexUn")).hide().fadeIn("slow");
});

/*Efecto de máquina de escribir*/
let title = ["Arquitectura de Computadoras"];
if (document.getElementsByClassName("indexTitle").length > 0) {
	title = ["Índice"];
}
const speed = 100;
let textPosition = 0;
function typewriter() {
	document.querySelector("#title").innerHTML = title[0].substring(0, textPosition) + '\u25AE';
	if (textPosition++ != title[0].length)
		hola = setTimeout(typewriter, speed);
	else {
		clearTimeout(hola);
		document.querySelector("#title").innerHTML = title[0].substring(0, textPosition - 1);
	}
}

window.addEventListener("load", typewriter);

/*Esta función muestra y oculta el índice */
function hide(){
	$(document.getElementById("index")).slideToggle("slow");
	if (document.getElementById("hide").innerHTML == "Ocultar") {
		document.getElementById("hide").innerHTML = "Mostrar"
	} else {
		document.getElementById("hide").innerHTML = "Ocultar"
	}
}

/*Esta función muestra el índice cuando se redimensiona la ventana después de haber ocultado el índice */
window.addEventListener("resize", (event) =>{
	if ($(window).width() > 1100) {
		if (document.getElementById("hide").innerHTML == "Mostrar") {
			document.getElementById("hide").innerHTML = "Ocultar"
			$(document.getElementById("index")).slideDown("slow");
		}
	}
	if ($(window).width() > 600) {
		indexToggle("");
	}else{
		indexToggle("hide()");
	}
})

window.addEventListener("DOMContentLoaded", (event) =>{
	let width = $(window).width();
	if(width<1100){
		document.getElementById("index").style.display = 'none';
		document.getElementById("hide").innerHTML = "Mostrar";
	}
	if (width < 600) {
		indexToggle("hide()");
	 }
})

function indexToggle(toggle){
	atag = document.getElementById("index").getElementsByTagName("a");
	for(i=0; i<atag.length; i++){
		atag[i].setAttribute("onclick", toggle);
	}
}

function setPractica(num){
	var atag = $("#practicasNav > a");
	for(i=0; i<atag.length; i++){
		atag[i].setAttribute("class", "");
	}
	switch(num){
		case 1:
			atag[0].setAttribute("class", "activePract");
			document.getElementById('pdf').setAttribute("src", "../pdf/Arquitectura de Computadoras.pdf");
			break;
		case 2:
			atag[1].setAttribute("class", "activePract");
			document.getElementById('pdf').setAttribute("src", "../pdf/Procesadores especificaciones.pdf");
			break;
		case 3:
			atag[2].setAttribute("class", "activePract");
			document.getElementById('pdf').setAttribute("src", "../pdf/Reporte lab arquitectura - Babún.pdf");
			break;
		case 4:
			atag[0].setAttribute("class", "activePract");
			document.getElementById('pdf').setAttribute("src", "../pdf/Diseño de computadoras.pdf");
			break;
		case 5:
			atag[1].setAttribute("class", "activePract");
			document.getElementById('pdf').setAttribute("src", "../pdf/Cotización.pdf");
			break;
	}
}