function somar(){
    var tn1 = window.document.getElementById('txtn1') //seleciona o elemento por id
    var tn2 = window.document.querySelector('input#txtn2') // seleciona o elemento por seletor
    var res = window.document.getElementById('res') //seleciona o elemento por id
    var n1 = Number(tn1.value) //transforma o valor em um inteiro(numero)
    var n2 = Number(tn2.value) //transform o valor em um inteiro(numero)
    var s = n1 + n2 //faz a soma com o resultado dos dois valores de tn1 e tn2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}` //exibe na tela o resultado da soma, trazendo tambem as formatações de cada elemento
}