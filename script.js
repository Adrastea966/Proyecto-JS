// Simulador de carrito de compras

let listaBebidasPrecios = ''
let listaProductos;
listaProductos = prompt("¡Hola! escribí DO para ver nuestros productos")

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
}, {
    bebida: "Refresco de durazno",
    sabor: "durazno",
    precioProducto: 470
}, {
    bebida: "Refresco de uva",
    sabor: "uva",
    precioProducto: 450
},{
    bebida: "Gaseosa de ananá",
    sabor: "ananá",
    precioProducto: 380
}, {
    bebida: "Leche de almendras",
    sabor: "almendras",
    precioProducto: 500
}, {
    bebida: "Jugo de banana",
    sabor: "banana",
    precioProducto: 350
},];

//forEach()

bebidas.forEach((refresco) => {
    listaBebidasPrecios += refresco.bebida + "\n"
    listaBebidasPrecios += "$" + refresco.precioProducto + "\n"
})

while (listaProductos !== "DO") {
    alert("Incorrecto, ingresar DO")
    listaProductos = prompt("¡Hola! escribí DO para ver nuestros productos")
}
alert("Lista de nuestros productos :" + "\n" + listaBebidasPrecios)

// filter()

const nombres = [
    "leche de coco",
    "refresco de durazno",
    "refresco de uva",
    "gaseosa de ananá",
    "leche de almendras",
    "jugo de banana",
    "refresco de frutilla"
];

function buscarBebidas(nombres, buscar) {
    let bebidasDeseadas = nombres.filter(function (bebida) {
        return bebida.includes(buscar);
    })
    return bebidasDeseadas;
}

if (buscarBebidas) {
    alert("Productos recomendados: " + buscarBebidas(nombres, "l"));
}

// find()

let encontrar = prompt("Según la lista que viste, seleccioná el producto que desees y mira si está en stock o no")
const arrayBebidas = ["Leche de coco", "Refresco de frutilla", "Refresco de sandía", "Refresco de melón", "Leche de almendras"]
const found = arrayBebidas.find(el => {
    el
})

if (encontrar == "Leche de coco") {
    alert("Sí, tu producto está en stock");
} else if (encontrar == "Refresco de frutilla") {
    alert("Sí, tu producto está en stock");
} else if (encontrar == "Refresco de sandía") {
    alert("Sí, tu producto está en stock");
} else if (encontrar == "Refresco de melón") {
    alert("Sí, tu producto está en stock");
} else if (encontrar == "Leche de almendras") {
    alert("Sí, tu producto está en stock");
}  else {
    alert("Lo sentimos, no tenemos stock de este producto");
}

//function

let productos = prompt("Comprar productos en stock: \n 1. Leche de coco \n 2. Refresco de frutilla \n 3. Refresco de sandía \n 4. Refresco de melón  \n 5. Leche de almendras \n Escribe ESC para finalizar la compra")

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
        
        case "5":
            alert('Leche de almendras se agregó al carrito');
            precioFinal(500)

        default:
            alert('Aún no tenemos ese refresco en nuestra tienda :(');
    }
}

let precioTotal = 0;

function precioFinal(precio) {
    precioTotal += precio
}

while (productos != 'ESC') {
    carrito()
    productos = prompt("Comprar productos en stock: \n 1. Leche de coco \n 2. Refresco de frutilla \n 3. Refresco de sandía \n 4. Refresco de melón \n 5. Leche de almendras \n Escribe ESC para finalizar la compra")
}
alert('Compra finalizada. El precio total de su compra es : $' + precioTotal)