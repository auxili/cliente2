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
        document.getElementById("c" + articulo.id).getElementsByTagName("p")[0].firstChild.nodeValue = "Precio: " + (substr1 * substr);
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
    document.getElementById("cart").getElementsByTagName("p")[1].firstChild.nodeValue = "Total Cesta: " + totalCesta();
}


function borraImagenCart(articulo) {
    dc = document.getElementById(articulo.id);
    //eliminamos el div contenedor de la imagen y el botón.
    dc.parentNode.removeChild(dc);
}

function totalCesta() {

    Productos = document.getElementById("cart").getElementsByTagName("div");

    total = 0;
    sumaPrecio = 0;
    sumaUnidades = 0;

    for (i = 0; i <= Productos.length; i++) {
        //alert(Productos[i].id);
        producto=document.getElementById(Productos[i].id);
        miprecio=producto.getElementsByTagName("p")[0].firstChild.nodeValue;
         alert (miprecio); 
         
            /* valorDeParrafo0 = document.getElementById(producto).getElementsByTagName("p")[0].firstChild.nodeValue;
            substrValorPorDefecto0 = parseInt(valorDeParrafo0.substring(8))
            sumaPrecio = sumaPrecio + substrValorPorDefecto0;

            valorDeParrafo1 = document.getElementById(producto).getElementsByTagName("p")[1].firstChild.nodeValue;
            substrValorPorDefecto1 = parseInt(valorDeParrafo1.substring(10));
            sumaUnidades = sumaUnidades + substrValorPorDefecto1;
        */
        /* 
         valorDeParrafo0 = document.getElementById(Productos[i].id).getElementsByTagName("p")[0].firstChild.nodeValue;
         substrValorPorDefecto0 = parseInt(valorDeParrafo0.substring(8))
         sumaPrecio = sumaPrecio + substrValorPorDefecto0;
         
         valorDeParrafo1 = document.getElementById(Productos[i].id).getElementsByTagName("p")[1].firstChild.nodeValue;
         substrValorPorDefecto1 = parseInt(valorDeParrafo1.substring(10));
         sumaUnidades = sumaUnidades + substrValorPorDefecto1;
         */
    }
    total = sumaPrecio * sumaUnidades;

    return total;
}