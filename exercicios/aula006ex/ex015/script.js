function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fAno.value.length == 0 || fAno.value > ano || fAno.value < 1900) {
        window.alert('Insira um valor válido')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fAno.value
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Masculino'
            if(idade >= 0 && idade < 10) {
                //criançã
                img.setAttribute('src', 'criançaM.png')
            } else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemM.png')
               
            } else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultoM.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosoM.png')
            }
        } else if(fsex[1].checked) {
            genero = 'mulher'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criançaF.png')
            } else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemM.png')
            } else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultoF.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosoF.png')
            }
        }

        res.innerText = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}