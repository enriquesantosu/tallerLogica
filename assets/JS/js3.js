let form = document.querySelector("#form_ejercicio3");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let input = document.querySelector("#input_ejercicio3").value;
    let parsedN = parseInt(input);

    let selection = document.querySelector("#select_ejercicio3").value;



    console.log(selection);
    console.log(input);

    checkAnswers = error3(selection, parsedN, input);

    if (checkAnswers) {
        if (parsedN < 10) {
            Swal.fire({
                icon: 'success',
                title: 'Felicidades! Se ha ganado un premio!',
                text: 'Por favor pase a reclamar un jugo',
            })
        }

        if (parsedN >= 18 && selection === "option3") {
            Swal.fire({
                icon: 'success',
                title: 'Felicidades! Se ha ganado un premio!',
                text: 'Por favor pase a reclamar una cerveza y una porción de pizza Hawaiana'
            })
        }

        if (parsedN >= 18 && selection === "option2") {
            Swal.fire({
                icon: 'success',
                title: 'Felicidades! Se ha ganado un premio!',
                text: 'Por favor pase a reclamar una cerveza y una porción de pizza tres carnes'
            })
        }

        if (parsedN >= 10 && parsedN <= 17) {
            Swal.fire({
                title: 'Lo sentimos! No ha ganado un premio',
                text: 'Por favor pase a reclamar su pedido'
            })
        }
    }


})


function error3(selection, parsedN, input) {
    console.log("Selection:", selection);
    console.log("ParsedN:", parsedN);
    console.log("Input:", input);

    let errorSelect = document.querySelector("#errorAlertSelect");
    let errorInput = document.querySelector("#errorAlertInput");

    let showErrorSelect = false;
    let showErrorInput = false;

    // Check selection condition
    if (selection === "option1") {
        errorSelect.classList.remove('d-none');
        showErrorSelect = true;
    }

    // Check input conditions
    if (input.trim() === "" || isNaN(parsedN) || parsedN <= 0) {
        errorInput.classList.remove('d-none');
        showErrorInput = true;
    }

    // Return false if either condition is met
    if (showErrorSelect || showErrorInput) {
        return false;
    }

    return true;
}