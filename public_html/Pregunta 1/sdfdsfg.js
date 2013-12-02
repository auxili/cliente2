function quitar_ingredientes() {
    if (document.getElementById("elemento")) {
        var elemento = document.getElementsByTagName("img");

        for (var i = 1; i < elemento.length; i++) {
            elemento[i].parentNode.removeChild(elemento[i]);
        }
    }
}



var precio = 10;
function pon_ingredientes() {
    quitar_ingredientes();

    parte = document.getElementById("precio");
    parte.parentNode.removeChild(parte);
    var euros = 10;

    if (document.getElementById("champis").checked) {
        var champ = document.createElement("img");
        champ.setAttribute("id", "elemento");
        champ.setAttribute("src", "champis.png");
        champ.style.position = "absolute";
        champ.style.left = "400px";
        champ.style.top = "150px";

        document.getElementById("pizza").appendChild(champ);
        euros = euros + 1;
    }

    if (document.getElementById("salami").checked) {
        var salam = document.createElement("img");
        salam.setAttribute("id", "elemento");
        salam.setAttribute("src", "salami.png");
        salam.style.position = "absolute";
        salam.style.left = "400px";
        salam.style.top = "150px";


        document.getElementById("pizza").appendChild(salam);
        euros = euros + 2;
    }
    if (document.getElementById("olivas").checked) {
        var oliva = document.createElement("img");
        oliva.setAttribute("id", "elemento");
        oliva.setAttribute("src", "olivas.png");
        oliva.style.position = "absolute";
        oliva.style.left = "400px";
        oliva.style.top = "150px";


        document.getElementById("pizza").appendChild(oliva);

        euros = euros + 3;
    }
    if (document.getElementById("huevo").checked) {
        var huevo = document.createElement("img");
        huevo.setAttribute("id", "elemento");
        huevo.setAttribute("src", "huevo.png");
        huevo.style.position = "absolute";
        huevo.style.left = "400px";
        huevo.style.top = "150px";

        document.getElementById("pizza").appendChild(huevo);
        euros = euros + 4;
    }

    parrafo = document.createElement("p");
    txto = document.createTextNode(euros);
    parrafo.appendChild(txto);
    parrafo.id = "precio";
    document.getElementById("importe").appendChild(parrafo);

}



//----------------------------- Funcion de carga de la pagina
//crea la imagen de la base de la pizza
//poner el total de la base 10 con tamaño de letra 35px (propiedad css fontsize)


window.onload = function() {

    var pizza = document.createElement("img");
    pizza.setAttribute("src", "pizza.jpg");
    pizza.style.position = "absolute";
    pizza.style.left = "400px";
    pizza.style.top = "150px";
    document.getElementById("pizza").appendChild(pizza);

    parrafo = document.createElement("p");
    parr2 = document.createElement("p");
    txto2 = document.createTextNode("precio:");
    txto = document.createTextNode(precio);
    parr2.appendChild(txto2);
    parrafo.appendChild(txto);
    parrafo.id = "precio";
    document.getElementById("importe").appendChild(parr2);
    document.getElementById("importe").appendChild(parrafo);

}

