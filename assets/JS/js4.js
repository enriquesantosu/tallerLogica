let form = document.querySelector("#formMenu");
let input = document.querySelector("#formInput")
let button = document.querySelector("#formButton")

console.log(form)


let menu = [
    {
        "nombre": "Hamburgesa",
        "precio": 25.000
    },
    {
        "nombre": "Perro Caliente",
        "precio": 15.000
    },
    {
        "nombre": "Sopa",
        "precio": 12.000
    },
    {
        "nombre": "Costillas",
        "precio": 32.000
    },
    {
        "nombre": "Carne Asada",
        "precio": 30.000
    },
    {
        "nombre": "Frijolada",
        "precio": 22.000
    },
    {
        "nombre": "Pollo",
        "precio": 22.000
    },
    {
        "nombre": "Pizza",
        "precio": 12.000
    },
    {
        "nombre": "Tacos",
        "precio": 18.500
    },
    {
        "nombre": "Gaseosa",
        "precio": 5.000
    },
    {
        "nombre": "Postre",
        "precio": 7.000
    },
    {
        "nombre": "Chicle",
        "precio": 3.000
    }
]

let totalPedido = []

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputValue = input.value;
    const menuItem = menu.find(elemento => elemento.nombre === inputValue);

    if (inputValue.toLowerCase() === 'pagar') {

        let totalPagar = 0;

        totalPedido.forEach((precio) => {
            totalPagar += precio;

        });

        Swal.fire('Su total a pagar es de: ' + totalPagar)
        totalPedido = [];
        form.reset()

    } else if (menuItem) {
        console.log("item found:", menuItem.nombre);
        console.log(menuItem.precio);
        console.log(typeof (menuItem.precio));
        totalPedido.push(menuItem.precio);
        console.log(totalPedido);
        Swal.fire('Se agrego el producto a su orden')
        form.reset()
    } else {
        console.log("item not found");
        Swal.fire('No se encontró este producto. Intente de nuevo.')
        form.reset()
    }

})

