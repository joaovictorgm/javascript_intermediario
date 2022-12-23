function sayMyFirstName(element) {
    alert("Meu primeiro nome é " + element.value)

}

function sayMyLastName () {
    console.log(window.event.log)
    alert("Meu último nome é " + window.event.target.value)

}

/*o element é passado como um parâmetro para a função funcionar, então qualquer chamada da função que tenha algo lançado nos parênteses será interpretado como element. Lá no DOM estamos passando o this, que simboliza todo o input que temos no HTML, ao usar o element.value, estamos selecionando apenas o valor do element, que como foi declarado no DOM, será apenas o valor do input.*/

/*o event ele é muito usado em coisas tipo as que o professor mostrou, com um onchange dentro de um input, ele também é muito mais usado que o parâmetro. 

Você quando quer monitorar um input para pegar o que a pessoa digitou e passar para o backend ou para outro local dentro do código, é bastante usado o event*/