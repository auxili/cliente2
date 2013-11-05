function insertarTexto(){
	//txt = prompt("Inserta el texto: ");

	p = document.createElement("p");
        txt = document.createTextNode("mitexto");
	p.appendChild(txt);
	document.body.appendChild(p);
	
}