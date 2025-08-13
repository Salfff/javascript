var numTab = window.document.getElementById('txtnum')

var res = window.document.getElementById('res')

var botao = window.document.getElementById('botao')

var tableRow = document.createElement('tr')


botao.addEventListener('click', gerarTab)


function gerarTab() {
    var num = Number(numTab.value)
    
    res.innerHTML = ''
    if(numTab.value == '') {
        alert('Informe um valor')
    } else {
        tableRow.innerHTML = ''
        for(let cont = 1; cont <= 10; cont++) {
            var soma = cont * num
            
            res.appendChild(tableRow)
            tableRow.innerHTML += ` ${cont} x ${num} = ${soma} <br>`;
        }

        
    } 
}