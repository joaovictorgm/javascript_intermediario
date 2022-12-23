//adiciona um background azul
function setBlueBackground() {
    let element = document.getElementById("style-text")
    // esta é a primeira forma onde é mapeado com o objeto style
    element.style.backgroundColor = "blue"
    // background-color-left - backgroundColorLeft

}
//adiciona um background transparente
function setTransparentBackground() {
    //esta é a segunda forma mais reduzida
    document.getElementById("style-text").style.backgroundColor = "transparent"
}
//adiciona um background vermelho
function setRedColor() {
    let element = document.getElementById("style-text")
    element.classList.add("red-color")
}

function removeRedColor() {
    document.getElementById("style-text").classList.remove("red-color")
}