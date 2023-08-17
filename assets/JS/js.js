let form = document.querySelector("#form_ejercicio1")
let form2 = document.querySelector("#form_ejercicio2")
let input = document.querySelector("#input_numero")


let button = document.querySelector("#button_submit")
let modalElement = document.querySelector("#exampleModal");


button.addEventListener("click", (event) => {
    console.log("Form submitted!");

    let n = document.querySelector("#input_numero").value;
    let parsedN = parseInt(n);
    console.log(parsedN);

    isValid = mostrarError(parsedN)

    if (isValid) {
        console.log("Form valid!");
        console.log(parsedN);

        let suma = 0;
        for (let x = parsedN; x >= 1; x--) {
            suma += x;
        }

        Swal.fire({
            title: `la suma de los numeros de 1 a ${parsedN} equivale a ${suma}`,
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
        })



    } else {

        console.log(-1)

    }

    event.target.input.reset()

});


function mostrarError(parsedN) {
    if (parsedN === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese algo',
        })
        return false
    } else if (isNaN(parsedN)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un numero',
        })
        return false
    } else if (parsedN <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un numero mayor a 0',
        })
        return false
    } else {
        return true
    }
};
