function addToCart(articulo) {
    var element = document.getElementById("c" + articulo.id);
    //almacenamos los subStrings del div del producto
    var mensaje = document.getElementById(articulo.id).getElementsByTagName("p")[0].firstChild.nodeValue;
    var substr = parseInt(mensaje.substring(8));

    unidades = 1;

    if (element !== null) {
        //accedemos al nodo TEXTO con el firsChild.nodeValue
        var cambia = document.getElementById("c" + articulo.id).getElementsByTagName("p")[1].firstChild.nodeValue;
        //accedemos al 1;
        var substr1 = parseInt(cambia.substring(10));
        substr1++;
        cambia = document.getElementById("c" + articulo.id).getElementsByTagName("p")[1].firstChild.nodeValue = "Unidades: " + substr1;
        document.getElementById("c" + articulo.id).getElementsByTagName("p")[0].firstChild.nodeValue = "Precio: " + (substr1*substr);
    }
    else {
        d = document.createElement("div");
        d.id = "c" + articulo.id;
        d.setAttribute("onclick", "borraImagenCart(c" + articulo.id + ")");
        imagen = document.createElement("img");
        foto = document.getElementById(articulo.id).getElementsByTagName("img")[0];
        imagen.src = foto.src;
        imagen.setAttribute("height", "100px");
        imagen.setAttribute("width", "134px");



        //accedemos a los p de la imagen
        parrafoPrecio = document.createElement("p");
        parrafoUnidades = document.createElement("p");
        txtPrecio = document.createTextNode("Precio: " + substr);
        txtUnidades = document.createTextNode("Unidades: " + unidades);



        //appendChilds
        parrafoPrecio.appendChild(txtPrecio);
        parrafoUnidades.appendChild(txtUnidades);

        d.appendChild(imagen);
        d.appendChild(parrafoPrecio);
        d.appendChild(parrafoUnidades);
        document.getElementById('cart').appendChild(d);
    }
    document.getElementById("cart").getElementsByTagName("p")[1].firstChild.nodeValue = "totalCesta(): " + substr*substr1;
}


function borraImagenCart(articulo) {
    dc = document.getElementById(articulo.id);
    //eliminamos el div contenedor de la imagen y el botón.
    dc.parentNode.removeChild(dc);
}


