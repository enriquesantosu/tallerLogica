const form = document.querySelector("#form_ejercicio6");
const mensaje = document.querySelector("#valorMatricula");
let inputs = document.querySelectorAll(".inputMateria");
let notas = document.querySelectorAll(".valorNota");

const matricula = 1000000;

console.log(notas);

notas.forEach((inputDeNotas) => {
    inputDeNotas.addEventListener('input', (typeEvent) => {

        console.log(typeEvent.target.value)


    });
});




form.addEventListener('submit', (event6) => {
    event6.preventDefault();

    console.log('form submitted')

    let totalNotas = 0

    notas.forEach((input) => {
        console.log(totalNotas += parseFloat(input.value))
    })

    console.log(promedio = totalNotas / notas.length)


    if (promedio < 3) {
        mensaje.innerHTML = 'No hay descuento y el valor de la matricula es de 1.000.000'
    } else if (promedio > 3 && promedio <= 4) {
        mensaje.innerHTML = `
                Tiene un descuento del 5%. El valor de la matricula es de ${(matricula * 0.95)}`
    } else {
        mensaje.innerHTML = `
                Tiene un descuento del 50%. El valor de la matricula es de ${(matricula * 0.50)}`
    }


});





