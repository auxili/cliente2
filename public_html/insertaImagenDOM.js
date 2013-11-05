function mueveImagen(articulo) {
    //Creamos variables
    //cart = document.getElementById("cart_block");
    /*if (document.getElementById("c"+articulo.id)) {
        alert("La imagen ya existe c1");
    } else {*/


        //creamos la capa DIV que contendrá la imagen y el boton de eliminar
        d = document.createElement("div");
        d.id="c"+articulo.id;

        imagen = document.createElement("img");
        
        micapa=document.getElementById(articulo.id)
        foto=micapa.getElementsByTagName("img")[0];
        imagen.src = foto.src;
        imagen.setAttribute("height", "100px");
        imagen.setAttribute("width", "134px");
        //imagen.setAttribute("alt", identifica);
        //imagen.setAttribute("id", "imagen" + i);

        identificador = "c" + articulo.id;

        boton = document.createElement("input");
        boton.setAttribute("id", "boton");
        boton.setAttribute("type", "button");
        boton.setAttribute("value", "Eliminar");
        boton.setAttribute("onclick", "borraImagenCart('" + identificador + "')");


        parrafoPrecio = document.createElement("p");
        parrafoUnidades = document.createElement("p");
        txtPrecio = document.createTextNode("Precio: " + precio);
        txtUnidades = document.createTextNode("Unidades: " /*+ unidades*/);
        //añadimos textoParrafo a "p"
        parrafoPrecio.appendChild(txtPrecio);
        parrafoUnidades.appendChild(txtUnidades);

        //apendChild dentro del div
        d.appendChild(imagen);
        d.appendChild(boton);
        d.appendChild(parrafoPrecio);
        d.appendChild(parrafoUnidades);

        //insertamos en capa CART
        document.getElementById('cart').appendChild(d);

        //incrementamos todos los "i"
        i++;
        /* } else {
         parrafoUnidades.appendChild(txtUnidades + 1);
         }*/

    }
/*
 * micapa = docuemnt.getElementByid("cart1");
 * uds = micapa.getElementsByTagName("p")[1].firstChild().nodeValue; //porque las unidades es el segundo p
 * //accedemos así al primero hijo que tiene un nodeValue Esto es "unidades: 1"
 * //como sabemos que siempre sera igual y que queremos el ultimo. cogemos la subcadena.
 * //subcadena que va desde el 10 hasta el .lenght hago un parseint hago ++ y ya lo tengo.
 * //haremos ese substring sobre ese uds = todo...
 */



function borraImagenCart(identificador) {
    d = document.getElementById(identificador);
    //eliminamos el div contenedor de la imagen y el botón.
    d.parentNode.removeChild(d);
}