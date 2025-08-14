//DOM
let numero = document.getElementById('txtnum')

let select = document.getElementById('select')

let adicionarBotao = document.getElementById('addButton')

let finalizarBotao = document.getElementById('endButton')

let res = document.getElementById('res')

let option = document.createElement('option')


//Event linesners
adicionarBotao.addEventListener('click', adicionar)
finalizarBotao.addEventListener('click', finalizar)


//vars
let vetor = [];

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {


    if(isNumber(numero.value) && !inList(numero.value, vetor)) {
        vetor.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        select.appendChild(item)
        res.innerHTML = ''
    } else {

        alert('Valor inválido ou já encontrado na lista')
       
    }
    numero.value = ''
    
}
    


function finalizar() {
    if(vetor.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = vetor.length
        vetor.sort()
        let menorValor = vetor[0]
        let maiorValor = vetor[total-1]
        let soma = 0
        let media;
        
        for(let pos in vetor) {
            soma += vetor[pos]
        
        }

        media = soma / vetor.length

        res.innerHTML = ''
        res.innerHTML = `<p>Ao todo temos ${total} de elementos no vetor.</p>`
        res.innerHTML += `<p> O menor valor do vetor é ${menorValor}.`
        res.innerHTML += `<p>O maior valor do vetor é ${maiorValor}.</p>`
        res.innerHTML += `<p>A soma dos valores do vetor é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores do vetor é ${media}` 

    }
}