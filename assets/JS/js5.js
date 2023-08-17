let formulario = document.querySelector("#form_ejercicio5");
let input5 = document.querySelector("#input_numero5").value;
let parsedN5 = parseInt(input5);

formulario.addEventListener("submit", (event5) => {
    event5.preventDefault();

    let longitud = document.querySelector("#input_tabla").value

    let input5 = document.querySelector("#input_numero5").value;
    let parsedN5 = parseInt(input5);

    if (mostrarError5(input5, parsedN5)) {
        console.log('numero valido ingresado')

        crearTabla(parsedN5, longitud)
    }


});



function mostrarError5(input5, parsedN5) {

    if (input5 === "") {
        errorNada = document.querySelector("#errorAlertEmpty");
        errorNada.classList.remove('d-none');
        console.log('error nada')
        return false
    } else if (parsedN5 <= 0) {
        errorCantidad = document.querySelector("#errorAlertAmount");
        errorCantidad.classList.remove('d-none');
        console.log('error cantidad');
        return false
    } else if (isNaN(parsedN5)) {
        errorTipo = document.querySelector("#errorAlertType");
        errorTipo.classList.remove('d-none');
        console.log('error tipo');
        return false
    } else return true
}


// function crearTabla(parsedN5) {

//     tabla = document.querySelector("#tablaNumeros")
//     suma = document.querySelector("#sumaNumeros")

//     tabla.innerHTML = ''

//     for (let i = 0; i <= 50; i++) {
//         tabla.innerHTML += `
//         <li>${parsedN5} * ${i} = ${parsedN5 * i}</li>  
//         `
//     }

//     let sumando = 0

//     for (let i = 0; i <= 50; i++) {

//         (parsedN5 * i) += sumando

//     }

//     suma.innerHTML = `
//     la suma de las multiplicaciones es ${sumando}
//     `

// }


function crearTabla(parsedN5, longitud) {

    tabla = document.querySelector("#tablaNumeros");
    suma = document.querySelector("#sumaNumeros");

    tabla.innerHTML = '';

    let sumando = 0; // Initialize sumando outside the loop

    for (let i = 0; i <= longitud; i++) {
        tabla.innerHTML += `
        <li>${parsedN5} * ${i} = ${parsedN5 * i}</li>  
        `;

        sumando += parsedN5 * i; // Add the result to sumando
    }

    suma.innerHTML = `
    La suma de las multiplicaciones es ${sumando}
    `;
}