let form2 = document.querySelector("#form_ejercicio2")

form2.addEventListener("submit", (event2) => {
    event2.preventDefault();

    n2 = document.querySelector("#input_numero2").value;
    parsedN2 = parseInt(n2);

    isValid2 = revisarNumero(parsedN2);

    if (isValid2) {
        if (parsedN2 === 0) {
            Swal.fire({
                icon: 'error',
                iconColor: '#2bff00',
                title: 'Oops...',
                text: 'Something went wrong!',
                background: `
                    rgba(76, 196, 49, 0.56)
                    url("/img/kermit.gif")
                    left top
                    no repeat
                `
            })
        } else if (parsedN2 % 2 === 0) {
            Swal.fire({
                title: 'El numero es PAAAARRRRR!!!!',
                width: 600,
                padding: '3em',
                color: '#716add',
                backgroundColor: '##f5a742',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
            })
        } else {
            Swal.fire({
                title: 'El numero es IMPAAAARRRRR!!!!',
                width: 600,
                padding: '3em',
                color: '#716add',
                backgroundColor: '##f5a742',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
            })
        }


    } else {
        Swal.fire({
            icon: 'error',
            iconColor: '#2bff00',
            title: 'Oops...',
            text: 'Something went wrong!',
            background: `
                rgba(76, 196, 49, 0.56)
                url("/img/kermit.gif")
                left top
                no repeat
            `
        })
    }

})


function revisarNumero(parsedN2) {
    if (isNaN(parsedN2)) {
        return false;
    } else
        return true;
}