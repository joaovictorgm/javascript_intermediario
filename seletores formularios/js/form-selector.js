//Código com erro

function showInfo() {
    /*acessando o value da propriedade name*/
    let name = document.querySelector("input[name='name']").value
    /*quando o option é selecionado ele recebe a pseudo-classe (checked) dessa forma ele pega o option selecionado*/
    let favoriteColor = document.querySelector("select[name='color']option:checked").text
    /* mesmo procedimento da variavel (name)*/
    let likePrograming = document.querySelector("input[name='like-programing']:checked").value
    let developerOptions = document.querySelectorAll("input[name='developer-options']:checked")
    /*aqui nesse array sera armazenado os valores dos checkbox marcado*/
    let optionsValue = []
    /*aqui ele pegará o valor de cada checkbox que foi checada*/
    Array.from(developerOptions).forEach((element) => { optionsValue.push(element.value);});
    /*aqui vai juntar todo o array numa string só usando o método join */
    let optionsChecked = optionsValue.join(",")
    alert( "Nome: " + name + "\nCor primária: " + favoriteColor + "\nGosta de programar? " + likePrograming + "\nConhecimento em programação web: " + optionsChecked)

}