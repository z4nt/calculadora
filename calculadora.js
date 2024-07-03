function calculadora(n1, n2, operacao) {
    switch (operacao) {
        case "+":
            return n1 + n2
        case "-":
            return n1 - n2
        case "*":
            return n1 * n2
        case "/":
            return n1 / n2
        default:
            "operação inválida"
    }
}
var n1 = parseFloat(prompt('Digite o primeiro número: '))
var n2 = parseFloat(prompt('Digite o segundo número: '))
var operacao = prompt('Digite a operação desejada')

resultado = calculadora(n1,n2,operacao)
alert(resultado)