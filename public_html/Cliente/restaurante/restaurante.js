function totalMenu(){
	elementos = document.getElementsByName("p");
	costeP=0;
	for(var i=0; i<elementos.length; i++) {
		if (elementos[i].checked){
			costeP = parseInt(elementos[i].value);
		}
	}
	elementos = document.getElementsByName("s");
	costeS=0;
	for(var i=0; i<elementos.length; i++) {
		if (elementos[i].checked){
			costeS = parseInt(elementos[i].value);
		}
	}
	elementos = document.getElementsByName("t");
	costeT=0;
	for(var i=0; i<elementos.length; i++) {
		if (elementos[i].checked){
			costeT = parseInt(elementos[i].value);
		}
	}
        if (costeP==0 || costeS==0 || costeT==0) alert("Falta por seleccionar algún plato");
	total = costeP + costeS + costeT;
	document.getElementById("total").firstChild.nodeValue = "Precio Total: " + total + " €";
}