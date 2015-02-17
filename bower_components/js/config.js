window.onload = function(){

	/*** Método click del boton #btnImprimir ***/
	function imprimir(){
		window.print();
	}

	document.getElementById("btnImprimir").onclick = imprimir;



	/*** Popover de la nota alpie #1.2-1 ***/
	$(function () {
		$('[data-toggle="popover"]').popover()
	})

	$('this').popover('toggle');


	/*** ***/
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})


}
