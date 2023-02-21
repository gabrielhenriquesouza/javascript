function contar() {
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "impossível contar"
    } else{
        res.innerHTML = "contando..."
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido! Considerando passo 1')
                p = 1
        }
        if(i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} >`
            }
        } else{
            for(c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} >`
            }
        }
        res.innerHTML += "..."
    }
}

/* for(var c = 1; c <= 10; c++) {
    console.log(`passo ${c}`)
} */