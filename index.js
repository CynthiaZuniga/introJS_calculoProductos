precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio
var number = document.querySelector (".cantidad");
var total = document.querySelector(".valor-total");

function sumaProductos(){
    var numberFormated = parseInt (number.innerHTML)
    number.innerHTML = numberFormated + 1
    multiplicacionProductos()
}

function restaProductos(){
    var numberFormated = parseInt (number.innerHTML)
    if (numberFormated > 0) {
    number.innerHTML = numberFormated - 1
    multiplicacionProductos()
    }
}

function multiplicacionProductos(){
    total.innerHTML = precioSpan.innerHTML * number.innerHTML
}

console.log()