var n1 = parseFloat(prompt('Digite o primeiro número: '))
var n2 = parseFloat(prompt('Digite o segundo número: '))
var operacao = prompt('Digite a operação desejada')

if (operacao == '+'){
    var resultado = n1 + n2
} else if (operacao == '-'){
    var resultado = n1 - n2
} else if (operacao == '*' || operacao == 'x' || operacao == 'X'){
    var resultado = n1 * n2
} else if(operacao == "/"){
    var resultado = n1 / n2
} else {
    var resultado = "Operação invalida"
}

console.log(resultado)