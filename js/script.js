const conta = document.querySelector('#conta')
const preResultado = document.querySelector('#pre-resultado')
let um = document.getElementById('um')
let dois = document.getElementById('dois')
let tres = document.getElementById('tres')
let quatro = document.getElementById('quatro');
let cinco = document.getElementById('cinco');
let seis = document.getElementById('seis');
let sete = document.getElementById('sete');
let oito = document.getElementById('oito');
let nove = document.getElementById('nove');
let zero = document.getElementById('zero');

let percent = document.getElementById('percent');
let multiplicacao = document.getElementById('multiplicacao');
let divisao = document.getElementById('divisao');
let adicao = document.getElementById('adicao');
let subtracao = document.getElementById('subtracao');
let erase = document.getElementById('erase')
let virgula = document.getElementById('virgula')

let igual = document.getElementById('resultado')

let operadores = [
    percent,
    multiplicacao,
    divisao,
    adicao,
    subtracao,
]


const aparecerNum = document.getElementById('teste1');
let clean = document.querySelector('#clean');

let botoes = [
    um,
    dois,
    tres,
    quatro,
    cinco,
    seis,
    sete,
    oito,
    nove,
    zero,
]

for (let i in botoes) {
    function exibirBotoes() {
        if (botoes[i].value) {
            conta.value += botoes[i].value;
        }
    }
    botoes[i].addEventListener('click', exibirBotoes)


}
function apagarTudo() {
    conta.value = "";
}

clean.addEventListener('click', apagarTudo)



for (let i in operadores) {
    operadores[i].addEventListener('click', function () {
        let inputIsplit = conta.value.split('');
        if (inputIsplit != '') {
            conta.value += operadores[i].innerText;


        }
    })


};


virgula.addEventListener('click', function () {
    let aparecerUmavirgula = conta.value.split('');
    if (parseInt(aparecerUmavirgula[aparecerUmavirgula.length - 1])) {
        for (let i in operadores) {
            if (conta.value.includes(operadores[i].innerText)) {
                conta.value += virgula.innerText
            }
        }
        if (!conta.value.includes('.')) {
            conta.value += virgula.innerText;
        }
    }
})

function apagarNum() {
    let resultados = conta.value.slice(0, -1)
    conta.value = resultados
}
erase.addEventListener('click', apagarNum)



igual.addEventListener('click', () => {

    let arNumDivisao = conta.value.split('÷')
    let arNumMais = conta.value.split('+')
    let arNumMenos = conta.value.split('-')
    let arNumVezes = conta.value.split('X')
    let arNumPorcent = conta.value.split('%')
    console.log(arNumDivisao, arNumMais, arNumVezes, arNumMenos)

    let resultadoFinal = 0;

    if (arNumDivisao.length > 1) {
        console.log('divisao')
        resultadoFinal = parseFloat(arNumDivisao[0]) / parseFloat(arNumDivisao[1])
    }
    if (arNumMais.length > 1) {
        console.log('mais')
        resultadoFinal = parseFloat(arNumMais[0]) + parseFloat(arNumMais[1])
    }
    if (arNumMenos.length > 1) {
        console.log('menos')
        resultadoFinal = parseFloat(arNumMenos[0]) - parseFloat(arNumMenos[1])
    }
    if (arNumVezes.length > 1) {
        console.log('vezes')
        resultadoFinal = parseFloat(arNumVezes[0]) * parseFloat(arNumVezes[1])
    }
    if (arNumPorcent.length > 1) {
        console.log('vezes')
        resultadoFinal = (parseFloat(arNumPorcent[0]) * parseFloat(arNumPorcent[1])) / 100
    }


    conta.value = resultadoFinal;

})

