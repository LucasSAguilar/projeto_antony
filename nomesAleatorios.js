let nome = [
    "Vaarch",
    "Kierkegaar",
    "Vygosh",
    "Morphens",
    "Luther",
    "Robinson",
    "Yarkchar",
    "Dward",
    "Browa",
    "Morth",
]

let nomeCompleto = [
    "",
    "",
    "",
]

function gerarNome (lista) {


    for(let c = 0; c <= 2; c++){
    nomeCompleto[c] = lista[Math.floor(Math.random() * lista.length)]
    }
    return nomeCompleto
}

let nomes = gerarNome(nome)

console.log(`Seu nome será: ${nomes[0]} ${nomes[1]} ${nomes[2]}`);