function Clicar(){
    let txtI = document.getElementById('inicio')
    let txtF = document.getElementById('fim')
    let txtP = document.getElementById('passos')

    if(txtI.value.length == 0 || txtF.value.length == 0 || txtP.value.length == 0){
        alert('Preencha todos os campos.')
    }
    else if(txtP.value <= 0){
        alert('Valor inadequado para passos.')
    }
    
    else{
        let I = Number(txtI.value)
        let F = Number(txtF.value)
        let P = Number(txtP.value)
        let res = document.getElementById("resultado")

        res.innerHTML = ''
        
        if(I < F){
            for(let c = I; c <= F; c+= P){
                res.innerHTML += ` ${c} 👉`
            }
        }
        else{
            for(let c = I; c >= F; c-= P){
                res.innerHTML += ` ${c} 👉`
            }
        }

        res.innerHTML += ` 🏁`
    }
}