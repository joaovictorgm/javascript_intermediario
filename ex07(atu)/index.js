const form = document.getElementById('orderForm')

form.addEventListener('submit', function (ev) {
    //"preventDefault" previne que o programa rode algum tipo de comportamento padrão 
ev.preventDefault()
    // aqui pega o atributo de name que o "[name="name"] é uma de várias formas de selecionar os elementos 
    const name = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="address"]').value
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const observations = document.querySelector('textarea[name="observations"]').value
     // o parâmetro item referencia cada uma dos elementos que o forEach passa por causa do selectorAll
    let salad = ''
    document.querySelectorAll('input[name="salad"]:checked').forEach(function(item) {
        salad += ' - ' + item.value + '\n'
    })

    console.log({
        name,
        address,
        breadType,
        main,
        salad,
        observations,
    })

    alert(
        "Pedido realizado " +
        "\nNome do Cliente: " + name + 
        "\nEndereço de entrega: " + address +
        "\nTipo de pão: " + breadType + 
        "\nRecheio:  - " + main + "\n" + salad + 
        "Observação:" + observations

    )
}) 