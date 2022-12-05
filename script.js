var jogadorSelcionado = document.getElementById("jogadorSelecionado")
var resultado = document.getElementById("resultado")
var jogador, vencedor = null;

mudarJogador("X")

function mudarBotao(id){
    var quadrado = document.getElementById(id)
    
    if (vencedor != null) {
        return;
    }

    if (quadrado.innerHTML !== "-") {
        return;
    }

    quadrado.innerHTML = jogador
    quadrado.style.color = "black"

    if (jogador == "X") {
        jogador = "O"
    } else {
        jogador = "X"
    }

    mudarJogador(jogador)
    checarVencedor()
}

function mudarJogador(valor){
    jogador = valor
    jogadorSelcionado.innerHTML = jogador
}

function checarVencedor(){
    let quadrado1 = document.getElementById("btn1-1")
    let quadrado2 = document.getElementById("btn1-2")
    let quadrado3 = document.getElementById("btn1-3")
    let quadrado4 = document.getElementById("btn2-1")
    let quadrado5 = document.getElementById("btn2-2")
    let quadrado6 = document.getElementById("btn2-3")
    let quadrado7 = document.getElementById("btn3-1")
    let quadrado8 = document.getElementById("btn3-2")
    let quadrado9 = document.getElementById("btn3-3")

    //CHECAR SEQUENCIA - LINHAS
    if (checarSequencia(quadrado1, quadrado2, quadrado3)){
        mudarCor(quadrado1, quadrado2, quadrado3)
        mudarVencedor(quadrado1.innerHTML)
    }

    if (checarSequencia(quadrado4, quadrado5, quadrado6)){
        mudarCor(quadrado4, quadrado5, quadrado6)
        mudarVencedor(quadrado4.innerHTML)
    }

    if (checarSequencia(quadrado7, quadrado8, quadrado9)){
        mudarCor(quadrado7, quadrado8, quadrado9)
        mudarVencedor(quadrado7.innerHTML)
    }

    //CHECAR SEQUENCIA - COLUNAS
    if (checarSequencia(quadrado1, quadrado4, quadrado7)){
        mudarCor(quadrado1, quadrado4, quadrado7)
        mudarVencedor(quadrado1.innerHTML)
    }

    if (checarSequencia(quadrado2, quadrado5, quadrado8)){
        mudarCor(quadrado2, quadrado5, quadrado8)
        mudarVencedor(quadrado2.innerHTML)
    }

    if (checarSequencia(quadrado3, quadrado6, quadrado9)){
        mudarCor(quadrado3, quadrado6, quadrado9)
        mudarVencedor(quadrado3.innerHTML)
    }

    //CHECAR SEQUENCIA - DIAGONAIS
    if (checarSequencia(quadrado1, quadrado5, quadrado9)){
        mudarCor(quadrado1, quadrado5, quadrado9)
        mudarVencedor(quadrado1.innerHTML)
    }

    if (checarSequencia(quadrado3, quadrado5, quadrado7)){
        mudarCor(quadrado3, quadrado5, quadrado7)
        mudarVencedor(quadrado3.innerHTML)
    }

}

function checarSequencia(quadrado1, quadrado2, quadrado3){
    let igual = false
    if (quadrado1.innerHTML != "-" && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        igual = true
    } 
    return igual
}

function mudarCor(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = "green"
    quadrado2.style.background = "green"
    quadrado3.style.background = "green"
}

function mudarVencedor(quadrado1){
    vencedor = quadrado1
    resultado.innerHTML = `VENCEDOR: ${vencedor}`
}
