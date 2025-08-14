var passoInicial = document.getElementById('inputBegin')

var passoFinal = document.getElementById('inputEnd')

var passoQuant = document.getElementById('inputQuantPassos')

var res = document.getElementById('res')


function contarPassos() {   


    let passoIn = Number(passoInicial.value)

    let passoFin = Number(passoFinal.value)

    let quantPassos = Number(passoQuant.value)


    res.innerHTML = ''


    if(passoIn <= 0 || passoFin <= 0 || quantPassos <= 0) {
        alert('Os valores devem ser maiores que zero')
       if(quantPassos <= 0) { 
        alert('O passo será considerado como 1')
        quantPassos = 1
    }
    } 


    if(passoIn < passoFin) {

        for(; passoIn <= passoFin; passoIn+=quantPassos) {

        res.innerHTML += ` &#x1F449; ${passoIn}`

    }

        res.innerHTML += '&#x1F3C1'

    } else if (passoIn > passoFin) {

        for(; passoIn >= passoFin; passoIn-=quantPassos){

            res.innerHTML += ` &#x1F449; ${passoIn}`

        }

        res.innerHTML += '&#x1F3C1'

    }

    
    // while(passoIn <= passoFin) {
    // res.innerHTML += passoIn;
    // passoIn += quantPassos
    // }
    
}