function libro(titulo, autor){
    //hacemos una propiedad titulo
    this.titulo = titulo;
    this.autor = autor;
    //nos inventamos una propiedad que no hace falta pasarla
    this.stock = 10;
}

//vamos a hacer 2 o 3 metodos.
//uno que nos saque los datos.

libro.prototype.mostrar = function(){
    alert("libro: " + this.titulo + 
          "autor: " + this.autor +
          "stock: " + this.stock);
}

libro.prototype.comprar = function(){
    this.stock ++;
}

libro.prototype.vender = function(){
    this.stock --;
}

//ahora podría tener botones en mi web
// alta libro, comprar, ver y vender

function altaLibro (){
//pedimos los datos
    autor = prompt("dime el autor");
    titulo = prompt("titulo");
//tengo hecho el objeto con esto? Pues no. Ahora hay que llamar aln constructor
    miLibro = new libro(titulo, autor);
    //acabo de construir un objeto que además tendrá de stock 10;
    miLibreria.nuevoLibro(miLibro);
}
function verLibro (){
    miLibro.mostrar();
}

function comprarLibro(){
    miLibro.comprar();
}
function venderLibro(){
    miLibro.vender();
}
//esto es un metodo que saca su equivalente en su
function verJson(){
    alert(JSON.stringify(miLibro));
}
//array de objetos libros:
function libreria(nombre){
    this.nombre = nombre;
    this.total = 0;//la primera vez que de de alta la libreria tendrá 0 libros.
    //metemos los libros: un array
    this.listaLibros = [];//en lugar de new Array así usamos notación json.
}
libreria.prototype.nuevoLibro= function(libro){//le pasamos el libro que al dar de alta se ha construido y luego lo añadiremos a la librería
    //así que tendremos que ir a altalibro() y añadir el método que añada ese objeto a la librería miLibreria.nuevoLibro(libro)
    //en el onload del body creo la librería para que funcione (IMPORTANTE):
    //onload = miLibreria = new libreria("DAW");
    this.listaLibros[this.listaLibros.length]=libro;
    //esto lo que hace es que añadir el libro en la ultima posición de lista libros
    
}
libreria.prototype.totalLibros = function(){
    //alert(this.listaLibros);
    alert(JSON.stringify(miLibreria));
}
function totalLibros(){
    miLibreria.totalLibros();
}
function creaLiberia(){
    miLibreria = new libreria("daw");
}

//recorrer miLIbreria
function buscaLibros(){
    for(i=0;i<this.listaLibros.length;i++){
        this.listaLibros[i].titulo = busca;
        alert(busca);
    }
}