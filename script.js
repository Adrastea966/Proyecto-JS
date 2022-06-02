// Simulador de carrito de compras


// Array de productos
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


let carrito = [];
let tarjeta = document.getElementById("tarjeta");

productosCarrito();

// Tarjetas en donde se visualizan los productos

function productosCarrito() {
    for (const producto of productos) {
        tarjeta.innerHTML += `<div class="card" style="width: 250px;">
        <h3> ID: ${producto.id} </h3>
        <img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class="card-title">${producto.bebida}</h4>
        <p><strong> $ ${producto.precio}</strong></p>
        <button class="btn btn-primary" id="btn${producto.id}">Comprar</button>
        </div>`;
    }

    productos.forEach(producto => {
        document.getElementById(`btn${producto.id}`).addEventListener("click", function () {
            agregarAlCarrito(producto);
        });
    });
}

// Agregar al carrito y guardar en Storage

function agregarAlCarrito(productoNuevo){
    carrito.push(productoNuevo);
    console.log(carrito);
    alert("producto: "+productoNuevo.bebida+" agregado al carro!")
    document.getElementById("carrito-comprar").innerHTML+=`

    <div class="card">
        <div class="card-body">
        ${productoNuevo.id}
        ${productoNuevo.bebida}
        ${productoNuevo.precio}
        </div>
    </div>
    `;

    sessionStorage.setItem("Productos", JSON.stringify(carrito));
}