function useLightTheme() {
    //"style" é uma propriedade para manipular o estilo dos elementos 
    // o css mapeado no javascript é em camelCase
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9'

}

function useDarkTheme() {
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
}

function switchTheme() {
    //classList permite que manipule a listas de classe do elemento
    // o toggle permite que fassa alternações se ele tiver a classe ele vai remover e se ele não tiver ele vai adicionar 

    //se o elemento tiver a classe "is-light" ele vai remover e adicionar e adicionar "is-dark" se ele não tiver a classe "is-light ele vai adicionar isso acontecerá toda vez que o botão for clicado"
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}

document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click',switchTheme)