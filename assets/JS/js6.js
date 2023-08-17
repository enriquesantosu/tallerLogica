const form = document.querySelector("#form_ejercicio6")
const mensaje = document.querySelector("#valorMatricula")

const matricula = 1000000

form.addEventListener('submit', (event6) => {
    event6.preventDefault();
    const input6 = document.querySelector("#input_numero").value;
    const parsedN6 = parseInt(input6);

    console.log(parsedN6)

    if (mostrarError5(input6, parsedN6)) {

        console.log('numero valido')


        if (parsedN6 < 3) {
            mensaje.innerHTML = 'No hay descuento y el valor de la matricula es de 1.000.000'
        } else if (parsedN6 > 3 && parsedN6 <= 4) {
            mensaje.innerHTML = `
            Tiene un descuento del 5%. El valor de la matricula es de ${(matricula * 0.95)}`
        } else {
            mensaje.innerHTML = `
            Tiene un descuento del 50%. El valor de la matricula es de ${(matricula * 0.50)}`
        }

    } else {
        console.log(-1);
    }




})

function mostrarError5(input6, parsedN6) {

    if (input6 === "") {
        errorNada = document.querySelector("#errorAlertEmpty");
        errorNada.classList.remove('d-none');
        console.log('error nada')
        return false
    } else if (parsedN6 < 0) {
        errorCantidad = document.querySelector("#errorAlertAmount");
        errorCantidad.classList.remove('d-none');
        console.log('error cantidad');
        return false
    } else if (isNaN(parsedN6)) {
        errorTipo = document.querySelector("#errorAlertType");
        errorTipo.classList.remove('d-none');
        console.log('error tipo');
        return false
    } else return true
}