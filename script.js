// Simulador de carrito de compras

let listaBebidasPrecios = ''
let listaProductos;
listaProductos = prompt("¡Hola! escribí DO para ver los productos disponibles")

const bebidas = [{
    bebida: "Leche de coco",
    sabor: "coco",
    precioProducto: 360
}, {
    bebida: "Refresco de frutilla",
    sabor: "frutilla",
    precioProducto: 475
}, {
    bebida: "Refresco de sandía",
    sabor: "sandía",
    precioProducto: 350
}, {
    bebida: "Refresco de melón",
    sabor: "melón",
    precioProducto: 470
}, ];

bebidas.forEach((refresco) => {
    listaBebidasPrecios += refresco.bebida + "\n"
    listaBebidasPrecios += "$" + refresco.precioProducto + "\n"
})

while(listaProductos !== "DO"){
    alert("Incorrecto, ingresar DO")
    listaProductos = prompt("¡Hola! escribí DO para ver los productos disponibles")
}

alert("Estos son nuestros productos disponibles :" +  "\n" +listaBebidasPrecios)

let productos = prompt("Elige tu producto: \n 1. Leche de coco \n 2. Refresco de frutilla \n 3. Refresco de sandía \n 4. Refresco de melón  \n Escribe ESC para finalizar la compra")

function carrito() {
    switch (productos) {
        case "1":
            alert('Leche de coco se agregó al carrito');
            precioFinal(360)
            break

        case "2":
            alert('Refresco de frutilla se agregó al carrito');
            precioFinal(475)
            break

        case "3":
            alert('Refresco de sandía se agregó al carrito');
            precioFinal(350)
            break

        case "4":
            alert('Refresco de melón se agregó al carrito');
            precioFinal(470)

        default:
            alert('Aún no tenemos ese refresco en nuestra tienda :(');
    }
}

let precioTotal = 0;

function precioFinal(precio) {
    precioTotal += precio
}

do {
    carrito()
    productos = prompt("Elige tu producto: \n 1. Leche de coco \n 2. Refresco de frutilla \n 3. Refresco de sandía \n 4. Refresco de melón  \n Escribe ESC para finalizar la compra")
} while (productos != 'ESC') {
    alert('Compra finalizada. El precio total de su compra es : $' + precioTotal)
}