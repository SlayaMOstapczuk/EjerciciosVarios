function cambiarColor() {
    console.log("siempre fuiste y siempre serás el mejor");

    //traer el elemento/etiqueta html
    //let tituloH1 = document.getElementById('titulo');

    let tituloH1 = document.querySelector('#titulo');

    console.log(tituloH1.innerHTML);
    tituloH1.className = "text-warning display-4";
};

function verMas() {
    console.log("dentro de vermas");
    let articulos = document.getElementsByTagName('article');

    //elemento padre
    console.log(articulos[0]);
    let boton = document.querySelector('#btnVerMas');
    if (boton.innerHTML === "Ver más...") {
        //crear nuevos elementos

        //camino seguro y largo

        //1) creo elemento
        let parrafo = document.createElement('p'); //etiqueta <p></p>

        //2)trabajar la etiqueta
        parrafo.innerHTML = "Slaya siempre fue una gran tipo! sincero e increible";
        parrafo.className = "lead";

        //3)agregar nuevo nodo a su padre
        articulos[0].appendChild(parrafo);

        boton.innerHTML = "Ocultar";
        boton.className = "btn btn-success";

    } else {
        console.log("desde el else");
        //borrar elementos del  html
        if (articulos[0].hasChildNodes() && articulos[0].children.length > 2) {
            articulos[0].removeChild(articulos[0].children[2]);
            boton.innerHTML = "Ver más...";
            boton.className = "btn btn-primary";

        }
    }


}