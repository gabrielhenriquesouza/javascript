function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'masculino'
        } else {
            genero = 'feminino'
        }
        res.style.textAlign = 'center'
        if (idade >= 0 && idade < 10){
            res.innerHTML = `Detectamos uma criança do sexo ${genero} com ${idade} anos!`
        } else if (idade < 21) {
            res.innerHTML = `Detectamos um jovem do sexo ${genero} com ${idade} anos!`
        } else if (idade < 50) {
            res.innerHTML = `Detectamos um adulto do sexo ${genero} com ${idade} anos!`
        } else {
            res.innerHTML = `Detectamos um idoso do sexo ${genero} com ${idade} anos!`
        }      
    }
}