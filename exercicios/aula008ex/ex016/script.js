var passoInicial = document.getElementById('inputBegin')
var passoFinal = document.getElementById('inputEnd')
var passoQuant = document.getElementById('inputQuantPassos')
var res = document.getElementById('res')


function contarPassos() {   
    let passoIn = Number(passoInicial.value)
    let passoFin = Number(passoFinal.value)
    let quantPassos = Number(passoQuant.value)

    res.innerHTML = ''

    if(quantPassos <= 0) {
        res.innerHTML = 'O passo deve ser maior que zero'
    }

    if(passoIn > passoFin) {
        res.innerHTML = 'O início deve ser menor que o fim'
    }
    // while(passoIn <= passoFin) {
    // res.innerHTML += passoIn;
    // passoIn += quantPassos
    // }
    for(; passoIn <= passoFin; passoIn+=quantPassos) {
        res.innerHTML += ` &#x1F449; ${passoIn}`
    }
}