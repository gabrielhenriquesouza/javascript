
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora > 0 && hora < 12){
        document.body.style.background = 'rgb(25, 184, 184)'
        document.getElementById('bola').style.background = 'rgb(25, 184, 184)'
    } else{
        if (hora >= 12 && hora <= 18){
            document.body.style.background = 'rgb(102, 73, 73)'
            document.getElementById('bola').style.background = 'rgb(102, 73, 73)'
        } else{
            document.body.style.background = 'black'
            document.getElementById('bola').style.background = 'black'
        }
    }
