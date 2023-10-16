const readline = require('readline-sync')
// tamplate swing = ${variavel}

const numero = readline.questionFloat("Digite um numero: ")

if (numero > 0) {
    //escopo local
    console.log(`O numero ${numero} é positivo`)

} else if (numero == 0) {
    console.log(`O numero ${numero} é neutro`)
    
} else {
    console.log(`O numero ${numero} é negativo`)
}