const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function (){
    //coloca um valor altomatico no input
    //input.value = 'Olá, mundo!'

    input.value = input.value === '' ? 'Olá, mundo ' : ''
    console.log(input.value)
    console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener('click', function(){
    //condicional ternario
    //input.type = input.type !== 'date' ? 'date' : 'text'
    input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = 'Digita algo...'
})

document.getElementById('disable').addEventListener('click', function(){
    //! nega o valor
    input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function(){
    // dataset é uma propriedade do html que referencia todos os atributos do tipo data, ela é consideradaum objeto
    const data = input.dataset.something
    console.log("O valor do atributo data-something é: " + data)
    input.dataset.something = 'Algum outro valor'
    console.log("O valordo atributo data-something agoa é: " + input.dataset.something)
})