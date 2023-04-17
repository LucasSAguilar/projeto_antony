
let quantidadeDados = 1
let numeroDoDado = 20



function jogarDados(quantidadeDados, numeroDado) {
    for (let c = 1; c <= quantidadeDados; c++){
        let numeroGerado = Math.floor(Math.random() * numeroDado + 1)

        console.log(numeroGerado);
    }
    }

    jogarDados(quantidadeDados, numeroDoDado)
