function carregar () {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var date = new Date()
var hora = date.getHours()
msg.innerHTML = `Agora são ${hora} horas`


if(hora >=0 && hora < 12) {
    //Bom dia
    img.src = 'foto-manha.png';
    document.body.style.backgroundColor = '#fdbf30'
} else if(hora < 18) {
    //Boa tarde
    img.src = 'foto-tarde.png'
    document.body.style.backgroundColor = '#966060'
} else {
    //boa noite
    img.src = 'foto-noite.png';
    document.body.style.backgroundColor = '#101d1e'
}
}