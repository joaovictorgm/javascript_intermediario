
//função para armazenamento de sessão
document.getElementById('sessionBtn').addEventListener('click', function (){
    const input = document.getElementById('session')
    //o 'setItem atribui um item para o sessionStorage
    //primeiro parâmetro a chave que é  'info' segundo parâmetro valor do input
    sessionStorage.setItem('info', input.value)
    input.value = ''
})

document.getElementById('readSession').addEventListener('click', function(){
    //getItem pega o item já atribuido pelo setItem
    const info = sessionStorage.getItem('info')
    alert('A informação salva é: ' + info) 
})

document.getElementById('localBtn').addEventListener('click', function(){
    const input = document.getElementById('local')
    localStorage.setItem('text', input.value)
    input.value = ''
})


document.getElementById('readLocal').addEventListener('click', function() {
    const t = localStorage.getItem('text')
    alert('O texto salvo no local storage é: ' + t)
})

document.getElementById('cookieBtn').addEventListener('click', function () {
    const input = document.getElementById('cookie')
    // craindo a string para o cookie com a chave info e o valor para o input 
    const cookie = 'info=' + input.value + ';'
    // variável para a expiração do cookie
    const expiration = 'expires=' + new Date(2023, 01, 28) + ';'
    // variável para o caminho do cookie a '/' mostra que ele estara disponivel a partir de qualquer página
    const path = 'path=/;'
    //criação do cookie
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function () {
    const input = document.getElementById('cookie2')
    // craindo a string para o cookie com a chave info e o valor para o input 
    const cookie = 'text=' + input.value + ';'
    // variável para a expiração do cookie
    const expiration = 'expires=' + new Date(2023, 01, 28) + ';'
    // variável para o caminho do cookie a '/' mostra que ele estara disponivel a partir de qualquer página
    const path = 'path=/;'
    //criação do cookie
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie) 
})

