// Simulador de carrito de compras

let productos = prompt("Elige tu producto: \n 1. Leche de coco \n 2. Refresco de frutilla \n 3. Refresco de sandía \n 4. Refresco de melón  \n ESC para finalizar la compra")

function carrito() {
    switch (productos) {
        case "1":
            alert('Leche de coco se agregó al carrito');
            precioFinal(280)
            break

        case "2":
            alert('Refresco de frutilla se agregó al carrito');
            precioFinal(350)
            break

        case "3":
            alert('Refresco de sandía se agregó al carrito');
            precioFinal(300)
            break

        case "4":
            alert('Refresco de melón se agregó al carrito');
            precioFinal(450)

        default:
            alert('Aún no tenemos ese refresco en nuestra tienda :(');
    }
}

// Le sumo una cantidad al valor del precio total.

let precioTotal = 0;
function precioFinal(precio) {
    precioTotal += precio
}

do{
    carrito()
    productos = prompt("Elige tu producto: \n 1. Leche de coco \n 2. Refresco de frutilla \n 3. Refresco de sandía \n 4. Refresco de melón  \n ESC para finalizar la compra")
}while (productos != 'ESC') {
    alert('El precio total de tu compra es: ' + precioTotal)
}
    

