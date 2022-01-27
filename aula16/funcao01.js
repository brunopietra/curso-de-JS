function parImpar(n){
    if(n % 2 == 0){
        return('Par')
    }
    else{
        return('Impar')
    }
}

let pI = parImpar(4)

console.log(`O numero 4 é ${pI}`)