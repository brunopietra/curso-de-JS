function Clicar(){
    let txtnumero = document.getElementById('txt')
    
    if(txtnumero.value.length == 0){
        alert('Preencha o campo requisitado.')
    }
    else{
        let numero = Number(txtnumero.value)
        let tabela = document.getElementById('seltab')
        tabela.innerHTML = ''

        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${numero} * ${c} = ${numero * c}`
            tabela.appendChild(item)
        }
    }
}