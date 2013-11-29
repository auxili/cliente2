function libro(titulo, autor) {
    //hacemos una propiedad titulo
    this.titulo = titulo;
    this.autor = autor;
    //nos inventamos una propiedad que no hace falta pasarla
    this.stock = 10;
}

//vamos a hacer 2 o 3 metodos.
//uno que nos saque los datos.
function mostrar() {
    miLibro.mostrar();
}
libro.prototype.mostrar = function() {
    alert("libro: " + this.titulo +
            "autor: " + this.autor +
            "stock: " + this.stock);
    /*str="libro: " + this.titulo +
            "autor: " + this.autor +
            "stock: " + this.stock;*/
    
    
}
function comprarLibro() {
    miLibro.comprar();
}
libro.prototype.comprar = function() {
    this.stock++;
}
function venderLibro() {
    miLibro.vender();
}
libro.prototype.vender = function() {
    this.stock--;
}
//ahora podría tener botones en mi web
// alta libro, comprar, ver y vender
function altaLibro() {
//pedimos los datos
    autor = prompt("dime el autor");
    titulo = prompt("titulo");
//tengo hecho el objeto con esto? Pues no. Ahora hay que llamar aln constructor
    miLibro = new libro(titulo, autor);
    //acabo de construir un objeto que además tendrá de stock 10;
    miLibreria.nuevoLibro(miLibro);
}
//esto es un metodo que saca su equivalente en su
function verJson() {
    alert(JSON.stringify(miLibro));
}
//array de objetos libros:
function libreria(nombre) {
    this.nombre = nombre;
    this.total = 0;//la primera vez que de de alta la libreria tendrá 0 libros.
    //metemos los libros: un array
    this.listaLibros = [];//en lugar de new Array así usamos notación json.
}
libreria.prototype.nuevoLibro = function(libro) {//le pasamos el libro que al dar de alta se ha construido y luego lo añadiremos a la librería
    //así que tendremos que ir a altalibro() y añadir el método que añada ese objeto a la librería miLibreria.nuevoLibro(libro)
    //en el onload del body creo la librería para que funcione (IMPORTANTE):
    //onload = miLibreria = new libreria("DAW");
    this.listaLibros[this.listaLibros.length] = libro;
    //esto lo que hace es que añadir el libro en la ultima posición de lista libros
}
libreria.prototype.totalLibros = function() {
    //alert(this.listaLibros);
    alert(JSON.stringify(miLibreria));
}
function totalLibros() {
    miLibreria.totalLibros();
}
function creaLiberia() {
    miLibreria = new libreria("daw");
}
function buscarLibros() {
    miLibreria.buscaLibros();
}
//recorrer miLIbreria
libreria.prototype.buscaLibros = function() {
    libros = "LIBROS DE MI LIBRERIA";
    for (i = 0; i < this.listaLibros.length; i++) {
        titulo = this.listaLibros[i].titulo;
        autor = this.listaLibros[i].autor;
        total = this.listaLibros[i].stock;
        libros += "\n Titulo: " + titulo +
                "\n Autor: " + autor +
                "\n Total: " + total + "\n";
    }
    alert(libros);
}
/*Esta función y su metodo son para modificar el numero de stock
 * a partir */
function promocion() {
    autores = prompt("autor: ");
    numero = prompt("numero Libros: ");
    miLibreria.promocion(autores, numero);
}
libreria.prototype.promocion = function(autores, nlibros) {
    for (i = 0; i < this.listaLibros.length; i++) {
        if (this.listaLibros[i].autor === autores) {
            this.listaLibros[i].stock = parseInt(this.listaLibros[i].stock) + parseInt(nlibros);
            alert("Stock Actual: " + this.listaLibros[i].stock);
        }
    }
}