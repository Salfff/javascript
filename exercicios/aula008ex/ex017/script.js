var numTab = window.document.getElementById('txtnum')



var botao = window.document.getElementById('botao')



var select = document.getElementById('select')


botao.addEventListener('click', gerarTab)


function gerarTab() {

    var num = Number(numTab.value)
    
    select.innerHTML = ''


    if(numTab.value.trim() == '') {
        alert('Informe um valor')
    } else {
   
        for(let cont = 1; cont <= 10; cont++) {
            
            var option = document.createElement('option')
            var soma = cont * num
            
            option.text = ` ${cont} x ${num} = ${soma}`;
            select.appendChild(option)
            
            option.setAttribute()
        }

        
    } 
}