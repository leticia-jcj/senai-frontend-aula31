const readline = require('readline-sync')
let situacao = ""


const nome = readline.question("Nome: ")
const nota1 = readline.questionFloat("Nota 1: ")
const nota2 = readline.questionFloat("Nota 2: ")
const nota3 = readline.questionFloat("Nota 3: ")
const nota4 = readline.questionFloat("Nota 4: ") 
const media = (nota1 + nota2 + nota3 + nota4) / 4

 

if(media >= 7){
    situacao = "Aprovado"

} else if(media >= 4){
    situacao = "Recuperação"

} else{
    situacao = "Reprovado"

}

console.clear()
 
console.log("---BOLETIM---")
console.log(`Aluno: ${nome}`)
console.log(`Media: ${media}`)
console.log(`Situacao: ${situacao}`)