const data = new Date()
const hora = data.getHours()
const minutos = data.getMinutes()

//Horas
const horario = document.querySelector('div#horario')

if(hora == 1){
    horario.innerText = `São ${hora} hora e ${minutos} minutos.`

}
if(minutos == 1){
    horario.innerText = `São ${hora} horas e ${minutos} minuto.`

}
if(hora == 1 && minutos == 1){
    horario.innerText = `São ${hora} hora e ${minutos} minuto.`

}
else{
    horario.innerText = `São ${hora} horas e ${minutos} minutos.`

}

//Imagens e cor de fundo
const imagem = document.querySelector('div#imagem')

if(hora < 12 && hora > 5){
    imagem.innerHTML = '<img class="img" src="img/manha.jpg" alt="Imagem da manha"></img>'
    document.body.style.background = 'yellow'

}
else if(hora < 19){
    imagem.innerHTML = '<img class="img" src="img/tarde.jpg" alt="Imagem da tarde"></img>'
    document.body.style.background = 'orange'

}
else{
    imagem.innerHTML = '<img class="img" src="img/noite.jpg" alt="Imagem da noite"></img>'
    document.body.style.background = 'black'
    
}