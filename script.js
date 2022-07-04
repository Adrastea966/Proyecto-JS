// SIMULADOR DE CARRITO DE COMPRAS

// Array de objetos
const productos = [{
    id: 1,
    bebida: "Refresco de coco",
    descripcion: "Contiene jugo de uva con trozos gelatinados de coco. Bebida de 340ml",
    imagen: "assets/image/cocolata.png",
    precio: 360,
    cantidad: 1
}, {
    id: 2,
    bebida: "Refresco de frutilla",
    descripcion: "Bebida Olipop sabor frutilla y Vainilla. Contiene 355ml",
    imagen: "assets/image/frutillalata.png",
    precio: 475,
    cantidad: 1
}, {
    id: 3,
    bebida: "Refresco de sandía",
    descripcion: "Refrescante bebida de sandía. Contiene 350ml",
    imagen: "assets/image/sandialata.png",
    precio: 350,
    cantidad: 1
}, {
    id: 4,
    bebida: "Refresco de melón",
    descripcion: "Soda de melón, contiene 350ml",
    imagen: "assets/image/melon.jpg",
    precio: 470,
    cantidad: 1
}, {
    id: 5,
    bebida: "Refresco de durazno",
    descripcion: "Refresco de durazno y coco de 340ml",
    imagen: "assets/image/durazno.jpg",
    precio: 470,
    cantidad: 1
}, {
    id: 6,
    bebida: "Refresco de uva",
    descripcion: "Refrescante bebida sabor uva. Contiene 340ml",
    imagen: "assets/image/uva.jpg",
    precio: 450,
    cantidad: 1
}, {
    id: 7,
    bebida: "Refresco de limón",
    descripcion: "Refrescante bebida de limón, se puede combinar. De 340ml",
    imagen: "assets/image/limon.jpg",
    precio: 360,
    cantidad: 1
}, {
    id: 8,
    bebida: "Refresco de kiwi",
    descripcion: "Refrescante bebida sabor Kiwi y frutilla, 355ml",
    imagen: "assets/image/kiwi.jpg",
    precio: 400,
    cantidad: 1
}];

//Varibales globales
let carrito = [];

//Función para que se rendericen los productos en el html
renderizarProductos(productos);

function renderizarProductos(productos) {
    let container = document.getElementById("contenedor-tarjetas");

    for (const producto of productos) {
        let productoBebida = document.createElement("div");

        productoBebida.innerHTML = `
                <div class="producto-bebida"> 
                <h3 class="nombre"><strong>${producto.bebida}</strong></h3>
                <img class="producto-img" src="${producto.imagen}">
                <div class="contenido">
                <div class="contenido-texto">
                <p class="descripcion"> Descripción: ${producto.descripcion}</p>
                <p> <strong>Precio: $${producto.precio}</strong></p>
                </div>
                <div class="contenido-boton"
                <button type="button" class="btn btn-outline-warning" id="btnañadir${producto.id}">AGREGAR AL CARRITO</button>
                </div>
                </div>
                </div>`;
        container.appendChild(productoBebida);
    }
    productos.forEach(producto => {
        document.getElementById(`btnañadir${producto.id}`).addEventListener("click", function () {
            agregarAlCarrito(producto);
        });
    });
}

// Agregar al carrito y guardar en sessionStorage
function agregarAlCarrito(productoNuevo) {
    let productoEncontrado = carrito.find(p => p.id == productoNuevo.id)
    let index = carrito.indexOf(productoEncontrado)
    if (index !== -1) {
        carrito[index].cantidad += 1
        actualizarCarrito()
        sessionStorage.setItem("carrito", JSON.stringify(carrito));
        document.querySelector("#precio-texto").innerText = (`
        Precio total: $ ${obtenerPrecioTotal()}`);
        Swal.fire({
            title: 'Ya está en tu carrito!',
            text: `se agregó una unidad más de ${productoNuevo.bebida} en tu carrito`,
            icon: 'warning',
            confirmButtonText: 'Aceptar'
        })
        carrito.forEach(producto => {
            document.getElementById(`btnelim${producto.id}`).addEventListener("click", function () {
                eliminarDelCarrito(producto.id);
            });
        });
    } else {
        carrito.push(productoNuevo);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Agregaste ${productoNuevo.bebida} al carrito!`,
            showConfirmButton: false,
            timer: 1500
          })
        sessionStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarCarrito()
        document.querySelector("#precio-texto").innerText = (`
        Precio total: $${obtenerPrecioTotal()}`);

        carrito.forEach(producto => {
            document.getElementById(`btnelim${producto.id}`).addEventListener("click", function () {
                eliminarDelCarrito(producto.id);
            });
        });
    }
}

// Función que renderiza en la tabla los productos agregados al carrito
function actualizarCarrito() {
    document.getElementById("tablabody").innerHTML = ''
    for (const producto of carrito) {
        document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${producto.cantidad}</td>
            <td>${producto.bebida}</td>
            <td>$${producto.precio}</td>
            <td>$${producto.precio * producto.cantidad}</td>
            <td><button class="boton-eliminar-producto btn btn-outline-danger" type="button" id="btnelim${producto.id}"><i class="fa-solid fa-trash"></i></button></td>
        </tr>`;
    }
}

// Eliminar los productos del carrito
function eliminarDelCarrito(id) {
    Swal.fire({
            title: "Estás seguro?",
            text: "Este producto se va a eliminar del carrito",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
        })
        .then((result) => {
            if (result.isConfirmed) {
                let newCarrito = carrito.filter(producto => producto.id !== id)
                carrito = newCarrito
                sessionStorage.setItem("carrito", JSON.stringify(carrito));
                actualizarCarrito();
                carrito.forEach(producto => {
                    document.getElementById(`btnelim${producto.id}`).addEventListener("click", function () {
                        eliminarDelCarrito(producto.id);
                    });
                });
                Swal.fire(
                    'Listo!',
                    'Este producto fue eliminado',
                    'success'
                )
                document.querySelector("#precio-texto").innerText = (`Precio total: $ ${obtenerPrecioTotal()}`);
            } else {
                Swal.fire("El producto no se eliminó");
            }
        });
    actualizarCarrito();
    document.querySelector("#precio-texto").innerText = (`
    Precio total: $ ${obtenerPrecioTotal()}`);
    carrito.forEach(producto => {
        document.getElementById(`btnelim${producto.id}`).addEventListener("click", function () {
            eliminarDelCarrito(producto.id);
        });
    });
}

// Calcular el total con una función
function obtenerPrecioTotal() {
    let precioTotal = 0;
    for (const producto of carrito) {
        precioTotal += producto.precio * producto.cantidad;
    }
    return precioTotal;
}

// Confirmar compra utilizando el método de evento, para cancelarlo
const confirmarCompra = () => {
    let botonComprar = document.getElementById('finalizar-compra')
    botonComprar.addEventListener('click', (event) => {
        event.preventDefault();
        if (carrito.length === 0) {
            Swal.fire({
                title: 'No hay nada que comprar!',
                text: 'Agregá productos a tu carrito',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            })
        } else {
            setTimeout(() => Swal.fire(
                'Listo!',
                'Compra realizada con éxito',
                'success'
            ),1000);
            carrito=[];
            sessionStorage.setItem("carrito", JSON.stringify(carrito));
            actualizarCarrito();
            document.querySelector("#precio-texto").innerText=(`
            Precio total: $ ${obtenerPrecioTotal()}`);
        }
    })
}

confirmarCompra()

//Optimizando el proyecto
const recomendados = ["Refresco de coco", "Refresco de frutilla", "Refresco de limón"]

const [a, b] = recomendados
console.log("Los más deseables: " + a + " y " + b);

let boton = document.getElementById("boton2")
boton.onclick = () => {
    recomendados.length !== 0 && Swal.fire({
        title: 'Productos recomendados!',
        text: 'Refresco de coco, refresco de frutilla y refresco de limón. ¿Qué esperas para probrarlos?',
        imageUrl: 'assets/image/recomendado.jpg',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'bebidas',
    })
    console.log(...recomendados)
}

// Productos recomendados usando .json local y fetch
function productosRecomendados() {
    fetch('recomendados.json')
        .then(response => response.json())
        .then(bebida => {
            bebida.forEach(bebida =>{
                document.getElementById("tarjeta2").innerHTML+=`  
                <div class="card" style="width: 300px;">
                <h3> ${bebida.title} </h3>  
                <img src="${bebida.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h4>${bebida.price}</h4>
                `
            });
        });
}

