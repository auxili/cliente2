function insertarImagenDOM(id,img,pos) {
    micapa = document.createElement("div");
    micapa.style.position = "absolute";
    micapa.style.left = pos;
	micapa.id=id;
	
    enlace = document.createElement("a");
	
    enlace.setAttribute("onclick","copiaImagen("+pos+")");
       
    foto = document.createElement("img");
    foto.src = img;
        
    //creamos el arbol
    document.body.appendChild(micapa);
        micapa.appendChild(enlace);
            enlace.appendChild(foto);
            
}
function copiaImagen(pos){

    ca = document.createElement("div");
		ca.style.position="absolute"
		ca.style.left=pos;
		ca.style.top="200px";
    pe = document.createElement("p");
    te = document.createTextNode("Estas son sus imagenes seleccionadas")
    
    document.body.appendChild(ca);
        ca.appendChild(pe);
        ca.appendChild(enlace);
        pe.appendChild(te);
        ca.appendChild(foto);
}