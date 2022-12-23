function save() {
//toda vez que um event é chamado a variável event e prenchida com aquele evento, se tornando uma variável global.
//PreventDefault() inpede que o submit faça seu comportamento padrão 
window.event.preventDefault()
let name = document.querySelector("input[name='name']").value
//pegara a opção que o usuário selecionou no select
let programingLang = document.querySelector("select[name='programing-lang']").value
alert("Nome: " + name + "\nLinguagem de Programação: " + programingLang)

}