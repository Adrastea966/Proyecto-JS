// Simulador de carrito de compras

//array de bebidas
const productos = [{
    id: 1,
    bebida: "Refresco de coco",
    descripcion: "Refrescante bebida de 340ml",
    imagen: "assets/image/cocolata.png",
    precio: 360
}, {
    id: 2,
    bebida: "Refresco de frutilla",
    descripcion: "Refrescante bebida de 340ml",
    imagen: "assets/image/frutillalata.jpg",
    precio: 475
}, {
    id: 3,
    bebida: "Refresco de sandía",
    descripcion: "Refrescante bebida de 340ml",
    imagen: "assets/image/sandialata.png",
    precio: 350
}, {
    id: 4,
    bebida: "Refresco de melón",
    descripcion: "Refrescante bebida de 340ml",
    imagen: "assets/image/melon.jpg",
    precio: 470
}, {
    id: 5,
    bebida: "Refresco de durazno",
    descripcion: "Refrescante bebida de 340ml",
    imagen: "assets/image/durazno.jpg",
    precio: 470
}, {
    id: 6,
    bebida: "Refresco de uva",
    descripcion: "Refrescante bebida de 340ml",
    imagen: "assets/image/uva.jpg",
    precio: 450
}, {
    id: 7,
    bebida: "Refresco de limón",
    descripcion: "Refrescante bebida de 340ml",
    imagen: "assets/image/limon.jpg",
    precio: 360
}, {
    id: 8,
    bebida: "Refresco de kiwi",
    descripcion: "Refrescante bebida de 340ml",
    imagen: "assets/image/kiwi.jpg",
    precio: 400
}];


// función para mostrar los productos en el HTML

let carrito = [];
let tarjeta = document.getElementById("tarjeta");

productosCarrito();

function productosCarrito() {
    for (const producto of productos) {
        tarjeta.innerHTML += `<div class="card" style="width: 250px;">
        <h3> ID: ${producto.id} </h3>
        <img src="${producto.imagen}" width="200" class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class="card-title">${producto.bebida}</h4>
        <p><strong> $ ${producto.precio}</strong></p>
        <button class="btn btn-primary" id="btn${producto.id}">Comprar</button>
        </div>`;
    }

    productos.forEach(producto => {
        document.getElementById(`btn${producto.id}`).addEventListener("click", function () {
            seAgregoAlCarrito(producto);
        });
    });
}

function seAgregoAlCarrito(nuevo) {
    carrito.push(nuevo);
    alert("Este producto se agregó al carrito")
}


//funcion para finalizar la compra

let precioTotal = 0;
function precioFinal(precio) {
    precioTotal += precio
}

