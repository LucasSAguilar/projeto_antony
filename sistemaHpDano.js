const players = [

    {
        nome: "Lucas",
        hp: 50
    },
    {
        nome: "Pedro",
        hp: 30
    },
    {
        nome: "Leo",
        hp: 80
    }
]

// Insira aqui as informações:

let alvo = "Lucas"
let dano = 10



function tomarDano (lista, personagem, dano){
for(let contador = 0; contador <= lista.length; contador++){

    if (personagem === lista[contador].nome){
        alvoPosDano = lista[contador]
        alvoPosDano.hp = lista[contador].hp - dano
        return alvoPosDano.hp
    }

    if (contador = lista.length && personagem != lista[contador].nome){
        console.log(`Me parece que não existe nenhum jogador com esse nome: ${personagem}`);
        return false
    }
    
}
}
let personagemAposDano = (tomarDano(players, alvo, dano))
if (personagemAposDano != false){
console.log(`Me parece que o ${alvo} levou ${dano} de dano, ficando com: ${personagemAposDano} de HP`);
console.log(`Vida anterior: ${personagemAposDano + dano}`);}