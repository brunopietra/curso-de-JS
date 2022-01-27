function verificar(){
    //Variáveis de Ano
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    
    //Variável de Sexo
    var masc = document.getElementById('masc')
    var fem = document.getElementById('fem')

    //Variável de resultado
    var res = document.getElementById('resultado')
    
    if(fano.value <= 0 || fano.value > ano){
        res.innerText = '[ERRO: DIGITE NOVAMENTE]'
        res.style.color = 'red'
    }
    else{
        if((ano - fano.value) < 60){
        //novo
            res.innerHTML = `<p>Anos de vida: ${ano - fano.value}</p>`
            if(masc.checked){
                res.innerHTML += '<img class="imagem" src="img/hJovem.jpg" alt="imagem de homem jovem"></img>'
            }
            else{
                res.innerHTML += '<img class="imagem" src="img/mJovem.jpg" alt="imagem de mulher jovem"></img>'
            }
        
    }
        else{
            //velho
            res.innerHTML = `<p>Anos de vida: ${ano - fano.value}</p>`
            if(masc.checked){
                res.innerHTML += '<img class="imagem" src="img/hVelho.jpg" alt="imagem de homem velho"></img>'
            }
            else{
                res.innerHTML += '<img class="imagem" src="img/mVelha.png" alt="imagem de mulher velha"></img>'
            }

        }
        
    }
}
